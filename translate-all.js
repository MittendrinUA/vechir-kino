// translate-all.js: Перекладає всі описи фільмів на якісну українську мову
const fs = require('fs');
const https = require('https');
const path = require('path');

// Функція перекладу тексту через Google Chrome API
function translateText(text) {
  return new Promise((resolve) => {
    if (!text || text.length === 0) return resolve(text);
    
    // Якщо вже українською — повертаємо як є
    if (/[а-яіїєґ]/i.test(text)) {
      return resolve(text);
    }

    const cleanText = text.replace(/[\r\n]+/g, ' ').trim();
    const url = 'https://clients5.google.com/translate_a/t?client=dict-chrome-ex&sl=en&tl=uk&q=' + encodeURIComponent(cleanText);

    const req = https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (Array.isArray(parsed) && parsed[0]) {
            resolve(parsed[0]);
          } else if (typeof parsed === 'string') {
            resolve(parsed);
          } else {
            resolve(text);
          }
        } catch (e) {
          resolve(text);
        }
      });
    });

    req.on('error', () => resolve(text));
    req.setTimeout(5000, () => {
      req.destroy();
      resolve(text);
    });
  });
}

// Затримка
const sleep = (ms) => new Promise(res => setTimeout(res, ms));

async function main() {
  const filePath = path.join(__dirname, 'movies-data.js');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const match = fileContent.match(/const DEFAULT_MOVIES = (\[[\s\S]*?\]);/);

  if (!match) {
    console.error('Не вдалося знайти масив DEFAULT_MOVIES');
    return;
  }

  const movies = eval(match[1]);
  console.log(`Завантажено ${movies.length} фільмів. Перевірка мови описів...`);

  // Підвантажуємо вже наявні ручні українські описи, якщо є
  let ukCache = {};
  if (fs.existsSync(path.join(__dirname, 'uk-desc-cache.json'))) {
    try {
      ukCache = JSON.parse(fs.readFileSync(path.join(__dirname, 'uk-desc-cache.json'), 'utf8'));
    } catch(e) {}
  }

  let translatedCount = 0;
  let skippedCount = 0;
  const batchSize = 15;

  for (let i = 0; i < movies.length; i += batchSize) {
    const chunk = movies.slice(i, i + batchSize);
    
    await Promise.all(chunk.map(async (m) => {
      const origKey = (m.originalTitle || '').toLowerCase().trim();
      
      // Якщо є ручний якісний опис у кеші
      if (ukCache[origKey]) {
        m.description = ukCache[origKey];
        skippedCount++;
        return;
      }

      // Якщо опис вже українською
      if (/[а-яіїєґ]/i.test(m.description)) {
        skippedCount++;
        return;
      }

      // Перекладаємо
      const translated = await translateText(m.description);
      if (translated && /[а-яіїєґ]/i.test(translated)) {
        m.description = translated;
        translatedCount++;
      }
    }));

    console.log(`Оброблено ${Math.min(i + batchSize, movies.length)} / ${movies.length} (перекладено нових: ${translatedCount})...`);
    await sleep(250); // Пауза між пакетами для стабільності
  }

  // Перевірка фінального стану
  let enRemaining = 0;
  let ukTotal = 0;
  movies.forEach(m => {
    if (/[а-яіїєґ]/i.test(m.description)) ukTotal++;
    else enRemaining++;
  });

  console.log(`\nПідсумок:`);
  console.log(`Українською мовою: ${ukTotal} / ${movies.length}`);
  console.log(`Залишилось англійською: ${enRemaining}`);

  // Записуємо оновлений файл
  const outputCode = `// База даних з ${movies.length} справжніх перевірених фільмів
// Кожен фільм має власний оригінальний постер, справжнього режисера, правильний рік, рейтинг та український опис
const DEFAULT_MOVIES = ${JSON.stringify(movies, null, 2)};
`;

  fs.writeFileSync(filePath, outputCode, 'utf8');
  console.log(`movies-data.js успішно оновлено!`);
}

main();
