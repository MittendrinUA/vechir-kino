// ==========================================================================
// КіноРандомайзер — Оптимізована та стабільна логіка (500 фільмів)
// ==========================================================================

class MovieRandomizerApp {
  constructor() {
    this.storageKey = 'cine_randomizer_data_v2';
    
    // Стан додатку
    this.state = {
      dislikedIds: new Set(),
      watchedIds: new Set(),
      savedIds: new Set(),
      onlySavedMode: false,
      customMovies: [],
      history: [],
      filters: {
        genre: 'all',
        minRating: 0,
        era: 'all',
        maxDuration: 9999
      },
      currentMovie: null,
      availablePool: []
    };

    this.isBusy = false;
    this.toastTimer = null;
    this.init();
  }

  init() {
    this.loadState();
    this.initDOMElements();
    this.bindEvents();
    this.applyFiltersAndPick(false);
  }

  // ------------------------------------------------------------------------
  // Безпечне екранування HTML
  // ------------------------------------------------------------------------
  escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // ------------------------------------------------------------------------
  // Робота з LocalStorage
  // ------------------------------------------------------------------------
  loadState() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        this.state.dislikedIds = new Set(parsed.dislikedIds || []);
        this.state.watchedIds = new Set(parsed.watchedIds || []);
        this.state.savedIds = new Set(parsed.savedIds || []);
        this.state.customMovies = parsed.customMovies || [];
        if (parsed.filters) {
          this.state.filters = { ...this.state.filters, ...parsed.filters };
        }
      }
    } catch (e) {
      console.warn('Не вдалося завантажити стан із LocalStorage:', e);
    }
  }

  saveState() {
    try {
      const dataToSave = {
        dislikedIds: Array.from(this.state.dislikedIds),
        watchedIds: Array.from(this.state.watchedIds),
        savedIds: Array.from(this.state.savedIds),
        customMovies: this.state.customMovies,
        filters: this.state.filters
      };
      localStorage.setItem(this.storageKey, JSON.stringify(dataToSave));
      this.updateHeaderCounters();
    } catch (e) {
      console.warn('Помилка збереження в LocalStorage:', e);
    }
  }

  // ------------------------------------------------------------------------
  // Ініціалізація DOM
  // ------------------------------------------------------------------------
  initDOMElements() {
    this.domCardContainer = document.getElementById('card-container');
    this.domAmbientGlow = document.getElementById('ambient-glow');
    this.domPoolCounter = document.getElementById('pool-counter');
    this.domWatchedCount = document.getElementById('header-watched-count');
    this.domDislikedCount = document.getElementById('header-disliked-count');
    this.domSavedCount = document.getElementById('header-saved-count');

    this.domTabSavedCount = document.getElementById('tab-count-saved');
    this.domTabWatchedCount = document.getElementById('tab-count-watched');
    this.domTabDislikedCount = document.getElementById('tab-count-disliked');

    this.domWinnerModal = document.getElementById('winner-modal');
    this.domListsModal = document.getElementById('lists-modal');
    this.domFiltersModal = document.getElementById('filters-modal');
    this.domSettingsModal = document.getElementById('settings-modal');
    this.domAddMovieModal = document.getElementById('add-movie-modal');

    this.domToast = document.getElementById('toast-undo');
    this.domToastMsg = document.getElementById('toast-message');
    this.domBtnToastUndo = document.getElementById('btn-toast-undo');
  }

  // ------------------------------------------------------------------------
  // Події та слухачі
  // ------------------------------------------------------------------------
  bindEvents() {
    document.getElementById('btn-open-filters')?.addEventListener('click', () => {
      this.syncFilterChipsUI();
      this.updateFilterPreview();
      this.openModal(this.domFiltersModal);
    });
    document.getElementById('btn-open-watchlist')?.addEventListener('click', () => this.openListsModal('saved'));
    document.getElementById('btn-open-lists')?.addEventListener('click', () => this.openListsModal('saved'));
    document.getElementById('btn-open-settings')?.addEventListener('click', () => this.openModal(this.domSettingsModal));
    document.getElementById('btn-open-add-movie')?.addEventListener('click', () => this.openModal(this.domAddMovieModal));
    document.getElementById('btn-header-undo')?.addEventListener('click', () => this.undoLastAction());

    document.querySelectorAll('.btn-close-modal').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const modal = e.target.closest('.modal-backdrop');
        if (modal) this.closeModal(modal);
      });
    });

    document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) this.closeModal(backdrop);
      });
    });

    this.domBtnToastUndo?.addEventListener('click', () => this.undoLastAction());

    this.bindFilterEvents();
    this.bindListsEvents();
    this.bindAddMovieForm();
    this.bindSettingsEvents();

    window.addEventListener('keydown', (e) => this.handleKeyboard(e));
  }

  // ------------------------------------------------------------------------
  // Гарячі клавіші з дебаунсом
  // ------------------------------------------------------------------------
  handleKeyboard(e) {
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;

    if (e.key === 'Escape') {
      const openModal = document.querySelector('.modal-backdrop.open');
      if (openModal) this.closeModal(openModal);
      return;
    }

    if ((e.ctrlKey || e.metaKey) && (e.key === 'z' || e.key === 'Z' || e.key === 'я' || e.key === 'Я')) {
      e.preventDefault();
      this.undoLastAction();
      return;
    }

    if (document.querySelector('.modal-backdrop.open')) return;
    if (!this.state.currentMovie || this.isBusy) return;

    if (e.key === 's' || e.key === 'S' || e.key === 'і' || e.key === 'І') {
      e.preventDefault();
      this.actionToggleWatchlist();
      return;
    }

    if (e.key === 'ArrowLeft' || e.code === 'KeyA') {
      e.preventDefault();
      this.actionDislike();
    } else if (e.key === 'ArrowRight' || e.code === 'KeyD') {
      e.preventDefault();
      this.actionWatched();
    } else if (e.key === ' ' || e.key === 'ArrowDown' || e.code === 'Space') {
      e.preventDefault();
      this.actionSkip();
    } else if (e.key === 'Enter' || e.code === 'KeyW') {
      e.preventDefault();
      this.actionWinner();
    }
  }

  // ------------------------------------------------------------------------
  // Розрахунок каталогу та фільтрація
  // ------------------------------------------------------------------------
  getAllMoviesList() {
    const defaultList = (typeof DEFAULT_MOVIES !== 'undefined') ? DEFAULT_MOVIES : [];
    return [...defaultList, ...this.state.customMovies];
  }

  computeAvailablePool() {
    const all = this.getAllMoviesList();

    // Якщо активовано режим "Тільки список перегляду"
    if (this.state.onlySavedMode) {
      return all.filter(movie => {
        if (!this.state.savedIds.has(movie.id)) return false;
        if (this.state.watchedIds.has(movie.id)) return false;
        return true;
      });
    }

    const { genre, minRating, era, maxDuration } = this.state.filters;

    return all.filter(movie => {
      if (this.state.dislikedIds.has(movie.id)) return false;
      if (this.state.watchedIds.has(movie.id)) return false;

      if (genre !== 'all' && (!movie.genres || !movie.genres.includes(genre))) {
        return false;
      }

      if (minRating > 0 && (movie.rating || 0) < minRating) {
        return false;
      }

      if (era === '2020') {
        if (movie.year < 2020) return false;
      } else if (era === '2010') {
        if (movie.year < 2010 || movie.year > 2019) return false;
      } else if (era === '2000') {
        if (movie.year < 2000 || movie.year > 2009) return false;
      } else if (era === '1990') {
        if (movie.year < 1990 || movie.year > 1999) return false;
      } else if (era === 'classic') {
        if (movie.year >= 1990) return false;
      }

      if (maxDuration && movie.duration > maxDuration) {
        return false;
      }

      return true;
    });
  }

  applyFiltersAndPick(animateTransition = true) {
    this.state.availablePool = this.computeAvailablePool();
    this.updateHeaderCounters();

    if (this.state.availablePool.length === 0) {
      this.renderEmptyState();
      return;
    }

    let candidates = this.state.availablePool;
    if (candidates.length > 1 && this.state.currentMovie) {
      candidates = candidates.filter(m => m.id !== this.state.currentMovie.id);
    }

    const randomIndex = Math.floor(Math.random() * candidates.length);
    const chosenMovie = candidates[randomIndex];
    this.renderMovieCard(chosenMovie, animateTransition);
  }

  // ------------------------------------------------------------------------
  // Відображення картки фільму (100% надійно без інлайн-помилок)
  // ------------------------------------------------------------------------
  renderMovieCard(movie, animate = true) {
    this.state.currentMovie = movie;
    this.updateAmbientGlow(movie);

    const isSaved = this.state.savedIds.has(movie.id);
    const safeTitle = this.escapeHtml(movie.title);
    const safeOrigTitle = this.escapeHtml(movie.originalTitle || '');
    const safeDirector = this.escapeHtml(movie.director || 'Невідомо');
    const safeDesc = this.escapeHtml(movie.description || 'Опис недоступний.');

    const genresHtml = (movie.genres || []).map(g => 
      `<span class="genre-tag" data-genre="${this.escapeHtml(g)}">${this.escapeHtml(g)}</span>`
    ).join('');

    const hours = Math.floor((movie.duration || 120) / 60);
    const mins = (movie.duration || 120) % 60;
    const durationFormatted = hours > 0 ? `${hours}г ${mins > 0 ? mins + 'хв' : ''}` : `${mins}хв`;

    const posterSrc = movie.poster || this.generateFallbackPoster(movie.title, movie.year);

    const bannerHtml = this.state.onlySavedMode ? `
      <div class="watchlist-mode-banner">
        <span>🔖 Режим: <strong>Тільки мій список перегляду</strong> (${this.state.availablePool.length} фільмів)</span>
        <button class="btn-exit-mode" id="btn-exit-watchlist-mode">✕ Показати всі 500 фільмів</button>
      </div>
    ` : '';

    const cardHtml = `
      ${bannerHtml}
      <div class="movie-card" id="active-movie-card">
        <div class="poster-column">
          <img 
            src="${posterSrc}" 
            alt="${safeTitle}" 
            class="movie-poster" 
          />
          <div class="poster-overlay-gradient"></div>

          <div class="poster-badges">
            <span class="badge-rating">
              <span>⭐</span> ${(movie.rating || 7.5).toFixed(1)}
            </span>
            <span class="badge-year">
              <span>📅</span> ${movie.year || ''}
            </span>
          </div>

          <button class="poster-btn-trailer" id="card-trailer-btn" title="Дивитися офіційний трейлер">
            <span>▶</span> Трейлер
          </button>
        </div>

        <div class="info-column">
          <div class="movie-header-info">
            <div class="genre-tags">
              ${genresHtml}
            </div>

            <h2 class="movie-title">${safeTitle}</h2>

            <div class="movie-meta">
              <span class="original-title">${safeOrigTitle}</span>
              <span class="meta-dot">•</span>
              <span class="movie-duration">⏱️ ${durationFormatted}</span>
            </div>

            <div class="movie-director">
              Режисер: <strong>${safeDirector}</strong>
            </div>

            <p class="movie-description">
              ${safeDesc}
            </p>
          </div>

          <div class="action-section">
            <button class="btn-primary-winner" id="btn-winner">
              <span>🍿</span> Буду дивитися сьогодні!
            </button>

            <div class="actions-row">
              <button class="btn-action btn-dislike" id="btn-dislike" title="Більше ніколи не показувати">
                <span class="btn-action-label">👎 Не подобається</span>
                <span class="btn-action-hint">Виключити назавжди</span>
              </button>

              <button class="btn-action btn-watchlist ${isSaved ? 'active' : ''}" id="btn-watchlist" title="${isSaved ? 'Видалити зі списку перегляду' : 'Додати в список перегляду'}">
                <span class="btn-action-label">${isSaved ? '🔖 У списку' : '🔖 В список'}</span>
                <span class="btn-action-hint">${isSaved ? 'Натисніть щоб зняти' : 'Хочу глянути'}</span>
              </button>

              <button class="btn-action btn-skip" id="btn-skip" title="Показати інший фільм">
                <span class="btn-action-label">⏭️ Пропустити</span>
                <span class="btn-action-hint">Залишити в списку</span>
              </button>

              <button class="btn-action btn-watched" id="btn-watched" title="Вже дивився, не показувати">
                <span class="btn-action-label">👁️ Вже бачив</span>
                <span class="btn-action-hint">Позначити переглянутим</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    this.domCardContainer.innerHTML = cardHtml;

    // Безпечний обробник помилки завантаження картинки через JS listener
    const posterImg = this.domCardContainer.querySelector('.movie-poster');
    if (posterImg) {
      posterImg.addEventListener('error', () => {
        posterImg.src = this.generateFallbackPoster(movie.title, movie.year);
      }, { once: true });
    }

    // Прив'язка подій
    document.getElementById('btn-winner')?.addEventListener('click', () => this.actionWinner());
    document.getElementById('btn-dislike')?.addEventListener('click', () => this.actionDislike());
    document.getElementById('btn-watchlist')?.addEventListener('click', () => this.actionToggleWatchlist());
    document.getElementById('btn-skip')?.addEventListener('click', () => this.actionSkip());
    document.getElementById('btn-watched')?.addEventListener('click', () => this.actionWatched());
    document.getElementById('btn-exit-watchlist-mode')?.addEventListener('click', () => this.setOnlySavedMode(false));
    document.getElementById('card-trailer-btn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      if (movie.trailer) {
        this.openWinnerModal(movie);
      } else {
        const trailerUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(movie.title + ' ' + (movie.originalTitle || '') + ' official trailer')}`;
        window.open(trailerUrl, '_blank');
      }
    });

    this.domCardContainer.querySelectorAll('.genre-tag').forEach(tag => {
      tag.addEventListener('click', (e) => {
        const clickedGenre = e.target.getAttribute('data-genre');
        if (clickedGenre) this.setGenreFilter(clickedGenre);
      });
    });
  }

  // ------------------------------------------------------------------------
  // Порожній стан
  // ------------------------------------------------------------------------
  renderEmptyState() {
    this.state.currentMovie = null;
    const all = this.getAllMoviesList();

    if (this.state.onlySavedMode) {
      this.domCardContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🔖</div>
          <h2 class="empty-title">Ваш список перегляду порожній!</h2>
          <p class="empty-text">
            У вашому списку перегляду немає доступних стрічок (або ви вже позначили їх як переглянуті).
            Додайте фільми кнопкою <strong>«🔖 В список»</strong> із загального каталогу (500 фільмів).
          </p>
          <div class="empty-actions">
            <button class="btn-header" style="background: var(--accent-gold); color: #0F172A; font-weight:700;" id="empty-exit-watchlist">
              🌐 Перейти до загального каталогу (500 фільмів)
            </button>
            <button class="btn-header" id="empty-open-lists">
              📋 Відкрити мої списки
            </button>
          </div>
        </div>
      `;
      document.getElementById('empty-exit-watchlist')?.addEventListener('click', () => this.setOnlySavedMode(false));
      document.getElementById('empty-open-lists')?.addEventListener('click', () => this.openListsModal('saved'));
      return;
    }

    const excludedCount = this.state.dislikedIds.size + this.state.watchedIds.size;

    this.domCardContainer.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🎬</div>
        <h2 class="empty-title">Фільми за цими критеріями закінчилися!</h2>
        <p class="empty-text">
          Ви переглянули або виключили всі доступні варіанти. 
          Загалом у базі <strong>${all.length}</strong> фільмів, з них виключено <strong>${excludedCount}</strong>.
        </p>

        <div class="empty-actions">
          <button class="btn-header" style="background: var(--accent-gold); color: #0F172A; font-weight:700;" id="empty-reset-filters">
            🔄 Скинути фільтри
          </button>
          <button class="btn-header" id="empty-open-lists">
            📋 Переглянути мої списки
          </button>
          ${this.state.history.length > 0 ? `
            <button class="btn-header" id="empty-undo-btn">
              ↩️ Скасувати останню дію
            </button>
          ` : ''}
        </div>
      </div>
    `;

    document.getElementById('empty-reset-filters')?.addEventListener('click', () => this.resetFilters());
    document.getElementById('empty-open-lists')?.addEventListener('click', () => this.openListsModal('watched'));
    document.getElementById('empty-undo-btn')?.addEventListener('click', () => this.undoLastAction());
  }

  // ------------------------------------------------------------------------
  // Дії над фільмом (Миттєвий перехід, 0 мс затримки)
  // ------------------------------------------------------------------------
  actionDislike() {
    if (!this.state.currentMovie) return;
    const movie = this.state.currentMovie;
    this.state.dislikedIds.add(movie.id);
    this.state.history.push({ type: 'dislike', movie: movie });
    this.saveState();
    this.showToast(`«${movie.title}» додано до чорного списку.`);
    this.applyFiltersAndPick(false);
  }

  actionWatched() {
    if (!this.state.currentMovie) return;
    const movie = this.state.currentMovie;
    this.state.watchedIds.add(movie.id);
    this.state.history.push({ type: 'watched', movie: movie });
    this.saveState();
    this.showToast(`«${movie.title}» позначено як переглянутий.`);
    this.applyFiltersAndPick(false);
  }

  actionToggleWatchlist() {
    if (!this.state.currentMovie) return;
    const movie = this.state.currentMovie;
    const isSaved = this.state.savedIds.has(movie.id);

    if (isSaved) {
      this.state.savedIds.delete(movie.id);
      this.saveState();
      this.showToast(`«${movie.title}» видалено зі списку перегляду.`, false);
    } else {
      this.state.savedIds.add(movie.id);
      this.saveState();
      this.showToast(`«${movie.title}» додано до списку перегляду! 🔖`, false);
    }

    // Миттєве оновлення кнопки без перезавантаження картки
    const btn = document.getElementById('btn-watchlist');
    if (btn) {
      const nowSaved = this.state.savedIds.has(movie.id);
      btn.classList.toggle('active', nowSaved);
      btn.title = nowSaved ? 'Видалити зі списку перегляду' : 'Додати в список перегляду';
      btn.innerHTML = `
        <span class="btn-action-label">${nowSaved ? '🔖 У списку' : '🔖 В список'}</span>
        <span class="btn-action-hint">${nowSaved ? 'Натисніть щоб зняти' : 'Хочу глянути'}</span>
      `;
    }

    this.updateHeaderCounters();
  }

  setOnlySavedMode(enabled) {
    this.state.onlySavedMode = !!enabled;
    this.applyFiltersAndPick(false);
    if (this.state.onlySavedMode) {
      this.showToast(`Режим рандомайзера: тільки фільми зі списку перегляду! 🔖`, false);
    } else {
      this.showToast(`Повернуто загальний каталог фільмів (500 стрічок).`, false);
    }
  }

  actionSkip() {
    if (!this.state.currentMovie) return;
    const movie = this.state.currentMovie;
    this.state.history.push({ type: 'skip', movie: movie });
    this.applyFiltersAndPick(false);
  }

  actionWinner() {
    const movie = this.state.currentMovie;
    if (!movie) return;

    if (window.confettiEffect) {
      window.confettiEffect.fireMultiple();
    }
    this.openWinnerModal(movie);
  }

  // ------------------------------------------------------------------------
  // Скасування дії (Undo)
  // ------------------------------------------------------------------------
  undoLastAction() {
    if (this.state.history.length === 0) {
      this.showToast('Немає дій для скасування.', false);
      return;
    }

    const last = this.state.history.pop();
    const movie = last.movie;

    if (last.type === 'dislike') {
      this.state.dislikedIds.delete(movie.id);
      this.saveState();
      this.showToast(`Повернуто з чорного списку: «${movie.title}»`, false);
    } else if (last.type === 'watched') {
      this.state.watchedIds.delete(movie.id);
      this.saveState();
      this.showToast(`Повернуто з переглянутих: «${movie.title}»`, false);
    } else if (last.type === 'skip') {
      this.showToast(`Повернення до «${movie.title}»`, false);
    }

    this.state.availablePool = this.computeAvailablePool();
    this.renderMovieCard(movie, true);
    this.updateHeaderCounters();
    this.hideToast();
  }

  // ------------------------------------------------------------------------
  // Модальне вікно переможця
  // ------------------------------------------------------------------------
  openWinnerModal(movie) {
    const modal = this.domWinnerModal;
    const isSaved = this.state.savedIds.has(movie.id);
    const safeTitle = this.escapeHtml(movie.title);
    const safeOrigTitle = this.escapeHtml(movie.originalTitle || '');
    const safeDirector = this.escapeHtml(movie.director || 'Невідомо');
    const safeDesc = this.escapeHtml(movie.description || '');

    const searchQuery = encodeURIComponent(`${movie.title} ${movie.year || ''} дивитися онлайн`);
    const justWatchQuery = encodeURIComponent(movie.title);
    const imdbQuery = encodeURIComponent(movie.originalTitle || movie.title);
    const youtubeTrailerUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(movie.title + ' ' + (movie.originalTitle || '') + ' official trailer')}`;

    const bodyHtml = `
      <div class="winner-card">
        ${movie.trailer ? `
          <div class="trailer-wrapper">
            <iframe 
              class="trailer-iframe"
              src="https://www.youtube-nocookie.com/embed/${movie.trailer}?autoplay=1&rel=0" 
              title="Трейлер ${safeTitle}" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>
        ` : `
          <div style="text-align: center; padding: 20px; background: rgba(255,255,255,0.03); border: 1px dashed var(--border-color); border-radius: 12px; margin-bottom: 16px;">
            <p style="color: var(--text-secondary); margin-bottom: 12px; font-size: 14px;">Офіційний трейлер доступний для перегляду на YouTube:</p>
            <a href="${youtubeTrailerUrl}" target="_blank" rel="noopener" class="btn-header" style="background: #E50914; color: #FFF; font-weight: 700; padding: 10px 18px; text-decoration: none; display: inline-flex;">
              ▶ Дивитися офіційний трейлер на YouTube
            </a>
          </div>
        `}

        <div>
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
            <div>
              <h3 style="font-size: 24px; font-weight: 800; color: #FFF;">${safeTitle}</h3>
              <p style="color: var(--text-muted); font-size: 14px;">${safeOrigTitle} (${movie.year || ''}) • Режисер: ${safeDirector}</p>
            </div>
            <span class="badge-rating" style="font-size: 14px;">⭐ ${(movie.rating || 7.5).toFixed(1)}</span>
          </div>

          <p style="color: #CBD5E1; font-size: 14px; line-height: 1.6; margin: 12px 0;">
            ${safeDesc}
          </p>
        </div>

        <div>
          <div style="font-size: 13px; font-weight: 700; color: var(--text-secondary); margin-bottom: 10px; text-transform: uppercase;">
            Де дивитися або шукати фільм:
          </div>
          <div class="streaming-links">
            <a href="${youtubeTrailerUrl}" target="_blank" rel="noopener" class="btn-stream" style="border-color: rgba(229, 9, 20, 0.4); color: #FCA5A5;">
              ▶ Трейлер на YouTube
            </a>
            <a href="https://www.google.com/search?q=${searchQuery}" target="_blank" rel="noopener" class="btn-stream">
              🔍 Шукати в Google
            </a>
            <a href="https://megogo.net/ua/search?q=${encodeURIComponent(movie.title)}" target="_blank" rel="noopener" class="btn-stream">
              ▶ Megogo
            </a>
            <a href="https://sweet.tv/search?q=${encodeURIComponent(movie.title)}" target="_blank" rel="noopener" class="btn-stream">
              🍬 Sweet.tv
            </a>
            <a href="https://www.justwatch.com/ua/search?q=${justWatchQuery}" target="_blank" rel="noopener" class="btn-stream">
              📺 JustWatch
            </a>
            <a href="https://www.imdb.com/find?q=${imdbQuery}" target="_blank" rel="noopener" class="btn-stream">
              ⭐ IMDb
            </a>
          </div>
        </div>

        <div style="display: flex; gap: 10px; margin-top: 10px; border-top: 1px solid var(--border-subtle); padding-top: 16px;">
          <button class="btn-header" style="flex: 1.2; background: var(--accent-emerald); color: #0F172A; font-weight: 700;" id="winner-mark-watched">
            ✅ Позначити переглянутим
          </button>
          <button class="btn-header" style="flex: 1; border-color: rgba(245, 158, 11, 0.4); color: #FBBF24;" id="winner-toggle-saved">
            ${isSaved ? '🔖 Видалити зі списку' : '🔖 В список перегляду'}
          </button>
          <button class="btn-header" style="flex: 0.8;" id="winner-continue">
            🎲 Інший фільм
          </button>
        </div>
      </div>
    `;

    modal.querySelector('.modal-body').innerHTML = bodyHtml;

    document.getElementById('winner-mark-watched')?.addEventListener('click', () => {
      this.closeModal(modal);
      this.actionWatched();
    });

    document.getElementById('winner-toggle-saved')?.addEventListener('click', (e) => {
      const nowSaved = this.state.savedIds.has(movie.id);
      if (nowSaved) {
        this.state.savedIds.delete(movie.id);
        this.showToast(`«${movie.title}» видалено зі списку перегляду.`, false);
        e.currentTarget.textContent = '🔖 В список перегляду';
      } else {
        this.state.savedIds.add(movie.id);
        this.showToast(`«${movie.title}» додано до списку перегляду! 🔖`, false);
        e.currentTarget.textContent = '🔖 Видалити зі списку';
      }
      this.saveState();
      this.updateHeaderCounters();
      const cardBtn = document.getElementById('btn-watchlist');
      if (cardBtn && this.state.currentMovie && this.state.currentMovie.id === movie.id) {
        const isCurrentSaved = this.state.savedIds.has(movie.id);
        cardBtn.classList.toggle('active', isCurrentSaved);
        cardBtn.title = isCurrentSaved ? 'Видалити зі списку перегляду' : 'Додати в список перегляду';
        cardBtn.innerHTML = `
          <span class="btn-action-label">${isCurrentSaved ? '🔖 У списку' : '🔖 В список'}</span>
          <span class="btn-action-hint">${isCurrentSaved ? 'Натисніть щоб зняти' : 'Хочу глянути'}</span>
        `;
      }
    });

    document.getElementById('winner-continue')?.addEventListener('click', () => {
      this.closeModal(modal);
      this.actionSkip();
    });

    this.openModal(modal);
  }

  // ------------------------------------------------------------------------
  // Вікно керування списками
  // ------------------------------------------------------------------------
  openListsModal(defaultTab = 'saved') {
    this.currentListTab = defaultTab;
    const modal = this.domListsModal;
    modal.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === defaultTab);
    });
    this.renderListsModalContent();
    this.openModal(this.domListsModal);
  }

  bindListsEvents() {
    const modal = this.domListsModal;
    modal.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        modal.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        this.currentListTab = e.target.getAttribute('data-tab');
        this.renderListsModalContent();
      });
    });

    document.getElementById('lists-search-input')?.addEventListener('input', (e) => {
      this.renderListsModalContent(e.target.value.toLowerCase().trim());
    });
  }

  renderListsModalContent(filterText = '') {
    const listContainer = document.getElementById('modal-movie-list');
    const all = this.getAllMoviesList();
    const movieMap = new Map(all.map(m => [m.id, m]));

    let targetSet;
    if (this.currentListTab === 'saved') {
      targetSet = this.state.savedIds;
    } else if (this.currentListTab === 'watched') {
      targetSet = this.state.watchedIds;
    } else {
      targetSet = this.state.dislikedIds;
    }

    let items = Array.from(targetSet)
      .map(id => movieMap.get(id))
      .filter(Boolean);

    if (filterText) {
      items = items.filter(m => 
        (m.title && m.title.toLowerCase().includes(filterText)) || 
        (m.originalTitle && m.originalTitle.toLowerCase().includes(filterText))
      );
    }

    if (items.length === 0) {
      let emptyMsg = 'У цьому списку поки що немає фільмів.';
      if (this.currentListTab === 'saved') {
        emptyMsg = 'Ваш список перегляду порожній. Натискайте кнопку «🔖 В список» під час вибору фільмів!';
      } else if (this.currentListTab === 'watched') {
        emptyMsg = 'Ви ще не позначили жодного фільму як переглянутий.';
      } else {
        emptyMsg = 'Чорний список порожній.';
      }

      listContainer.innerHTML = `
        <div style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
          <div style="font-size: 32px; margin-bottom: 8px;">📭</div>
          <p>${emptyMsg}</p>
        </div>
      `;
      return;
    }

    let topActionHtml = '';
    if (this.currentListTab === 'saved') {
      topActionHtml = `
        <div style="margin-bottom: 12px; display: flex; gap: 8px;">
          <button class="btn-header" style="flex: 1; background: var(--accent-gold); color: #0F172A; font-weight: 700; padding: 10px 14px; justify-content: center;" id="modal-start-watchlist-mode">
            🎲 Запустити рандомайзер тільки з мого списку (${items.length} фільмів)
          </button>
        </div>
      `;
    }

    const itemsHtml = items.map(movie => {
      let actionButtons = '';
      if (this.currentListTab === 'saved') {
        actionButtons = `
          <div class="item-actions-group">
            <button class="btn-item-action btn-item-watch" data-action="watch-now" data-id="${movie.id}" title="Дивитися зараз">
              🍿 Дивитися
            </button>
            <button class="btn-item-action" data-action="mark-watched" data-id="${movie.id}" title="Позначити як переглянутий">
              👁️ Бачив
            </button>
            <button class="btn-item-action" data-action="remove-saved" data-id="${movie.id}" title="Видалити зі списку" style="color: #F87171;">
              ✕
            </button>
          </div>
        `;
      } else {
        actionButtons = `
          <button class="btn-restore" data-id="${movie.id}">
            Відновити 🔄
          </button>
        `;
      }

      return `
        <div class="movie-list-item" id="list-item-${movie.id}">
          <img 
            src="${movie.poster || this.generateFallbackPoster(movie.title, movie.year)}" 
            class="movie-item-thumb" 
            alt="${this.escapeHtml(movie.title)}" 
          />
          <div class="movie-item-details">
            <div class="movie-item-title">${this.escapeHtml(movie.title)} (${movie.year || ''})</div>
            <div class="movie-item-sub">⭐ ${(movie.rating || 7.5).toFixed(1)} • ${(movie.genres || []).join(', ')}</div>
          </div>
          ${actionButtons}
        </div>
      `;
    }).join('');

    listContainer.innerHTML = topActionHtml + itemsHtml;

    // Listeners for top action
    document.getElementById('modal-start-watchlist-mode')?.addEventListener('click', () => {
      this.closeModal(this.domListsModal);
      this.setOnlySavedMode(true);
    });

    // Thumbnail error fallback
    listContainer.querySelectorAll('.movie-item-thumb').forEach(thumb => {
      thumb.addEventListener('error', () => {
        thumb.src = this.generateFallbackPoster('Фільм', '');
      }, { once: true });
    });

    // Item actions for saved tab
    listContainer.querySelectorAll('[data-action="watch-now"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        const m = movieMap.get(id);
        if (m) {
          this.closeModal(this.domListsModal);
          this.openWinnerModal(m);
        }
      });
    });

    listContainer.querySelectorAll('[data-action="mark-watched"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        const m = movieMap.get(id);
        if (m) {
          this.state.savedIds.delete(id);
          this.state.watchedIds.add(id);
          this.saveState();
          this.renderListsModalContent(filterText);
          this.updateHeaderCounters();
          this.showToast(`«${m.title}» переміщено до переглянутих! ✅`, false);
        }
      });
    });

    listContainer.querySelectorAll('[data-action="remove-saved"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        const m = movieMap.get(id);
        if (m) {
          this.state.savedIds.delete(id);
          this.saveState();
          this.renderListsModalContent(filterText);
          this.updateHeaderCounters();
          this.showToast(`«${m.title}» видалено зі списку перегляду.`, false);
        }
      });
    });

    // Restore buttons for watched / disliked
    listContainer.querySelectorAll('.btn-restore').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        this.restoreMovie(id);
      });
    });
  }

  restoreMovie(movieId) {
    if (this.currentListTab === 'watched') {
      this.state.watchedIds.delete(movieId);
    } else if (this.currentListTab === 'disliked') {
      this.state.dislikedIds.delete(movieId);
    } else if (this.currentListTab === 'saved') {
      this.state.savedIds.delete(movieId);
    }

    this.saveState();
    this.renderListsModalContent();
    this.state.availablePool = this.computeAvailablePool();
    this.updateHeaderCounters();
    this.showToast('Фільм оновлено!', false);

    if (!this.state.currentMovie) {
      this.applyFiltersAndPick(true);
    }
  }

  // ------------------------------------------------------------------------
  // Фільтри
  // ------------------------------------------------------------------------
  bindFilterEvents() {
    const modal = this.domFiltersModal;

    modal.querySelectorAll('.filter-chip[data-filter="genre"]').forEach(chip => {
      chip.addEventListener('click', (e) => {
        modal.querySelectorAll('.filter-chip[data-filter="genre"]').forEach(c => c.classList.remove('active'));
        e.target.classList.add('active');
        this.state.filters.genre = e.target.getAttribute('data-value');
        this.updateFilterPreview();
      });
    });

    modal.querySelectorAll('.filter-chip[data-filter="rating"]').forEach(chip => {
      chip.addEventListener('click', (e) => {
        modal.querySelectorAll('.filter-chip[data-filter="rating"]').forEach(c => c.classList.remove('active'));
        e.target.classList.add('active');
        this.state.filters.minRating = parseFloat(e.target.getAttribute('data-value')) || 0;
        this.updateFilterPreview();
      });
    });

    modal.querySelectorAll('.filter-chip[data-filter="era"]').forEach(chip => {
      chip.addEventListener('click', (e) => {
        modal.querySelectorAll('.filter-chip[data-filter="era"]').forEach(c => c.classList.remove('active'));
        e.target.classList.add('active');
        this.state.filters.era = e.target.getAttribute('data-value');
        this.updateFilterPreview();
      });
    });

    document.getElementById('btn-apply-filters')?.addEventListener('click', () => {
      this.saveState();
      this.closeModal(modal);
      this.applyFiltersAndPick(true);
    });

    document.getElementById('btn-reset-filters')?.addEventListener('click', () => {
      this.resetFilters();
      this.closeModal(modal);
    });
  }

  setGenreFilter(genreName) {
    this.state.filters.genre = genreName;
    this.saveState();
    this.applyFiltersAndPick(true);
    this.showToast(`Фільтр: ${genreName}`, false);
  }

  resetFilters() {
    this.state.filters = {
      genre: 'all',
      minRating: 0,
      era: 'all',
      maxDuration: 9999
    };
    this.saveState();
    this.syncFilterChipsUI();
    this.applyFiltersAndPick(true);
    this.showToast('Фільтри скинуто', false);
  }

  updateFilterPreview() {
    const pool = this.computeAvailablePool();
    const btnApply = document.getElementById('btn-apply-filters');
    if (btnApply) {
      btnApply.textContent = `Показати фільми (${pool.length})`;
    }
  }

  syncFilterChipsUI() {
    const modal = this.domFiltersModal;
    if (!modal) return;

    modal.querySelectorAll('.filter-chip').forEach(chip => chip.classList.remove('active'));
    modal.querySelector(`.filter-chip[data-filter="genre"][data-value="${this.state.filters.genre}"]`)?.classList.add('active');
    modal.querySelector(`.filter-chip[data-filter="rating"][data-value="${this.state.filters.minRating}"]`)?.classList.add('active');
    modal.querySelector(`.filter-chip[data-filter="era"][data-value="${this.state.filters.era}"]`)?.classList.add('active');
  }

  // ------------------------------------------------------------------------
  // Додавання власного фільму
  // ------------------------------------------------------------------------
  bindAddMovieForm() {
    const form = document.getElementById('add-movie-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const title = document.getElementById('new-movie-title').value.trim();
      const originalTitle = document.getElementById('new-movie-orig-title').value.trim();
      const year = parseInt(document.getElementById('new-movie-year').value, 10) || new Date().getFullYear();
      const rating = parseFloat(document.getElementById('new-movie-rating').value) || 7.5;
      const duration = parseInt(document.getElementById('new-movie-duration').value, 10) || 120;
      const genresInput = document.getElementById('new-movie-genres').value.trim();
      const poster = document.getElementById('new-movie-poster').value.trim();
      const description = document.getElementById('new-movie-desc').value.trim();
      const trailer = document.getElementById('new-movie-trailer').value.trim();

      if (!title) {
        alert('Будь ласка, вкажіть назву фільму.');
        return;
      }

      const genres = genresInput ? genresInput.split(',').map(s => s.trim()).filter(Boolean) : ['Драма'];

      const newMovie = {
        id: `custom_${Date.now()}`,
        title,
        originalTitle,
        year,
        rating,
        duration,
        director: 'Користувач',
        genres,
        poster,
        description: description || 'Власний фільм доданий користувачем до колекції.',
        trailer: trailer || ''
      };

      this.state.customMovies.push(newMovie);
      this.saveState();
      form.reset();
      this.closeModal(this.domAddMovieModal);
      this.showToast(`Фільм «${title}» додано!`, false);
      this.applyFiltersAndPick(true);
    });
  }

  // ------------------------------------------------------------------------
  // Налаштування та резервна копія
  // ------------------------------------------------------------------------
  bindSettingsEvents() {
    document.getElementById('btn-export-data')?.addEventListener('click', () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(
        JSON.stringify({
          dislikedIds: Array.from(this.state.dislikedIds),
          watchedIds: Array.from(this.state.watchedIds),
          savedIds: Array.from(this.state.savedIds),
          customMovies: this.state.customMovies,
          exportDate: new Date().toISOString()
        }, null, 2)
      );
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `cine_backup_${new Date().toISOString().slice(0,10)}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
    });

    document.getElementById('btn-import-file')?.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const imported = JSON.parse(event.target.result);
          if (imported.dislikedIds) this.state.dislikedIds = new Set(imported.dislikedIds);
          if (imported.watchedIds) this.state.watchedIds = new Set(imported.watchedIds);
          if (imported.savedIds) this.state.savedIds = new Set(imported.savedIds);
          if (imported.customMovies) this.state.customMovies = imported.customMovies;

          this.saveState();
          this.applyFiltersAndPick(true);
          this.closeModal(this.domSettingsModal);
          this.showToast('Дані успішно імпортовано!', false);
        } catch (err) {
          alert('Невірний формат файлу.');
        }
      };
      reader.readAsText(file);
    });

    document.getElementById('btn-reset-all-data')?.addEventListener('click', () => {
      if (confirm('Скинути всі списки переглянутих та виключених фільмів?')) {
        this.state.dislikedIds.clear();
        this.state.watchedIds.clear();
        this.state.savedIds.clear();
        this.state.history = [];
        this.saveState();
        this.closeModal(this.domSettingsModal);
        this.applyFiltersAndPick(true);
        this.showToast('Всі списки очищено!', false);
      }
    });
  }

  // ------------------------------------------------------------------------
  // Допоміжні UI
  // ------------------------------------------------------------------------
  updateHeaderCounters() {
    const total = this.getAllMoviesList().length;
    const available = this.state.availablePool.length;

    if (this.domPoolCounter) {
      if (this.state.onlySavedMode) {
        this.domPoolCounter.textContent = `🔖 Режим «Мій список»: ${available} фільмів`;
      } else {
        this.domPoolCounter.textContent = `${available} доступно з ${total}`;
      }
    }
    if (this.domWatchedCount) {
      this.domWatchedCount.textContent = this.state.watchedIds.size;
    }
    if (this.domDislikedCount) {
      this.domDislikedCount.textContent = this.state.dislikedIds.size;
    }
    if (this.domSavedCount) {
      this.domSavedCount.textContent = this.state.savedIds.size;
    }
    if (this.domTabSavedCount) {
      this.domTabSavedCount.textContent = this.state.savedIds.size;
    }
    if (this.domTabWatchedCount) {
      this.domTabWatchedCount.textContent = this.state.watchedIds.size;
    }
    if (this.domTabDislikedCount) {
      this.domTabDislikedCount.textContent = this.state.dislikedIds.size;
    }
  }

  updateAmbientGlow(movie) {
    if (!this.domAmbientGlow) return;
    const genre = (movie.genres && movie.genres[0]) || '';
    let glowColor = 'rgba(99, 102, 241, 0.22)';

    if (genre.includes('Фантастика') || genre.includes('Пригоди')) {
      glowColor = 'rgba(14, 165, 233, 0.25)';
    } else if (genre.includes('Трилер') || genre.includes('Кримінал')) {
      glowColor = 'rgba(239, 68, 68, 0.2)';
    } else if (genre.includes('Комедія')) {
      glowColor = 'rgba(245, 158, 11, 0.25)';
    } else if (genre.includes('Жахи')) {
      glowColor = 'rgba(168, 85, 247, 0.22)';
    } else if (genre.includes('Драма')) {
      glowColor = 'rgba(20, 184, 166, 0.2)';
    }

    this.domAmbientGlow.style.background = `radial-gradient(circle, ${glowColor} 0%, rgba(245, 158, 11, 0.08) 45%, rgba(8, 10, 16, 0) 70%)`;
  }

  showToast(message, showUndo = true) {
    if (!this.domToast) return;
    this.domToastMsg.textContent = message;
    this.domBtnToastUndo.style.display = showUndo ? 'inline-block' : 'none';
    this.domToast.classList.add('show');

    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      this.hideToast();
    }, 5000);
  }

  hideToast() {
    if (this.domToast) {
      this.domToast.classList.remove('show');
    }
  }

  openModal(modal) {
    if (!modal) return;
    modal.classList.add('open');
  }

  closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('open');
    const iframe = modal.querySelector('iframe');
    if (iframe) {
      iframe.src = '';
    }
  }

  generateFallbackPoster(title, year) {
    const cleanTitle = String(title || 'Фільм').slice(0, 26);
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="600" height="900" viewBox="0 0 600 900">
        <defs>
          <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#1E293B"/>
            <stop offset="100%" stop-color="#0F172A"/>
          </linearGradient>
        </defs>
        <rect width="600" height="900" fill="url(#bg)"/>
        <circle cx="300" cy="400" r="130" fill="none" stroke="rgba(245,158,11,0.2)" stroke-width="6"/>
        <text x="300" y="425" font-family="sans-serif" font-size="70" fill="#F59E0B" text-anchor="middle">🎬</text>
        <text x="300" y="580" font-family="sans-serif" font-size="30" font-weight="bold" fill="#F8FAFC" text-anchor="middle">${cleanTitle}</text>
        <text x="300" y="625" font-family="sans-serif" font-size="20" fill="#94A3B8" text-anchor="middle">${year || ''}</text>
      </svg>
    `;
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  }
}

// Запуск додатку
document.addEventListener('DOMContentLoaded', () => {
  window.movieApp = new MovieRandomizerApp();
});
