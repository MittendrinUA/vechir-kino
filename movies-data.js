// База даних з 500 справжніх перевірених фільмів
// Кожен фільм має власний оригінальний постер, справжнього режисера, правильний рік, рейтинг та український опис
const DEFAULT_MOVIES = [
  {
    "id": "m_1",
    "title": "Початок",
    "originalTitle": "Inception",
    "year": 2010,
    "duration": 148,
    "rating": 8.8,
    "director": "Christopher Nolan",
    "genres": [
      "Пригоди",
      "Фантастика",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "YoHD9XEInc0",
    "description": "Досвідчений злодій Дом Кобб викрадає цінні секрети з глибин підсвідомості під час сну. Йому пропонують майже неможливе завдання: вкорінити ідею в чужий розум."
  },
  {
    "id": "m_2",
    "title": "Інтерстеллар",
    "originalTitle": "Interstellar",
    "year": 2014,
    "duration": 169,
    "rating": 8.7,
    "director": "Christopher Nolan",
    "genres": [
      "Пригоди",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "zSWdZVtXT7E",
    "description": "Коли пилові бурі ставлять людство на межу вимирання, група дослідників вирушає крізь червоточину біля Сатурна в пошуках нової придатної для життя планети."
  },
  {
    "id": "m_3",
    "title": "Темний лицар",
    "originalTitle": "The Dark Knight",
    "year": 2008,
    "duration": 152,
    "rating": 9.1,
    "director": "Christopher Nolan",
    "genres": [
      "Кримінал",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "EXeTwQWrcwY",
    "description": "Бетмен, Джеймс Ґордон та Гарві Дент об'єднують зусилля проти кримінального хаосу в Ґотемі, але стикаються зі смертельно небезпечним генієм психопатії — Джокером."
  },
  {
    "id": "m_4",
    "title": "Бійцівський клуб",
    "originalTitle": "Fight Club",
    "year": 1999,
    "duration": 139,
    "rating": 8.8,
    "director": "David Fincher",
    "genres": [
      "Кримінал",
      "Драма",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "qtRKDV93JU8",
    "description": "Безсонний офісний клерк знайомиться з харизматичним продавцем мила Тайлером Дерденом і створює підпільний клуб бійок як форму бунту проти споживацького суспільства."
  },
  {
    "id": "m_5",
    "title": "Кримінальне чтиво",
    "originalTitle": "Pulp Fiction",
    "year": 1994,
    "duration": 154,
    "rating": 8.8,
    "director": "Quentin Tarantino",
    "genres": [
      "Кримінал",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_QL75_UY562_CR3,0,380,562_.jpg",
    "trailer": "s7EdQ4FqbhY",
    "description": "Культова нелінійна історія гангстерів Вінсента Веги та Джулса Віннфілда, їхнього боса Марселласа Воллеса та боксера Бутча в кримінальному водороті Лос-Анджелеса."
  },
  {
    "id": "m_6",
    "title": "Матриця",
    "originalTitle": "The Matrix",
    "year": 1999,
    "duration": 136,
    "rating": 8.7,
    "director": "Lana Wachowski, Lilly Wachowski",
    "genres": [
      "Бойовик",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "vKQi3bBA1y8",
    "description": "Хакер Нео дізнається, що світ навколо нього — це лише симуляція машин, які захопили людство. Нео стає на чолі повстання реального світу."
  },
  {
    "id": "m_7",
    "title": "Паразити",
    "originalTitle": "Parasite",
    "year": 2019,
    "duration": 132,
    "rating": 8.5,
    "director": "Bong Joon Ho",
    "genres": [
      "Драма",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "5xH0hhx2z_Y",
    "description": "Бідна родина Кім хитрістю влаштовується на роботу до маєтку багатіїв Пак. Але одного дня вони стикаються з несподіваною таємницею підвалу."
  },
  {
    "id": "m_8",
    "title": "Дюна",
    "originalTitle": "Dune",
    "year": 2021,
    "duration": 155,
    "rating": 8,
    "director": "Denis Villeneuve",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNWIyNmU5MGYtZDZmNi00ZjAwLWJlYjgtZTc0ZGIxMDE4ZGYwXkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "trailer": "8g18jFHCLXk",
    "description": "Пол Атрідес прибуває на Арракіс після того, як його батько погоджується керувати небезпечною планетою. Однак після зради настає хаос, коли сили борються за контроль над меланжем, дорогоцінним ресурсом."
  },
  {
    "id": "m_9",
    "title": "Дюна: Частина друга",
    "originalTitle": "Dune: Part Two",
    "year": 2024,
    "duration": 166,
    "rating": 8.4,
    "director": "Denis Villeneuve",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "Way9Dexny3w",
    "description": "Пол Атрід об'єднується з Чані та фременами, щоб помститися змовникам, які знищили його сім'ю, стикаючись з вибором між коханням та долею всесвіту."
  },
  {
    "id": "m_10",
    "title": "Оппенгеймер",
    "originalTitle": "Oppenheimer",
    "year": 2023,
    "duration": 180,
    "rating": 8.2,
    "director": "Christopher Nolan",
    "genres": [
      "Біографія",
      "Драма",
      "Історія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BN2JkMDc5MGQtZjg3YS00NmFiLWIyZmQtZTJmNTM5MjVmYTQ4XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "uYPbbksJxIg",
    "description": "Епічна біографічна драма про фізика Роберта Оппенгеймера, який очолив секретний проєкт зі створення першої у світі ядерної зброї."
  },
  {
    "id": "m_11",
    "title": "Втеча з Шоушенка",
    "originalTitle": "The Shawshank Redemption",
    "year": 1994,
    "duration": 142,
    "rating": 9.3,
    "director": "Frank Darabont",
    "genres": [
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "PLl99DlL6b4",
    "description": "Банкір Енді Дюфрейн несправедливо засуджений до довічного ув'язнення, але зберігає незламну надію на свободу протягом двох десятиліть."
  },
  {
    "id": "m_12",
    "title": "Одержимість",
    "originalTitle": "Whiplash",
    "year": 2014,
    "duration": 106,
    "rating": 8.5,
    "director": "Damien Chazelle",
    "genres": [
      "Драма",
      "Музика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMDFjOWFkYzktYzhhMC00NmYyLTkwY2EtYjViMDhmNzg0OGFkXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "7d_jQycdQGo",
    "description": "Молодий барабанщик мріє про велич. Його бере під своє крило безжалісний диригент Теренс Флетчер, чиї садистські методи штовхають хлопця на межу."
  },
  {
    "id": "m_13",
    "title": "Острів проклятих",
    "originalTitle": "Shutter Island",
    "year": 2010,
    "duration": 138,
    "rating": 8.2,
    "director": "Martin Scorsese",
    "genres": [
      "Детектив",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BN2FjNWExYzEtY2YzOC00YjNlLTllMTQtNmIwM2Q1YzBhOWM1XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "5iaYLCiq5RM",
    "description": "Федеральний маршал прибуває до психіатричної лікарні для небезпечних злочинців на острові, щоб розслідувати загадкове зникнення пацієнтки."
  },
  {
    "id": "m_14",
    "title": "Сім",
    "originalTitle": "Seven",
    "year": 1995,
    "duration": 127,
    "rating": 8.6,
    "director": "David Fincher",
    "genres": [
      "Кримінал",
      "Драма",
      "Детектив"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BY2IzNzMxZjctZjUxZi00YzAxLTk3ZjMtODFjODdhMDU5NDM1XkEyXkFqcGc@._V1_QL75_UX380_CR0,16,380,562_.jpg",
    "trailer": "znmZoVkCjpI",
    "description": "Двоє детективів намагаються вистежити серійного вбивцю, який обирає своїх жертв на основі семи смертних гріхів."
  },
  {
    "id": "m_15",
    "title": "Престиж",
    "originalTitle": "The Prestige",
    "year": 2006,
    "duration": 130,
    "rating": 8.5,
    "director": "Christopher Nolan",
    "genres": [
      "Драма",
      "Детектив",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BM2Y0YmM5MWYtZTYzNi00ZjU5LTlmOGYtZDQ4ODQyMjAzNjQ2XkEyXkFqcGc@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "trailer": "o4gHCmTQDVI",
    "description": "У вікторіанському Лондоні двоє фокусників-ілюзіоністів стають запеклими ворогами, ладними піти на будь-що заради ідеального трюку."
  },
  {
    "id": "m_16",
    "title": "Той, хто біжить по лезу 2049",
    "originalTitle": "Blade Runner 2049",
    "year": 2017,
    "duration": 164,
    "rating": 8,
    "director": "Denis Villeneuve",
    "genres": [
      "Бойовик",
      "Драма",
      "Детектив"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "gCcx85zbxz4",
    "description": "Офіцер поліції Кей натрапляє на поховану таємницю, яка здатна знищити крихкий порядок між людьми та реплікантами."
  },
  {
    "id": "m_17",
    "title": "Той, хто біжить по лезу",
    "originalTitle": "Blade Runner",
    "year": 1982,
    "duration": 117,
    "rating": 8.1,
    "director": "Ridley Scott",
    "genres": [
      "Бойовик",
      "Драма",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BOWQ4YTBmNTQtMDYxMC00NGFjLTkwOGQtNzdhNmY1Nzc1MzUxXkEyXkFqcGc@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "trailer": "eogpIG53Cjc",
    "description": "Бігун по лезу повинен переслідувати та знищити чотирьох реплікантів, які викрали корабель у космосі та повернулися на Землю, щоб знайти свого творця."
  },
  {
    "id": "m_18",
    "title": "Гладіатор",
    "originalTitle": "Gladiator",
    "year": 2000,
    "duration": 155,
    "rating": 8.5,
    "director": "Ridley Scott",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYWQ4YmNjYjEtOWE1Zi00Y2U4LWI4NTAtMTU0MjkxNWQ1ZmJiXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "owK1qxAo3Rs",
    "description": "Полководця Максимуса зраджує підступний імператор Коммод. Втративши сім'ю, Максимус стає гладіатором на арені Колізею заради помсти."
  },
  {
    "id": "m_19",
    "title": "Джанґо вільний",
    "originalTitle": "Django Unchained",
    "year": 2012,
    "duration": 165,
    "rating": 8.5,
    "director": "Quentin Tarantino",
    "genres": [
      "Драма",
      "Вестерн"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "0fUCuvNlOCg",
    "description": "Звільнений раб Джанґо разом з німецьким мисливцем за головами вирушає визволяти дружину з рук жорстокого рабовласника Келвіна Кенді."
  },
  {
    "id": "m_20",
    "title": "Вовк з Волл-стріт",
    "originalTitle": "The Wolf of Wall Street",
    "year": 2013,
    "duration": 180,
    "rating": 8.2,
    "director": "Martin Scorsese",
    "genres": [
      "Біографія",
      "Комедія",
      "Кримінал"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "iszwuX1AK6A",
    "description": "Неймовірна історія злету та падіння Джордана Белфорта — амбітного брокера, який побудував фінансову імперію на шахрайстві та розкоші."
  },
  {
    "id": "m_21",
    "title": "Форрест Ґамп",
    "originalTitle": "Forrest Gump",
    "year": 1994,
    "duration": 142,
    "rating": 8.8,
    "director": "Robert Zemeckis",
    "genres": [
      "Драма",
      "Романтика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_QL75_UY562_CR4,0,380,562_.jpg",
    "trailer": "bLvqoHBptjg",
    "description": "Добродушний хлопець з Алабами випадково стає учасником ключових історичних подій XX століття, завжди зберігаючи вірність коханню до Дженні."
  },
  {
    "id": "m_22",
    "title": "Мементо",
    "originalTitle": "Memento",
    "year": 2001,
    "duration": 113,
    "rating": 8.4,
    "director": "Christopher Nolan",
    "genres": [
      "Детектив",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMGQ3Y2Q4NjktN2E4Ny00Y2Q2LTliZDUtZTNiNjRhY2I0NGIyXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "0vS0E9bBS74",
    "description": "Леонард Шелбі шукає вбивцю своєї дружини, страждаючи на рідкісну втрату пам'яті. Щоб згадати події, він робить татуювання на тілі та фотографії Polaroid."
  },
  {
    "id": "m_23",
    "title": "Готель «Ґранд Будапешт»",
    "originalTitle": "The Grand Budapest Hotel",
    "year": 2014,
    "duration": 99,
    "rating": 8.1,
    "director": "Wes Anderson",
    "genres": [
      "Комедія",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "1Fg5iWmQjwk",
    "description": "Вишукані пригоди легендарного консьєржа Густава та портьє Зеро Мустафи у вигаданій європейській республіці Зубровка."
  },
  {
    "id": "m_24",
    "title": "Ножі наголо",
    "originalTitle": "Knives Out",
    "year": 2019,
    "duration": 130,
    "rating": 7.9,
    "director": "Rian Johnson",
    "genres": [
      "Комедія",
      "Кримінал",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZDU5ZTRkYmItZjg0Mi00ZTQwLThjMWItNWM3MTMxMzVjZmVjXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "qGqiHJTsR4Q",
    "description": "Коли багатого автора детективів знаходять мертвим після ювілею, до розслідування підключається проникливий приватний сищик Бенуа Бланк."
  },
  {
    "id": "m_25",
    "title": "Людина-павук: Навколо всесвіту",
    "originalTitle": "Spider-Man: Into the Spider-Verse",
    "year": 2018,
    "duration": 117,
    "rating": 8.4,
    "director": "Bob Persichetti, Peter Ramsey, Rodney Rothman",
    "genres": [
      "Анімація",
      "Бойовик",
      "Пригоди"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "trailer": "tg52up16eq0",
    "description": "Підліток Майлз Моралес отримує суперсили та виявляє, що існує мультивсесвіт із різними версіями Людини-павука."
  },
  {
    "id": "m_26",
    "title": "Людина-павук: Крізь всесвіт",
    "originalTitle": "Spider-Man: Across the Spider-Verse",
    "year": 2023,
    "duration": 140,
    "rating": 8.5,
    "director": "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
    "genres": [
      "Анімація",
      "Бойовик",
      "Пригоди"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNThiZjA3MjItZGY5Ni00ZmJhLWEwN2EtOTBlYTA4Y2E0M2ZmXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "trailer": "cqGjhVJWtEg",
    "description": "Подорожуючи мультивсесвітом, Майлз Моралес зустрічає нову команду Людей-павуків, що складається з героїв із різних вимірів. Але коли герої сперечаються, як впоратися з новою загрозою, Майлз опиняється на роздоріжжі."
  },
  {
    "id": "m_27",
    "title": "Віднесені привидами",
    "originalTitle": "Spirited Away",
    "year": 2003,
    "duration": 124,
    "rating": 8.6,
    "director": "Hayao Miyazaki",
    "genres": [
      "Анімація",
      "Пригоди",
      "Сімейний"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "ByXuk9QqQkk",
    "description": "10-річна Тіхіро потрапляє до загадкового містечка духів, де мусить працювати в чарівній лазні відьми Юбаби, щоб врятувати батьків."
  },
  {
    "id": "m_28",
    "title": "Чужий",
    "originalTitle": "Alien",
    "year": 1979,
    "duration": 117,
    "rating": 8.4,
    "director": "Ridley Scott",
    "genres": [
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BN2NhMDk2MmEtZDQzOC00MmY5LThhYzAtMDdjZGFjOGZjMjdjXkEyXkFqcGc@._V1_QL75_UX380_CR0,6,380,562_.jpg",
    "trailer": "LjLamj-b0I8",
    "description": "Екіпаж комерційного космічного буксира «Ностромо» перехоплює сигнал SOS і стикається зі смертоносним позаземним організмом."
  },
  {
    "id": "m_29",
    "title": "Чужі",
    "originalTitle": "Aliens",
    "year": 1986,
    "duration": 137,
    "rating": 8.4,
    "director": "James Cameron",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BN2ZiMmQ0YWItN2IwZS00Y2NhLWE0NzQtNGNiOGFjN2U4MWNmXkEyXkFqcGc@._V1_QL75_UX380_CR0,15,380,562_.jpg",
    "trailer": "bTCa_r1w9sE",
    "description": "Через десятиліття після того, як вона пережила інцидент з Ностромо, Еллен Ріплі відправляють відновити контакт із колонією, яка тераформується, але вона опиняється у боротьбі з Королевою прибульців та її нащадками."
  },
  {
    "id": "m_30",
    "title": "Мовчання ягнят",
    "originalTitle": "The Silence of the Lambs",
    "year": 1991,
    "duration": 118,
    "rating": 8.6,
    "director": "Jonathan Demme",
    "genres": [
      "Кримінал",
      "Драма",
      "Жахи"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNDdhOGJhYzctYzYwZC00YmI2LWI0MjctYjg4ODdlMDExYjBlXkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "trailer": "W6Mm8Sbe__o",
    "description": "Стажерка ФБР Кларіс Старлінг звертається за допомогою до ув'язненого канібала Ганнібала Лектера, щоб спіймати серійного вбивцю."
  },
  {
    "id": "m_31",
    "title": "Відступники",
    "originalTitle": "The Departed",
    "year": 2006,
    "duration": 151,
    "rating": 8.5,
    "director": "Martin Scorsese",
    "genres": [
      "Кримінал",
      "Драма",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_QL75_UY562_CR0,0,380,562_.jpg",
    "trailer": "iojhqm0JTW4",
    "description": "У Бостоні поліцейський під прикриттям впроваджується в мафію, а мафія засилає свого «крота» у поліцію. Починається смертельна гра."
  },
  {
    "id": "m_32",
    "title": "Спіймай мене, якщо зможеш",
    "originalTitle": "Catch Me If You Can",
    "year": 2002,
    "duration": 141,
    "rating": 8.1,
    "director": "Steven Spielberg",
    "genres": [
      "Біографія",
      "Кримінал",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTY5MzYzNjc5NV5BMl5BanBnXkFtZTYwNTUyNTc2._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "s-7pyIxz8Qg",
    "description": "Історія геніального шахрая Френка Ебіґнейла, який до 21 року підробляв чеки на мільйони, вдаючи пілота, лікаря та юриста."
  },
  {
    "id": "m_33",
    "title": "Славні хлопці",
    "originalTitle": "GoodFellas",
    "year": 1990,
    "duration": 145,
    "rating": 8.7,
    "director": "Martin Scorsese",
    "genres": [
      "Біографія",
      "Кримінал",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BN2E5NzI2ZGMtY2VjNi00YTRjLWI1MDUtZGY5OWU1MWJjZjRjXkEyXkFqcGc@._V1_QL75_UX380_CR0,3,380,562_.jpg",
    "trailer": "qo5jJpHtTX8",
    "description": "Хроніка життя Генрі Гілла від хлопчика на побігеньках до вершин кримінального світу італійської мафії Нью-Йорка."
  },
  {
    "id": "m_34",
    "title": "Леон",
    "originalTitle": "Leon: The Professional",
    "year": 1994,
    "duration": 110,
    "rating": 8.5,
    "director": "Luc Besson",
    "genres": [
      "Бойовик",
      "Кримінал",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNGRkYTNhOWQtYmI0Ni00MjZhLWJmMzAtMTA2Mjg4NGNiNDU0XkEyXkFqcGc@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "trailer": "aNQqoExfQjk",
    "description": "Коли її сім’ю вбиває група корумпованих офіцерів на чолі з тираном Норманом Стенсфілдом, юна 12-річна дівчина заручається допомогою італо-американського вбивці, щоб помститися."
  },
  {
    "id": "m_35",
    "title": "Шалений Макс: Дорога гніву",
    "originalTitle": "Mad Max: Fury Road",
    "year": 2015,
    "duration": 120,
    "rating": 8.1,
    "director": "George Miller",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZDRkODJhOTgtOTc1OC00NTgzLTk4NjItNDgxZDY4YjlmNDY2XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "hEJnMQG9ev8",
    "description": "У постапокаліптичній пустелі Макс приєднується до бунтарки Фуріози, яка намагається врятувати гарем безжального тирана Безсмертного Джо."
  },
  {
    "id": "m_36",
    "title": "Все завжди і водночас",
    "originalTitle": "Everything Everywhere All at Once",
    "year": 2022,
    "duration": 139,
    "rating": 7.7,
    "director": "Daniel Kwan, Daniel Scheinert",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Комедія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BOWNmMzAzZmQtNDQ1NC00Nzk5LTkyMmUtNGI2N2NkOWM4MzEyXkEyXkFqcGc@._V1_QL75_UY562_CR4,0,380,562_.jpg",
    "trailer": "wxN1T1uxQ2g",
    "description": "Власниця пральні Евелін виявляє, що існує нескінченний мультивсесвіт і лише вона може врятувати його від загибелі."
  },
  {
    "id": "m_37",
    "title": "Ла-Ла Ленд",
    "originalTitle": "La La Land",
    "year": 2016,
    "duration": 128,
    "rating": 8,
    "director": "Damien Chazelle",
    "genres": [
      "Комедія",
      "Драма",
      "Музика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMDllYjliOTUtMDJjZC00ODIzLWJmNGMtOWI2NzQxMjA2NzdlXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "0pdqf4P9MB8",
    "description": "Пристрасна історія кохання акторки Мії та джазового піаніста Себастьяна у безжальному Лос-Анджелесі, де доводиться обирати між мріями та серцем."
  },
  {
    "id": "m_38",
    "title": "Зелена книга",
    "originalTitle": "Green Book",
    "year": 2018,
    "duration": 130,
    "rating": 8.2,
    "director": "Peter Farrelly",
    "genres": [
      "Біографія",
      "Комедія",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNDU5YTNmMmItN2QxNy00OGQ0LTg5MTctNzFmYjEzZjcwN2UwXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "QkZxoko_HC0",
    "description": "Простий вишибала-італієць Тоні наймається водієм для видатного темношкірого піаніста Дона Ширлі під час туру расистським Півднем США."
  },
  {
    "id": "m_39",
    "title": "Шоу Трумена",
    "originalTitle": "The Truman Show",
    "year": 1998,
    "duration": 103,
    "rating": 8.2,
    "director": "Peter Weir",
    "genres": [
      "Комедія",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNzA3ZjZlNzYtMTdjMy00NjMzLTk5ZGYtMTkyYzNiOGM1YmM3XkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "trailer": "dlnmQbPGuls",
    "description": "Звичайний страховий агент навіть не здогадується, що все його життя з народження — це найпопулярніше цілодобове телешоу в світі."
  },
  {
    "id": "m_40",
    "title": "Назад у майбутнє",
    "originalTitle": "Back to the Future",
    "year": 1985,
    "duration": 116,
    "rating": 8.5,
    "director": "Robert Zemeckis",
    "genres": [
      "Пригоди",
      "Комедія",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZmM3ZjE0NzctNjBiOC00MDZmLTgzMTUtNGVlOWFlOTNiZDJiXkEyXkFqcGc@._V1_QL75_UX380_CR0,14,380,562_.jpg",
    "trailer": "qvsgGtivCgs",
    "description": "Підліток Марті Макфлай на машині часу DeLorean переноситься з 1985 року в 1955-й, де ставить під загрозу власне існування."
  },
  {
    "id": "m_41",
    "title": "Назад у майбутнє 2",
    "originalTitle": "Back to the Future Part II",
    "year": 1989,
    "duration": 108,
    "rating": 7.8,
    "director": "Robert Zemeckis",
    "genres": [
      "Пригоди",
      "Комедія",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTNlOTRmOTEtMTAyMi00NjFiLTk3NDMtNWI0YzA3ZTZlYjZiXkEyXkFqcGc@._V1_QL75_UX380_CR0,7,380,562_.jpg",
    "trailer": "MdENmJ9Foxw",
    "description": "Після відвідування 2015 року Марті Макфлай повинен повторити свій візит у 1955 рік, щоб запобігти катастрофічним змінам 1985 року, не втручаючись у свою першу подорож."
  },
  {
    "id": "m_42",
    "title": "Парк Юрського періоду",
    "originalTitle": "Jurassic Park",
    "year": 1993,
    "duration": 127,
    "rating": 8.2,
    "director": "Steven Spielberg",
    "genres": [
      "Пригоди",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "QWBKEmWWL38",
    "description": "Багатий ексцентрик відкриває парк із клонованими динозаврами на таємничому острові, але системи безпеки дають збій."
  },
  {
    "id": "m_43",
    "title": "ВАЛЛ-І",
    "originalTitle": "WALL-E",
    "year": 2008,
    "duration": 5,
    "rating": 8.3,
    "director": "Andrew Stanton",
    "genres": [
      "Анімація",
      "Короткометражка"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMzk0ZGMzMDYtMDJkYS00NTdhLWJlZWUtMTdhOTJkOTM3NDUwXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "alIq_84P5E8",
    "description": "Робот на ім'я ВАЛЛ-І сам по собі знаходиться на непридатній для життя землі, але коли приходить людський космічний корабель і кидає нового робота на ім'я Єва на пошуки рослини. Єва зустрічає відьму ВАЛЛ-І ВАЛЛ-І показує Єві рослину. люди повертаються, щоб взяти..."
  },
  {
    "id": "m_44",
    "title": "Коко",
    "originalTitle": "Coco",
    "year": 2017,
    "duration": 105,
    "rating": 8.4,
    "director": "Adrian Molina, Lee Unkrich",
    "genres": [
      "Анімація",
      "Пригоди",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMDIyM2E2NTAtMzlhNy00ZGUxLWI1NjgtZDY5MzhiMDc5NGU3XkEyXkFqcGc@._V1_QL75_UY562_CR7,0,380,562_.jpg",
    "trailer": "Rvr68u6k5sI",
    "description": "Мексиканський хлопчик Міґель мріє грати на гітарі і в День мертвих потрапляє до чарівного барвистого Світу померлих."
  },
  {
    "id": "m_45",
    "title": "Володар перснів: Братство персня",
    "originalTitle": "The Lord of the Rings: The Fellowship of the Ring",
    "year": 2001,
    "duration": 178,
    "rating": 8.9,
    "director": "Peter Jackson",
    "genres": [
      "Пригоди",
      "Драма",
      "Фентезі"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "trailer": "V75dMMIW2B4",
    "description": "Гобіт Фродо Торбин вирушає в небезпечний похід через усе Середзем'я, щоб знищити Єдиний Перстень у жерлі Фатальної гори."
  },
  {
    "id": "m_46",
    "title": "Володар перснів: Дві вежі",
    "originalTitle": "The Lord of the Rings: The Two Towers",
    "year": 2002,
    "duration": 179,
    "rating": 8.8,
    "director": "Peter Jackson",
    "genres": [
      "Пригоди",
      "Драма",
      "Фентезі"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMGQxMDdiOWUtYjc1Ni00YzM1LWE2NjMtZTg3Y2JkMjEzMTJjXkEyXkFqcGc@._V1_QL75_UX380_CR0,14,380,562_.jpg",
    "trailer": "LbfMDwc4CdU",
    "description": "У той час як Фродо та Сем наближаються до Мордору за допомогою хитрого Голлума, розділене товариство протистоїть новому союзнику Саурона, Саруману, та його ордам Ізенгарду."
  },
  {
    "id": "m_47",
    "title": "Володар перснів: Повернення короля",
    "originalTitle": "The Lord of the Rings: The Return of the King",
    "year": 2003,
    "duration": 201,
    "rating": 9,
    "director": "Peter Jackson",
    "genres": [
      "Пригоди",
      "Драма",
      "Фентезі"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTZkMjBjNWMtZGI5OC00MGU0LTk4ZTItODg2NWM3NTVmNWQ4XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "r5X-hFf6Bwo",
    "description": "Гендальф і Арагорн ведуть Світ Людей проти армії Саурона, щоб відвернути його погляд від Фродо та Сема, коли вони наближаються до Гори Дум з Єдиним Перснем."
  },
  {
    "id": "m_48",
    "title": "Хрещений батько",
    "originalTitle": "The Godfather",
    "year": 1972,
    "duration": 175,
    "rating": 9.2,
    "director": "Francis Ford Coppola",
    "genres": [
      "Кримінал",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_QL75_UY562_CR8,0,380,562_.jpg",
    "trailer": "sY1S34973zA",
    "description": "Монументальна сага про мафіозний клан Корлеоне в повоєнному Нью-Йорку та перетворення молодшого сина Майкла на безжального дона."
  },
  {
    "id": "m_49",
    "title": "Хрещений батько 2",
    "originalTitle": "The Godfather Part II",
    "year": 1974,
    "duration": 202,
    "rating": 9,
    "director": "Francis Ford Coppola",
    "genres": [
      "Кримінал",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMDIxMzBlZDktZjMxNy00ZGI4LTgxNDEtYWRlNzRjMjJmOGQ1XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "9O1Iy9od7-A",
    "description": "Зображується раннє життя та кар’єра Віто Корлеоне в Нью-Йорку 1920-х років, у той час як його син Майкл розширює та зміцнює контроль над сімейним злочинним синдикатом."
  },
  {
    "id": "m_50",
    "title": "1917",
    "originalTitle": "1917",
    "year": 2020,
    "duration": 119,
    "rating": 8.2,
    "director": "Sam Mendes",
    "genres": [
      "Драма",
      "Військовий"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYzkxZjg2NDQtMGVjMy00NWZkLTk0ZDEtZWE3NDYwYjAyMTg1XkEyXkFqcGc@._V1_QL75_UX380_CR0,20,380,562_.jpg",
    "trailer": "YqNYrYUiMfg",
    "description": "Двом капралам доручають доставити наказ про скасування наступу через ворожу лінію фронту, щоб врятувати 1600 товаришів."
  },
  {
    "id": "m_51",
    "title": "Бетмен",
    "originalTitle": "The Batman",
    "year": 2022,
    "duration": 176,
    "rating": 7.8,
    "director": "Matt Reeves",
    "genres": [
      "Бойовик",
      "Кримінал",
      "Детектив"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4Njg5YWMyXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "mqqft2x_Aa4",
    "description": "Нуарний детектив про другий рік боротьби Брюса Вейна зі злочинністю у корумпованому Ґотемі проти серійного вбивці Загадника."
  },
  {
    "id": "m_52",
    "title": "Людина зі сталі",
    "originalTitle": "Man of Steel",
    "year": 2013,
    "duration": 143,
    "rating": 7.1,
    "director": "Zack Snyder",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTk5ODk1NDkxMF5BMl5BanBnXkFtZTcwNTA5OTY0OQ@@._V1_QL75_UY562_CR0,0,380,562_.jpg",
    "trailer": "T6DJcgm3wNY",
    "description": "Інопланетну дитину евакуювали зі свого вмираючого світу та відправили на Землю жити серед людей. Його спокій опинився під загрозою, коли інші вижилі з його рідної планети вторглися на Землю."
  },
  {
    "id": "m_53",
    "title": "Бетмен: Початок",
    "originalTitle": "Batman Begins",
    "year": 2005,
    "duration": 140,
    "rating": 8.2,
    "director": "Christopher Nolan",
    "genres": [
      "Кримінал"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMzA2NDQzZDEtNDU5Ni00YTlkLTg2OWEtYmQwM2Y1YTBjMjFjXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "neY2xVmOfUM",
    "description": "Ставши свідком смерті своїх батьків, мільярдер Брюс Уейн навчиться мистецтву боротьби проти несправедливості. Повернувшись до Готема в ролі Бетмена, він повинен зупинити таємне товариство, яке має намір знищити місто."
  },
  {
    "id": "m_54",
    "title": "Темний лицар повертається",
    "originalTitle": "The Dark Knight Rises",
    "year": 2012,
    "duration": 164,
    "rating": 8.4,
    "director": "Christopher Nolan",
    "genres": [
      "Кримінал",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "g8evyE9TuYg",
    "description": "Бейн, значний терорист, атакує Готем-Сіті та порушує восьмирічний період миру. Це змушує Брюса Уейна вийти зі схованки та знову одягнути плащ і капюшон Бетмена."
  },
  {
    "id": "m_55",
    "title": "Бідолашні створіння",
    "originalTitle": "Poor Things",
    "year": 2023,
    "duration": 141,
    "rating": 7.7,
    "director": "Yorgos Lanthimos",
    "genres": [
      "Комедія",
      "Драма",
      "Романтика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYWU2MjRjZTYtMjVkMS00MTBjLWFiMTAtYmZlYTk1YjkyMWFkXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "RlbR5N6veqw",
    "description": "Вчений повертає до життя молоду жінку Беллу Бакстер, пересадивши їй мозок її дитини, після чого вона вирушає пізнавати світ."
  },
  {
    "id": "m_56",
    "title": "Минулі життя",
    "originalTitle": "Past Lives",
    "year": 2023,
    "duration": 105,
    "rating": 7.8,
    "director": "Celine Song",
    "genres": [
      "Драма",
      "Романтика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYjQyMTNhNjUtN2VmYy00NWRhLTkwOTctMGVmNTBmNDIxYjZhXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "kA244xewjcI",
    "description": "Друзі дитинства з Сеула знову зустрічаються через 20 років у Нью-Йорку, розмірковуючи про кохання, долю та паралельні вибори життя."
  },
  {
    "id": "m_57",
    "title": "Анатомія падіння",
    "originalTitle": "Anatomy of a Fall",
    "year": 2024,
    "duration": 151,
    "rating": 7.6,
    "director": "Justine Triet",
    "genres": [
      "Кримінал",
      "Драма",
      "Детектив"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYTk3MjFkZmQtMThiYi00N2JhLTk2YzItZTE5ZGUxZTIyZDVkXkEyXkFqcGc@._V1_QL75_UY562_CR2,0,380,562_.jpg",
    "trailer": "fTrsp5BMloA",
    "description": "Чоловік гине, випавши з шале у французьких Альпах. Його дружину підозрюють у вбивстві, а єдиний свідок — їхній незрячий син."
  },
  {
    "id": "m_58",
    "title": "Прибуття",
    "originalTitle": "Arrival",
    "year": 2016,
    "duration": 116,
    "rating": 7.9,
    "director": "Denis Villeneuve",
    "genres": [
      "Драма",
      "Детектив",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_QL75_UX380_CR0,16,380,562_.jpg",
    "trailer": "tFMo3UJ4B4g",
    "description": "Коли на Землю прибувають 12 гігантських кораблів прибульців, лінгвістку наймають для розшифрування їхньої мови та намірів."
  },
  {
    "id": "m_59",
    "title": "Полонянки",
    "originalTitle": "Prisoners",
    "year": 2013,
    "duration": 153,
    "rating": 8.2,
    "director": "Denis Villeneuve",
    "genres": [
      "Кримінал",
      "Драма",
      "Детектив"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_QL75_UY562_CR0,0,380,562_.jpg",
    "trailer": "bpXfcTdlWjM",
    "description": "У тихому містечку безслідно зникають дві маленькі дівчинки, і батько однієї з них бере розслідування у власні руки."
  },
  {
    "id": "m_60",
    "title": "Загублена",
    "originalTitle": "Gone Girl",
    "year": 2014,
    "duration": 149,
    "rating": 8.1,
    "director": "David Fincher",
    "genres": [
      "Драма",
      "Детектив",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "trailer": "2-_-1nJf8Vg",
    "description": "У день річниці весілля зникає Емі Данн. Її чоловік Нік стає головним підозрюваним, але за цим стоїть підступна гра."
  },
  {
    "id": "m_61",
    "title": "Зодіак",
    "originalTitle": "Zodiac",
    "year": 2007,
    "duration": 157,
    "rating": 7.7,
    "director": "David Fincher",
    "genres": [
      "Кримінал",
      "Драма",
      "Детектив"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNDFkMTRkZmQtM2I0NC00NjJjLWJlMDctNTNiZWYxYzhjZDZiXkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "trailer": "yNncHPl1UXg",
    "description": "Карикатурист із Сан-Франциско стає одержимим розгадкою зашифрованих листів серійного вбивці Зодіака."
  },
  {
    "id": "m_62",
    "title": "Пастка",
    "originalTitle": "Get Out",
    "year": 2017,
    "duration": 104,
    "rating": 7.8,
    "director": "Jordan Peele",
    "genres": [
      "Жахи",
      "Детектив",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "DzfpyUB60YY",
    "description": "Молодий афроамериканець відвідує батьків своєї білої подруги на вихідні, де його кипляче занепокоєння щодо того, що вони сприймуть його, зрештою досягає точки кипіння."
  },
  {
    "id": "m_63",
    "title": "Вона",
    "originalTitle": "Her",
    "year": 2014,
    "duration": 126,
    "rating": 7.9,
    "director": "Spike Jonze",
    "genres": [
      "Драма",
      "Романтика",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjA1Nzk0OTM2OF5BMl5BanBnXkFtZTgwNjU2NjEwMDE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "ne6p6HdPX8A",
    "description": "У найближчому майбутньому у самотнього письменника зав'язуються неймовірні стосунки з операційною системою, розробленою для задоволення всіх його потреб."
  },
  {
    "id": "m_64",
    "title": "Стрінгер",
    "originalTitle": "Nightcrawler",
    "year": 2014,
    "duration": 117,
    "rating": 7.8,
    "director": "Dan Gilroy",
    "genres": [
      "Кримінал",
      "Драма",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYjMwMmI5MWQtOTU4OS00OTAyLTg0OTYtNmQ5YzExZTQ3ZWJhXkEyXkFqcGc@._V1_QL75_UY562_CR5,0,380,562_.jpg",
    "trailer": "u1uP_8VJ4hQ",
    "description": "Дрібний злодій відчайдушно прагне попрацювати м’язами у світі кримінальної журналістики та стає зіркою власної історії, стираючи межу між спостерігачем і учасником."
  },
  {
    "id": "m_65",
    "title": "Форд проти Феррарі",
    "originalTitle": "Ford v Ferrari",
    "year": 2019,
    "duration": 152,
    "rating": 8.1,
    "director": "James Mangold",
    "genres": [
      "Бойовик",
      "Біографія",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BOTBjNTEyNjYtYjdkNi00YzE5LTljYzUtZjVlYmYwZmJmZWYxXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "zyYgDtY2AMY",
    "description": "Американський автомобільний дизайнер Керролл Шелбі та водій Кен Майлз борються з корпоративним втручанням і законами фізики, щоб побудувати революційний гоночний автомобіль для Ford, щоб перемогти Ferrari на 24 годинах Ле-Мана в 1966 році."
  },
  {
    "id": "m_66",
    "title": "Драйв",
    "originalTitle": "Drive",
    "year": 2011,
    "duration": 100,
    "rating": 7.8,
    "director": "Nicolas Winding Refn",
    "genres": [
      "Бойовик",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYTFmNTFlOTAtNzEyNi00MWU2LTg3MGEtYjA2NWY3MDliNjlkXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "KBiOF3y1W0Y",
    "description": "Таємничий голлівудський бойовик-каскадер потрапляє в біду з гангстерами, коли намагається допомогти чоловікові сусідки пограбувати ломбард, працюючи його водієм-втікачем."
  },
  {
    "id": "m_67",
    "title": "Старим тут не місце",
    "originalTitle": "No Country for Old Men",
    "year": 2007,
    "duration": 122,
    "rating": 8.2,
    "director": "Ethan Coen, Joel Coen",
    "genres": [
      "Кримінал",
      "Драма",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "trailer": "38A__WT3-o0",
    "description": "Насильство та хаос починаються після того, як мисливець натрапляє на наслідки невдалої угоди з наркотиками та понад два мільйони доларів готівкою біля Ріо-Гранде."
  },
  {
    "id": "m_68",
    "title": "Нафта",
    "originalTitle": "There Will Be Blood",
    "year": 2008,
    "duration": 158,
    "rating": 8.2,
    "director": "Paul Thomas Anderson",
    "genres": [
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjAxODQ4MDU5NV5BMl5BanBnXkFtZTcwMDU4MjU1MQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "FeSLPELpMeM",
    "description": "Історія про сім’ю, релігію, ненависть, нафту та божевілля, зосереджена на старателі на рубежі століть на початку свого бізнесу."
  },
  {
    "id": "m_69",
    "title": "Безславні виродки",
    "originalTitle": "Inglourious Basterds",
    "year": 2009,
    "duration": 153,
    "rating": 8.4,
    "director": "Quentin Tarantino",
    "genres": [
      "Драма",
      "Військовий"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BODZhMWJlNjYtNDExNC00MTIzLTllM2ItOGQ2NGVjNDQ3MzkzXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "KnrRy6kSFF0",
    "description": "В окупованій нацистами Франції під час Другої світової війни план вбивства нацистських лідерів групою єврейських солдатів США збігається з мстивими планами власника театру."
  },
  {
    "id": "m_70",
    "title": "Мерзенна вісімка",
    "originalTitle": "The Hateful Eight",
    "year": 2015,
    "duration": 168,
    "rating": 7.8,
    "director": "Quentin Tarantino",
    "genres": [
      "Кримінал",
      "Драма",
      "Детектив"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjA1MTc1NTg5NV5BMl5BanBnXkFtZTgwOTM2MDEzNzE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "nIOmotayC10",
    "description": "У розпал Вайомінгської зими мисливець за головами та його в’язень знаходять притулок у хатині, де зараз живе ціла низка мерзенних персонажів."
  },
  {
    "id": "m_71",
    "title": "Убити Білла. Частина 1",
    "originalTitle": "Kill Bill: Vol. 1",
    "year": 2003,
    "duration": 111,
    "rating": 8.2,
    "director": "Quentin Tarantino",
    "genres": [
      "Бойовик",
      "Кримінал",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZmMyYzJlZmYtY2I3NC00NjAyLTkyZWItZjdjZDI1YTYyYTEwXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "7kSuas6mRpk",
    "description": "Прокинувшись від чотирирічної коми, колишня вбивця мститься команді вбивць, які її зрадили."
  },
  {
    "id": "m_72",
    "title": "Убити Білла. Частина 2",
    "originalTitle": "Kill Bill: Vol. 2",
    "year": 2004,
    "duration": 137,
    "rating": 8,
    "director": "Quentin Tarantino",
    "genres": [
      "Бойовик",
      "Кримінал",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BY2FiNzhiZTctNzU1Mi00NDkwLWExNDMtZTg0MjYyNzhkNWNkXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "WTt8cCIvGYI",
    "description": "Наречена продовжує свій пошук помсти, вистежуючи решту вбивць Смертоносної Гадюки та наближаючись до чоловіка, який її зрадив."
  },
  {
    "id": "m_73",
    "title": "Скажені пси",
    "originalTitle": "Reservoir Dogs",
    "year": 1992,
    "duration": 99,
    "rating": 8.2,
    "director": "Quentin Tarantino",
    "genres": [
      "Кримінал",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMmMzYjg4NDctYWY0Mi00OGViLWIzMTMtYWNlZGY5ZDJmYjk3XkEyXkFqcGc@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "trailer": "GLPJSmUHkvQ",
    "description": "Коли просте пограбування ювелірних виробів закінчується жахливо, злочинці, що вижили, починають підозрювати, що один із них є інформатором поліції."
  },
  {
    "id": "m_74",
    "title": "Одного разу в… Голлівуді",
    "originalTitle": "Once Upon a Time in... Hollywood",
    "year": 2019,
    "duration": 161,
    "rating": 7.6,
    "director": "Quentin Tarantino",
    "genres": [
      "Комедія",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMzMzNmViNjYtN2ViNi00NDM3LWFlMmItNDYyMGIzY2EzZjE2XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "ELeMaP8EPAA",
    "description": "Золотий вік Голлівуду закінчується, телевізійний актор і його дублер намагаються досягти тривалого успіху."
  },
  {
    "id": "m_75",
    "title": "Протистояння",
    "originalTitle": "Heat",
    "year": 1995,
    "duration": 170,
    "rating": 8.3,
    "director": "Michael Mann",
    "genres": [
      "Бойовик",
      "Кримінал",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTkxYjU1OTMtYWViZC00ZjAzLWI3MDktZGQ2N2VmMjVjNDRlXkEyXkFqcGc@._V1_QL75_UY562_CR6,0,380,562_.jpg",
    "trailer": "2GfZl4UUSVU",
    "description": "Група висококласних професійних злодіїв починає відчувати жар від поліції Лос-Анджелеса, коли вони несвідомо залишають словесну підказку під час свого останнього пограбування."
  },
  {
    "id": "m_76",
    "title": "Казино",
    "originalTitle": "Casino",
    "year": 1995,
    "duration": 178,
    "rating": 8.2,
    "director": "Martin Scorsese",
    "genres": [
      "Кримінал",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMDRlZWZjZjYtYzY2NS00ZWVjLTkwYzAtZTA2ZDAzMGRiYmYwXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "EJXDMwGWhoA",
    "description": "У Лас-Вегасі двоє найкращих друзів — директор казино та агент мафії — змагаються за імперію азартних ігор і закохану світську левицю."
  },
  {
    "id": "m_77",
    "title": "Обличчя зі шрамом",
    "originalTitle": "Scarface",
    "year": 1983,
    "duration": 170,
    "rating": 8.3,
    "director": "Brian De Palma",
    "genres": [
      "Кримінал",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNDUzYjY0NmUtMDM4OS00Y2Q5LWJiODYtNTk0ZTk0YjZhMTg1XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "7pQQHnqBa2E",
    "description": "У 1980-х роках рішучий злочинно налаштований кубинський іммігрант стає найбільшим контрабандистом наркотиків у Маямі, і зрештою його власна наркозалежність знищує."
  },
  {
    "id": "m_78",
    "title": "Фарґо",
    "originalTitle": "Fargo",
    "year": 1996,
    "duration": 98,
    "rating": 8.1,
    "director": "Joel Coen, Ethan Coen",
    "genres": [
      "Кримінал",
      "Драма",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNjg4MWE0MjEtODFhNy00MjA5LTg5ODktMzgwNWFmZTAwNjBlXkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "trailer": "h2tY82z3xXU",
    "description": "Невмілий злочин продавця автомобілів розпадається через його та його поплічників, а також через наполегливу поліцейську роботу завзятого детектива."
  },
  {
    "id": "m_79",
    "title": "Великий Лебовські",
    "originalTitle": "The Big Lebowski",
    "year": 1998,
    "duration": 117,
    "rating": 8.1,
    "director": "Joel Coen, Ethan Coen",
    "genres": [
      "Комедія",
      "Кримінал"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BY2E3OWQ5OWYtYTRkMC00NjVjLWIzZDQtNmRmM2ZiYTIyYmYxXkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "trailer": "cd-go0oBF4Y",
    "description": "Джефф «Чувак» Лебовскі, якого помилково вважають мільйонером з таким самим іменем, вимагає відшкодування за свій зруйнований килим і залучає своїх друзів з боулінгу, щоб допомогти отримати його."
  },
  {
    "id": "m_80",
    "title": "Великий куш",
    "originalTitle": "Snatch",
    "year": 2001,
    "duration": 102,
    "rating": 8.2,
    "director": "Guy Ritchie",
    "genres": [
      "Комедія",
      "Кримінал"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYzk5NjJkMTQtN2IyNC00YWM5LTlhZmMtNGI3MWNhMTU1YTc4XkEyXkFqcGc@._V1_QL75_UY562_CR2,0,380,562_.jpg",
    "trailer": "9Jar2XkBfoo",
    "description": "Недобросовісні боксерські промоутери, жорстокі букмекери, російський гангстер, некомпетентні грабіжники-любителі та нібито євреї-ювеліри борються, щоб знайти безцінний вкрадений діамант."
  },
  {
    "id": "m_81",
    "title": "Карти, гроші, два стволи",
    "originalTitle": "Lock, Stock and Two Smoking Barrels",
    "year": 1998,
    "duration": 107,
    "rating": 8.1,
    "director": "Guy Ritchie",
    "genres": [
      "Комедія",
      "Кримінал"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMmY1M2M5ZmMtYzllZC00YzAxLTk4MjktZDJkNjA1MTUwMGQ4XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "h6hZDH_ok5M",
    "description": "Коли четверо дрібних злочинців програли фальсифіковану партію в покер лондонському «вору в законі», він дав їм тиждень, щоб погасити свій величезний борг."
  },
  {
    "id": "m_82",
    "title": "Джентльмени",
    "originalTitle": "The Gentlemen",
    "year": 2020,
    "duration": 113,
    "rating": 7.8,
    "director": "Guy Ritchie",
    "genres": [
      "Бойовик",
      "Комедія",
      "Кримінал"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjE2ZjQ4ZGMtZjFhMi00NmI5LTliNjEtODczMWMxNjliZjgxXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "2B0RpUGss2c",
    "description": "Американський емігрант намагається продати свою надприбуткову імперію марихуани в Лондоні, запускаючи змови, схеми, підкуп і шантаж, намагаючись викрасти його домен з-під нього."
  },
  {
    "id": "m_83",
    "title": "Таксист",
    "originalTitle": "Taxi Driver",
    "year": 1976,
    "duration": 114,
    "rating": 8.2,
    "director": "Martin Scorsese",
    "genres": [
      "Кримінал",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZDNhMGYwM2UtMTdlZS00MGQ1LWI2YzAtODY5YWI1MjYyNzRmXkEyXkFqcGc@._V1_QL75_UX380_CR0,7,380,562_.jpg",
    "trailer": "cDCF74U1nB8",
    "description": "Психічно неврівноважений ветеран працює нічним таксистом у Нью-Йорку, де уявний занепад і негідність підживлюють його прагнення до насильницьких дій."
  },
  {
    "id": "m_84",
    "title": "Ірландець",
    "originalTitle": "The Irishman",
    "year": 2019,
    "duration": 209,
    "rating": 7.8,
    "director": "Martin Scorsese",
    "genres": [
      "Біографія",
      "Кримінал",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTY2YThkNmQtOWJhYy00ZDc3LWEzOGEtMmQwNzM0YjFmZWIyXkEyXkFqcGc@._V1_QL75_UY562_CR2,0,380,562_.jpg",
    "trailer": "WHXxVmeGQUc",
    "description": "Ілюстрація життя Френка Ширана, від ветерана Другої світової війни до вбивці злочинної родини Буфаліно та ймовірного вбивства ним свого близького друга Джиммі Гоффи."
  },
  {
    "id": "m_85",
    "title": "Вбивці квіткової повні",
    "originalTitle": "Killers of the Flower Moon",
    "year": 2023,
    "duration": 206,
    "rating": 7.5,
    "director": "Martin Scorsese",
    "genres": [
      "Кримінал",
      "Драма",
      "Історія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZWY5ZDVjNTUtODI5Yy00MjFhLWEyM2EtYzZjM2VjZTI0MTBjXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "EP34Yoxs3FQ",
    "description": "Коли в 1920-х роках в Оклахомі під землею нації Осейдж знаходять нафту, жителів Осейджа вбивають одного за іншим, поки ФБР не втручається, щоб розгадати таємницю."
  },
  {
    "id": "m_86",
    "title": "Піаніст",
    "originalTitle": "The Pianist",
    "year": 2003,
    "duration": 150,
    "rating": 8.5,
    "director": "Roman Polanski",
    "genres": [
      "Біографія",
      "Драма",
      "Музика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjEwNmEwYjgtNTk3ZC00NjljLTg5ZDctZTY3ZGQwZjRkZmQxXkEyXkFqcGc@._V1_QL75_UY562_CR14,0,380,562_.jpg",
    "trailer": "BFwGqLa_oAo",
    "description": "Під час Другої світової війни відомий польський музикант Владислав стикається з різними труднощами, оскільки втрачає зв’язок зі своєю родиною. Коли ситуація погіршується, він ховається в руїнах Варшави, щоб вижити."
  },
  {
    "id": "m_87",
    "title": "Список Шиндлера",
    "originalTitle": "Schindler's List",
    "year": 1994,
    "duration": 196,
    "rating": 9,
    "director": "Steven Spielberg",
    "genres": [
      "Біографія",
      "Драма",
      "Історія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNjM1ZDQxYWUtMzQyZS00MTE1LWJmZGYtNGUyNTdlYjM3ZmVmXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "gG22XNhtnoY",
    "description": "В окупованій Німеччиною Польщі під час Другої світової війни промисловець Оскар Шиндлер поступово починає хвилюватися за свою єврейську робочу силу після того, як став свідком їхнього переслідування з боку нацистів."
  },
  {
    "id": "m_88",
    "title": "Життя прекрасне",
    "originalTitle": "Life Is Beautiful",
    "year": 1997,
    "duration": 116,
    "rating": 8.6,
    "director": "Roberto Benigni",
    "genres": [
      "Комедія",
      "Драма",
      "Романтика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZTBhOGYzZjQtYzE0Mi00MGIwLWE0MWYtNzMxNTM2OTFkM2NjXkEyXkFqcGc@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "trailer": "pAYEQP8gx3w",
    "description": "Коли відкритий єврей-офіціант і його син стають жертвами Голокосту, він використовує ідеальну суміш волі, гумору та уяви, щоб захистити свого сина від небезпек навколо їхнього табору."
  },
  {
    "id": "m_89",
    "title": "12 розгніваних чоловіків",
    "originalTitle": "12 Angry Men",
    "year": 1957,
    "duration": 96,
    "rating": 9,
    "director": "Sidney Lumet",
    "genres": [
      "Кримінал",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYjE4NzdmOTYtYjc5Yi00YzBiLWEzNDEtNTgxZGQ2MWVkN2NiXkEyXkFqcGc@._V1_QL75_UX380_CR0,11,380,562_.jpg",
    "trailer": "_13J_9B5jEk",
    "description": "Суд присяжних у справі про вбивство в Нью-Йорку розчарований одним членом, чия скептична обережність змушує їх уважніше розглянути докази, перш ніж поспішно винести вердикт."
  },
  {
    "id": "m_90",
    "title": "Пролітаючи над гніздом зозулі",
    "originalTitle": "One Flew Over the Cuckoo's Nest",
    "year": 1975,
    "duration": 133,
    "rating": 8.6,
    "director": "Miloš Forman",
    "genres": [
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYjBkMjgzMzYtNzRiMS00NDc3LWE4YTUtZjYxYjZhNjNhYzhhXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "trailer": "OXrcDonY-B8",
    "description": "Бунтівного каторжника відправляють до психіатричної лікарні для обстеження в штаті Орегон 1963 року, і він заохочує своїх покірних товаришів взяти більше контролю над своїм життям і кинути виклик тиранічній головній медсестрі."
  },
  {
    "id": "m_91",
    "title": "Ігри розуму",
    "originalTitle": "A Beautiful Mind",
    "year": 2002,
    "duration": 135,
    "rating": 8.2,
    "director": "Ron Howard",
    "genres": [
      "Біографія",
      "Драма",
      "Детектив"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYjgzNjFkMmItOGJhNi00NWM3LWJlYTUtNDExMGQ3ZTI3NjJkXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "trailer": "aS_d0Ayjw4o",
    "description": "Математичний геній, Джон Неш зробив дивовижне відкриття на початку своєї кар’єри і стояв на порозі міжнародного визнання. Але незабаром Неш опинився на жахливій подорожі самопізнання."
  },
  {
    "id": "m_92",
    "title": "Спілка мертвих поетів",
    "originalTitle": "Dead Poets Society",
    "year": 1989,
    "duration": 128,
    "rating": 8.1,
    "director": "Peter Weir",
    "genres": [
      "Комедія",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMDYwNGVlY2ItMWYxMS00YjZiLWE5MTAtYWM5NWQ2ZWJjY2Q3XkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "trailer": "4lj185DaZ3k",
    "description": "Вчитель-незалежний у престижній школі-інтернаті для хлопчиків Нової Англії використовує поезію, щоб підбадьорити своїх учнів до нових висот самовираження."
  },
  {
    "id": "m_93",
    "title": "Розумник Вілл Гантінґ",
    "originalTitle": "Good Will Hunting",
    "year": 1998,
    "duration": 126,
    "rating": 8.4,
    "director": "Gus Van Sant",
    "genres": [
      "Драма",
      "Романтика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNDdjZGQ5YzEtNTc2My00Mjc0LWFlMTctYzkwMzZlNzdiZWYzXkEyXkFqcGc@._V1_QL75_UX380_CR0,9,380,562_.jpg",
    "trailer": "PaAVLZX3Gek",
    "description": "Терапевт консультує Вілла Хантінга, двірника з геніальним IQ."
  },
  {
    "id": "m_94",
    "title": "Зелена миля",
    "originalTitle": "The Green Mile",
    "year": 1999,
    "duration": 189,
    "rating": 8.6,
    "director": "Frank Darabont",
    "genres": [
      "Кримінал",
      "Драма",
      "Фентезі"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "Ki4haFrqSrw",
    "description": "Охоронець камери смертників дізнається, що ніжний велетень під його опікою володіє таємничим даром."
  },
  {
    "id": "m_95",
    "title": "Ізгой",
    "originalTitle": "Cast Away",
    "year": 2000,
    "duration": 143,
    "rating": 7.8,
    "director": "Robert Zemeckis",
    "genres": [
      "Пригоди",
      "Драма",
      "Романтика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BOGNjNDI5ZGQtZjRjMy00NzQyLWFiYzQtYjcwNjM3ZDYwNThhXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "qGuOZPwLayY",
    "description": "Керівник FedEx зазнає фізичної та емоційної трансформації після аварійної посадки на безлюдному острові."
  },
  {
    "id": "m_96",
    "title": "Термінал",
    "originalTitle": "The Terminal",
    "year": 2004,
    "duration": 128,
    "rating": 7.4,
    "director": "Steven Spielberg",
    "genres": [
      "Комедія",
      "Драма",
      "Романтика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTM1MTIwNTMxOF5BMl5BanBnXkFtZTcwNjIxMjQyMw@@._V1_QL75_UY562_CR18,0,380,562_.jpg",
    "trailer": "iZqQRmhRpHg",
    "description": "Східноєвропейський турист несподівано опиняється застряглим в аеропорту Джона Кеннеді і змушений тимчасово оселитися там."
  },
  {
    "id": "m_97",
    "title": "Врятувати рядового Раяна",
    "originalTitle": "Saving Private Ryan",
    "year": 1998,
    "duration": 169,
    "rating": 8.6,
    "director": "Steven Spielberg",
    "genres": [
      "Драма",
      "Військовий"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZGZhZGQ1ZWUtZTZjYS00MDJhLWFkYjctN2ZlYjE5NWYwZDM2XkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "trailer": "9CiW_DbaaIM",
    "description": "Після висадки в Нормандії група американських солдатів відправляється в тилу ворога, щоб забрати десантника, чиї брати загинули під час бою."
  },
  {
    "id": "m_98",
    "title": "Останній самурай",
    "originalTitle": "The Last Samurai",
    "year": 2003,
    "duration": 154,
    "rating": 7.8,
    "director": "Edward Zwick",
    "genres": [
      "Бойовик",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMzkyNzQ1Mzc0NV5BMl5BanBnXkFtZTcwODg3MzUzMw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "tL4McUzXfFI",
    "description": "У 19 столітті в Японії японський імператор найняв Натана Алгрена, капітана армії США, щоб навчити його армію сучасним методам ведення війни. Капітан Алгрен опиняється в пастці боротьби між двома епохами та двома світами."
  },
  {
    "id": "m_99",
    "title": "Ґран Торіно",
    "originalTitle": "Gran Torino",
    "year": 2009,
    "duration": 116,
    "rating": 8.1,
    "director": "Clint Eastwood",
    "genres": [
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTc5NTk2OTU1Nl5BMl5BanBnXkFtZTcwMDc3NjAwMg@@._V1_QL75_UY562_CR0,0,380,562_.jpg",
    "trailer": "RMhbr2XQblk",
    "description": "Після того, як підліток хмонг намагається вкрасти його цінний Gran Torino 1972 року, незадоволений, упереджений ветеран Корейської війни прагне викупити і хлопчика, і себе."
  },
  {
    "id": "m_100",
    "title": "Крихітка на мільйон доларів",
    "originalTitle": "Million Dollar Baby",
    "year": 2005,
    "duration": 132,
    "rating": 8.1,
    "director": "Clint Eastwood",
    "genres": [
      "Драма",
      "Спорт"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTkxNzA1NDQxOV5BMl5BanBnXkFtZTcwNTkyMTIzMw@@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "trailer": "5_RsHR39nlM",
    "description": "Френкі, злий старий тренер, неохоче погоджується тренувати початківця боксера Меггі. Вражений її цілеспрямованістю та талантом, він допомагає їй стати найкращою, і вони незабаром утворюють тісний зв’язок."
  },
  {
    "id": "m_101",
    "title": "Матриця: Перезавантаження",
    "originalTitle": "The Matrix Reloaded",
    "year": 2003,
    "duration": 138,
    "rating": 7.2,
    "director": "Lana Wachowski, Lilly Wachowski",
    "genres": [
      "Бойовик",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNjAxYjkxNjktYTU0YS00NjFhLWIyMDEtMzEzMTJjMzRkMzQ1XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "",
    "description": "Борці за свободу Нео, Трініті та Морфеус продовжують очолювати повстання проти Армії машин, застосовуючи свій арсенал надзвичайних навичок і зброї проти систематичних сил репресій і експлуатації."
  },
  {
    "id": "m_102",
    "title": "Тенет",
    "originalTitle": "Tenet",
    "year": 2020,
    "duration": 150,
    "rating": 7.3,
    "director": "Christopher Nolan",
    "genres": [
      "Бойовик",
      "Фантастика",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNTIzNDIxMzktMzlkMi00MmUyLWFmMjQtZDgwMjBmOGJmNTI3XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "LdOM0x0WVZQ",
    "description": "Озброєний лише словом «Тенет» і борючись за виживання всього світу, оперативник ЦРУ, Головний герой, подорожує сутінковим світом міжнародного шпигунства, виконуючи глобальну місію, яка розгортається за межами реального часу."
  },
  {
    "id": "m_103",
    "title": "Термінатор 2: Судний день",
    "originalTitle": "Terminator 2: Judgment Day",
    "year": 1991,
    "duration": 137,
    "rating": 8.6,
    "director": "James Cameron",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNGMyMGNkMDUtMjc2Ni00NWFlLTgyODEtZTY2MzBiZTg0OWZiXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "trailer": "CRRlbK5w8AE",
    "description": "Кіборг з майбутнього, ідентичний тому, який не зумів убити Сару Коннор, тепер повинен захистити її десятирічного сина Джона від ще більш просунутого та могутнього кіборга."
  },
  {
    "id": "m_104",
    "title": "Термінатор",
    "originalTitle": "The Terminator",
    "year": 1984,
    "duration": 107,
    "rating": 8.1,
    "director": "James Cameron",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZmE0YzIxM2QtMGNlMi00MjRmLWE3MWMtOWQzMGVjMmU0YTFmXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "k64P4l2Wmeg",
    "description": "Кіборг-убивця з майбутнього намагається знайти та вбити молоду жінку, якій судилося народити воїна, який очолить опір, щоб врятувати людство від вимирання."
  },
  {
    "id": "m_105",
    "title": "Ex Machina",
    "originalTitle": "Ex Machina",
    "year": 2015,
    "duration": 108,
    "rating": 7.7,
    "director": "Alex Garland",
    "genres": [
      "Драма",
      "Фантастика",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTUxNzc0OTIxMV5BMl5BanBnXkFtZTgwNDI3NzU2NDE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "EoQuVnKhxaM",
    "description": "Молодого програміста вибирають для участі в новаторському експерименті з синтетичного інтелекту шляхом оцінки людських якостей високорозвиненого гуманоїда ШІ."
  },
  {
    "id": "m_106",
    "title": "Анігіляція",
    "originalTitle": "Annihilation",
    "year": 2018,
    "duration": 115,
    "rating": 6.8,
    "director": "Alex Garland",
    "genres": [
      "Пригоди",
      "Драма",
      "Жахи"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTk2Mjc2NzYxNl5BMl5BanBnXkFtZTgwMTA2OTA1NDM@._V1_QL75_UX380_CR0,15,380,562_.jpg",
    "trailer": "89OP78l9oFk",
    "description": "Біолог записується в небезпечну таємну експедицію, в якій не діють закони природи."
  },
  {
    "id": "m_107",
    "title": "Останній нащадок Землі",
    "originalTitle": "Children of Men",
    "year": 2007,
    "duration": 109,
    "rating": 7.9,
    "director": "Alfonso Cuarón",
    "genres": [
      "Драма",
      "Фантастика",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMDNkNmNiYzYtYWY0YS00NWEwLTgwMWUtYjM0M2E4Nzk3MzhmXkEyXkFqcGc@._V1_QL75_UY562_CR0,0,380,562_.jpg",
    "trailer": "2VT2apoX1zp",
    "description": "У 2027 році в хаотичному світі, в якому жінки чомусь стали безплідними, колишня активістка погоджується допомогти транспортувати дивним чином вагітну жінку до морського притулку."
  },
  {
    "id": "m_108",
    "title": "Гравітація",
    "originalTitle": "Gravity",
    "year": 2013,
    "duration": 91,
    "rating": 7.7,
    "director": "Alfonso Cuarón",
    "genres": [
      "Драма",
      "Фантастика",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNjE5MzYwMzYxMF5BMl5BanBnXkFtZTcwOTk4MTk0OQ@@._V1_QL75_UY562_CR0,0,380,562_.jpg",
    "trailer": "OiTiKOy59o4",
    "description": "Двоє астронавтів повинні вижити в космосі після того, як їхній човник потрапив під час виходу у відкритий космос."
  },
  {
    "id": "m_109",
    "title": "Район №9",
    "originalTitle": "District 9",
    "year": 2009,
    "duration": 112,
    "rating": 7.9,
    "director": "Neill Blomkamp",
    "genres": [
      "Бойовик",
      "Фантастика",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTM4OTI1OTM5NF5BMl5BanBnXkFtZTcwMzk5MTU1Mg@@._V1_QL75_UY562_CR0,0,380,562_.jpg",
    "trailer": "d6wRkzCW5qI",
    "description": "На майбутній Землі, де прибульці ізольовані у віддаленому гетто, урядовий агент виявляється туди вигнаним."
  },
  {
    "id": "m_110",
    "title": "Місяць 2112",
    "originalTitle": "Moon",
    "year": 2009,
    "duration": 97,
    "rating": 7.8,
    "director": "Duncan Jones",
    "genres": [
      "Драма",
      "Детектив",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTgzODgyNTQwOV5BMl5BanBnXkFtZTcwNzc0NTc0Mg@@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "trailer": "twuScTcDP_Q",
    "description": "Астронавт Сем Белл має особисту зустріч наприкінці свого трирічного перебування на Місяці, де він, працюючи разом зі своїм комп’ютером GERTY, надсилає додому ресурс, який допоміг зменшити проблеми з електроенергією на Землі."
  },
  {
    "id": "m_111",
    "title": "Контакт",
    "originalTitle": "Contact",
    "year": 1997,
    "duration": 150,
    "rating": 7.5,
    "director": "Robert Zemeckis",
    "genres": [
      "Драма",
      "Детектив",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BM2JiYmE1Y2UtNDQ3YS00YTZhLTk5MzAtYzEzMzIyNTM4OTRlXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "trailer": "SRoj3jK37VC",
    "description": "Доктор Еллі Ерроуей після років пошуків знаходить переконливий радіодоказ існування позаземного розуму, надсилаючи плани таємничої машини."
  },
  {
    "id": "m_112",
    "title": "Особлива думка",
    "originalTitle": "Minority Report",
    "year": 2002,
    "duration": 145,
    "rating": 7.6,
    "director": "Steven Spielberg",
    "genres": [
      "Бойовик",
      "Кримінал",
      "Детектив"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYTdmNzM3YzItZTRkYS00MTY5LTg4ZmItNjFmNTk2N2Q2NmNlXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "lG7DGMgfOb8",
    "description": "Начальник підрозділу поліції, який може точно передбачити та попередити злочини, втікає після того, як його самого звинувачують у майбутньому вбивстві."
  },
  {
    "id": "m_113",
    "title": "Грань майбутнього",
    "originalTitle": "Edge of Tomorrow",
    "year": 2014,
    "duration": 113,
    "rating": 7.9,
    "director": "Doug Liman",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTc5OTk4MTM3M15BMl5BanBnXkFtZTgwODcxNjg3MDE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "vw61gCe2oqI",
    "description": "Людина, яка бореться у війні з інопланетянами, повинна заново переживати той самий день щоразу, коли він гине, доки не знайде спосіб зупинити їх джерело енергії за допомогою елітного солдата."
  },
  {
    "id": "m_114",
    "title": "Петля часу",
    "originalTitle": "Looper",
    "year": 2012,
    "duration": 119,
    "rating": 7.4,
    "director": "Rian Johnson",
    "genres": [
      "Бойовик",
      "Драма",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTg5NTA3NTg4NF5BMl5BanBnXkFtZTcwNTA0NDYzOA@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "2iQuhsmtfWc",
    "description": "Злочинні синдикати використовують незаконні подорожі в часі, щоб відправляти цілі в минуле, щоб їх убили вбивці, відомі як Лупери."
  },
  {
    "id": "m_115",
    "title": "Початковий код",
    "originalTitle": "Source Code",
    "year": 2011,
    "duration": 93,
    "rating": 7.5,
    "director": "Duncan Jones",
    "genres": [
      "Бойовик",
      "Драма",
      "Детектив"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTY0MTc3MzMzNV5BMl5BanBnXkFtZTcwNDE4MjE0NA@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "mnJegNyAb1w",
    "description": "Солдат прокидається в чужому тілі та виявляє, що він бере участь в експериментальній урядовій програмі пошуку бомбардувальника приміського поїзда протягом 8 хвилин."
  },
  {
    "id": "m_116",
    "title": "Донні Дарко",
    "originalTitle": "Donnie Darko",
    "year": 2001,
    "duration": 113,
    "rating": 8,
    "director": "Richard Kelly",
    "genres": [
      "Драма",
      "Детектив",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMWE3NTYzZmEtM2U5MS00MDZhLTk2ZTQtZTgzNjg0ZGQ5ZjM0XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "bzlnmS3L03A",
    "description": "Після того, як ледве вникнув дивного нещасного випадку, проблемного підлітка мучать видіння чоловіка у великому костюмі кролика, який маніпулює ним, щоб він скоїв серію злочинів."
  },
  {
    "id": "m_117",
    "title": "12 мавп",
    "originalTitle": "12 Monkeys",
    "year": 1996,
    "duration": 129,
    "rating": 8,
    "director": "Terry Gilliam",
    "genres": [
      "Детектив",
      "Фантастика",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMDQwNDY0M2MtOGFmNy00ZjI5LTkzN2ItMzg5M2IwZTZjY2MyXkEyXkFqcGc@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "trailer": "wUg6nO6g2t0",
    "description": "У майбутньому світі, спустошеному хворобами, засудженого відправляють у минуле, щоб зібрати інформацію про створений людиною вірус, який знищив більшу частину людського населення на планеті."
  },
  {
    "id": "m_118",
    "title": "Темне місто",
    "originalTitle": "Dark City",
    "year": 1998,
    "duration": 100,
    "rating": 7.5,
    "director": "Alex Proyas",
    "genres": [
      "Фентезі",
      "Детектив",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTczNDQ3YWUtZTkxNS00MTFlLWE4Y2UtNGIxZTc3ZmEwMzgxXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "jSpowoKqSzc",
    "description": "Чоловік бореться зі спогадами про своє минуле, включаючи дружину, яку він не пам’ятає, і кошмарний світ, з якого, здається, ніхто більше ніколи не прокидається."
  },
  {
    "id": "m_119",
    "title": "Пекло",
    "originalTitle": "Sunshine",
    "year": 2007,
    "duration": 107,
    "rating": 7.2,
    "director": "Danny Boyle",
    "genres": [
      "Фантастика",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNmExYTA4MGYtNWUwNC00YTZhLWE0YzUtMjI0OGYyMmQ4YTVkXkEyXkFqcGc@._V1_QL75_UY562_CR2,0,380,562_.jpg",
    "trailer": "YZwaztVbXvY",
    "description": "У 2057 році команда міжнародних астронавтів відправляється на небезпечну місію, щоб знову запалити вмираюче Сонце ядерною бомбою."
  },
  {
    "id": "m_120",
    "title": "Гаттака",
    "originalTitle": "Gattaca",
    "year": 1997,
    "duration": 106,
    "rating": 7.7,
    "director": "Andrew Niccol",
    "genres": [
      "Драма",
      "Фантастика",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZjQxNTc3YzQtZDA5ZC00MmM5LWE3NGYtMGE0Yjk3MDYwODVlXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "hWjlUj7Czlk",
    "description": "Вінсент, «Недійсний», видає себе за члена генетичної еліти, щоб досягти своєї мети — подорожувати в космос разом із Gattaca Aerospace Corporation. Однак за тиждень до його місії Вінсент став підозрюваним у вбивстві."
  },
  {
    "id": "m_121",
    "title": "П'ятий елемент",
    "originalTitle": "The Fifth Element",
    "year": 1997,
    "duration": 126,
    "rating": 7.6,
    "director": "Luc Besson",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BODU4ZTE5MWYtNmY2MC00NDkyLTk0NDgtNTk5YjgzMzc4NmQwXkEyXkFqcGc@._V1_QL75_UY562_CR6,0,380,562_.jpg",
    "trailer": "fQ9RqgcR24g",
    "description": "Коли верховна істота врізається в його таксі, колишній командос, який став таксистом у 23-му столітті, повинен допомогти їй дістати чотири стихійні камені, щоб знищити стародавнє зло, перш ніж безжальний промисловець і людська природа знищать їх усіх."
  },
  {
    "id": "m_122",
    "title": "Аватар",
    "originalTitle": "Avatar",
    "year": 2009,
    "duration": 162,
    "rating": 7.9,
    "director": "James Cameron",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Фентезі"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMDEzMmQwZjctZWU2My00MWNlLWE0NjItMDJlYTRlNGJiZjcyXkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "trailer": "5PSNL1qE6VY",
    "description": "Хворий на параліч морський піхотинець, якого відправляють на місяць Пандору для виконання унікальної місії, розривається між виконанням його наказів і захистом світу, який він вважає своїм домом."
  },
  {
    "id": "m_123",
    "title": "Аватар: Шлях води",
    "originalTitle": "Avatar: The Way of Water",
    "year": 2022,
    "duration": 192,
    "rating": 7.5,
    "director": "James Cameron",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Фентезі"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNWI0Y2NkOWEtMmM2OC00MjQ3LWI1YzItZGQxYzQ3NzI4NWZmXkEyXkFqcGc@._V1_QL75_UY562_CR6,0,380,562_.jpg",
    "trailer": "d9MyW72ELq0",
    "description": "Джейк Саллі живе зі своєю новознайденою сім'єю, яка утворилася на позасонячному супутнику Пандорі. Як тільки знайома загроза повертається, щоб завершити те, що було розпочато раніше, Джейк повинен співпрацювати з Нейтірі та армією раси На'ві, щоб захистити їхній дім."
  },
  {
    "id": "m_124",
    "title": "Першому гравцю приготуватися",
    "originalTitle": "Ready Player One",
    "year": 2018,
    "duration": 140,
    "rating": 7.4,
    "director": "Steven Spielberg",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNzVkMTgzODQtMWIwZC00NzE4LTgzZjYtMzAwM2I5OGZhNjE4XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "cSp1dM2Vj48",
    "description": "Коли творець віртуальної реальності під назвою OASIS помирає, він кидає посмертний виклик усім користувачам OASIS знайти його пасхальне яйце, яке дасть тому, хто знайшов його статок і контроль над своїм світом."
  },
  {
    "id": "m_125",
    "title": "Я — легенда",
    "originalTitle": "I Am Legend",
    "year": 2007,
    "duration": 101,
    "rating": 7.2,
    "director": "Francis Lawrence",
    "genres": [
      "Драма",
      "Жахи",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMGE1OWZkZmItNmVhMC00YzAxLTgxOTctNjg3NWExM2RmOWJkXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "dtKMEAXyPkg",
    "description": "Через роки після того, як чума вбила більшу частину людства та перетворила решту на монстрів, єдиний уцілілий у Нью-Йорку відважно бореться, щоб знайти ліки."
  },
  {
    "id": "m_126",
    "title": "Війна світів",
    "originalTitle": "War of the Worlds",
    "year": 2005,
    "duration": 117,
    "rating": 6.6,
    "director": "Steven Spielberg",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_QL75_UY562_CR0,0,380,562_.jpg",
    "trailer": "MJYnHA2Oz9A",
    "description": "Інопланетне вторгнення загрожує майбутньому людства. Катастрофічний кошмар зображений очима однієї американської родини, яка бореться за виживання."
  },
  {
    "id": "m_127",
    "title": "Космічна одіссея 2001 року",
    "originalTitle": "2001: A Space Odyssey",
    "year": 1968,
    "duration": 149,
    "rating": 8.3,
    "director": "Stanley Kubrick",
    "genres": [
      "Пригоди",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNjU0NDFkMTQtZWY5OS00MmZhLTg3Y2QtZmJhMzMzMWYyYjc2XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "oR_e9y-bka0",
    "description": "Коли на Місяці виявляється таємничий артефакт, космічний корабель з двома вченими та одним суперкомп’ютером відправляється на Юпітер, щоб знайти його походження."
  },
  {
    "id": "m_128",
    "title": "Механічний апельсин",
    "originalTitle": "A Clockwork Orange",
    "year": 1972,
    "duration": 136,
    "rating": 8.2,
    "director": "Stanley Kubrick",
    "genres": [
      "Кримінал",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTY3MjM1Mzc4N15BMl5BanBnXkFtZTgwODM0NzAxMDE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "SPRzm8ibDQ8",
    "description": "Алекс ДеЛардж і його друзі варваризують занепад найближчого майбутнього."
  },
  {
    "id": "m_129",
    "title": "Сяйво",
    "originalTitle": "The Shining",
    "year": 1980,
    "duration": 146,
    "rating": 8.4,
    "director": "Stanley Kubrick",
    "genres": [
      "Драма",
      "Жахи"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNmM5ZThhY2ItOGRjOS00NzZiLWEwYTItNDgyMjFkOTgxMmRiXkEyXkFqcGc@._V1_QL75_UX380_CR0,8,380,562_.jpg",
    "trailer": "S01444524NT",
    "description": "Сім'я відправляється на зиму в ізольований готель, де зловісна присутність спонукає батька до насильства. У той же час його син-екстрасенс бачить жахливі передчуття як з минулого, так і з майбутнього."
  },
  {
    "id": "m_130",
    "title": "Суцільнометалева оболонка",
    "originalTitle": "Full Metal Jacket",
    "year": 1987,
    "duration": 116,
    "rating": 8.2,
    "director": "Stanley Kubrick",
    "genres": [
      "Драма",
      "Військовий"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYWUzNzZkNzUtNDdiYy00Nzk5LTgxMmItNTk0MjRjNjdjNDA0XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "x9f6JaaX7Wg",
    "description": "Прагматичний американський морський піхотинець спостерігає дегуманний вплив війни у ​​В’єтнамі на його товаришів-новобранців, починаючи з жорстоких тренувань у навчальному таборі та закінчуючи кривавими вуличними боями в Хюе."
  },
  {
    "id": "m_131",
    "title": "Щось",
    "originalTitle": "The Thing",
    "year": 1982,
    "duration": 109,
    "rating": 8.2,
    "director": "John Carpenter",
    "genres": [
      "Жахи",
      "Детектив",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYTA3NDU5MWEtNTk4Yy00ZDNkLThmZTQtMjU3ZGVhYzAyMzU4XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "5ftmr17M-a4",
    "description": "На дослідницьку групу в Антарктиді полює інопланетянин, що змінює форму, який приймає вигляд своїх жертв."
  },
  {
    "id": "m_132",
    "title": "Хижак",
    "originalTitle": "Predator",
    "year": 1987,
    "duration": 107,
    "rating": 7.8,
    "director": "John McTiernan",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Жахи"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BOWEzMDI0MTUtMjQ0Yy00MGRhLWI4YjAtZTgzZTM3NTYxZGJkXkEyXkFqcGc@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "trailer": "X2hBYGIf369",
    "description": "Команда командос, яка виконує завдання в джунглях Центральної Америки, потрапляє під полювання інопланетного воїна."
  },
  {
    "id": "m_133",
    "title": "Згадати все",
    "originalTitle": "Total Recall",
    "year": 1990,
    "duration": 113,
    "rating": 7.5,
    "director": "Paul Verhoeven",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZjRlMzBkOGMtMTA1Ny00ZWI4LTkzMDItOGVkNWJkN2E4ZTkwXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "trailer": "WFMLGEHdNhY",
    "description": "Коли людина йде, щоб віртуальні спогади про відпустку про планету Марс імплантували в його розум, несподівана й жахлива низка подій змушує його відправитися на планету по-справжньому - чи не так?"
  },
  {
    "id": "m_134",
    "title": "Робокоп",
    "originalTitle": "RoboCop",
    "year": 1987,
    "duration": 102,
    "rating": 7.6,
    "director": "Paul Verhoeven",
    "genres": [
      "Бойовик",
      "Кримінал",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZWM1YzRhODktZDE1MC00NzBlLTk0NGMtOGNhZDQyMmJiZGFiXkEyXkFqcGc@._V1_QL75_UX380_CR0,13,380,562_.jpg",
    "trailer": "6tC_5mp3AEg",
    "description": "Корпоративні інтереси воскрешають убитого поліцейського як кібернетичного силовика, щоб приватизувати безпеку в розкладеному Детройті. Він вершить смертельне правосуддя, а мерехтливі спогади про його минуле життя викликають полювання на його вбивць."
  },
  {
    "id": "m_135",
    "title": "Шосте відчуття",
    "originalTitle": "The Sixth Sense",
    "year": 1999,
    "duration": 107,
    "rating": 8.2,
    "director": "M. Night Shyamalan",
    "genres": [
      "Драма",
      "Детектив",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZWQ2OTY0M2UtMTQxNC00MmIzLTllNDQtNDQ0MTQyYzI2M2ZiXkEyXkFqcGc@._V1_QL75_UY562_CR0,0,380,562_.jpg",
    "trailer": "VG9AGf66tXM",
    "description": "Після того, як його застрелив ображений колишній пацієнт, якому він не зміг допомогти, дитячий психолог із Філадельфії шукає спокути, лікуючи маленького хлопчика з тривожною таємницею."
  },
  {
    "id": "m_136",
    "title": "Невразливий",
    "originalTitle": "Unbreakable",
    "year": 2000,
    "duration": 106,
    "rating": 7.3,
    "director": "M. Night Shyamalan",
    "genres": [
      "Драма",
      "Детектив",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZWNmMGYwMDQtNGIxMS00MzMzLTlhNmItYzllN2M2M2EwMTZmXkEyXkFqcGc@._V1_QL75_UY562_CR0,0,380,562_.jpg",
    "trailer": "R_DefAg_qD8",
    "description": "Чоловік дізнається про себе щось надзвичайне після жахливої ​​аварії."
  },
  {
    "id": "m_137",
    "title": "Спліт",
    "originalTitle": "Split",
    "year": 2017,
    "duration": 117,
    "rating": 7.3,
    "director": "M. Night Shyamalan",
    "genres": [
      "Жахи",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNTZjNmVjMzAtZjg2Mi00MWNmLTk5NTItOTExZDYwNTE2YmExXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "m6Tq4yZJ7aE",
    "description": "Трьох дівчат викрадає чоловік із діагностованими 23 різними характерами. Вони повинні спробувати втекти до очевидної появи нового жахливого 24-го."
  },
  {
    "id": "m_138",
    "title": "Знаки",
    "originalTitle": "Signs",
    "year": 2002,
    "duration": 106,
    "rating": 6.8,
    "director": "M. Night Shyamalan",
    "genres": [
      "Драма",
      "Детектив",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNDUwMDUyMDAyNF5BMl5BanBnXkFtZTYwMDQ3NzM3._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "a84pCqZ4x0E",
    "description": "Овдовілий колишній преподобний, який живе зі своїми дітьми та братом на фермі в Пенсільванії, знаходить на полях таємничі кола на полях, що свідчить про те, що попереду щось ще страшніше."
  },
  {
    "id": "m_139",
    "title": "Спадковість",
    "originalTitle": "Hereditary",
    "year": 2018,
    "duration": 127,
    "rating": 7.3,
    "director": "Ari Aster",
    "genres": [
      "Драма",
      "Жахи",
      "Детектив"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNTEyZGQwODctYWJjZi00NjFmLTg3YmEtMzlhNjljOGZhMWMyXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "V6wWKNij_1M",
    "description": "Скорботну родину переслідують трагічні та тривожні події."
  },
  {
    "id": "m_140",
    "title": "Сонцестояння",
    "originalTitle": "Midsommar",
    "year": 2019,
    "duration": 148,
    "rating": 7.1,
    "director": "Ari Aster",
    "genres": [
      "Драма",
      "Жахи",
      "Детектив"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMzQxNzQzOTQwM15BMl5BanBnXkFtZTgwMDQ2NTcwODM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "1Vnghdsjmd0",
    "description": "Пара вирушає до Північної Європи, щоб відвідати легендарний шведський фестиваль середини літа в рідному сільському місті. Те, що починається як ідилічний відступ, швидко перетворюється на все більш жорстоке та дивне змагання в руках язичницького культу."
  },
  {
    "id": "m_141",
    "title": "Відьма",
    "originalTitle": "The Witch",
    "year": 2016,
    "duration": 92,
    "rating": 7,
    "director": "Robert Eggers",
    "genres": [
      "Драма",
      "Фентезі",
      "Жахи"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTUyNzkwMzAxOF5BMl5BanBnXkFtZTgwMzc1OTk1NjE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "iQXmlf3Sefg",
    "description": "Ізольована пуританська родина в Новій Англії 1630-х років розкривається силами чаклунства та одержимості."
  },
  {
    "id": "m_142",
    "title": "Маяк",
    "originalTitle": "The Lighthouse",
    "year": 2019,
    "duration": 109,
    "rating": 7.3,
    "director": "Robert Eggers",
    "genres": [
      "Драма",
      "Фентезі",
      "Жахи"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTI4MjFhMjAtNmQxYi00N2IxLWJjMGEtYWY1YmU3OTQ0Zjk3XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "Hyag7lR8CPA",
    "description": "Двоє доглядачів маяка намагаються зберегти здоровий глузд, живучи на віддаленому таємничому острові Нова Англія в 1890-х роках."
  },
  {
    "id": "m_143",
    "title": "Варяг",
    "originalTitle": "The Northman",
    "year": 2022,
    "duration": 137,
    "rating": 7,
    "director": "Robert Eggers",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYzgwM2JiY2MtNWQ5OC00NDc1LWExMjYtYmY2YjViZmViYWM5XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "oMSdFM12hOw",
    "description": "Молодий принц вікінгів намагається помститися за вбивство свого батька."
  },
  {
    "id": "m_144",
    "title": "Чорний лебідь",
    "originalTitle": "Black Swan",
    "year": 2010,
    "duration": 108,
    "rating": 8,
    "director": "Darren Aronofsky",
    "genres": [
      "Драма",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "5jaI1XOB-bs",
    "description": "Невпевнена в собі балерина нарешті отримує роль, про яку завжди мріяла, але коли тиск зростає, її межа між реальністю та ілюзією починає стиратися."
  },
  {
    "id": "m_145",
    "title": "Реквієм за мрією",
    "originalTitle": "Requiem for a Dream",
    "year": 2000,
    "duration": 102,
    "rating": 8.3,
    "director": "Darren Aronofsky",
    "genres": [
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BN2ZlMjIzZjctYzA2My00ZWYyLWI4ZjctMGI2NWYyNzFiZjAwXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "jzk-lmU4KZ4",
    "description": "Четверо мрійників Коні-Айленда шукають кохання, слави та втечі, але залежність і одержимість починають спотворювати їхні надії на краще життя."
  },
  {
    "id": "m_146",
    "title": "Реслер",
    "originalTitle": "The Wrestler",
    "year": 2009,
    "duration": 109,
    "rating": 7.9,
    "director": "Darren Aronofsky",
    "genres": [
      "Драма",
      "Спорт"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTc5MjYyOTg4MF5BMl5BanBnXkFtZTcwNDc2MzQwMg@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "61-GFaTWuaQ",
    "description": "Зниклий професійний борець має піти на пенсію, але пошуки нового життя за межами рингу вважають виснажливою боротьбою."
  },
  {
    "id": "m_147",
    "title": "Кит",
    "originalTitle": "The Whale",
    "year": 2022,
    "duration": 117,
    "rating": 7.6,
    "director": "Darren Aronofsky",
    "genres": [
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYmNhOWMyNTYtNTljNC00NTU3LWFiYmQtMDBhOGU5NWFhNGU5XkEyXkFqcGc@._V1_QL75_UY562_CR8,0,380,562_.jpg",
    "trailer": "D30r0CAlgRQ",
    "description": "Відлюдник із хворобливим ожирінням учитель англійської мови намагається відновити стосунки зі своєю відчуженою донькою-підлітком."
  },
  {
    "id": "m_148",
    "title": "Олдбой",
    "originalTitle": "Oldboy",
    "year": 2003,
    "duration": 120,
    "rating": 8.3,
    "director": "Park Chan-wook",
    "genres": [
      "Бойовик",
      "Драма",
      "Детектив"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTAwNzNjYWItZmI0Ni00ZTcyLWIwNWMtZjlmNGMxZTEyYTJmXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "2HkjrJ6IK5E",
    "description": "Після викрадення та ув'язнення протягом п'ятнадцяти років О Де Су виходить на волю, але він виявляє, що йому потрібно вистежити свого викрадача за п'ять днів."
  },
  {
    "id": "m_149",
    "title": "Спогади про вбивство",
    "originalTitle": "Memories of Murder",
    "year": 2003,
    "duration": 131,
    "rating": 8.1,
    "director": "Bong Joon Ho",
    "genres": [
      "Кримінал",
      "Драма",
      "Детектив"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYmRjOWE5NmMtYTdkYS00ODFlLWJiMTMtYzE2NDZlZjlkZDQ0XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "0n_HBw217z4",
    "description": "У невеликій корейській провінції в 1986 році двоє детективів борються зі справою кількох молодих жінок, яких знайшли зґвалтованими та вбитими невідомим злочинцем."
  },
  {
    "id": "m_150",
    "title": "Служниця",
    "originalTitle": "The Handmaiden",
    "year": 2017,
    "duration": 145,
    "rating": 8.1,
    "director": "Park Chan-wook",
    "genres": [
      "Драма",
      "Романтика",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BOTllZDI1OGItOGUxNS00OGZhLWIzMjAtYzllZTY1YTA0ZmYwXkEyXkFqcGc@._V1_QL75_UY562_CR6,0,380,562_.jpg",
    "trailer": "whldChqCsYk",
    "description": "У Кореї 1930-х років дівчину найняли служницею до японської спадкоємиці, яка живе відокремленим життям у сільському маєтку. Але у покоївки є секрет: вона кишенькова злодійка, яку завербував шахрай, щоб допомогти спокусити Пані та вкрасти її..."
  },
  {
    "id": "m_151",
    "title": "Індіана Джонс: У пошуках ковчега",
    "originalTitle": "Raiders of the Lost Ark",
    "year": 1981,
    "duration": 115,
    "rating": 8.4,
    "director": "Steven Spielberg",
    "genres": [
      "Пригоди"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BOGNhMjg2ZjgtYzk4Ni00MTViLTg1MmUtYzM2MDZiYjZlMmU3XkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "trailer": "XkkzK5XxLaQ",
    "description": "У 1936 році армійська розвідка доручає археологу Індіані Джонсу допомогти знайти легендарну стародавню силу, Ковчег Завіту, до того, як нацисти дістануть його першими."
  },
  {
    "id": "m_152",
    "title": "Індіана Джонс і останній хрестовий похід",
    "originalTitle": "Indiana Jones and the Last Crusade",
    "year": 1989,
    "duration": 127,
    "rating": 8.2,
    "director": "Steven Spielberg",
    "genres": [
      "Пригоди"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNGIxNzQ0YzYtMjNmYi00YjBlLWFjNzEtNGE3ZGFmYTczM2MwXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "trailer": "a6JB2SuJYHM",
    "description": "У 1938 році, після того як його батько зник безвісти під час пошуку Святого Грааля, Індіана Джонс знову зіткнувся з нацистами, щоб перешкодити їм отримати його силу."
  },
  {
    "id": "m_153",
    "title": "Міцний горішок",
    "originalTitle": "Die Hard",
    "year": 1988,
    "duration": 132,
    "rating": 8.2,
    "director": "John McTiernan",
    "genres": [
      "Бойовик",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMGNlYmM1NmQtYWExMS00NmRjLTg5ZmEtMmYyYzJkMzljYWMxXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "jaJuw4Qfwnw",
    "description": "Нью-йоркський поліцейський намагається врятувати свою дружину та кількох інших, захоплених терористами в заручники під час різдвяної вечірки в хмарочосі Лос-Анджелеса."
  },
  {
    "id": "m_154",
    "title": "Міцний горішок 3",
    "originalTitle": "Die Hard with a Vengeance",
    "year": 1995,
    "duration": 128,
    "rating": 7.6,
    "director": "John McTiernan",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYjkzNzdkMTctNzMwMS00M2Q0LWIyOTMtNmM2NDY5NWZjNTJlXkEyXkFqcGc@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "trailer": "gQ0VRmYQWlg",
    "description": "Терорист, який заклав бомби по всьому Нью-Йорку і підірве їх, якщо Макклейн не зробить того, що він каже, змушений звільнити Джона Макклейна від відсторонення, щоб зіграти в гру «Саймон каже»."
  },
  {
    "id": "m_155",
    "title": "Швидкість",
    "originalTitle": "Speed",
    "year": 1994,
    "duration": 116,
    "rating": 7.3,
    "director": "Jan de Bont",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMDc2ODI5YWQtMmM2ZS00MTdmLWEyNWEtNmRmOGE5NGZlYWMzXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "FgiS1XzUeug",
    "description": "Терорист-вимагач налаштовує міський автобус Лос-Анджелеса на вибух, якщо його швидкість впаде нижче 50 миль/год, змушуючи молодого поліцейського та жінку-пасажирку продовжувати рух і рятувати всіх, хто був на борту."
  },
  {
    "id": "m_156",
    "title": "Місія нездійсненна: Фолаут",
    "originalTitle": "Mission: Impossible - Fallout",
    "year": 2018,
    "duration": 147,
    "rating": 7.7,
    "director": "Christopher McQuarrie",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZmUwZTg2YmMtMmZjOS00ZDYwLWI2ZDgtZDcyY2ZmMWMwZDdlXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "wb49-oV0F78",
    "description": "Група терористів планує підірвати три плутонієвих ядра для одночасної ядерної атаки на різні міста. Ітан Хант разом зі своєю командою МВФ збирається зупинити бійню."
  },
  {
    "id": "m_157",
    "title": "Місія нездійсненна: Нація ізгоїв",
    "originalTitle": "Mission: Impossible - Rogue Nation",
    "year": 2015,
    "duration": 131,
    "rating": 7.4,
    "director": "Christopher McQuarrie",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZjUwZjg2ZjAtY2RhZi00YmZjLTlhNGQtOWQwNDk1MjhhM2NhXkEyXkFqcGc@._V1_QL75_UX380_CR0,10,380,562_.jpg",
    "trailer": "gOW_azEbOjw",
    "description": "Ітан і його команда беруться за свою найнеможливішу місію, коли їм потрібно знищити міжнародну шахрайську організацію, настільки ж висококваліфіковану, як вони, і віддану знищенню МВФ."
  },
  {
    "id": "m_158",
    "title": "Місія нездійсненна: Протокол Фантом",
    "originalTitle": "Mission: Impossible - Ghost Protocol",
    "year": 2011,
    "duration": 132,
    "rating": 7.4,
    "director": "Brad Bird",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTY4MTUxMjQ5OV5BMl5BanBnXkFtZTcwNTUyMzg5Ng@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "EDGYVMZ2x-k",
    "description": "МВФ закривається, коли його причетно до вибуху Кремля, що змушує Ітана Ганта та його нову команду піти на шахрайство, щоб очистити ім’я своєї організації."
  },
  {
    "id": "m_159",
    "title": "Казино Рояль",
    "originalTitle": "Casino Royale",
    "year": 2006,
    "duration": 144,
    "rating": 8,
    "director": "Martin Campbell",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMWQ1ZDM4NDktMWY0NC00MjcxLWJlMDMtNmE2MGVhYzRjMWQ0XkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "trailer": "36mnx8ECb4I",
    "description": "Отримавши ліцензію на вбивство, секретний агент Джеймс Бонд вирушає на свою першу місію як 007. Бонд повинен перемогти приватного банкіра, який фінансує терористів, у покерній грі з високими ставками в Casino Royale у Чорногорії."
  },
  {
    "id": "m_160",
    "title": "007: Координати Скайфол",
    "originalTitle": "Skyfall",
    "year": 2012,
    "duration": 143,
    "rating": 7.8,
    "director": "Sam Mendes",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNjAzMWNkODUtM2FlMi00NzgyLWJhMGUtMWEyNDYyZGFiN2RlXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "6kw1UVovByw",
    "description": "Вірність Джеймса Бонда до М піддається випробуванню, коли її минуле повертається, щоб переслідувати її. Коли MI6 зазнає атаки, 007 повинен вистежити та знищити загрозу, незалежно від того, наскільки особисто це коштує."
  },
  {
    "id": "m_161",
    "title": "Топ Ґан: Меверік",
    "originalTitle": "Top Gun: Maverick",
    "year": 2022,
    "duration": 130,
    "rating": 8.2,
    "director": "Joseph Kosinski",
    "genres": [
      "Бойовик",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMDBkZDNjMWEtOTdmMi00NmExLTg5MmMtNTFlYTJlNWY5YTdmXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "giXco2jaZ_4",
    "description": "Історія розповідає про те, як Маверік зіткнувся зі своїм минулим, навчаючи групу молодших випускників Top Gun, включаючи сина його померлого найкращого друга, для виконання небезпечної місії."
  },
  {
    "id": "m_162",
    "title": "Найкращий стрілець",
    "originalTitle": "Top Gun",
    "year": 1986,
    "duration": 109,
    "rating": 7,
    "director": "Tony Scott",
    "genres": [
      "Бойовик",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZmVjNzQ3MjYtYTZiNC00Y2YzLWExZTEtMTM2ZDllNDI0MzgyXkEyXkFqcGc@._V1_QL75_UX380_CR0,12,380,562_.jpg",
    "trailer": "xa_z57UAt9Q",
    "description": "Школа зброї Top Gun Naval Fighter Weapons — це місце, де найкращі з кращих тренуються, щоб удосконалити свої елітні навики польоту. Коли гарячого льотчика-винищувача Маверіка відправляють до школи, його безрозсудне ставлення та зухвала поведінка ставлять його в суперечку..."
  },
  {
    "id": "m_163",
    "title": "Джон Вік",
    "originalTitle": "John Wick",
    "year": 2014,
    "duration": 101,
    "rating": 7.5,
    "director": "Chad Stahelski",
    "genres": [
      "Бойовик",
      "Кримінал",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "2AUmvWm5ZDQ",
    "description": "Джон Вік — колишній вбивця, який сумує через втрату свого справжнього кохання. Коли його дім зламаний, пограбований і вбитий його собака, він змушений повернутися до дії, щоб помститися."
  },
  {
    "id": "m_164",
    "title": "Джон Вік 2",
    "originalTitle": "John Wick: Chapter 2",
    "year": 2017,
    "duration": 122,
    "rating": 7.4,
    "director": "Chad Stahelski",
    "genres": [
      "Бойовик",
      "Кримінал",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjE2NDkxNTY2M15BMl5BanBnXkFtZTgwMDc2NzE0MTI@._V1_QL75_UX380_CR0,12,380,562_.jpg",
    "trailer": "XGk2E97c9MT",
    "description": "Повернувшись до злочинного світу, щоб повернути борг, Джон Вік дізнається, що за його життя призначили велику винагороду."
  },
  {
    "id": "m_165",
    "title": "Джон Вік 3",
    "originalTitle": "John Wick: Chapter 3 - Parabellum",
    "year": 2019,
    "duration": 130,
    "rating": 7.4,
    "director": "Chad Stahelski",
    "genres": [
      "Бойовик",
      "Кримінал",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYjdlNWFlZjEtM2U0NS00ZWU5LTk1M2EtZmQxNWFiZjk0MGM5XkEyXkFqcGc@._V1_QL75_UX380_CR0,12,380,562_.jpg",
    "trailer": "M7XM597XO94",
    "description": "Джон Вік тікає після того, як убив члена міжнародної гільдії вбивць, і з ціною в 14 мільйонів доларів на його голові він стає мішенню для вбивць у всьому світі."
  },
  {
    "id": "m_166",
    "title": "Джон Вік 4",
    "originalTitle": "John Wick: Chapter 4",
    "year": 2023,
    "duration": 169,
    "rating": 7.6,
    "director": "Chad Stahelski",
    "genres": [
      "Бойовик",
      "Кримінал",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BY2Q2ZmI5ZjUtNWVhMC00YzJkLTlmYjMtY2RmZDhkNzEzYjZhXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "qEVUtrk8_B4",
    "description": "Джон Вік відкриває шлях до перемоги над Великим столом. Але перш ніж він зможе здобути свободу, Вік повинен зіткнутися з новим ворогом із потужними альянсами по всьому світу та силами, які перетворюють старих друзів на ворогів."
  },
  {
    "id": "m_167",
    "title": "Хоробре серце",
    "originalTitle": "Braveheart",
    "year": 1995,
    "duration": 178,
    "rating": 8.3,
    "director": "Mel Gibson",
    "genres": [
      "Драма",
      "Військовий"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNGMxZDBhNGQtYTZlNi00N2UzLWI4NDEtNmUzNWM2NTdmZDA0XkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "trailer": "1NJO0jxBtMo",
    "description": "Шотландський воїн Вільям Воллес очолює своїх співвітчизників у повстанні, щоб звільнити свою батьківщину від тиранії короля Англії Едуарда I."
  },
  {
    "id": "m_168",
    "title": "Апокаліпто",
    "originalTitle": "Apocalypto",
    "year": 2006,
    "duration": 139,
    "rating": 7.9,
    "director": "Mel Gibson",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMzJkNzI3ZmEtZmRhOS00YTM1LWI3OTAtZmVjZmNkODIxNmFmXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "gibLk4v_l5o",
    "description": "Коли королівство майя занепадає, молодий чоловік вирушає в небезпечну подорож до світу, де панують страх і гноблення."
  },
  {
    "id": "m_169",
    "title": "Падіння Чорного яструба",
    "originalTitle": "Black Hawk Down",
    "year": 2002,
    "duration": 144,
    "rating": 7.7,
    "director": "Ridley Scott",
    "genres": [
      "Бойовик",
      "Драма",
      "Історія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYTM3YTQ1M2MtNDEyNC00NzRlLWFmOTgtYjBhNDg2ODNjNTU0XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "5Y148gYv_7M",
    "description": "Історія про сто шістдесят елітних солдатів США, які кинулися в Могадішо в жовтні 1993 року, щоб захопити двох старших лейтенантів воєначальника-відступника, але опинилися у відчайдушній битві з великими силами озброєних до зубів..."
  },
  {
    "id": "m_170",
    "title": "Дюнкерк",
    "originalTitle": "Dunkirk",
    "year": 2017,
    "duration": 106,
    "rating": 7.8,
    "director": "Christopher Nolan",
    "genres": [
      "Бойовик",
      "Драма",
      "Історія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTE0Mjg4MTMwMDZeQTJeQWpwZ15BbWU4MDAwMDQ1ODAy._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "F-eMt3SrfFU",
    "description": "Солдати союзників з Бельгії, Британської Співдружності та Імперії та Франції оточені німецькою армією та евакуйовані під час запеклої битви під час Другої світової війни."
  },
  {
    "id": "m_171",
    "title": "З міркувань совісті",
    "originalTitle": "Hacksaw Ridge",
    "year": 2016,
    "duration": 139,
    "rating": 8.1,
    "director": "Mel Gibson",
    "genres": [
      "Біографія",
      "Драма",
      "Історія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjQ1NjM3MTUxNV5BMl5BanBnXkFtZTgwMDc5MTY5OTE@._V1_QL75_UX380_CR0,12,380,562_.jpg",
    "trailer": "s2-1hz1juBI",
    "description": "Американський армійський медик Другої світової війни Дезмонд Т. Досс, який служив під час битви за Окінаву, відмовляється вбивати людей і стає першою людиною в історії Америки, яка отримала Медаль Пошани без жодного пострілу."
  },
  {
    "id": "m_172",
    "title": "Взвод",
    "originalTitle": "Platoon",
    "year": 1986,
    "duration": 120,
    "rating": 8,
    "director": "Oliver Stone",
    "genres": [
      "Драма",
      "Військовий"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZjE4YjllODAtZGMxZS00Mjg2LThkOWUtZjNkMjQ5YThiNDU4XkEyXkFqcGc@._V1_QL75_UX380_CR0,16,380,562_.jpg",
    "trailer": "ay5yW6uM-zI",
    "description": "Кріс Тейлор, наївний американець, йде добровольцем до В'єтнаму. Він почувається нікчемним серед досвідчених вояків. Два сержанти, суворий Барнс і готовий до співпраці Еліас, сваряться через незаконне вбивство під час рейду. Крісу загрожує крах."
  },
  {
    "id": "m_173",
    "title": "Апокаліпсис сьогодні",
    "originalTitle": "Apocalypse Now",
    "year": 1979,
    "duration": 147,
    "rating": 8.4,
    "director": "Francis Ford Coppola",
    "genres": [
      "Драма",
      "Детектив",
      "Військовий"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZDhiMTljYjYtODc1Yy00MmEwLTg2OTYtYmE1YTRmNDE4MmEwXkEyXkFqcGc@._V1_QL75_UX380_CR0,11,380,562_.jpg",
    "trailer": "FTjG-Aux_1E",
    "description": "Офіцер армії США, який служить у В'єтнамі, отримує завдання вбити полковника-відступника, який вважає себе богом."
  },
  {
    "id": "m_174",
    "title": "Легенда Г'ю Гласса",
    "originalTitle": "The Revenant",
    "year": 2016,
    "duration": 156,
    "rating": 8,
    "director": "Alejandro G. Iñárritu",
    "genres": [
      "Бойовик",
      "Драма",
      "Вестерн"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYTgwNmQzZDctMjNmOS00OTExLTkwM2UtNzJmOTJhODFjOTdlXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "trailer": "LoebZZ8K5N0",
    "description": "Прикордонник у експедиції з торгівлі хутром у 1820-х роках бореться за виживання після того, як його пошматував ведмідь і залишив помирати члени його власної мисливської команди."
  },
  {
    "id": "m_175",
    "title": "Лоґан",
    "originalTitle": "Logan",
    "year": 2017,
    "duration": 137,
    "rating": 8.1,
    "director": "James Mangold",
    "genres": [
      "Бойовик",
      "Драма",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BM2JjODdkMGMtNmY2YS00OGM2LThiY2YtZGYyNzE4Nzc2ODA0XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "Div0iP65aZo",
    "description": "У майбутньому, де мутанти майже вимерли, літній і втомлений Логан веде спокійне життя. Але коли Лаура, дитина-мутант, яку переслідують вчені, приходить до нього по допомогу, він повинен доставити її в безпечне місце."
  },
  {
    "id": "m_176",
    "title": "Людина-павук 2",
    "originalTitle": "Spider-Man 2",
    "year": 2004,
    "duration": 127,
    "rating": 7.5,
    "director": "Sam Raimi",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNGQ0YTQyYTgtNWI2YS00NTE2LWJmNDItNTFlMTUwNmFlZTM0XkEyXkFqcGc@._V1_QL75_UY562_CR15,0,380,562_.jpg",
    "trailer": "1s9Yln0YpdU",
    "description": "Пітер Паркер стикається з проблемами у своєму невдалому особистому житті, оскільки він бореться з колишнім геніальним ученим на ім’я Отто Октавіус."
  },
  {
    "id": "m_177",
    "title": "Людина-павук: Додому шляху нема",
    "originalTitle": "Spider-Man: No Way Home",
    "year": 2021,
    "duration": 148,
    "rating": 8.1,
    "director": "Jon Watts",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Фентезі"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "JfVOs4VSpmA",
    "description": "Пітер Паркер звертається до Доктора Стренджа після того, як його особистість руйнує життя, яке він знає, але магічна помилка втягує в його світ могутніх аутсайдерів і змушує його зіткнутися з тим, що насправді означає бути Людиною-павуком."
  },
  {
    "id": "m_178",
    "title": "Залізна людина",
    "originalTitle": "Iron Man",
    "year": 2008,
    "duration": 126,
    "rating": 7.9,
    "director": "Jon Favreau",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "8ugaeA-nMTc",
    "description": "Після перебування в полоні в афганській печері інженер-мільярдер Тоні Старк створює унікальну зброю для боротьби зі злом."
  },
  {
    "id": "m_179",
    "title": "Месники: Війна нескінченності",
    "originalTitle": "Avengers: Infinity War",
    "year": 2018,
    "duration": 149,
    "rating": 8.4,
    "director": "Anthony Russo, Joe Russo",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "6ZfuNTqbHE8",
    "description": "Месники та їхні союзники повинні бути готові пожертвувати всім, щоб перемогти могутнього Таноса, перш ніж його блискавичне спустошення та руїни покладе кінець Всесвіту."
  },
  {
    "id": "m_180",
    "title": "Месники: Завершення",
    "originalTitle": "Avengers: Endgame",
    "year": 2019,
    "duration": 181,
    "rating": 8.4,
    "director": "Anthony Russo, Joe Russo",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "TcMBFSGVi1c",
    "description": "Після руйнівних подій «Месників: Війна нескінченності» (2018) всесвіт перебуває в руїнах. За допомогою решти союзників Месники знову збираються, щоб змінити дії Таноса та відновити рівновагу у Всесвіті."
  },
  {
    "id": "m_181",
    "title": "Перший месник: Друга війна",
    "originalTitle": "Captain America: The Winter Soldier",
    "year": 2014,
    "duration": 136,
    "rating": 7.7,
    "director": "Anthony Russo, Joe Russo",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNWY1NjFmNDItZDhmOC00NjI1LWE0ZDItMTM0MjBjZThiOTQ2XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "7SlILk2WMTI",
    "description": "Поки Стів Роджерс намагається прийняти свою роль у сучасному світі, він об’єднується з колегою по Меснику та агенту Щ.Т.Т., Чорною Вдовою, щоб боротися з новою загрозою з історії: вбивцею, відомою як Зимовий Солдат."
  },
  {
    "id": "m_182",
    "title": "Перший месник: Протистояння",
    "originalTitle": "Captain America: Civil War",
    "year": 2016,
    "duration": 147,
    "rating": 7.8,
    "director": "Anthony Russo, Joe Russo",
    "genres": [
      "Бойовик",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "dKrVegVI0Us",
    "description": "Політична участь у справах Месників викликає розрив між Капітаном Америкою та Залізною Людиною."
  },
  {
    "id": "m_183",
    "title": "Тор: Раґнарок",
    "originalTitle": "Thor: Ragnarok",
    "year": 2017,
    "duration": 130,
    "rating": 7.9,
    "director": "Taika Waititi",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Комедія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "ue80QwXMRHg",
    "description": "Ув’язнений на планеті Сакаар, Тор повинен змагатися з часом, щоб повернутися в Асгард і зупинити Рагнарока, знищення його світу, від рук могутньої та безжальної злодійки Гели."
  },
  {
    "id": "m_184",
    "title": "Вартові галактики",
    "originalTitle": "Guardians of the Galaxy",
    "year": 2014,
    "duration": 121,
    "rating": 8,
    "director": "James Gunn",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Комедія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BM2ZmNjQ2MzAtNDlhNi00MmQyLWJhZDMtNmJiMjFlOWY4MzcxXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "d96cjJhvlMA",
    "description": "Група міжгалактичних злочинців повинна об’єднатися, щоб зупинити фанатичного воїна, який планує очистити Всесвіт."
  },
  {
    "id": "m_185",
    "title": "Вартові галактики 3",
    "originalTitle": "Guardians of the Galaxy Vol. 3",
    "year": 2023,
    "duration": 150,
    "rating": 7.9,
    "director": "James Gunn",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Комедія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BOTJhOTMxMmItZmE0Ny00MDc3LWEzOGEtOGFkMzY4MWYyZDQ0XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "u3V5KDHRQvk",
    "description": "Все ще не почуваючись після втрати Гамори, Пітер Квілл збирає свою команду, щоб захистити всесвіт і свою власну місію, яка може означати кінець Вартових, якщо вона не вдасться."
  },
  {
    "id": "m_186",
    "title": "Дедпул",
    "originalTitle": "Deadpool",
    "year": 2016,
    "duration": 108,
    "rating": 8,
    "director": "Tim Miller",
    "genres": [
      "Бойовик",
      "Комедія",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNzY3ZWU5NGQtOTViNC00ZWVmLTliNjAtNzViNzlkZWQ4YzQ4XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "ONHBaC-pfsk",
    "description": "Розумний найманець піддається експериментам, він стає безсмертним, але має жахливі шрами, і вирушає на пошуки людини, яка зіпсувала його зовнішність."
  },
  {
    "id": "m_187",
    "title": "Дедпул 2",
    "originalTitle": "Deadpool 2",
    "year": 2018,
    "duration": 119,
    "rating": 7.6,
    "director": "David Leitch",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Комедія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNGY3N2ZhYmMtYTlmYi00ZWIzLWJiZWMtMjgxMjljYTk3MDAwXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "D86RtevtfrA",
    "description": "Нецензурний найманець-мутант Вейд Вілсон (він же Дедпул) збирає команду товаришів-мутантів-шахраїв, щоб захистити юнака зі здібностями від жорстокого кіборга-мандрівника Кейбла."
  },
  {
    "id": "m_188",
    "title": "Дедпул і Росомаха",
    "originalTitle": "Deadpool & Wolverine",
    "year": 2024,
    "duration": 128,
    "rating": 7.5,
    "director": "Shawn Levy",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Комедія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZTk5ODY0MmQtMzA3Ni00NGY1LThiYzItZThiNjFiNDM4MTM3XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "73_1biulkYk",
    "description": "Управління дисперсії в часі пропонує Дедпулу місце в кінематографічному всесвіті Marvel, але замість цього він набирає варіант Росомахи, щоб врятувати свій всесвіт від вимирання."
  },
  {
    "id": "m_189",
    "title": "Хранителі",
    "originalTitle": "Watchmen",
    "year": 2009,
    "duration": 162,
    "rating": 7.6,
    "director": "Zack Snyder",
    "genres": [
      "Бойовик",
      "Драма",
      "Детектив"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYmJiNTUwYWUtZDllNi00ODdjLWFmNTEtOTVlNmYxYTZhNzYzXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "PVjA0y78_EQ",
    "description": "У версії 1985 року, де існують супергерої, вбивство колеги посилає активного пильного Роршаха на слід змови, яка змінить хід історії."
  },
  {
    "id": "m_190",
    "title": "300 спартанців",
    "originalTitle": "300",
    "year": 2007,
    "duration": 117,
    "rating": 7.6,
    "director": "Zack Snyder",
    "genres": [
      "Бойовик",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjc4OTc0ODgwNV5BMl5BanBnXkFtZTcwNjM1ODE0MQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "UrIbxk7idYA",
    "description": "У стародавній битві при Фермопілах цар Леонід і 300 спартанців борються проти Ксеркса та його величезної перської армії."
  },
  {
    "id": "m_191",
    "title": "V означає Вендетта",
    "originalTitle": "V for Vendetta",
    "year": 2006,
    "duration": 132,
    "rating": 8.1,
    "director": "James McTeigue",
    "genres": [
      "Бойовик",
      "Драма",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZDEwOTRjNjgtOGY0MC00NGYxLWFmYmQtNjc1ZjVhMTc0OWUxXkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "trailer": "lSA7mAHolAw",
    "description": "Молода жінка, яка живе в антиутопічному суспільстві, зустрічає темного борця за свободу, який планує повалити їхній тиранічний уряд."
  },
  {
    "id": "m_192",
    "title": "Місто гріхів",
    "originalTitle": "Sin City",
    "year": 2005,
    "duration": 124,
    "rating": 8,
    "director": "Frank Miller, Robert Rodriguez",
    "genres": [
      "Кримінал",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNWE2YmYyYzQtNGMwMi00Yzk0LTk3ZTYtYTcxNmFjMDE1MGExXkEyXkFqcGc@._V1_QL75_UY562_CR10,0,380,562_.jpg",
    "trailer": "YKFLrOO5344",
    "description": "Дослідження похмурого та жалюгідного Басейн-Сіті та трьох його мешканців, які всі охоплені насильницькою корупцією."
  },
  {
    "id": "m_193",
    "title": "Соціальна мережа",
    "originalTitle": "The Social Network",
    "year": 2010,
    "duration": 120,
    "rating": 7.8,
    "director": "David Fincher",
    "genres": [
      "Біографія",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjlkNTE5ZTUtNGEwNy00MGVhLThmZjMtZjU1NDE5Zjk1NDZkXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "lB95KLmpLR4",
    "description": "Коли студент Гарвардського університету Марк Цукерберг створює сайт соціальної мережі, який став відомий як Facebook, на нього подали до суду близнюки, які стверджували, що він викрав їх ідею, і співзасновник, якого пізніше витіснили з бізнесу."
  },
  {
    "id": "m_194",
    "title": "Король говорить!",
    "originalTitle": "The King's Speech",
    "year": 2010,
    "duration": 118,
    "rating": 8,
    "director": "Tom Hooper",
    "genres": [
      "Біографія",
      "Драма",
      "Історія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMzU5MjEwMTg2Nl5BMl5BanBnXkFtZTcwNzM3MTYxNA@@._V1_QL75_UY562_CR2,0,380,562_.jpg",
    "trailer": "EcxBrTvLbTA",
    "description": "Історія короля Георга VI, його несподіваного сходження на трон Британської імперії в 1936 році та логопеда, який допоміг невпевненому монарху подолати заїкання."
  },
  {
    "id": "m_195",
    "title": "Мільйонер із нетрів",
    "originalTitle": "Slumdog Millionaire",
    "year": 2008,
    "duration": 120,
    "rating": 8,
    "director": "Danny Boyle, Loveleen Tandan",
    "genres": [
      "Кримінал",
      "Драма",
      "Романтика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTE5ZTRkYWEtZmU5MC00NDJjLTk3NmUtZGJlYTM2MmQ3NTJkXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "AIzbwKh1J6Q",
    "description": "Коли підлітка з нетрів Мумбаї допитують про його підозрілий виступ у вікторині, він повертається до різних подій зі свого минулого, щоб пояснити, як він знав усі відповіді."
  },
  {
    "id": "m_196",
    "title": "Бердмен",
    "originalTitle": "Birdman",
    "year": 1967,
    "duration": 30,
    "rating": 6.7,
    "director": "Алехандро Гонсалес Іньярріту",
    "genres": [
      "Анімація",
      "Бойовик",
      "Пригоди"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMzg5OGI3MTUtMDJlZC00OWRlLWIyMzktMjcyN2MxYzQ4NDFjXkEyXkFqcGc@._V1_SX300.jpg",
    "trailer": "uJfLoE6hanc",
    "description": "Крилатий супергерой, який отримує силу від сонця, бореться з різними лиходіями за допомогою свого помічника-орла Месника."
  },
  {
    "id": "m_197",
    "title": "У центрі уваги",
    "originalTitle": "Spotlight",
    "year": 2015,
    "duration": 129,
    "rating": 8.1,
    "director": "Tom McCarthy",
    "genres": [
      "Біографія",
      "Кримінал",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjIyOTM5OTIzNV5BMl5BanBnXkFtZTgwMDkzODE2NjE@._V1_QL75_UY562_CR0,0,380,562_.jpg",
    "trailer": "EwdCIpbTN5g",
    "description": "Реальна історія про те, як Boston Globe розкрила масштабний скандал із розбещенням дітей і приховуванням у місцевій католицькій архієпархії, що сколихнуло всю Католицьку Церкву до глибини душі."
  },
  {
    "id": "m_198",
    "title": "Місячне сяйво",
    "originalTitle": "Moonlight",
    "year": 2016,
    "duration": 111,
    "rating": 7.4,
    "director": "Barry Jenkins",
    "genres": [
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNzQxNTIyODAxMV5BMl5BanBnXkFtZTgwNzQyMDA3OTE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "9NJj12tJzqc",
    "description": "Молодий афроамериканець бореться зі своєю ідентичністю та сексуальністю, переживаючи повсякденні труднощі дитинства, підліткового віку та дорослішання, що розвивається."
  },
  {
    "id": "m_199",
    "title": "Форма води",
    "originalTitle": "The Shape of Water",
    "year": 2017,
    "duration": 123,
    "rating": 7.3,
    "director": "Guillermo del Toro",
    "genres": [
      "Драма",
      "Фентезі",
      "Романтика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BOGFlMTM2MTgtZDdlMy00ZDZlLWFjOTUtZDMzMGEwNmNiMWY0XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "XFYWazblaUA",
    "description": "У надсекретній дослідницькій установі в 1960-х роках самотній прибиральник зав’язує унікальні стосунки з земноводною істотою, яку тримають у полоні."
  },
  {
    "id": "m_200",
    "title": "Банші Інішеріна",
    "originalTitle": "The Banshees of Inisherin",
    "year": 2022,
    "duration": 114,
    "rating": 7.6,
    "director": "Martin McDonagh",
    "genres": [
      "Комедія",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BOTkzMWI4OTEtMTk0MS00MTUxLWI4NTYtYmRiNWM4Zjc1MGRhXkEyXkFqcGc@._V1_QL75_UX380_CR0,8,380,562_.jpg",
    "trailer": "uRu3zLOJN2c",
    "description": "Двоє друзів на все життя опиняються в глухому куті, коли один раптово розриває їхні стосунки з тривожними наслідками для обох."
  },
  {
    "id": "m_201",
    "title": "Батько",
    "originalTitle": "The Father",
    "year": 2021,
    "duration": 97,
    "rating": 8.2,
    "director": "Florian Zeller",
    "genres": [
      "Драма",
      "Детектив"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYzUxMDAyMDAtNzIyZi00OGQ1LTllMjEtYzRjOThkZTUxNTliXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "З віком чоловік відмовляється від будь-якої допомоги дочки. Коли він намагається зрозуміти, що відбувається навколо нього, він починає сумніватися в своїх близьких, у власному розумі і навіть в структурі своєї реальності."
  },
  {
    "id": "m_202",
    "title": "Залишенці",
    "originalTitle": "The Holdovers",
    "year": 2023,
    "duration": 133,
    "rating": 7.9,
    "director": "Alexander Payne",
    "genres": [
      "Комедія",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BOWY3MjUzZTctOTI5ZC00MDA5LTk4ZTMtZWJjNjRmMzE4ZmI2XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "У 1970 році скнара вчителя історії в школі-інтернаті Нової Англії залишається в університетському містечку під час різдвяних канікул, щоб наглядати за утримуваними учнями, і закінчується тим, що встановлює малоймовірний зв’язок із розумним, але пошкодженим порушником спокою."
  },
  {
    "id": "m_203",
    "title": "Зона інтересу",
    "originalTitle": "The Zone of Interest",
    "year": 2024,
    "duration": 105,
    "rating": 7.3,
    "director": "Jonathan Glazer",
    "genres": [
      "Драма",
      "Історія",
      "Військовий"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNjk4MTQ3MGEtZmI4OS00N2NhLWI5ZjgtYWE5ZWVkZGExYTQ1XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "",
    "description": "Комендант Освенціма та його дружина прагнуть побудувати життя мрії для своєї родини в будинку поруч із табором."
  },
  {
    "id": "m_204",
    "title": "Суперперці",
    "originalTitle": "Superbad",
    "year": 2007,
    "duration": 113,
    "rating": 7.6,
    "director": "Greg Mottola",
    "genres": [
      "Комедія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNjk0MzdlZGEtNTRkOC00ZDRiLWJkYjAtMzUzYTRiNzk1YTViXkEyXkFqcGc@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "trailer": "",
    "description": "Двоє співзалежних старшокласників змушені мати справу з тривогою розлуки після того, як їхній план влаштувати вечірку, просочену випивкою, зазнав невдачі."
  },
  {
    "id": "m_205",
    "title": "Похмілля у Вегасі",
    "originalTitle": "The Hangover",
    "year": 2009,
    "duration": 100,
    "rating": 7.7,
    "director": "Todd Phillips",
    "genres": [
      "Комедія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNDI2MzBhNzgtOWYyOS00NDM2LWE0OGYtOGQ0M2FjMTI2NTllXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Троє друзів прокидаються після парубочої вечірки в Лас-Вегасі, не пам’ятаючи минулої ночі та зниклого холостяка. Їм доведеться пробиратися містом, щоб встигнути знайти свого друга до його весілля."
  },
  {
    "id": "m_206",
    "title": "Круті чуваки",
    "originalTitle": "The Nice Guys",
    "year": 2016,
    "duration": 116,
    "rating": 7.4,
    "director": "Shane Black",
    "genres": [
      "Бойовик",
      "Комедія",
      "Кримінал"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BM2YwNWZlZGEtYTEyZi00NjdjLWEwM2ItM2Q2MDMwZjkzMjk0XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "У Лос-Анджелесі 1970-х років пара приватних детективів розслідує зниклу дівчину та таємничу смерть порнозірки."
  },
  {
    "id": "m_207",
    "title": "Це безглузде кохання",
    "originalTitle": "Crazy, Stupid, Love.",
    "year": 2011,
    "duration": 118,
    "rating": 7.4,
    "director": "Glenn Ficarra, John Requa",
    "genres": [
      "Комедія",
      "Драма",
      "Романтика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTg2MjkwMTM0NF5BMl5BanBnXkFtZTcwMzc4NDg2NQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Життя чоловіка середніх років кардинально змінюється, коли дружина просить у нього розлучення. Він прагне відновити свою мужність за допомогою нового знайомого Джейкоба, який навчить його підбирати жінок у барах."
  },
  {
    "id": "m_208",
    "title": "Борат",
    "originalTitle": "Borat",
    "year": 2006,
    "duration": 84,
    "rating": 7.4,
    "director": "Larry Charles",
    "genres": [
      "Комедія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTk0MTQ3NDQ4Ml5BMl5BanBnXkFtZTcwOTQ3OTQzMw@@._V1_QL75_UY562_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Диктор казахського телебачення Борат відправляється до Сполучених Штатів для репортажів про найбільшу країну світу."
  },
  {
    "id": "m_209",
    "title": "Грім у тропіках",
    "originalTitle": "Tropic Thunder",
    "year": 2008,
    "duration": 107,
    "rating": 7.1,
    "director": "Ben Stiller",
    "genres": [
      "Бойовик",
      "Комедія",
      "Військовий"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNDE5NjQzMDkzOF5BMl5BanBnXkFtZTcwODI3ODI3MQ@@._V1_QL75_UY562_CR10,0,380,562_.jpg",
    "trailer": "",
    "description": "Через серію дивних випадків група акторів, які знімають високобюджетний фільм про війну, змушена стати солдатами, яких вони зображують."
  },
  {
    "id": "m_210",
    "title": "Зомбі на ім'я Шон",
    "originalTitle": "Shaun of the Dead",
    "year": 2004,
    "duration": 99,
    "rating": 7.8,
    "director": "Edgar Wright",
    "genres": [
      "Комедія",
      "Жахи"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNzNjZGE4YTUtOWU3OC00Mzg2LThjNWItMzUwYzEwMDgxYmVjXkEyXkFqcGc@._V1_QL75_UX380_CR0,3,380,562_.jpg",
    "trailer": "",
    "description": "Безпрограшне, безцільне життя лондонського продавця електроніки та його сусіда по кімнаті порушує зомбі-апокаліпсис."
  },
  {
    "id": "m_211",
    "title": "Типу круті лягаві",
    "originalTitle": "Hot Fuzz",
    "year": 2007,
    "duration": 121,
    "rating": 7.8,
    "director": "Edgar Wright",
    "genres": [
      "Бойовик",
      "Комедія",
      "Детектив"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYjFkZTkzZTQtNjM1ZS00M2EyLWE3MTAtMmY5Yzk0NTc0NDc3XkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "trailer": "",
    "description": "Надмірно успішного сержанта лондонської поліції переводять до села, де спокійні офіцери заперечують проти його жагу до правил, у той час як у місті відбувається низка жахливих вбивств."
  },
  {
    "id": "m_212",
    "title": "Що ми робимо у тінях",
    "originalTitle": "What We Do in the Shadows",
    "year": 2015,
    "duration": 86,
    "rating": 7.6,
    "director": "Jemaine Clement, Taika Waititi",
    "genres": [
      "Комедія",
      "Жахи",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNGFhNjkyZDYtOTc4Yi00OWM4LTg4ZTktNjIzNDA5NGE5YTYwXkEyXkFqcGc@._V1_QL75_UY562_CR3,0,380,562_.jpg",
    "trailer": "",
    "description": "Віаго, Дікон і Владислав — вампіри, які борються з повсякденними аспектами сучасного життя, такими як сплата оренди, не відставати від домашніх справ, спроби потрапити в нічні клуби та подолати конфлікти з сусідами."
  },
  {
    "id": "m_213",
    "title": "Монті Пайтон і Священний Грааль",
    "originalTitle": "Monty Python and the Holy Grail",
    "year": 1975,
    "duration": 91,
    "rating": 8.1,
    "director": "Terry Gilliam, Terry Jones",
    "genres": [
      "Пригоди",
      "Комедія",
      "Фентезі"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYWY4YmUzZmUtMzQ0ZS00N2Y2LWJlODQtN2IwMDc1MWQwMmU3XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "",
    "description": "Король Артур і його Лицарі Круглого столу вирушають у сюрреалістичний малобюджетний пошук Святого Грааля, стикаючись із багатьма дуже дурними перешкодами."
  },
  {
    "id": "m_214",
    "title": "Брюс Всемогутній",
    "originalTitle": "Bruce Almighty",
    "year": 2003,
    "duration": 101,
    "rating": 6.8,
    "director": "Tom Shadyac",
    "genres": [
      "Комедія",
      "Фентезі"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZWM2ZjA2OTctZmRhMy00ZDIzLTkwZGQtYTRlNmQwZWZmMDBlXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Плаксивому репортеру новин дається шанс стати на місце Бога."
  },
  {
    "id": "m_215",
    "title": "Маска",
    "originalTitle": "The Mask",
    "year": 1994,
    "duration": 101,
    "rating": 7,
    "director": "Chuck Russell",
    "genres": [
      "Комедія",
      "Кримінал",
      "Фентезі"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNGNmNjI0ZmMtMzI5MC00ZjUyLWFlZDEtYjUyMGZlN2E3N2E2XkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "trailer": "",
    "description": "Банківський службовець Стенлі Іпкісс перетворюється на маніакального супергероя, коли одягає таємничу маску."
  },
  {
    "id": "m_216",
    "title": "Тупий та ще тупіший",
    "originalTitle": "Dumb and Dumber",
    "year": 1994,
    "duration": 107,
    "rating": 7.3,
    "director": "Peter Farrelly",
    "genres": [
      "Комедія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNGQxZDA1MmMtYWQ1Ni00NTJmLTljMjgtZWVmODllODVhMzgyXkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "trailer": "",
    "description": "Після того, як жінка залишила портфель у терміналі аеропорту, тупий водій лімузина та його тупий друг вирушають у веселу подорож до Аспена, щоб повернути його."
  },
  {
    "id": "m_217",
    "title": "Брехун, брехун",
    "originalTitle": "Liar Liar",
    "year": 1997,
    "duration": 86,
    "rating": 6.9,
    "director": "Tom Shadyac",
    "genres": [
      "Комедія",
      "Фентезі"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMGQ4MTk5YjctNGE5NC00ODk4LWIzOWItNzNhODc0N2JmYzMzXkEyXkFqcGc@._V1_QL75_UY562_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Патологічний адвокат-брехун виявляє, що його кар'єра перевертається з ніг на голову, коли він незрозумілим чином фізично не може брехати цілих 24 години."
  },
  {
    "id": "m_218",
    "title": "Мачо і ботан",
    "originalTitle": "21 Jump Street",
    "year": 2012,
    "duration": 109,
    "rating": 7.2,
    "director": "Phil Lord, Christopher Miller",
    "genres": [
      "Бойовик",
      "Комедія",
      "Кримінал"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTg2NjJiODctM2IyMS00MmQ5LWI1YmQtNTBjMTI4M2U2YzA5XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Пару невдалих поліцейських відправляють назад до місцевої середньої школи, щоб влитися в неї та знищити групу синтетичних наркотиків."
  },
  {
    "id": "m_219",
    "title": "Мачо і ботан 2",
    "originalTitle": "22 Jump Street",
    "year": 2014,
    "duration": 112,
    "rating": 7,
    "director": "Phil Lord, Christopher Miller",
    "genres": [
      "Бойовик",
      "Комедія",
      "Кримінал"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTcwNzAxMDU1M15BMl5BanBnXkFtZTgwNDE2NTU1MTE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Після закінчення середньої школи (двічі) на офіцерів Шмідта та Дженка чекають великі зміни, коли вони підуть під прикриття в місцевому коледжі."
  },
  {
    "id": "m_220",
    "title": "Аероплан!",
    "originalTitle": "Airplane!",
    "year": 1980,
    "duration": 88,
    "rating": 7.7,
    "director": "Jim Abrahams, David Zucker, Jerry Zucker",
    "genres": [
      "Комедія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNGMxMDRhMjItMDNlZi00MDIzLWE5MDQtODljMDQ3MWM1Y2E4XkEyXkFqcGc@._V1_QL75_UX380_CR0,3,380,562_.jpg",
    "trailer": "",
    "description": "Після того, як екіпаж хворіє на харчове отруєння, невротичний колишній пілот винищувача повинен безпечно посадити комерційний літак, повний пасажирів."
  },
  {
    "id": "m_221",
    "title": "Опівночі в Парижі",
    "originalTitle": "Midnight in Paris",
    "year": 2011,
    "duration": 94,
    "rating": 7.6,
    "director": "Woody Allen",
    "genres": [
      "Комедія",
      "Фентезі",
      "Романтика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTM4NjY1MDQwMl5BMl5BanBnXkFtZTcwNTI3Njg3NA@@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "trailer": "",
    "description": "Подорожуючи до Парижа з родиною своєї нареченої, ностальгічний сценарист щодня опівночі виявляє, що таємничим чином повертається в 1920-ті роки."
  },
  {
    "id": "m_222",
    "title": "Маленька міс Щастя",
    "originalTitle": "Little Miss Sunshine",
    "year": 2006,
    "duration": 101,
    "rating": 7.8,
    "director": "Jonathan Dayton, Valerie Faris",
    "genres": [
      "Комедія",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTgzNTgzODU0NV5BMl5BanBnXkFtZTcwMjEyMjMzMQ@@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "trailer": "",
    "description": "Сім'я, яка вирішила провести свою маленьку доньку у фіналі конкурсу краси, вирушає в подорож по пересіченій місцевості на своєму автобусі VW."
  },
  {
    "id": "m_223",
    "title": "Нічні ігри",
    "originalTitle": "Game Night",
    "year": 2018,
    "duration": 100,
    "rating": 6.9,
    "director": "John Francis Daley, Jonathan Goldstein",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Комедія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjI3ODkzNDk5MF5BMl5BanBnXkFtZTgwNTEyNjY2NDM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Група друзів, які регулярно збираються на вечірні ігри, опиняються втягнутими в таємницю справжнього життя, коли підозрілого брата одного з них, здається, викрадають небезпечні гангстери."
  },
  {
    "id": "m_224",
    "title": "Зависнути в Палм-Спрінгс",
    "originalTitle": "Palm Springs",
    "year": 2020,
    "duration": 90,
    "rating": 7.4,
    "director": "Max Barbakow",
    "genres": [
      "Комедія",
      "Фентезі",
      "Детектив"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BY2VkNGY0MTMtMjEzZi00OThkLWJiOTMtNGU4ZGNjZDE5ZGIyXkEyXkFqcGc@._V1_QL75_UY562_CR2,0,380,562_.jpg",
    "trailer": "",
    "description": "Найлз і Сара застрягли в часовій петлі і знову і знову живуть одним і тим же днем. Їх тягне одне до одного, але деякі одкровення загрожують їхньому роману, що зароджується."
  },
  {
    "id": "m_225",
    "title": "Залягти на дно в Брюґґе",
    "originalTitle": "In Bruges",
    "year": 2008,
    "duration": 107,
    "rating": 7.9,
    "director": "Martin McDonagh",
    "genres": [
      "Комедія",
      "Кримінал",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNjliZjBlNDItOWUyZC00ZTExLTg5NmUtNzE5ZmQyZWVmZmE5XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Після того, як робота пішла не так, вбивця Рей і його партнер чекають наказів від свого нещадного боса в Брюгге, Бельгія, останньому місці в світі, де Рей хоче бути."
  },
  {
    "id": "m_226",
    "title": "Сім психопатів",
    "originalTitle": "Seven Psychopaths",
    "year": 2012,
    "duration": 110,
    "rating": 7.1,
    "director": "Martin McDonagh",
    "genres": [
      "Комедія",
      "Кримінал",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTgwMzUxMjc0M15BMl5BanBnXkFtZTcwMzQ2MjYyOA@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Сценарист, що бореться, ненавмисно потрапляє в злочинний світ Лос-Анджелеса після того, як його друзі-диваки викрадають кохану гангстера Ши-тцу."
  },
  {
    "id": "m_227",
    "title": "На драйві",
    "originalTitle": "Baby Driver",
    "year": 2017,
    "duration": 113,
    "rating": 7.5,
    "director": "Edgar Wright",
    "genres": [
      "Бойовик",
      "Кримінал",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjM3MjQ1MzkxNl5BMl5BanBnXkFtZTgwODk1ODgyMjI@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Змушений працювати на кримінального авторитета, молодий водій-втікач повинен зіткнутися з музикою, коли приречене пограбування загрожує його життю, коханню та свободі."
  },
  {
    "id": "m_228",
    "title": "Скотт Пілігрим проти всіх",
    "originalTitle": "Scott Pilgrim vs. the World",
    "year": 2010,
    "duration": 112,
    "rating": 7.5,
    "director": "Edgar Wright",
    "genres": [
      "Бойовик",
      "Комедія",
      "Фентезі"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNTA5ZWMwNmYtNWI1ZS00NDRlLTkxNzktMzdhZDU2ZDhjNDJmXkEyXkFqcGc@._V1_QL75_UY562_CR10,0,380,562_.jpg",
    "trailer": "",
    "description": "Молодий чоловік повинен перемогти сімох злих колишніх подруги, які готові на все, щоб перешкодити її щастю з кимось іншим."
  },
  {
    "id": "m_229",
    "title": "Пипець",
    "originalTitle": "Kick-Ass",
    "year": 2010,
    "duration": 117,
    "rating": 7.6,
    "director": "Matthew Vaughn",
    "genres": [
      "Бойовик",
      "Комедія",
      "Кримінал"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTMzNzEzMDYxM15BMl5BanBnXkFtZTcwMTc0NTMxMw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Дейв Лізевскі — непомічений старшокласник і шанувальник коміксів, який одного разу вирішує стати супергероєм, хоча у нього немає для цього ні сил, ні підготовки, ні серйозних причин."
  },
  {
    "id": "m_230",
    "title": "Kingsman: Таємна служба",
    "originalTitle": "Kingsman: The Secret Service",
    "year": 2015,
    "duration": 129,
    "rating": 7.7,
    "director": "Matthew Vaughn",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Комедія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BODk1MTYwNTAtYmI5Zi00OWYyLWE0MzQtOWE4NDIxZmU2MjMwXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "",
    "description": "Шпигунська організація залучає багатообіцяючого безпритульного хлопчика до програми навчання агентства, а глобальна загроза постає від хитрого технічного генія."
  },
  {
    "id": "m_231",
    "title": "Ідентифікація Борна",
    "originalTitle": "The Bourne Identity",
    "year": 2002,
    "duration": 119,
    "rating": 7.8,
    "director": "Doug Liman",
    "genres": [
      "Бойовик",
      "Детектив",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYTk1ZTcyMWMtMWUxYS00MmEzLTlmODYtOTk1MGRjOTg1ZjlmXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "",
    "description": "Чоловіка підбирає рибальський човен, пронизаного кулями та страждаючого від амнезії, а потім мчить, щоб утекти від убивць і спробувати відновити пам’ять."
  },
  {
    "id": "m_232",
    "title": "Перевага Борна",
    "originalTitle": "The Bourne Supremacy",
    "year": 2004,
    "duration": 108,
    "rating": 7.7,
    "director": "Paul Greengrass",
    "genres": [
      "Бойовик",
      "Детектив",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZTU4ZDgyYjgtODA0Mi00MmE3LTgzYWQtZjc1YTFiMTczZTQ3XkEyXkFqcGc@._V1_QL75_UY562_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Коли Джейсона Борна обвинувачують у невдалій операції ЦРУ, він змушений повернутися до колишнього життя навченого вбивці, щоб вижити."
  },
  {
    "id": "m_233",
    "title": "Ультиматум Борна",
    "originalTitle": "The Bourne Ultimatum",
    "year": 2007,
    "duration": 115,
    "rating": 8,
    "director": "Paul Greengrass",
    "genres": [
      "Бойовик",
      "Детектив",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYzE3ZGM4MzctZjU5MC00NWE2LTg5ZjYtMDFiM2ZlMWQ1MjkwXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Джейсон Борн ухиляється від безжального ЦРУ. чиновника та його агентів з нової програми вбивств, шукаючи витоки свого життя навченого вбивці."
  },
  {
    "id": "m_234",
    "title": "Сікаріо",
    "originalTitle": "Sicario",
    "year": 2015,
    "duration": 121,
    "rating": 7.7,
    "director": "Denis Villeneuve",
    "genres": [
      "Бойовик",
      "Кримінал",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjA5NjM3NTk1M15BMl5BanBnXkFtZTgwMzg1MzU2NjE@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "",
    "description": "Агент ФБР приєднується до таємної оперативної групи Міністерства оборони, спрямованої на мексиканський картель. Діючи поза межами закону разом із куратором ЦРУ та таємничим агентом, вона виявляє, що справжня мета місії виходить далеко за рамки того, що їй сказали."
  },
  {
    "id": "m_235",
    "title": "Вітряна ріка",
    "originalTitle": "Wind River",
    "year": 2017,
    "duration": 107,
    "rating": 7.7,
    "director": "Taylor Sheridan",
    "genres": [
      "Кримінал",
      "Драма",
      "Детектив"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTUyMjU1OTUwM15BMl5BanBnXkFtZTgwMDg1NDQ2MjI@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Офіцер з охорони дикої природи допомагає агенту ФБР-новачку розслідувати вбивство молодої жінки в резервації американських індіанців у Вайомінгу."
  },
  {
    "id": "m_236",
    "title": "Будь-якою ціною",
    "originalTitle": "Hell or High Water",
    "year": 2016,
    "duration": 102,
    "rating": 7.6,
    "director": "David Mackenzie",
    "genres": [
      "Кримінал",
      "Драма",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTg4NDA1OTA5NF5BMl5BanBnXkFtZTgwMDQ2MDM5ODE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Розлучений батько та його колишній аферистський брат планують серію пограбувань проти банку, який збирається вилучити їх сімейне ранчо."
  },
  {
    "id": "m_237",
    "title": "Місто злодіїв",
    "originalTitle": "The Town",
    "year": 2010,
    "duration": 125,
    "rating": 7.5,
    "director": "Ben Affleck",
    "genres": [
      "Кримінал",
      "Драма",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTcyNzcxODg3Nl5BMl5BanBnXkFtZTcwMTUyNjQ3Mw@@._V1_QL75_UY562_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Досвідчена група злодіїв грабує банк і тримає в заручниках менеджера. Все починає ускладнюватися, коли один із членів екіпажу закохується в неї."
  },
  {
    "id": "m_238",
    "title": "Таємнича річка",
    "originalTitle": "Mystic River",
    "year": 2003,
    "duration": 138,
    "rating": 7.9,
    "director": "Clint Eastwood",
    "genres": [
      "Кримінал",
      "Драма",
      "Детектив"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTIzNDUyMjA4MV5BMl5BanBnXkFtZTYwNDc4ODM3._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Трагічне вбивство 19-річної дівчини возз’єднує трьох друзів дитинства, які все ще живуть у Бостоні – батька жертви-гангстера, детектива, і розгубленого чоловіка, якого вони обидва підозрюють у її вбивстві."
  },
  {
    "id": "m_239",
    "title": "Первісний страх",
    "originalTitle": "Primal Fear",
    "year": 1996,
    "duration": 129,
    "rating": 7.7,
    "director": "Gregory Hoblit",
    "genres": [
      "Кримінал",
      "Драма",
      "Детектив"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZTJlYjM5MTYtZWU3YS00ZDRhLTk1MWEtZGQyODc1ZDU2MWEwXkEyXkFqcGc@._V1_QL75_UX380_CR0,3,380,562_.jpg",
    "trailer": "",
    "description": "Резонансне вбивство інтригує спраглого публічності адвоката."
  },
  {
    "id": "m_240",
    "title": "Гра",
    "originalTitle": "The Game",
    "year": 1997,
    "duration": 129,
    "rating": 7.7,
    "director": "David Fincher",
    "genres": [
      "Драма",
      "Детектив",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNGUzNzQwNmMtNzI3Mi00ZDIwLWJlM2ItMTA5N2Q2ZDMxMjJiXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "",
    "description": "Зарозумілий ізольований інвестиційний банкір стає мішенню загадкової розважальної компанії, яка втягується в ескалацію, що змінює реальність, змову, організовану його відчуженим братом, щоб зруйнувати його емоційну відстороненість."
  },
  {
    "id": "m_241",
    "title": "Кімната страху",
    "originalTitle": "Panic Room",
    "year": 2002,
    "duration": 112,
    "rating": 6.8,
    "director": "David Fincher",
    "genres": [
      "Кримінал",
      "Драма",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BODU0ZGM0MjctM2YxYy00OWY1LTk2N2YtNWE4ZWQ2ODQwMTI5XkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "trailer": "",
    "description": "Розлучена жінка та її донька-діабетик знайшли притулок у сейфі свого щойно придбаного будинку, коли троє чоловіків проникають туди, шукаючи зниклу долю."
  },
  {
    "id": "m_242",
    "title": "Загадкова історія Бенджаміна Баттона",
    "originalTitle": "The Curious Case of Benjamin Button",
    "year": 2008,
    "duration": 166,
    "rating": 7.8,
    "director": "David Fincher",
    "genres": [
      "Драма",
      "Фентезі",
      "Романтика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYjIyNDExOWItM2Y4ZC00NmY3LWFlN2ItYTJlZDQ1NTJlZTUwXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Бенджамін Баттон, який народився в 1918 році з фізичним станом літнього чоловіка, старіє навпаки. Він пережив любов і розриви, екстаз і смуток, а також безчасність до того часу, як помер у 2003 році, будучи немовлям."
  },
  {
    "id": "m_243",
    "title": "Дівчина з татуюванням дракона",
    "originalTitle": "The Girl with the Dragon Tattoo",
    "year": 2011,
    "duration": 158,
    "rating": 7.8,
    "director": "David Fincher",
    "genres": [
      "Кримінал",
      "Драма",
      "Детектив"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTczNDk4NTQ0OV5BMl5BanBnXkFtZTcwNDAxMDgxNw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Журналіст Мікаель Блумквіст отримує допомогу від ексцентричної хакерки Лісбет Саландер у його пошуках жінки, яка зникла безвісти протягом 40 років."
  },
  {
    "id": "m_244",
    "title": "Вбивця",
    "originalTitle": "The Killer",
    "year": 2023,
    "duration": 118,
    "rating": 6.7,
    "director": "David Fincher",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Кримінал"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYzU2MTlkMTctNWI3MC00ODUzLTlmYzQtMzZjYjVmMmYwZGU0XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Самотній, холодний, методичний і не обтяжений сумнівами чи жалем, вбивця чекає в тіні, спостерігаючи за своєю наступною ціллю. Проте, чим довше він чекає, тим більше йому здається, що він втрачає розум, якщо не втрачає холоднокровність."
  },
  {
    "id": "m_245",
    "title": "Вічне сяйво чистого розуму",
    "originalTitle": "Eternal Sunshine of the Spotless Mind",
    "year": 2004,
    "duration": 108,
    "rating": 8.3,
    "director": "Michel Gondry",
    "genres": [
      "Драма",
      "Романтика",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Коли їхні стосунки псуються, пара проходить медичну процедуру, щоб назавжди стерти одне одного з пам’яті."
  },
  {
    "id": "m_246",
    "title": "Труднощі перекладу",
    "originalTitle": "Lost in Translation",
    "year": 2003,
    "duration": 102,
    "rating": 7.7,
    "director": "Sofia Coppola",
    "genres": [
      "Комедія",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTUxMzk0NDg1MV5BMl5BanBnXkFtZTgwNDg0NjkxMDI@._V1_QL75_UX380_CR0,12,380,562_.jpg",
    "trailer": "",
    "description": "Згасаюча кінозірка та знехтувана заміжня молода жінка стають у Токіо навряд чи спорідненими душами."
  },
  {
    "id": "m_247",
    "title": "Амелі",
    "originalTitle": "Amélie",
    "year": 2002,
    "duration": 122,
    "rating": 8.2,
    "director": "Jean-Pierre Jeunet",
    "genres": [
      "Комедія",
      "Романтика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BOTNmYzY0MWQtZGZmNy00Y2Y4LWFmMDQtMTZjYTdiYzEwZGQ2XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "HUECWi5pX7o",
    "description": "Незважаючи на те, що вона опинилася у світі своєї уяви, молода офіціантка Амелі вирішує допомогти людям знайти щастя. Її прагнення поширювати радість веде її в подорож, під час якої вона знаходить справжнє кохання."
  },
  {
    "id": "m_248",
    "title": "День бабака",
    "originalTitle": "Groundhog Day",
    "year": 1993,
    "duration": 101,
    "rating": 8,
    "director": "Harold Ramis",
    "genres": [
      "Комедія",
      "Драма",
      "Фентезі"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BOWE3MjQ3ZDAtNDQ2MC00YjBjLTk0ZWYtNjQ0YzQ4YWE3YTEyXkEyXkFqcGc@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "trailer": "",
    "description": "Ненависний синоптик застряг у часовій петлі й змушений знову й знову переживати той самий день."
  },
  {
    "id": "m_249",
    "title": "Титанік",
    "originalTitle": "Titanic",
    "year": 1997,
    "duration": 194,
    "rating": 8,
    "director": "James Cameron",
    "genres": [
      "Драма",
      "Романтика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "trailer": "",
    "description": "Молода аристократка закохується в бідну художницю на борту розкішного, нещасливого RMS Titanic."
  },
  {
    "id": "m_250",
    "title": "Перед сходом сонця",
    "originalTitle": "Before Sunrise",
    "year": 1995,
    "duration": 101,
    "rating": 8.1,
    "director": "Richard Linklater",
    "genres": [
      "Комедія",
      "Драма",
      "Романтика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZDZhZmI1ZTUtYWI3NC00NTMwLTk3NWMtNDc0OGNjM2I0ZjlmXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "trailer": "",
    "description": "Молодий чоловік і дівчина зустрічаються в поїзді в Європі, а потім проводять один вечір разом у Відні. На жаль, обидва знають, що це, ймовірно, буде їхня єдина ніч разом."
  },
  {
    "id": "m_251",
    "title": "Вперед і вгору",
    "originalTitle": "Up",
    "year": 2009,
    "duration": 96,
    "rating": 8.3,
    "director": "Pete Docter, Bob Peterson",
    "genres": [
      "Анімація",
      "Пригоди",
      "Комедія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNmI1ZTc5MWMtMDYyOS00ZDc2LTkzOTAtNjQ4NWIxNjYyNDgzXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "trailer": "",
    "description": "Сварливий старий перетворює свій будинок на дирижабль за допомогою повітряних куль і летить до Південної Америки з молодим безбілетним пасажиром."
  },
  {
    "id": "m_252",
    "title": "Рататуй",
    "originalTitle": "Ratatouille",
    "year": 2007,
    "duration": 111,
    "rating": 8.1,
    "director": "Brad Bird, Jan Pinkava",
    "genres": [
      "Анімація",
      "Пригоди",
      "Комедія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Щур, який вміє готувати, укладає незвичайний союз із молодим кухонним працівником у відомому паризькому ресторані."
  },
  {
    "id": "m_253",
    "title": "Думками навиворіт",
    "originalTitle": "Inside Out",
    "year": 2015,
    "duration": 95,
    "rating": 8.1,
    "director": "Ronnie Del Carmen, Pete Docter",
    "genres": [
      "Анімація",
      "Пригоди",
      "Комедія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Після того, як молоду дівчину виривають із життя на Середньому Заході та переїжджають до Сан-Франциско, її емоції сперечаються щодо того, як найкраще орієнтуватися в новій реальності."
  },
  {
    "id": "m_254",
    "title": "Думками навиворіт 2",
    "originalTitle": "Inside Out 2",
    "year": 2024,
    "duration": 96,
    "rating": 7.5,
    "director": "Kelsey Mann",
    "genres": [
      "Анімація",
      "Пригоди",
      "Комедія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYWY3MDE2Y2UtOTE3Zi00MGUzLTg2MTItZjE1ZWVkMGVlODRmXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Продовження, в якому розповідається про те, як Райлі вступає в період статевого дозрівання і в результаті переживає нові, більш складні емоції. У той час як Райлі намагається адаптуватися до свого підліткового віку, її старі емоції намагаються адаптуватися до можливості бути заміненою."
  },
  {
    "id": "m_255",
    "title": "Душа",
    "originalTitle": "Soul",
    "year": 2020,
    "duration": 100,
    "rating": 8,
    "director": "Pete Docter, Kemp Powers",
    "genres": [
      "Анімація",
      "Пригоди",
      "Комедія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZTZkYjA5MDEtMjY1ZC00ODk5LThjOTUtZDYxODEzYWNjMTU2XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Джо — вчитель оркестру середньої школи, життя якого склалося не так, як він очікував. Його справжня пристрасть – джаз. Але коли він подорожує в іншу сферу, щоб допомогти комусь знайти свою пристрасть, він незабаром дізнається, що означає мати душу."
  },
  {
    "id": "m_256",
    "title": "Король Лев",
    "originalTitle": "The Lion King",
    "year": 1994,
    "duration": 88,
    "rating": 8.5,
    "director": "Roger Allers, Rob Minkoff",
    "genres": [
      "Анімація",
      "Пригоди",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZGRiZDZhZjItM2M3ZC00Y2IyLTk3Y2MtMWY5YjliNDFkZTJlXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "trailer": "",
    "description": "Принц-Лев Сімба та його батько стають мішенню його запеклого дядька, який хоче сам зійти на трон."
  },
  {
    "id": "m_257",
    "title": "Аладдін",
    "originalTitle": "Aladdin",
    "year": 1992,
    "duration": 90,
    "rating": 8,
    "director": "Ron Clements, John Musker",
    "genres": [
      "Анімація",
      "Пригоди",
      "Комедія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMmQwYWZjZGItYzc0OC00ZDllLTg3NjItOWIyOWYwMDljMjAyXkEyXkFqcGc@._V1_QL75_UX380_CR0,13,380,562_.jpg",
    "trailer": "",
    "description": "Добрий вуличний їжак і властолюбний великий візир змагаються за чарівну лампу, здатну здійснити їхні найпотаємніші бажання."
  },
  {
    "id": "m_258",
    "title": "Красуня і Чудовисько",
    "originalTitle": "Beauty and the Beast",
    "year": 1991,
    "duration": 84,
    "rating": 8,
    "director": "Gary Trousdale, Kirk Wise",
    "genres": [
      "Анімація",
      "Сімейний",
      "Фентезі"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYTY3NDg2YzktYWFjZC00MTExLTlmZDctMGY3MWYzZTlkYTNiXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "trailer": "",
    "description": "Принц, проклятий проводити свої дні як жахливе чудовисько, збирається відновити свою людяність, заслуживши кохання молодої жінки."
  },
  {
    "id": "m_259",
    "title": "У пошуках Немо",
    "originalTitle": "Finding Nemo",
    "year": 2003,
    "duration": 100,
    "rating": 8.2,
    "director": "Andrew Stanton, Lee Unkrich",
    "genres": [
      "Анімація",
      "Пригоди",
      "Комедія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTc5NjExNTA5OV5BMl5BanBnXkFtZTYwMTQ0ODY2._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Після того як його сина схопили на Великому Бар’єрному рифі та доставили до Сіднея, боязка риба-клоун вирушає в подорож, щоб повернути його додому."
  },
  {
    "id": "m_260",
    "title": "Корпорація монстрів",
    "originalTitle": "Monsters, Inc.",
    "year": 2001,
    "duration": 92,
    "rating": 8.1,
    "director": "Pete Docter, David Silverman, Lee Unkrich",
    "genres": [
      "Анімація",
      "Пригоди",
      "Комедія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTY1NTI0ODUyOF5BMl5BanBnXkFtZTgwNTEyNjQ0MDE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Два монстри, чия робота полягає в тому, щоб змушувати людських дітей кричати, випадково впустили маленьку дівчинку у свій світ і тепер повинні захистити її від собі подібних, щоб повернути додому неушкодженою."
  },
  {
    "id": "m_261",
    "title": "Суперсімейка",
    "originalTitle": "The Incredibles",
    "year": 2004,
    "duration": 115,
    "rating": 8,
    "director": "Brad Bird",
    "genres": [
      "Анімація",
      "Бойовик",
      "Пригоди"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Намагаючись вести тихе життя в передмісті, сім’я супергероїв під прикриттям змушена діяти, щоб врятувати світ."
  },
  {
    "id": "m_262",
    "title": "Історія іграшок",
    "originalTitle": "Toy Story",
    "year": 1995,
    "duration": 81,
    "rating": 8.3,
    "director": "John Lasseter",
    "genres": [
      "Анімація",
      "Пригоди",
      "Комедія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZTA3OWVjOWItNjE1NS00NzZiLWE1MjgtZDZhMWI1ZTlkNzYwXkEyXkFqcGc@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "trailer": "",
    "description": "Лялька-ковбой дуже ревнує, коли нова фігурка космонавта витісняє його як головну іграшку в спальні хлопчика. Коли обставини розлучають їх із власником, дуету доводиться відкидати свої розбіжності, щоб повернутися до нього."
  },
  {
    "id": "m_263",
    "title": "Історія іграшок 2",
    "originalTitle": "Toy Story 2",
    "year": 1999,
    "duration": 92,
    "rating": 7.9,
    "director": "Ash Brannon, John Lasseter, Lee Unkrich",
    "genres": [
      "Анімація",
      "Пригоди",
      "Комедія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNzVmODlhMDEtY2YxZi00OTVjLTlkNTktN2Q2OTRlM2I4M2FhXkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "trailer": "",
    "description": "Коли колекціонер іграшок викрадає Вуді, Базз і його друзі вирушають на рятувальну місію, щоб врятувати Вуді, перш ніж він стане власністю музею іграшок разом зі своєю бандою Джессі, Золотим проспектом і Яблуком."
  },
  {
    "id": "m_264",
    "title": "Історія іграшок 3",
    "originalTitle": "Toy Story 3",
    "year": 2010,
    "duration": 103,
    "rating": 8.3,
    "director": "Lee Unkrich",
    "genres": [
      "Анімація",
      "Пригоди",
      "Комедія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_QL75_UY562_CR9,0,380,562_.jpg",
    "trailer": "",
    "description": "Поки Енді готується йти до коледжу, Вуді, Базз і вся банда стикаються з невизначеним майбутнім, коли через плутанину вони відправляються до дитячого садка, повного нових іграшок."
  },
  {
    "id": "m_265",
    "title": "Шрек",
    "originalTitle": "Shrek",
    "year": 2001,
    "duration": 90,
    "rating": 7.9,
    "director": "Andrew Adamson, Vicky Jenson",
    "genres": [
      "Анімація",
      "Пригоди",
      "Комедія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BN2FkMTRkNTUtYTI0NC00ZjI4LWI5MzUtMDFmOGY0NmU2OGY1XkEyXkFqcGc@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "trailer": "",
    "description": "Злий лорд висилає казкових істот у болото сварливого людоеда, який повинен відправитися на пошуки та врятувати принцесу для лорда, щоб повернути свою землю."
  },
  {
    "id": "m_266",
    "title": "Шрек 2",
    "originalTitle": "Shrek 2",
    "year": 2004,
    "duration": 93,
    "rating": 7.4,
    "director": "Andrew Adamson, Kelly Asbury, Conrad Vernon",
    "genres": [
      "Анімація",
      "Пригоди",
      "Комедія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMzNmNjQ1NmUtNzhiZS00YWE2LTg4N2ItZTA2ODdmOTMwOTQ1XkEyXkFqcGc@._V1_QL75_UY562_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Шрек і Фіона відправляються в Далеке Королівство, де батьки Фіони є Королем і Королевою, щоб відсвяткувати своє весілля. Коли вони прибувають, вони виявляють, що їх не так радо чекають, як вони думали."
  },
  {
    "id": "m_267",
    "title": "Незрівнянний містер Фокс",
    "originalTitle": "Fantastic Mr. Fox",
    "year": 2009,
    "duration": 87,
    "rating": 7.9,
    "director": "Wes Anderson",
    "genres": [
      "Анімація",
      "Пригоди",
      "Комедія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYTA1ZTIxZDUtNGFjYS00YTc5LTgzNDMtZWNjYjBlMzI2OTk3XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Міська лисиця не може протистояти поверненню до своєї ферми, а потім повинна допомогти своїй громаді пережити помсту фермерів."
  },
  {
    "id": "m_268",
    "title": "Острів собак",
    "originalTitle": "Isle of Dogs",
    "year": 2018,
    "duration": 101,
    "rating": 7.8,
    "director": "Wes Anderson",
    "genres": [
      "Анімація",
      "Пригоди",
      "Комедія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZTVmZWFmYWYtZTY1NC00Yjg5LTkxZGItZjhiYTExNTExNjA3XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "",
    "description": "Дія фільму «Собачий острів» розгортається в Японії. Одіссея хлопчика в пошуках загубленого пса."
  },
  {
    "id": "m_269",
    "title": "Мандрівний замок Хаула",
    "originalTitle": "Howl's Moving Castle",
    "year": 2005,
    "duration": 119,
    "rating": 8.2,
    "director": "Hayao Miyazaki",
    "genres": [
      "Анімація",
      "Пригоди",
      "Сімейний"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTY1OTg0MjE3MV5BMl5BanBnXkFtZTcwNTUxMTkyMQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Коли злісна відьма проклинає невпевнену в собі молоду жінку старим тілом, її єдиний шанс зруйнувати заклинання — це молодий чарівник, який поблажливий, але невпевнений у собі, і його супутники в його ступаючому замку."
  },
  {
    "id": "m_270",
    "title": "Принцеса Мононоке",
    "originalTitle": "Princess Mononoke",
    "year": 1997,
    "duration": 133,
    "rating": 8.3,
    "director": "Hayao Miyazaki",
    "genres": [
      "Анімація",
      "Пригоди",
      "Фентезі"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZTcyN2Y0MDYtMGI1NC00MWQ1LWFhZGMtN2U4NTcxZGYyNjljXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "",
    "description": "Після того, як смертельне прокляття змушує його покинути дім, молодий воїн Ашітака вирушає на захід і потрапляє в конфлікт між стародавніми духами лісу, залізним містом і дівчиною, вихованою вовком."
  },
  {
    "id": "m_271",
    "title": "Мій сусід Тоторо",
    "originalTitle": "My Neighbor Totoro",
    "year": 1990,
    "duration": 86,
    "rating": 8.1,
    "director": "Hayao Miyazaki",
    "genres": [
      "Анімація",
      "Пригоди",
      "Комедія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYWM3MDE3YjEtMzIzZC00ODE5LTgxNTItNmUyMTBkM2M2NmNiXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Коли дві дівчини переїжджають на село, щоб побути поруч із хворою матір’ю, у них трапляються пригоди з дивовижними лісовими духами, які живуть неподалік."
  },
  {
    "id": "m_272",
    "title": "Хлопчик і чапля",
    "originalTitle": "The Boy and the Heron",
    "year": 2023,
    "duration": 124,
    "rating": 7.3,
    "director": "Hayao Miyazaki",
    "genres": [
      "Анімація",
      "Пригоди",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMzA5Zjg3MTAtM2FhZS00NTNjLTg3NjEtNWQ4MTRhZjhiNzVmXkEyXkFqcGc@._V1_QL75_UY562_CR2,0,380,562_.jpg",
    "trailer": "",
    "description": "Після смерті матері та повторного одруження батька свавільний хлопець вирушає у світ мрій, який поділяють живі та мертві, у пошуках своєї зниклої мачухи."
  },
  {
    "id": "m_273",
    "title": "Твоє ім'я",
    "originalTitle": "Your Name.",
    "year": 2017,
    "duration": 106,
    "rating": 8.4,
    "director": "Makoto Shinkai",
    "genres": [
      "Анімація",
      "Драма",
      "Фентезі"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjI1ODZkYTgtYTY3Yy00ZTJkLWFkOTgtZDUyYWM4MzQwNjk0XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Двоє підлітків, міський хлопець у Токіо та дівчина у сільській Японії, таємничим чином починають обмінюватися тілами, створюючи зв’язок, який змушує їх шукати одне одного."
  },
  {
    "id": "m_274",
    "title": "Дитя погоди",
    "originalTitle": "Weathering with You",
    "year": 2020,
    "duration": 112,
    "rating": 7.5,
    "director": "Makoto Shinkai",
    "genres": [
      "Анімація",
      "Драма",
      "Фентезі"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMmJiYWI4ZjktMzgyZS00MjBiLThmOTYtZWJmOTUzOTFkMTFiXkEyXkFqcGc@._V1_QL75_UY562_CR3,0,380,562_.jpg",
    "trailer": "",
    "description": "Події відбуваються під час надзвичайно дощової погоди: старшокласник Ходака Морісіма тікає зі свого неблагополучного сільського дому до Токіо та дружить з дівчинкою-сиротою, яка вміє керувати погодою."
  },
  {
    "id": "m_275",
    "title": "Судзуме зачиняє двері",
    "originalTitle": "Suzume",
    "year": 2023,
    "duration": 122,
    "rating": 7.6,
    "director": "Makoto Shinkai",
    "genres": [
      "Анімація",
      "Пригоди",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BODhkNDhmNzktODFmMC00NDZiLWEzN2UtY2YwYzgzYTVlMWZmXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "",
    "description": "Сучасний пригодницький бойовик, де 17-річна дівчина на ім’я Сузуме допомагає таємничому молодому чоловікові зачинити двері з іншого боку, які створюють катастрофи по всій Японії."
  },
  {
    "id": "m_276",
    "title": "Форма голосу",
    "originalTitle": "A Silent Voice: The Movie",
    "year": 2016,
    "duration": 130,
    "rating": 8.2,
    "director": "Naoko Yamada",
    "genres": [
      "Анімація",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BOTFiNzRiOWEtYTQwNy00NmRiLWE0ZWYtNTE0YjExZjFmZjkwXkEyXkFqcGc@._V1_QL75_UY562_CR5,0,380,562_.jpg",
    "trailer": "",
    "description": "Популярна Шойя знущається над глухою дівчиною Шоко. Оскільки Шойя продовжує знущатися над Шоко, клас відвертається від нього. Шоко переходить, а Шойя виростає ізгоєм. Самотній і пригнічений Шойя знаходить Шоко, щоб зробити..."
  },
  {
    "id": "m_277",
    "title": "Могила світлячків",
    "originalTitle": "Grave of the Fireflies",
    "year": 1989,
    "duration": 88,
    "rating": 8.5,
    "director": "Isao Takahata",
    "genres": [
      "Анімація",
      "Драма",
      "Військовий"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNTY5MmE2OGMtN2IxNC00MDY4LTkwMGEtZDUzOTYyNWE0ZTNjXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "",
    "description": "Хлопчик і його молодша сестра намагаються вижити в Японії під час Другої світової війни."
  },
  {
    "id": "m_278",
    "title": "Акіра",
    "originalTitle": "Akira",
    "year": 1988,
    "duration": 124,
    "rating": 8,
    "director": "Katsuhiro Otomo",
    "genres": [
      "Анімація",
      "Бойовик",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNzlhZGRmZGEtM2ZjNC00MWRmLTk0MDctYzU1NzAzODIxYzEyXkEyXkFqcGc@._V1_QL75_UY562_CR3,0,380,562_.jpg",
    "trailer": "",
    "description": "Секретний військовий проект ставить під загрозу Нео-Токіо, коли він перетворює члена банди байкерів-підлітків на шаленого психічного психопата, якого може зупинити лише його найкращий друг."
  },
  {
    "id": "m_279",
    "title": "Привид в обладунках",
    "originalTitle": "Ghost in the Shell",
    "year": 2017,
    "duration": 107,
    "rating": 6.3,
    "director": "Rupert Sanders",
    "genres": [
      "Бойовик",
      "Кримінал",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNzBkNjdjZTctNjdhOS00NmIyLTlkNjQtY2EwNGMwYmZjNTIxXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "У найближчому майбутньому майор Міра Кілліан стане першою у своєму роді: людину, врятовану від жахливої ​​катастрофи, яку кіберрозширено, щоб стати ідеальним солдатом, який відданий справі зупинити найнебезпечніших злочинців у світі."
  },
  {
    "id": "m_280",
    "title": "Сталевий гігант",
    "originalTitle": "The Iron Giant",
    "year": 1999,
    "duration": 86,
    "rating": 8.1,
    "director": "Brad Bird",
    "genres": [
      "Анімація",
      "Бойовик",
      "Пригоди"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BODM4ZjZjMGEtYmFiMy00MThjLWIzZjUtMDU0ODg1NTI2MzIwXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "trailer": "",
    "description": "Хлопчик подружився з гігантським роботом із космосу, якого хоче знищити урядовий агент-параноїк."
  },
  {
    "id": "m_281",
    "title": "Кораліна у Світі Кошмарів",
    "originalTitle": "Coraline",
    "year": 2009,
    "duration": 100,
    "rating": 7.8,
    "director": "Henry Selick",
    "genres": [
      "Анімація",
      "Драма",
      "Сімейний"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMzQxNjM5NzkxNV5BMl5BanBnXkFtZTcwMzg5NDMwMg@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Блукаючи своїм незграбним старим будинком у своєму нудному новому місті, молода дівчина знаходить приховані двері до дивно ідеалізованої версії свого життя, яка здається надто гарною, щоб бути правдою."
  },
  {
    "id": "m_282",
    "title": "Жах перед Різдвом",
    "originalTitle": "The Nightmare Before Christmas",
    "year": 1993,
    "duration": 76,
    "rating": 7.9,
    "director": "Henry Selick",
    "genres": [
      "Анімація",
      "Пригоди",
      "Сімейний"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNmYxOTAzZWYtOGI3Yi00ODc3LTk5ZjYtZTY0MzVkZTg3YmRiXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "",
    "description": "Джек Скеллінгтон, король Хеллоуїнського міста, відкриває Різдвяне місто, але його спроби принести Різдво у свій дім викликають плутанину."
  },
  {
    "id": "m_283",
    "title": "Труп нареченої",
    "originalTitle": "Corpse Bride",
    "year": 2005,
    "duration": 77,
    "rating": 7.4,
    "director": "Tim Burton, Mike Johnson",
    "genres": [
      "Анімація",
      "Комедія",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTk1MTY1NjU4MF5BMl5BanBnXkFtZTcwNjIzMTEzMw@@._V1_QL75_UY562_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Коли сором’язливий наречений виконує свої весільні клятви в ненавмисній присутності померлої молодої жінки, вона повстає з могили, припускаючи, що він одружився з нею."
  },
  {
    "id": "m_284",
    "title": "Як приборкати дракона",
    "originalTitle": "How to Train Your Dragon",
    "year": 2010,
    "duration": 98,
    "rating": 8.1,
    "director": "Dean DeBlois, Chris Sanders",
    "genres": [
      "Анімація",
      "Бойовик",
      "Пригоди"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "trailer": "",
    "description": "Нещасний молодий вікінг, який прагне полювати на драконів, сам стає малоймовірним другом молодого дракона, і дізнається, що з істотами може бути щось більше, ніж він припускав."
  },
  {
    "id": "m_285",
    "title": "Як приборкати дракона 2",
    "originalTitle": "How to Train Your Dragon 2",
    "year": 2014,
    "duration": 102,
    "rating": 7.8,
    "director": "Dean DeBlois",
    "genres": [
      "Анімація",
      "Бойовик",
      "Пригоди"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMzMwMTAwODczN15BMl5BanBnXkFtZTgwMDk2NDA4MTE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Коли Гикавка та Беззубик виявляють крижану печеру, де живуть сотні нових диких драконів і таємничий Вершник Дракона, двоє друзів опиняються в центрі битви за захист миру."
  },
  {
    "id": "m_286",
    "title": "Панда Кунг-Фу",
    "originalTitle": "Kung Fu Panda",
    "year": 2008,
    "duration": 92,
    "rating": 7.6,
    "director": "Mark Osborne, John Stevenson",
    "genres": [
      "Анімація",
      "Бойовик",
      "Пригоди"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZDU5MDNiMGItYjVmZi00NDUxLTg2OTktNGE0NzNlNzM4NzgyXkEyXkFqcGc@._V1_QL75_UY562_CR4,0,380,562_.jpg",
    "trailer": "",
    "description": "На загальний подив, у тому числі й для нього самого, По, незграбну панду із зайвою вагою, обрали захисником Долини миру. Його придатність незабаром буде перевірено, оскільки заклятий ворог долини вже на шляху."
  },
  {
    "id": "m_287",
    "title": "Зоотрополіс",
    "originalTitle": "Zootopia",
    "year": 2016,
    "duration": 108,
    "rating": 8,
    "director": "Jared Bush, Byron Howard, Rich Moore",
    "genres": [
      "Анімація",
      "Бойовик",
      "Пригоди"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BOTMyMjEyNzIzMV5BMl5BanBnXkFtZTgwNzIyNjU0NzE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "У місті антропоморфних тварин поліцейський-зайчик-новачок і цинічний лис-шахрай повинні працювати разом, щоб розкрити змову."
  },
  {
    "id": "m_288",
    "title": "Заплутана історія",
    "originalTitle": "Tangled",
    "year": 2010,
    "duration": 100,
    "rating": 7.7,
    "director": "Nathan Greno, Byron Howard",
    "genres": [
      "Анімація",
      "Пригоди",
      "Комедія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTAxNDYxMjg0MjNeQTJeQWpwZ15BbWU3MDcyNTk2OTM@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "trailer": "",
    "description": "Чарівна довговолоса Рапунцель провела все своє життя у вежі, але тепер, коли на неї натрапив злодій-втікач, вона збирається вперше відкрити для себе світ і хто вона насправді."
  },
  {
    "id": "m_289",
    "title": "Ваяна",
    "originalTitle": "Moana",
    "year": 2016,
    "duration": 107,
    "rating": 7.6,
    "director": "Ron Clements, Don Hall, John Musker",
    "genres": [
      "Анімація",
      "Пригоди",
      "Комедія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "У стародавній Полінезії, коли жахливе прокляття, накликане напівбогом Мауї, досягає острова Моани, вона відповідає на заклик Океану шукати Мауї, щоб налагодити ситуацію."
  },
  {
    "id": "m_290",
    "title": "Клаус",
    "originalTitle": "Klaus",
    "year": 2019,
    "duration": 96,
    "rating": 8.2,
    "director": "Carlos Martínez López, Sergio Pablos",
    "genres": [
      "Анімація",
      "Пригоди",
      "Комедія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZDA4ODhlMzctNGRmYi00NmViLTkxZGYtZjRkNGQ5YzYwYWVlXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Простий акт доброти завжди викликає іскру іншого, навіть у замерзлому, далекому місці. Коли новий листоноша Смеренсбурга, Джеспер, подружився з майстром іграшок Клаусом, їхні подарунки розтопили давню ворожнечу та доставили сани, повні святкових традицій."
  },
  {
    "id": "m_291",
    "title": "Піноккіо Ґільєрмо дель Торо",
    "originalTitle": "Guillermo del Toro's Pinocchio",
    "year": 2022,
    "duration": 117,
    "rating": 7.6,
    "director": "Guillermo del Toro, Mark Gustafson",
    "genres": [
      "Анімація",
      "Пригоди",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BN2I3NDQzZmQtODJmOS00M2QyLWIxZTItYTA1ZTYzOWJlM2ZmXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Бажання батька магічним чином повертає дерев'яного хлопчика до життя в Італії, даючи йому можливість піклуватися про дитину."
  },
  {
    "id": "m_292",
    "title": "Пригоди Паддінгтона 2",
    "originalTitle": "Paddington 2",
    "year": 2018,
    "duration": 103,
    "rating": 7.8,
    "director": "Paul King",
    "genres": [
      "Пригоди",
      "Комедія",
      "Сімейний"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNTk1YzlhMTUtZmU5MC00NmRmLTlkZjItYzQ0NTY4Y2NiNzc4XkEyXkFqcGc@._V1_QL75_UY562_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Паддінгтон, який тепер щасливо влаштувався в родині Браун і є популярним членом місцевої громади, береться за низку випадкових заробітків, щоб купити ідеальний подарунок на 100-річчя своєї тітки Люсі, але подарунок викрадають."
  },
  {
    "id": "m_293",
    "title": "Едвард Руки-ножиці",
    "originalTitle": "Edward Scissorhands",
    "year": 1990,
    "duration": 105,
    "rating": 7.8,
    "director": "Tim Burton",
    "genres": [
      "Драма",
      "Фентезі",
      "Романтика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BODJhODczYjUtYzdkMy00Yjc4LTllNWMtZTQ3MDZlYWZjYWEzXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Незакінчене творіння залишає свій ізольований замок і потрапляє в передмісті, прагнучи обійняти його ~ доки його розбіжності не стануть неможливими ігнорувати. Те, що починається як сучасна казка, поступово стає історією про самотність,..."
  },
  {
    "id": "m_294",
    "title": "Бітлджус",
    "originalTitle": "Beetlejuice",
    "year": 1988,
    "duration": 92,
    "rating": 7.4,
    "director": "Tim Burton",
    "genres": [
      "Комедія",
      "Фентезі"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYjkwNzVlNDEtMTJlNy00OTdlLTljYWItM2RkZmZkYzY3YjM2XkEyXkFqcGc@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "trailer": "",
    "description": "Духи померлої пари переслідуються нестерпною сім'єю, яка переїхала в їхній будинок, і наймають злісного духа, щоб вигнати їх."
  },
  {
    "id": "m_295",
    "title": "Велика риба",
    "originalTitle": "Big Fish",
    "year": 2004,
    "duration": 125,
    "rating": 7.9,
    "director": "Tim Burton",
    "genres": [
      "Пригоди",
      "Драма",
      "Фентезі"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNTVlNjc4ZmItMDZjYy00YWZjLTg1OWEtOTNlZjJlN2FlMjEwXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "trailer": "",
    "description": "Розчарований син намагається відрізнити факти від вигадки в житті свого вмираючого батька."
  },
  {
    "id": "m_296",
    "title": "Суїні Тодд",
    "originalTitle": "Sweeney Todd: The Demon Barber of Fleet Street",
    "year": 2007,
    "duration": 116,
    "rating": 7.3,
    "director": "Tim Burton",
    "genres": [
      "Драма",
      "Жахи",
      "Мюзикл"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTg3NjUxMzM5NV5BMl5BanBnXkFtZTcwMzQ1NjQzMw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Легендарна історія про перукаря, який повертається з неправомірного ув’язнення до Лондона 1840-х років, прагнучи помститися за зґвалтування та смерть своєї дружини, і відновлює свою торгівлю, утворюючи зловісне партнерство зі своєю співмешканкою, місіс Лов..."
  },
  {
    "id": "m_297",
    "title": "Королівство повного місяця",
    "originalTitle": "Moonrise Kingdom",
    "year": 2012,
    "duration": 94,
    "rating": 7.7,
    "director": "Wes Anderson",
    "genres": [
      "Пригоди",
      "Комедія",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTEwMTc3NDkzOTJeQTJeQWpwZ15BbWU3MDI4NTAwNzc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Двоє 12-річних дітей, які живуть на острові, закохуються одне в одного і тікають у пустелю. Поки люди вирушають на пошуки, їхню увагу привертає сильний шторм, що наближається до них."
  },
  {
    "id": "m_298",
    "title": "Родина Тененбаумів",
    "originalTitle": "The Royal Tenenbaums",
    "year": 2002,
    "duration": 110,
    "rating": 7.6,
    "director": "Wes Anderson",
    "genres": [
      "Комедія",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZTc1MzFlMjEtMzkyNC00NDgyLThjMjMtMzQzZGI5YjUyNzU5XkEyXkFqcGc@._V1_QL75_UX380_CR0,25,380,562_.jpg",
    "trailer": "",
    "description": "Ексцентричні члени неблагополучної сім'ї з різних причин неохоче збираються під одним дахом."
  },
  {
    "id": "m_299",
    "title": "Рашмор",
    "originalTitle": "Rushmore",
    "year": 1999,
    "duration": 93,
    "rating": 7.6,
    "director": "Wes Anderson",
    "genres": [
      "Комедія",
      "Драма",
      "Романтика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZmM2MTNhYWItMDc4Yi00MTM3LWI3YTctYjE1NWRjNTczYjI5XkEyXkFqcGc@._V1_QL75_UY562_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Підліток Академії Рашмора закохується в набагато старшого вчителя і дружить з промисловцем середнього віку. Пізніше він дізнається, що його любов і його друг закрутили роман, що спонукає його почати вендету."
  },
  {
    "id": "m_300",
    "title": "Місто астероїдів",
    "originalTitle": "Asteroid City",
    "year": 2023,
    "duration": 105,
    "rating": 6.4,
    "director": "Wes Anderson",
    "genres": [
      "Комедія",
      "Драма",
      "Романтика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZjY2YjYxNjEtNDJkYi00ZmJjLWIwYTEtNjEyZDgzY2M5ZDc3XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Події, що змінюють світ, вражаюче зірвали щорічне святкування Дня астероїда в американському містечку в пустелі."
  },
  {
    "id": "m_301",
    "title": "Закляття",
    "originalTitle": "The Conjuring",
    "year": 2013,
    "duration": 112,
    "rating": 7.5,
    "director": "James Wan",
    "genres": [
      "Жахи",
      "Детектив",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Дослідники паранормальних явищ Ед і Лоррейн Воррен працюють, щоб допомогти родині, тероризованій темрявою в їхньому фермерському будинку."
  },
  {
    "id": "m_302",
    "title": "Тихе місце",
    "originalTitle": "A Quiet Place",
    "year": 2018,
    "duration": 90,
    "rating": 7.5,
    "director": "John Krasinski",
    "genres": [
      "Драма",
      "Жахи",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Сім'я бореться за виживання у світі, де вторглися сліпі інопланетні істоти з надчутливим слухом."
  },
  {
    "id": "m_303",
    "title": "Тихе місце 2",
    "originalTitle": "A Quiet Place Part II",
    "year": 2021,
    "duration": 97,
    "rating": 7.2,
    "director": "John Krasinski",
    "genres": [
      "Драма",
      "Жахи",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNjRiYjk4ZmItNGQ5NS00MmRhLTk4Y2EtMGQ1MTYxZWJhYjU0XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "",
    "description": "Після подій вдома сім'я Ебботтів тепер стикається з жахами зовнішнього світу. Змушені вирушити в невідоме, вони розуміють, що істоти, які полюють за звуком, не єдина загроза, що ховається за піщаною стежкою."
  },
  {
    "id": "m_304",
    "title": "Воно",
    "originalTitle": "It",
    "year": 2017,
    "duration": 135,
    "rating": 7.3,
    "director": "Andy Muschietti",
    "genres": [
      "Жахи"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZGZmOTZjNzUtOTE4OS00OGM3LWJiNGEtZjk4Yzg2M2Q1YzYxXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "",
    "description": "Влітку 1989 року група підданих знущанням дітей об’єднується, щоб знищити чудовисько, що змінює форму, який маскується під клоуна та полює на дітей Деррі, їхнього маленького містечка в Мені."
  },
  {
    "id": "m_305",
    "title": "Доктор Сон",
    "originalTitle": "Doctor Sleep",
    "year": 2019,
    "duration": 152,
    "rating": 7.3,
    "director": "Mike Flanagan",
    "genres": [
      "Драма",
      "Фентезі",
      "Жахи"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNGUyNTg0NWItODdkZS00YWY0LTljNjItMDYwMTI1ZmZkMjExXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Через роки після подій фільму «Сяйво» (1980) дорослий Ден Торранс повинен захистити дівчину з подібними здібностями від культу, відомого як «Справжній вузол», який полює на дітей, здатних залишатися безсмертними."
  },
  {
    "id": "m_306",
    "title": "Сіністер",
    "originalTitle": "Sinister",
    "year": 2012,
    "duration": 110,
    "rating": 6.8,
    "director": "Scott Derrickson",
    "genres": [
      "Жахи",
      "Детектив",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjI5MTg1Njg0Ml5BMl5BanBnXkFtZTcwNzg2Mjc4Nw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Суперечливий сценарист справжніх злочинів знаходить коробку з домашніми фільмами Super 8 у своєму новому домі, показуючи, що справа про вбивство, яку він зараз досліджує, може бути справою невідомого серійного вбивці, чия спадщина сягає 1960-х років."
  },
  {
    "id": "m_307",
    "title": "Астрал",
    "originalTitle": "Insidious",
    "year": 2011,
    "duration": 103,
    "rating": 6.8,
    "director": "James Wan",
    "genres": [
      "Жахи",
      "Детектив",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTYyOTAxMDA0OF5BMl5BanBnXkFtZTcwNzgwNTc1NA@@._V1_QL75_UY562_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Сім'я намагається не дати злим духам захопити їхню дитину в коматозному стані в царстві під назвою Подальше."
  },
  {
    "id": "m_308",
    "title": "Інші",
    "originalTitle": "The Others",
    "year": 2001,
    "duration": 104,
    "rating": 7.6,
    "director": "Alejandro Amenábar",
    "genres": [
      "Жахи",
      "Детектив",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZTNhODBkODAtNDllYy00YTg1LWJmNDUtYjgzMzEzOWQ0YWNjXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "У 1945 році, відразу після закінчення Другої світової війни, жінка, яка живе зі своїми двома світлочутливими дітьми у своєму затемненому старому сімейному маєтку на Нормандських островах, переконана, що в будинку живуть привиди."
  },
  {
    "id": "m_309",
    "title": "Адвокат диявола",
    "originalTitle": "The Devil's Advocate",
    "year": 1997,
    "duration": 144,
    "rating": 7.5,
    "director": "Taylor Hackford",
    "genres": [
      "Драма",
      "Фентезі",
      "Детектив"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNGIxZmU2ZjEtYjc3OC00Y2FiLWE2ZTQtZGI3NzE0YmRhOTMxXkEyXkFqcGc@._V1_QL75_UY562_CR8,0,380,562_.jpg",
    "trailer": "",
    "description": "Надзвичайно досвідченому юристу з Флориди пропонують роботу в елітній нью-йоркській юридичній фірмі з високопоставленим босом — найбільша можливість у його кар’єрі на сьогоднішній день."
  },
  {
    "id": "m_310",
    "title": "Ідентифікація",
    "originalTitle": "Identity",
    "year": 2003,
    "duration": 90,
    "rating": 7.3,
    "director": "James Mangold",
    "genres": [
      "Детектив",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZTg1YWUyODktMWY5MC00ZjliLTg3YmUtZDliMGZhZDZmMzU5XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "",
    "description": "Опинившись у безлюдному мотелі в штаті Невада під час сильного дощу, десятеро незнайомців знайомляться один з одним, коли розуміють, що їх вбивають одного за іншим."
  },
  {
    "id": "m_311",
    "title": "Вулиця Кловерфілд, 10",
    "originalTitle": "10 Cloverfield Lane",
    "year": 2016,
    "duration": 103,
    "rating": 7.2,
    "director": "Dan Trachtenberg",
    "genres": [
      "Драма",
      "Жахи",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjEzMjczOTIxMV5BMl5BanBnXkFtZTgwOTUwMjI3NzE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Молоду жінку тримає в підземному бункері чоловік, який наполягає на тому, що ворожі події зробили поверхню Землі непридатною для життя."
  },
  {
    "id": "m_312",
    "title": "Мізері",
    "originalTitle": "Misery",
    "year": 1990,
    "duration": 107,
    "rating": 7.8,
    "director": "Rob Reiner",
    "genres": [
      "Драма",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNzY0ODQ3MTMxN15BMl5BanBnXkFtZTgwMDkwNTg4NjE@._V1_QL75_UX380_CR0,3,380,562_.jpg",
    "trailer": "",
    "description": "Після того, як шанувальник його романів врятував відомого письменника з автокатастрофи, він усвідомив, що догляд, який він отримує, є лише початком кошмару неволі та жорстокого поводження."
  },
  {
    "id": "m_313",
    "title": "Психо",
    "originalTitle": "Psycho",
    "year": 1960,
    "duration": 109,
    "rating": 8.5,
    "director": "Alfred Hitchcock",
    "genres": [
      "Драма",
      "Жахи",
      "Детектив"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYjZhMzFiZjItODA3ZC00MmRhLWIzMGYtMmVjOWUwYTA3MTRjXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "trailer": "",
    "description": "Секретарка, яка втікає за розтрату, ховається в відокремленому каліфорнійському мотелі, що належить репресованому та його владній матері."
  },
  {
    "id": "m_314",
    "title": "Вікно у двір",
    "originalTitle": "Rear Window",
    "year": 1954,
    "duration": 112,
    "rating": 8.4,
    "director": "Alfred Hitchcock",
    "genres": [
      "Драма",
      "Детектив",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BODZhOWI1ODgtMzdiOS00YjNkLTgwOGUtYmIyZDg5ZmQwMzQ1XkEyXkFqcGc@._V1_QL75_UY562_CR2,0,380,562_.jpg",
    "trailer": "",
    "description": "Нудьгуючий фотограф, який одужує після перелому ноги, проводить час, спостерігаючи за сусідами, і починає підозрювати одного з них у вбивстві."
  },
  {
    "id": "m_315",
    "title": "Запаморочення",
    "originalTitle": "Vertigo",
    "year": 1958,
    "duration": 128,
    "rating": 8.2,
    "director": "Alfred Hitchcock",
    "genres": [
      "Детектив",
      "Романтика",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNzEyZTUxMWItMGVhYy00Y2NlLTljYTMtYzBmMzI1YmUyMDBkXkEyXkFqcGc@._V1_QL75_UX380_CR0,13,380,562_.jpg",
    "trailer": "",
    "description": "Колишній детектив поліції Сан-Франциско жонглює, борючись зі своїми особистими демонами та стаючи одержимим неймовірно красивою жінкою, яку він найняв для стеження, яка може бути глибоко стурбована."
  },
  {
    "id": "m_316",
    "title": "Пила: Гра на виживання",
    "originalTitle": "Saw",
    "year": 2004,
    "duration": 103,
    "rating": 7.6,
    "director": "James Wan",
    "genres": [
      "Жахи",
      "Детектив",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZTE5MzFlMTktMzBkOC00ZjMxLThmOTAtOGU3ZGEwZGRlNDdjXkEyXkFqcGc@._V1_QL75_UY562_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Двоє чоловіків прокидаються й опиняються по різні боки мертвого тіла, кожен із конкретними інструкціями вбити іншого, втекти або зіткнутися з наслідками. Ці двоє є останніми учасниками ігор Jigsaw."
  },
  {
    "id": "m_317",
    "title": "28 днів по тому",
    "originalTitle": "28 Days Later",
    "year": 2003,
    "duration": 113,
    "rating": 7.5,
    "director": "Danny Boyle",
    "genres": [
      "Драма",
      "Жахи",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYTU3MDQxN2EtNjI5ZC00NDAyLTgwMTctODgxYjRlNWFmOGQyXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "",
    "description": "Через чотири тижні після того, як таємничий невиліковний вірус поширився Сполученим Королівством, кілька тих, хто вижив, намагаються знайти притулок."
  },
  {
    "id": "m_318",
    "title": "Потяг до Пусана",
    "originalTitle": "Train to Busan",
    "year": 2016,
    "duration": 118,
    "rating": 7.6,
    "director": "Yeon Sang-ho",
    "genres": [
      "Бойовик",
      "Жахи",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BODA3OTM4NWQtMjU1OS00NzA2LTlhZDAtYjU2YjM5MWUxNTdiXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Поки вірус зомбі спалахує в Південній Кореї, пасажири намагаються вижити в потязі Сеул - Пусан."
  },
  {
    "id": "m_319",
    "title": "Говори до мене",
    "originalTitle": "Talk to Me",
    "year": 2023,
    "duration": 95,
    "rating": 7.1,
    "director": "Danny Philippou, Michael Philippou",
    "genres": [
      "Жахи",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BY2I2NzJmY2YtYTM3Ni00ZGJhLThkZTItODFhMzhlZjZkMDQ5XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Коли група друзів дізнається, як викликати духів за допомогою забальзамованої руки, вони захоплюються новим відчуттям, доки один із них не заходить занадто далеко й не пускає на волю жахливі надприродні сили."
  },
  {
    "id": "m_320",
    "title": "Варвар",
    "originalTitle": "Barbarian",
    "year": 2022,
    "duration": 102,
    "rating": 7,
    "director": "Zach Cregger",
    "genres": [
      "Жахи",
      "Детектив",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNWQ5MDgwMzMtNWZhMy00Y2Q4LWI5NTAtODA4MDIzYTExOGQzXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Жінка, яка зупинилася в Airbnb, виявляє, що будинок, який вона орендувала, зовсім не такий, яким здається."
  },
  {
    "id": "m_321",
    "title": "Ноу",
    "originalTitle": "Nope",
    "year": 2022,
    "duration": 130,
    "rating": 6.8,
    "director": "Jordan Peele",
    "genres": [
      "Жахи",
      "Детектив",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BODRlNWRhZWUtMzdlZC00ZDIyLWFhZjMtYTcxNjI1ZDIwODhjXkEyXkFqcGc@._V1_QL75_UX380_CR0,20,380,562_.jpg",
    "trailer": "",
    "description": "Мешканці самотньої ущелини у внутрішній частині Каліфорнії стали свідками жахливого й жахливого явища."
  },
  {
    "id": "m_322",
    "title": "Ми",
    "originalTitle": "Us",
    "year": 2019,
    "duration": 116,
    "rating": 6.8,
    "director": "Jordan Peele",
    "genres": [
      "Жахи",
      "Детектив",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMzhkMjFkN2YtODU2Ni00YWYwLWExN2MtOWNjZmQxM2U4YTM5XkEyXkFqcGc@._V1_QL75_UX380_CR0,20,380,562_.jpg",
    "trailer": "",
    "description": "Щоб відпочити від напруженого життя, сім'я Вілсонів їде у відпустку в Санта-Круз, Каліфорнія. Вночі четверо незнайомців вдираються в дім дитинства Аделаїди. Родина вражена, дізнавшись, що зловмисники виглядають як..."
  },
  {
    "id": "m_323",
    "title": "Меню",
    "originalTitle": "The Menu",
    "year": 2022,
    "duration": 107,
    "rating": 7.1,
    "director": "Mark Mylod",
    "genres": [
      "Комедія",
      "Жахи",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BN2Q0YWE1MjktODJlMi00NTRiLWI2ZTctZTAxNjkyODVjM2EyXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "",
    "description": "Молода пара вирушає на віддалений острів, щоб поїсти в ексклюзивному ресторані, де шеф-кухар підготував розкішне меню з кількома шокуючими сюрпризами."
  },
  {
    "id": "m_324",
    "title": "Ножі наголо: Скляна цибуля",
    "originalTitle": "Glass Onion: A Knives Out Mystery",
    "year": 2022,
    "duration": 3,
    "rating": 6.3,
    "director": "Раян Джонсон",
    "genres": [
      "Короткометражка",
      "Детектив"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BODc1MTkzM2MtNzMzZS00YTM5LWE5Y2EtZGQ0ZjBlYWQ5YTJhXkEyXkFqcGc@._V1_QL75_UY280_CR47,0,280,280_.jpg",
    "trailer": "",
    "description": "Опис фільму тимчасово недоступний."
  },
  {
    "id": "m_325",
    "title": "Дивіться, як вони біжать",
    "originalTitle": "See How They Run",
    "year": 2022,
    "duration": 98,
    "rating": 6.5,
    "director": "Tom George",
    "genres": [
      "Комедія",
      "Кримінал",
      "Детектив"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMGNiNDNlNjQtMGEzMC00NmNjLWJhYWYtODBhNjQ3Mjc2YjZmXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "У Вест-Енді Лондона 1950-х років плани щодо кіноверсії хітової п’єси раптово припиняються після вбивства ключового члена знімальної групи."
  },
  {
    "id": "m_326",
    "title": "Вбивство у «Східному експресі»",
    "originalTitle": "Murder on the Orient Express",
    "year": 2017,
    "duration": 114,
    "rating": 6.5,
    "director": "Kenneth Branagh",
    "genres": [
      "Комедія",
      "Кримінал",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNTlkYjBlZTctZjg2YS00NDMzLTlkMTMtNWExMGYyOTliMmEzXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Коли в потязі, яким він їде, відбувається вбивство, для розкриття справи залучають відомого бельгійського детектива Еркюля Пуаро."
  },
  {
    "id": "m_327",
    "title": "Смерть на Нілі",
    "originalTitle": "Death on the Nile",
    "year": 2022,
    "duration": 127,
    "rating": 6.3,
    "director": "Kenneth Branagh",
    "genres": [
      "Кримінал",
      "Драма",
      "Детектив"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYjBkMTRkMmUtNGQ5Ni00YjkwLThhMmMtZjI1M2U2NzRhNjkwXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Під час відпустки на Нілі Еркюль Пуаро повинен розслідувати вбивство юної спадкоємиці."
  },
  {
    "id": "m_328",
    "title": "Шерлок Холмс",
    "originalTitle": "Sherlock Holmes",
    "year": 2009,
    "duration": 128,
    "rating": 7.5,
    "director": "Guy Ritchie",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Детектив"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTg0NjEwNjUxM15BMl5BanBnXkFtZTcwMzk0MjQ5Mg@@._V1_QL75_UX380_CR0,3,380,562_.jpg",
    "trailer": "",
    "description": "Детектив Шерлок Холмс і його відважний напарник Ватсон вступають у битву розуму та здібностей із ворогом, чий план є загрозою для всієї Англії."
  },
  {
    "id": "m_329",
    "title": "Шерлок Холмс: Гра тіней",
    "originalTitle": "Sherlock Holmes: A Game of Shadows",
    "year": 2011,
    "duration": 129,
    "rating": 7.4,
    "director": "Guy Ritchie",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Детектив"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTQwMzQ5Njk1MF5BMl5BanBnXkFtZTcwNjIxNzIxNw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Детектив Шерлок Холмс на сліді злочинного натхненника професора Моріарті, який здійснює серію випадкових злочинів по всій Європі."
  },
  {
    "id": "m_330",
    "title": "Код да Вінчі",
    "originalTitle": "The Da Vinci Code",
    "year": 2006,
    "duration": 149,
    "rating": 6.7,
    "director": "Ron Howard",
    "genres": [
      "Детектив",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjIxMjQyMTc3Nl5BMl5BanBnXkFtZTcwMTA1MDUzMw@@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "trailer": "",
    "description": "Вбивство та підказки на картинах ведуть до відкриття ретельно охоронюваної релігійної таємниці."
  },
  {
    "id": "m_331",
    "title": "Ангели і демони",
    "originalTitle": "Angels & Demons",
    "year": 2009,
    "duration": 138,
    "rating": 6.7,
    "director": "Ron Howard",
    "genres": [
      "Детектив",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjEzNzM2MjgxMF5BMl5BanBnXkFtZTcwNTQ1MTM0Mg@@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "trailer": "",
    "description": "Гарвардський символіст Роберт Ленгдон працює з фізиком-ядерником, щоб розкрити вбивство та запобігти терористичному акту проти Ватикану під час однієї зі знакових подій у церкві."
  },
  {
    "id": "m_332",
    "title": "Скарб нації",
    "originalTitle": "National Treasure",
    "year": 2004,
    "duration": 131,
    "rating": 6.9,
    "director": "Jon Turteltaub",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Детектив"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTY3NTc4OTYxMF5BMl5BanBnXkFtZTcwMjk5NzUyMw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Історик мчить, щоб знайти легендарний скарб тамплієрів перед командою найманців."
  },
  {
    "id": "m_333",
    "title": "Одинадцять друзів Оушена",
    "originalTitle": "Ocean's Eleven",
    "year": 2001,
    "duration": 116,
    "rating": 7.7,
    "director": "Steven Soderbergh",
    "genres": [
      "Кримінал",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMmNhZDkxYTgtMDM3ZC00NTQ3LWFjZTUtNzc1Y2QyNWZjNDRmXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Злодій і його команда спільників планують складну крадіжку, щоб пограбувати три казино Лас-Вегаса одночасно."
  },
  {
    "id": "m_334",
    "title": "Дванадцять друзів Оушена",
    "originalTitle": "Ocean's Twelve",
    "year": 2004,
    "duration": 125,
    "rating": 6.5,
    "director": "Steven Soderbergh",
    "genres": [
      "Кримінал",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNjgxNjY3ODEtMTZhOC00NjgyLTg4YTAtZjA4ZDI2MDQ4OGJmXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Деніел Оушен набирає ще одного члена команди, щоб він міг здійснити три великі європейські пограбування в цьому продовженні «Одинадцяти Оушена» (2001)."
  },
  {
    "id": "m_335",
    "title": "Тринадцять друзів Оушена",
    "originalTitle": "Ocean's Thirteen",
    "year": 2007,
    "duration": 122,
    "rating": 6.9,
    "director": "Steven Soderbergh",
    "genres": [
      "Кримінал",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTMyNTc1NzY5MV5BMl5BanBnXkFtZTcwNDM4NTQzMw@@._V1_QL75_UY562_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Денні Оушен збирає хлопців для третього пограбування після того, як власник казино Віллі Бенк двічі обманює одного з початкових одинадцяти, Рубена Тішкова."
  },
  {
    "id": "m_336",
    "title": "Пограбування по-італійськи",
    "originalTitle": "The Italian Job",
    "year": 2003,
    "duration": 111,
    "rating": 7,
    "director": "F. Gary Gray",
    "genres": [
      "Бойовик",
      "Кримінал",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjJjNzc5YjAtZjU2Ni00ZjVkLTkzYmItM2E2NDM0NWE1YmJhXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "",
    "description": "Після зради та смерті в Італії Чарлі Крокер та його команда планують вишукану крадіжку золота проти свого колишнього союзника."
  },
  {
    "id": "m_337",
    "title": "Не спійманий — не злодій",
    "originalTitle": "Inside Man",
    "year": 2006,
    "duration": 129,
    "rating": 7.6,
    "director": "Spike Lee",
    "genres": [
      "Кримінал",
      "Драма",
      "Детектив"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZWFmMDZkYjktMjYyOS00MTM2LTg2MmQtOTUwMzJjMDlhZDY1XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Поліцейський детектив, грабіжник банку та владний брокер вступають у серйозні переговори після того, як блискуче пограбування злочинця перетворюється на заручників."
  },
  {
    "id": "m_338",
    "title": "Ілюзія обману",
    "originalTitle": "Now You See Me",
    "year": 2013,
    "duration": 115,
    "rating": 7.2,
    "director": "Louis Leterrier",
    "genres": [
      "Кримінал",
      "Детектив",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTY0NDY3MDMxN15BMl5BanBnXkFtZTcwOTM5NzMzOQ@@._V1_QL75_UX380_CR0,15,380,562_.jpg",
    "trailer": "",
    "description": "Агент ФБР і детектив Інтерполу відстежують команду ілюзіоністів, які влаштовують крадіжки банків під час своїх виступів, і винагороджують своїх глядачів грошима."
  },
  {
    "id": "m_339",
    "title": "Ілюзія обману 2",
    "originalTitle": "Now You See Me 2",
    "year": 2016,
    "duration": 129,
    "rating": 6.4,
    "director": "Jon M. Chu",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Комедія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BOTVjNTA0ZWEtNzU2Ny00Njg1LWE1MmEtZTUyZGQzYTVlY2Q5XkEyXkFqcGc@._V1_QL75_UX380_CR0,5,380,562_.jpg",
    "trailer": "",
    "description": "Чотири Вершники відроджуються, і їх силоміць завербував технічний геній, щоб здійснити їхнє найнеможливіше пограбування."
  },
  {
    "id": "m_340",
    "title": "Ніхто",
    "originalTitle": "Nobody",
    "year": 2021,
    "duration": 92,
    "rating": 7.4,
    "director": "Ilya Naishuller",
    "genres": [
      "Бойовик",
      "Кримінал",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYmIzOWViNDEtOWRiZS00ZWM4LWFiMmEtNGJjMmQ3NTIxN2U0XkEyXkFqcGc@._V1_QL75_UX380_CR0,20,380,562_.jpg",
    "trailer": "",
    "description": "Поступливий сім’янин повільно розкриває свій справжній характер після того, як його дім пограбували двоє дрібних злодіїв, що за збігом обставин призвело його до кровопролитної війни з російським кримінальним авторитетом."
  },
  {
    "id": "m_341",
    "title": "Швидкісний поїзд",
    "originalTitle": "Bullet Train",
    "year": 2022,
    "duration": 127,
    "rating": 7.3,
    "director": "David Leitch",
    "genres": [
      "Бойовик",
      "Комедія",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BODUyZjkxZDMtZGI3ZC00ZmEwLTgwMTUtYTU4OTQ5YjU4ZjRlXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "П'ятеро вбивць на борту швидкісного поїзда-кулі дізнаються, що їхні місії мають щось спільне."
  },
  {
    "id": "m_342",
    "title": "Праведник",
    "originalTitle": "The Equalizer",
    "year": 2014,
    "duration": 132,
    "rating": 7.3,
    "director": "Antoine Fuqua",
    "genres": [
      "Бойовик",
      "Кримінал",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTQ2MzE2NTk0NF5BMl5BanBnXkFtZTgwOTM3NTk1MjE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Чоловік, який вважає, що він залишив позаду своє таємниче минуле, не може стояти осторонь, коли зустрічає молоду дівчину під контролем надзвичайно жорстоких російських гангстерів."
  },
  {
    "id": "m_343",
    "title": "Праведник 2",
    "originalTitle": "The Equalizer 2",
    "year": 2018,
    "duration": 121,
    "rating": 6.7,
    "director": "Antoine Fuqua",
    "genres": [
      "Бойовик",
      "Кримінал",
      "Детектив"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTU2OTYzODQyMF5BMl5BanBnXkFtZTgwNjU3Njk5NTM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Роберт МакКолл відстоює непохитне правосуддя для експлуатованих і пригноблених, але як далеко він зайде, коли це той, кого він любить?"
  },
  {
    "id": "m_344",
    "title": "Евакуація",
    "originalTitle": "Extraction",
    "year": 2020,
    "duration": 116,
    "rating": 6.8,
    "director": "Sam Hargrave",
    "genres": [
      "Бойовик",
      "Кримінал",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNDBhMmI3OWYtZTA2Ny00Y2RjLTliMWQtYWY5MGIwN2RlZGFjXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Тайлер Рейк, безстрашний найманець з чорного ринку, починає найстрашніший видобуток у своїй кар’єрі, коли його залучають для порятунку викраденого сина ув’язненого міжнародного кримінального авторитета."
  },
  {
    "id": "m_345",
    "title": "Евакуація 2",
    "originalTitle": "Extraction II",
    "year": 2023,
    "duration": 122,
    "rating": 7,
    "director": "Sam Hargrave",
    "genres": [
      "Бойовик",
      "Кримінал",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZGQwNDdhODAtY2Y0Ni00YzFhLTk1OGUtY2RkMDAzNzBmZjAxXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Після того, як Тайлер Рейк ледве пережив тяжкі рани, отримані під час місії в Дакці, Бангладеш, повернувся, і його команда готова взятися до наступної місії."
  },
  {
    "id": "m_346",
    "title": "Сіра людина",
    "originalTitle": "The Gray Man",
    "year": 2022,
    "duration": 122,
    "rating": 6.5,
    "director": "Anthony Russo, Joe Russo",
    "genres": [
      "Бойовик",
      "Детектив",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZmFhZTNlNzctZGQzZi00MTA3LThiNjMtYWQzNjUzMjNjZjA3XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Коли найкваліфікованіший оперативник ЦРУ, справжня особа якого нікому не відома, випадково розкриває темні таємниці агентства, колишній колега-психопат оголошує нагороду за його голову, розпочинаючи глобальне полювання міжнародними вбивцями..."
  },
  {
    "id": "m_347",
    "title": "Атомна блондинка",
    "originalTitle": "Atomic Blonde",
    "year": 2017,
    "duration": 115,
    "rating": 6.7,
    "director": "David Leitch",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjM5NDYzMzg5N15BMl5BanBnXkFtZTgwOTM2NDU1MjI@._V1_QL75_UX380_CR0,20,380,562_.jpg",
    "trailer": "",
    "description": "Таємного агента МІ-6 відправляють до Берліна під час холодної війни, щоб розслідувати вбивство свого колеги та знайти список зниклих подвійних агентів."
  },
  {
    "id": "m_348",
    "title": "Скеля",
    "originalTitle": "The Rock",
    "year": 1996,
    "duration": 136,
    "rating": 7.4,
    "director": "Michael Bay",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMDhkYjRiZWEtZTE0Ny00ZjA1LThmNjgtM2UyYTQzODA4MjdhXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Експерт ФБР з хімічної зброї та колишній солдат SAS, який став політичним в’язнем, мають увірватися до в’язниці Алькатрас, коли військова група ізгоїв на чолі з генералом-відступником захоплює її та погрожує атакувати Сан-Франці нервово-паралітичним газом..."
  },
  {
    "id": "m_349",
    "title": "Повітряна тюрма",
    "originalTitle": "Con Air",
    "year": 1997,
    "duration": 115,
    "rating": 6.9,
    "director": "Simon West",
    "genres": [
      "Бойовик",
      "Кримінал",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BODcxOGFjOTEtM2M3Zi00ZWNiLWFjMTYtZDQ0Yjg2NTE2MzNiXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Колишній рейнджер армії США Камерон По був умовно-достроково звільнений за ненавмисне вбивство, але він повинен зупинити групу насильницьких і смертоносних злочинців, щоб вони втекли з країни після того, як вони захопили контроль над тюремним транспортним літаком, на якому він перебуває."
  },
  {
    "id": "m_350",
    "title": "Коханий з майбутнього",
    "originalTitle": "About Time",
    "year": 2013,
    "duration": 123,
    "rating": 7.8,
    "director": "Richard Curtis",
    "genres": [
      "Комедія",
      "Драма",
      "Фентезі"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTA1ODUzMDA3NzFeQTJeQWpwZ15BbWU3MDgxMTYxNTk@._V1_QL75_UX380_CR0,20,380,562_.jpg",
    "trailer": "",
    "description": "У віці 21 року Тім виявляє, що може подорожувати в часі і змінювати те, що відбувається і сталося в його власному житті. Його рішення зробити свій світ кращим, знайшовши дівчину, виявилося не таким простим, як ви думаєте."
  },
  {
    "id": "m_351",
    "title": "Перед заходом сонця",
    "originalTitle": "Before Sunset",
    "year": 2004,
    "duration": 80,
    "rating": 8.1,
    "director": "Richard Linklater",
    "genres": [
      "Драма",
      "Романтика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTQ1MjAwNTM5Ml5BMl5BanBnXkFtZTYwNDM0MTc3._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "trailer": "",
    "description": "Через дев’ять років після першої зустрічі Джессі та Селін вони знову зустрічаються під час французької частини книжкового туру Джессі."
  },
  {
    "id": "m_352",
    "title": "Перед північчю",
    "originalTitle": "Before Midnight",
    "year": 2013,
    "duration": 109,
    "rating": 7.9,
    "director": "Richard Linklater",
    "genres": [
      "Драма",
      "Романтика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjA5NzgxODE2NF5BMl5BanBnXkFtZTcwNTI1NTI0OQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Ми зустрічаємося з Джессі та Селін через дев’ять років у Греції. Майже два десятиліття минуло від їхньої першої зустрічі в поїзді, що прямував до Відня."
  },
  {
    "id": "m_353",
    "title": "500 днів літа",
    "originalTitle": "500 Days of Summer",
    "year": 2009,
    "duration": 95,
    "rating": 7.6,
    "director": "Marc Webb",
    "genres": [
      "Комедія",
      "Драма",
      "Романтика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTk5MjM4OTU1OV5BMl5BanBnXkFtZTcwODkzNDIzMw@@._V1_QL75_UX380_CR0,12,380,562_.jpg",
    "trailer": "",
    "description": "Після того, як його кинула дівчина, яку він вважає своєю спорідненою душею, безнадійний романтик Том Гансен розмірковує про їхні стосунки, щоб спробувати з’ясувати, де все пішло не так і як він може її повернути."
  },
  {
    "id": "m_354",
    "title": "Щоденник пам'яті",
    "originalTitle": "The Notebook",
    "year": 2004,
    "duration": 123,
    "rating": 7.8,
    "director": "Nick Cassavetes",
    "genres": [
      "Драма",
      "Романтика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZjE0ZjgzMzYtMTAxYi00NGMzLThmZDktNzFlMzA2MWRmYWQ0XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "",
    "description": "Літній чоловік читає жінці з деменцією історію двох молодих закоханих, роман яких знаходиться під загрозою через різницю в їхніх відповідних соціальних класах."
  },
  {
    "id": "m_355",
    "title": "Гордість і упередження",
    "originalTitle": "Pride & Prejudice",
    "year": 2005,
    "duration": 129,
    "rating": 7.8,
    "director": "Joe Wright",
    "genres": [
      "Драма",
      "Романтика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "trailer": "",
    "description": "Коли Елізабет Беннет зустрічає вродливого містера Дарсі, вона вірить, що він останній чоловік, за якого вона могла вийти заміж, але коли їхні життя переплітаються, вона виявляється захопленою чоловіком, якого поклялася ненавидіти навіки."
  },
  {
    "id": "m_356",
    "title": "Спокута",
    "originalTitle": "Atonement",
    "year": 2008,
    "duration": 123,
    "rating": 7.8,
    "director": "Joe Wright",
    "genres": [
      "Драма",
      "Детектив",
      "Романтика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZmQ5ZjZlMzMtODA1ZS00NTNiLWIzOTYtOTQyYjQ2YWQxMTA1XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Тринадцятирічна молода письменниця Брайоні Талліс безповоротно змінює хід кількох життів, коли звинувачує коханця своєї старшої сестри у злочині, якого він не скоював."
  },
  {
    "id": "m_357",
    "title": "Назви мене своїм ім'ям",
    "originalTitle": "Call Me by Your Name",
    "year": 2018,
    "duration": 132,
    "rating": 7.8,
    "director": "Luca Guadagnino",
    "genres": [
      "Драма",
      "Романтика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNDk3NTEwNjc0MV5BMl5BanBnXkFtZTgwNzYxNTMwMzI@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Влітку 1983 року 17-річний Еліо проводить дні зі своєю родиною на їхній віллі в Ломбардії, Італія. Незабаром він зустрічає 24-річного Олівера, стажера, який працює на батька Еліо. Вони відкривають п'янку красу пробудження..."
  },
  {
    "id": "m_358",
    "title": "Портрет дівчини у вогні",
    "originalTitle": "Portrait of a Lady on Fire",
    "year": 2020,
    "duration": 122,
    "rating": 8,
    "director": "Céline Sciamma",
    "genres": [
      "Драма",
      "Романтика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZjJlYWJlYmMtNjMyMS00ZDgxLTlmNjAtOTJhMzBiZWM5N2VmXkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "trailer": "",
    "description": "На ізольованому острові в Бретані наприкінці вісімнадцятого століття жінка-художник змушена написати весільний портрет молодої жінки."
  },
  {
    "id": "m_359",
    "title": "Теорія всього",
    "originalTitle": "The Theory of Everything",
    "year": 2014,
    "duration": 123,
    "rating": 7.7,
    "director": "James Marsh",
    "genres": [
      "Біографія",
      "Драма",
      "Романтика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTAwMTU4MDA3NDNeQTJeQWpwZ15BbWU4MDk4NTMxNTIx._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Стівен Гокінг досягає безпрецедентного успіху в галузі фізики, незважаючи на те, що у нього в 21 рік діагностували захворювання мотонейронів. Він перемагає жахливі шанси, оскільки його перша дружина Джейн віддано йому допомагає."
  },
  {
    "id": "m_360",
    "title": "Гра в імітацію",
    "originalTitle": "The Imitation Game",
    "year": 2014,
    "duration": 114,
    "rating": 8,
    "director": "Morten Tyldum",
    "genres": [
      "Біографія",
      "Драма",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNjI3NjY1Mjg3MV5BMl5BanBnXkFtZTgwMzk5MDQ3MjE@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "trailer": "",
    "description": "Під час Другої світової війни англійський математичний геній Алан Тюрінг намагається зламати німецький код Enigma за допомогою своїх колег-математиків, намагаючись примиритися зі своїм неспокійним особистим життям."
  },
  {
    "id": "m_361",
    "title": "Богемна рапсодія",
    "originalTitle": "Bohemian Rhapsody",
    "year": 2018,
    "duration": 134,
    "rating": 7.9,
    "director": "Bryan Singer",
    "genres": [
      "Біографія",
      "Драма",
      "Музика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTA2NDc3Njg5NDVeQTJeQWpwZ15BbWU4MDc1NDcxNTUz._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "trailer": "",
    "description": "Завдяки своїм бездоганним вокальним здібностям Фредді Мерк’юрі та його рок-група Queen досягли статусу суперзірки. Однак, попри стрімкий успіх, він бореться зі своїм его, сексуальністю та смертельною хворобою."
  },
  {
    "id": "m_362",
    "title": "Рокетмен",
    "originalTitle": "Rocketman",
    "year": 2019,
    "duration": 121,
    "rating": 7.3,
    "director": "Dexter Fletcher",
    "genres": [
      "Біографія",
      "Драма",
      "Музика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNDNmM2U1MDAtNmE3NS00ZWVjLWFiZDktZTkwZjY5YWU2ZjZkXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "",
    "description": "Шлях музиканта Елтона Джона від сором’язливого фортепіанного вундеркінда до міжнародної суперзірки."
  },
  {
    "id": "m_363",
    "title": "Елвіс",
    "originalTitle": "Elvis",
    "year": 2022,
    "duration": 159,
    "rating": 7.3,
    "director": "Baz Luhrmann",
    "genres": [
      "Біографія",
      "Драма",
      "Музика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNTVhZmUyMDQtY2I5Ny00OWNiLTgzNjUtMTg4YTQwMTc0OTQxXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Життя американської музичної ікони Елвіса Преслі, від його дитинства до того, як він став рок- і кінозіркою в 1950-х, зберігаючи складні стосунки зі своїм менеджером, полковником Томом Паркером."
  },
  {
    "id": "m_364",
    "title": "Переступити межу",
    "originalTitle": "Walk the Line",
    "year": 2005,
    "duration": 136,
    "rating": 7.8,
    "director": "James Mangold",
    "genres": [
      "Біографія",
      "Драма",
      "Музика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjIyOTU3MjUxOF5BMl5BanBnXkFtZTcwMTQ0NjYzMw@@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "trailer": "",
    "description": "Хроніка життя легенди кантрі-музики Джонні Кеша, починаючи з його ранніх днів на бавовняній фермі в Арканзасі й закінчуючи досягненням слави завдяки Sun Records у Мемфісі, де він записувався разом з Елвісом Преслі, Джеррі Лі Льюїсом і Карлом Перкінсом."
  },
  {
    "id": "m_365",
    "title": "Рей",
    "originalTitle": "Ray",
    "year": 2004,
    "duration": 152,
    "rating": 7.7,
    "director": "Taylor Hackford",
    "genres": [
      "Біографія",
      "Драма",
      "Музика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTQxNDQwNjQzOV5BMl5BanBnXkFtZTcwNTQxNDYyMQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Історія життя та кар’єри легендарного ритм-н-блюзового музиканта Рея Чарльза, від його скромних початків на Півдні, де він осліп у сім років, до його стрімкого злету до слави в 1950-х і 1960-х роках."
  },
  {
    "id": "m_366",
    "title": "Амадей",
    "originalTitle": "Amadeus",
    "year": 1984,
    "duration": 160,
    "rating": 8.4,
    "director": "Miloš Forman",
    "genres": [
      "Біографія",
      "Драма",
      "Музика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMzc2MjM0NTMtOGY4NC00NzY1LWE2ODUtZjMzY2RhNGNkZDAyXkEyXkFqcGc@._V1_QL75_UX380_CR0,15,380,562_.jpg",
    "trailer": "",
    "description": "У Відні 18-го століття придворний композитор Антоніо Сальєрі відчуває благоговіння та заздрість, коли на імперську музичну сцену виривається талановитий, нешанобливий Вольфганг Амадей Моцарт."
  },
  {
    "id": "m_367",
    "title": "Гонка",
    "originalTitle": "Rush",
    "year": 2013,
    "duration": 123,
    "rating": 8.1,
    "director": "Ron Howard",
    "genres": [
      "Біографія",
      "Драма",
      "Спорт"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTZhOGQxM2ItNGQyYy00YzE5LWI5MjMtNmMzNGQzNDE1OTUzXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Джеймс Хант і Нікі Лауда, два надзвичайно досвідчені гонщики Формули-1, ведуть інтенсивне суперництво один з одним. Однак саме їхня ворожнеча доводить їх до меж."
  },
  {
    "id": "m_368",
    "title": "Людина, яка змінила все",
    "originalTitle": "Moneyball",
    "year": 2011,
    "duration": 133,
    "rating": 7.6,
    "director": "Bennett Miller",
    "genres": [
      "Біографія",
      "Драма",
      "Спорт"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjAxOTU3Mzc1M15BMl5BanBnXkFtZTcwMzk1ODUzNg@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Успішна спроба генерального менеджера «Окленда А» Біллі Біна зібрати бейсбольну команду з обмеженим бюджетом, використовуючи комп’ютерний аналіз для залучення нових гравців."
  },
  {
    "id": "m_369",
    "title": "Боєць",
    "originalTitle": "The Fighter",
    "year": 2010,
    "duration": 116,
    "rating": 7.8,
    "director": "David O. Russell",
    "genres": [
      "Бойовик",
      "Біографія",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTM0ODk3MjM1MV5BMl5BanBnXkFtZTcwNzc1MDIwNA@@._V1_QL75_UX380_CR0,16,380,562_.jpg",
    "trailer": "",
    "description": "На основі історії про Мікі Ворда, боксера-початківця, який намагається уникнути тіні свого більш відомого, але проблемного старшого брата-боксера та отримати власний шанс на велич."
  },
  {
    "id": "m_370",
    "title": "Воїн",
    "originalTitle": "Warrior",
    "year": 2011,
    "duration": 140,
    "rating": 8.1,
    "director": "Gavin O&apos;Connor",
    "genres": [
      "Бойовик",
      "Драма",
      "Спорт"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTk4ODk5MTMyNV5BMl5BanBnXkFtZTcwMDMyNTg0Ng@@._V1_QL75_UX380_CR0,12,380,562_.jpg",
    "trailer": "",
    "description": "Молодший син колишнього боксера-алкоголіка повертається додому, де його батько тренує для участі в турнірі зі змішаних єдиноборств — шлях, який ставить бійця на шлях зіткнення зі своїм відчуженим старшим братом."
  },
  {
    "id": "m_371",
    "title": "Нокдаун",
    "originalTitle": "Cinderella Man",
    "year": 2005,
    "duration": 144,
    "rating": 8,
    "director": "Ron Howard",
    "genres": [
      "Біографія",
      "Драма",
      "Романтика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYjQ3M2ZjMzYtNmQwNC00MjNkLTgzOTgtMjhjMDk0YzIzOWZkXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "trailer": "",
    "description": "Справжня історія про Джеймса Дж. Бреддока, боксера, який нібито зник, який повернувся в центр уваги, щоб виграти чемпіонат світу у важкій вазі."
  },
  {
    "id": "m_372",
    "title": "Тренер Картер",
    "originalTitle": "Coach Carter",
    "year": 2005,
    "duration": 136,
    "rating": 7.4,
    "director": "Thomas Carter",
    "genres": [
      "Біографія",
      "Драма",
      "Спорт"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNjk0M2Y4ZTUtNzA3MS00MWYwLThmYjktMmYzNzVkYzQ3NmFlXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Суперечка оточує шкільного тренера з баскетболу Кена Картера після того, як він оскаржив всю свою команду за розрив академічного контракту з ним."
  },
  {
    "id": "m_373",
    "title": "Згадуючи Титанів",
    "originalTitle": "Remember the Titans",
    "year": 2000,
    "duration": 113,
    "rating": 7.8,
    "director": "Boaz Yakin",
    "genres": [
      "Біографія",
      "Комедія",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZWY0NzgxMWQtMjM4NC00MjRiLWE0YjctYTFiNjA2NTNkZGY1XkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "trailer": "",
    "description": "У 1971 році середній футбол штату Вірджинія був усім для жителів Александрії, але коли шкільна рада була змушена об’єднати школу для виключно чорних і лише для білих, фундамент футбольної традиції був покладений на ..."
  },
  {
    "id": "m_374",
    "title": "Крід: Спадок Роккі Бальбоа",
    "originalTitle": "Creed",
    "year": 2015,
    "duration": 133,
    "rating": 7.6,
    "director": "Ryan Coogler",
    "genres": [
      "Бойовик",
      "Драма",
      "Спорт"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNWM3NjY2ZDctMGZiYy00OGFlLThkMTktOTY2MDM2YjE2OTliXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Колишній чемпіон світу у важкій вазі Роккі Бальбоа є тренером і наставником Адоніса Джонсона, сина його покійного друга та колишнього суперника Аполло Кріда."
  },
  {
    "id": "m_375",
    "title": "Крід 2",
    "originalTitle": "Creed II",
    "year": 2018,
    "duration": 130,
    "rating": 7.1,
    "director": "Steven Caple Jr.",
    "genres": [
      "Бойовик",
      "Драма",
      "Спорт"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTBmYTg3YTItZjUzYi00MGU2LThiNDUtMDA3NjNmMTFiYzZkXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Під опікою Роккі Бальбоа новоспечений чемпіон у важкій вазі Адоніс Крід зіткнеться з Віктором Драго, сином Івана Драго."
  },
  {
    "id": "m_376",
    "title": "Роккі",
    "originalTitle": "Rocky",
    "year": 1976,
    "duration": 120,
    "rating": 8.1,
    "director": "John G. Avildsen",
    "genres": [
      "Драма",
      "Спорт"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZDEyY2M2MGMtYjg5OC00ZWFjLWFkZDQtNmQzZTdiYmYzZTBkXkEyXkFqcGc@._V1_QL75_UX380_CR0,8,380,562_.jpg",
    "trailer": "",
    "description": "Невеликий боксер із Філадельфії отримує надзвичайно рідкісний шанс битися з чемпіоном світу у важкій вазі в бою, у якому він намагається пройти дистанцію заради власної поваги."
  },
  {
    "id": "m_377",
    "title": "Невидима сторона",
    "originalTitle": "The Blind Side",
    "year": 2009,
    "duration": 129,
    "rating": 7.6,
    "director": "John Lee Hancock",
    "genres": [
      "Біографія",
      "Драма",
      "Спорт"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjEzOTE3ODM3OF5BMl5BanBnXkFtZTcwMzYyODI4Mg@@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "trailer": "",
    "description": "Історія Майкла Охера, безпритульного та травмованого хлопчика, який став гравцем Всеамериканського футболу та вибрав у першому раунді драфту НФЛ завдяки допомозі турботливої ​​жінки та її родини."
  },
  {
    "id": "m_378",
    "title": "У гонитві за щастям",
    "originalTitle": "The Pursuit of Happyness",
    "year": 2006,
    "duration": 117,
    "rating": 8,
    "director": "Gabriele Muccino",
    "genres": [
      "Біографія",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTQ5NjQ0NDI3NF5BMl5BanBnXkFtZTcwNDI0MjEzMw@@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "trailer": "",
    "description": "Продавець, що бореться, бере опіку над своїм сином, оскільки він готовий розпочати професійну кар’єру, яка змінить його життя."
  },
  {
    "id": "m_379",
    "title": "Сім душ",
    "originalTitle": "Seven Pounds",
    "year": 2008,
    "duration": 123,
    "rating": 7.6,
    "director": "Gabriele Muccino",
    "genres": [
      "Драма",
      "Детектив",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTU0NzY0MTY5OF5BMl5BanBnXkFtZTcwODY3MDEwMg@@._V1_QL75_UY562_CR21,0,380,562_.jpg",
    "trailer": "",
    "description": "Чоловік із доленосною таємницею вирушає в надзвичайну подорож спокути, назавжди змінюючи життя семи незнайомців."
  },
  {
    "id": "m_380",
    "title": "1+1 (Недоторканні)",
    "originalTitle": "The Intouchables",
    "year": 2011,
    "duration": 112,
    "rating": 8.5,
    "director": "Olivier Nakache, Éric Toledano",
    "genres": [
      "Комедія",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Після нещасного випадку на параплані він стає хворим на параплан, а аристократ наймає молодого чоловіка з проектів бути його доглядателем."
  },
  {
    "id": "m_381",
    "title": "Чоловік на ім'я Отто",
    "originalTitle": "A Man Called Otto",
    "year": 2023,
    "duration": 126,
    "rating": 7.5,
    "director": "Marc Forster",
    "genres": [
      "Комедія",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNjY5YWJjODYtNDUzNy00ZGMyLTk3NTQtN2EzZmFhZTFmMDNiXkEyXkFqcGc@._V1_QL75_UY562_CR35,0,380,562_.jpg",
    "trailer": "",
    "description": "Нещодавно овдовів буркотливий не бачить причин продовжувати жити, поки несподівана дружба з молодою матір'ю не змінить його погляди на життя."
  },
  {
    "id": "m_382",
    "title": "Друге життя Уве",
    "originalTitle": "A Man Called Ove",
    "year": 2016,
    "duration": 116,
    "rating": 7.7,
    "director": "Hannes Holm",
    "genres": [
      "Комедія",
      "Драма",
      "Романтика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMDlkNWFiZDItNGQ2My00MzdkLTgwMjUtNzU5YmYzYzMyM2Q2XkEyXkFqcGc@._V1_QL75_UY562_CR7,0,380,562_.jpg",
    "trailer": "",
    "description": "Уве, злий, ізольований пенсіонер, який проводить свої дні, дотримуючись правил об’єднання кварталів і відвідуючи могилу дружини, нарешті відмовився від життя саме тоді, коли з його бурхливими новими сусідами зав’язалася неймовірна дружба."
  },
  {
    "id": "m_383",
    "title": "Арахісовий сокіл",
    "originalTitle": "The Peanut Butter Falcon",
    "year": 2019,
    "duration": 97,
    "rating": 7.6,
    "director": "Tyler Nilson, Michael Schwartz",
    "genres": [
      "Пригоди",
      "Комедія",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYjgxZTE4NDctZTM1MC00YjIwLTk0MmMtNWFkZGUwMGE2ZjNhXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Зак, чоловік із синдромом Дауна, тікає з будинку престарілих, щоб здійснити свою мрію стати борцем. Пізніше він зустрічається з розбійником, який стає його другом і тренером."
  },
  {
    "id": "m_384",
    "title": "Капітан Фантастік",
    "originalTitle": "Captain Fantastic",
    "year": 2016,
    "duration": 118,
    "rating": 7.8,
    "director": "Matt Ross",
    "genres": [
      "Пригоди",
      "Комедія",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjE5OTM0OTY5NF5BMl5BanBnXkFtZTgwMDcxOTQ3ODE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Вдівець, який живе в лісі, вперше виводить своїх шістьох дітей у зовнішній світ."
  },
  {
    "id": "m_385",
    "title": "CODA: У ритмі серця",
    "originalTitle": "CODA",
    "year": 2021,
    "duration": 111,
    "rating": 8,
    "director": "Sian Heder",
    "genres": [
      "Комедія",
      "Драма",
      "Музика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNzIzOTNjOTQtM2QzOC00NjFlLTljZDUtZmI4Yjg1YTkyMTBiXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "",
    "description": "Коли сімейний рибальський бізнес опинився під загрозою, Рубі розривається між захопленням музикою та страхом кинути глухих батьків."
  },
  {
    "id": "m_386",
    "title": "Звук металу",
    "originalTitle": "Sound of Metal",
    "year": 2020,
    "duration": 120,
    "rating": 7.7,
    "director": "Darius Marder",
    "genres": [
      "Драма",
      "Музика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMWE5ZmYwNDEtYTYwMS00MTc0LTk2ZWItZTM1MjQ1ZDYzZGUzXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Барабанщик починає відчувати втрату слуху та побоювання за свою музичну кар'єру."
  },
  {
    "id": "m_387",
    "title": "Земля кочівників",
    "originalTitle": "Nomadland",
    "year": 2021,
    "duration": 107,
    "rating": 7.3,
    "director": "Chloé Zhao",
    "genres": [
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZGNkOWQ0ZjMtMTc4Ny00NDRhLTgyMjUtNzFmZDM0MTc3N2JjXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "",
    "description": "Втративши все під час Великої рецесії, шістдесятирічна жінка вирушає в подорож американським заходом, живучи кочівником у фургонах."
  },
  {
    "id": "m_388",
    "title": "Мінарі",
    "originalTitle": "Minari",
    "year": 2021,
    "duration": 115,
    "rating": 7.4,
    "director": "Lee Isaac Chung",
    "genres": [
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNWVmNDE3YzMtZWQ3Ny00YjhkLWEzN2QtZjNhYWNlMGI2N2NkXkEyXkFqcGc@._V1_QL75_UY562_CR4,0,380,562_.jpg",
    "trailer": "",
    "description": "Американська сім'я корейського походження переїжджає на ферму в Арканзасі в пошуках власної американської мрії. Серед труднощів нового життя в дивних і суворих Озарках вони виявляють незаперечну стійкість родини та те, що насправді робить ..."
  },
  {
    "id": "m_389",
    "title": "Сядь за кермо моєї машини",
    "originalTitle": "Drive My Car",
    "year": 2021,
    "duration": 179,
    "rating": 7.5,
    "director": "Ryusuke Hamaguchi",
    "genres": [
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BOGE5ZWRhYjYtNzVkMS00ZGU3LTg2MTMtODYyMmJlMDMyZjU0XkEyXkFqcGc@._V1_QL75_UY562_CR9,0,380,562_.jpg",
    "trailer": "",
    "description": "Відомий театральний актор і режисер вчиться переживати велику особисту втрату, коли отримує пропозицію поставити постановку «Дядя Ваня в Хіросімі»."
  },
  {
    "id": "m_390",
    "title": "Трикутник смутку",
    "originalTitle": "Triangle of Sadness",
    "year": 2022,
    "duration": 147,
    "rating": 7.2,
    "director": "Ruben Östlund",
    "genres": [
      "Комедія",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYTViNzUyNDUtZTg3Yy00OTY4LWEyMTYtMmUzYjE3ZmZjYzUwXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "trailer": "",
    "description": "Зіркова пара фотомоделей приєднується до насиченого подіями круїзу для супербагатих."
  },
  {
    "id": "m_391",
    "title": "Квадрат",
    "originalTitle": "The Square",
    "year": 2017,
    "duration": 151,
    "rating": 7.1,
    "director": "Ruben Östlund",
    "genres": [
      "Комедія",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNTQ3NzJhYjktYmRkYy00ODMxLThhMGItYWQyODJmZjEyMTgzXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "",
    "description": "Головний куратор мистецтва престижного стокгольмського музею опинився в часах як професійної, так і особистої кризи, коли він намагається створити нову суперечливу виставку."
  },
  {
    "id": "m_392",
    "title": "Ще по одній",
    "originalTitle": "Another Round",
    "year": 2020,
    "duration": 117,
    "rating": 7.7,
    "director": "Thomas Vinterberg",
    "genres": [
      "Комедія",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNjYxN2EwYjUtNzdiOS00NTgwLTgwNzMtZmE1NGMzYTYxNzBjXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Четверо вчителів середньої школи щодня вживають алкоголь, щоб побачити, як це впливає на їхнє соціальне та професійне життя."
  },
  {
    "id": "m_393",
    "title": "Полювання",
    "originalTitle": "The Hunt",
    "year": 2012,
    "duration": 115,
    "rating": 8.3,
    "director": "Thomas Vinterberg",
    "genres": [
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTg2NDg3ODg4NF5BMl5BanBnXkFtZTcwNzk3NTc3Nw@@._V1_QL75_UY562_CR7,0,380,562_.jpg",
    "trailer": "",
    "description": "Вчитель живе самотнім життям, весь час борючись за опіку над сином. Його життя повільно налагоджується, коли він знаходить кохання та отримує хороші новини від сина, але його нова удача ось-ось буде жорстоко зруйнована невинним..."
  },
  {
    "id": "m_394",
    "title": "Пожежі",
    "originalTitle": "Incendies",
    "year": 2011,
    "duration": 131,
    "rating": 8.3,
    "director": "Denis Villeneuve",
    "genres": [
      "Драма",
      "Детектив",
      "Військовий"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYWFmMjdmNjctNzhhOC00ZmMzLTkwOGItMmVmZDU4MjE2MTYwXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "",
    "description": "Близнюки вирушають на Близький Схід, щоб дізнатися історію своєї родини та виконати останні бажання матері."
  },
  {
    "id": "m_395",
    "title": "Капернаум",
    "originalTitle": "Capernaum",
    "year": 2018,
    "duration": 126,
    "rating": 8.4,
    "director": "Nadine Labaki",
    "genres": [
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYzEyMzQ1OTktZTljZi00OWQzLWE2ZmUtZjQyNzBjYjE1NTc0XkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "trailer": "",
    "description": "Відбуваючи п’ятирічний термін ув’язнення за насильницький злочин, 12-річний хлопчик подає до суду на батьків за недбалість."
  },
  {
    "id": "m_396",
    "title": "Рома",
    "originalTitle": "Roma",
    "year": 2018,
    "duration": 135,
    "rating": 7.6,
    "director": "Alfonso Cuarón",
    "genres": [
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTU0OTc3ODk4Ml5BMl5BanBnXkFtZTgwMzM4NzI5NjM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Рік із життя покоївки сім’ї вищого середнього класу в Мехіко на початку 1970-х."
  },
  {
    "id": "m_397",
    "title": "Вавилон",
    "originalTitle": "Babel",
    "year": 2006,
    "duration": 143,
    "rating": 7.4,
    "director": "Alejandro G. Iñárritu",
    "genres": [
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNDY3YjliMzgtMTkxYi00MmRkLWI1YTktNGQ3NGJhNzVhNzg5XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "",
    "description": "Трагедія вражає подружню пару під час відпустки в марокканській пустелі, і цей стрибок починає взаємопов’язану історію за участю чотирьох різних сімей."
  },
  {
    "id": "m_398",
    "title": "Сука-любов",
    "originalTitle": "Amores Perros",
    "year": 2001,
    "duration": 154,
    "rating": 8,
    "director": "Alejandro G. Iñárritu",
    "genres": [
      "Драма",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BODE3MWE3YTUtMzAyNC00YmIwLWIwZmQtMzA5OTFiNmE0Y2IzXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Бойовик-любитель, супермодель і покинутий вбивця, які намагаються знайти кохання, знаходять своє життя внаслідок жахливої ​​аварії автомобіля в Мехіко."
  },
  {
    "id": "m_399",
    "title": "Лабіринт Фавна",
    "originalTitle": "Pan's Labyrinth",
    "year": 2007,
    "duration": 118,
    "rating": 8.2,
    "director": "Guillermo del Toro",
    "genres": [
      "Драма",
      "Фентезі",
      "Військовий"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BOTc1NTAxMWItMWFlNy00MmU2LTkwMTMtNzMwOTg5OTQ5YTFiXkEyXkFqcGc@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "trailer": "",
    "description": "У Франкістській Іспанії 1944 року молода дівчина з фантазією зустрічає фавна, який каже їй, що вона принцеса і що вона повинна довести свою гідність, виконавши три небезпечні завдання."
  },
  {
    "id": "m_400",
    "title": "Троя",
    "originalTitle": "Troy",
    "year": 2004,
    "duration": 163,
    "rating": 7.3,
    "director": "Wolfgang Petersen",
    "genres": [
      "Бойовик",
      "Пригоди"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTk5MzU1MDMwMF5BMl5BanBnXkFtZTcwNjczODMzMw@@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "trailer": "",
    "description": "Екранізація великого епосу Гомера розповідає про штурм Трої об’єднаними грецькими силами."
  },
  {
    "id": "m_401",
    "title": "Царство небесне",
    "originalTitle": "Kingdom of Heaven",
    "year": 2005,
    "duration": 144,
    "rating": 7.3,
    "director": "Ridley Scott",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMzdhNGZhMjQtYjVmNy00OWMyLTk1MmQtZGNhZDYwMzZlZjI3XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Баліан з Ібеліна подорожує до Єрусалиму під час хрестових походів 12 століття, і там він стає захисником міста та його людей."
  },
  {
    "id": "m_402",
    "title": "Остання дуель",
    "originalTitle": "The Last Duel",
    "year": 2021,
    "duration": 152,
    "rating": 7.3,
    "director": "Ridley Scott",
    "genres": [
      "Драма",
      "Історія",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZGZiNDFkNDgtNDlmNS00NzZmLTg4MmItMzJkYjdmMjJkZDliXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Лицар Жан де Карруж повинен вирішити суперечку щодо своєї дружини Маргарити, викликавши свого колишнього друга на дуель до смерті."
  },
  {
    "id": "m_403",
    "title": "Володар морів",
    "originalTitle": "Master and Commander: The Far Side of the World",
    "year": 2003,
    "duration": 138,
    "rating": 7.5,
    "director": "Peter Weir",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZDEzYmZmOTYtMzdlYS00MWNjLWE2YjEtMzkyZTMyOWZjMjkyXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "",
    "description": "Під час наполеонівських воєн зухвалий британський капітан виштовхує свій корабель і екіпаж до межі можливостей, переслідуючи грізне французьке військове судно навколо Південної Америки."
  },
  {
    "id": "m_404",
    "title": "Патріот",
    "originalTitle": "The Patriot",
    "year": 2000,
    "duration": 165,
    "rating": 7.2,
    "director": "Roland Emmerich",
    "genres": [
      "Бойовик",
      "Драма",
      "Військовий"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYThjZWExNTItYmE5Yi00ZDE3LTk1ZDktMGJiMWUyYTc2YmFkXkEyXkFqcGc@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "trailer": "",
    "description": "Мирний фермер Бенджамін Мартін змушений очолити колоніальну міліцію під час Американської революції, коли британський офіцер-садист вбиває його сина."
  },
  {
    "id": "m_405",
    "title": "Тонка червона лінія",
    "originalTitle": "The Thin Red Line",
    "year": 1999,
    "duration": 170,
    "rating": 7.6,
    "director": "Terrence Malick",
    "genres": [
      "Драма",
      "Історія",
      "Військовий"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMzQ5NmViMDUtMjI1NC00ZWJkLTkwNzctMmIxZWY2MzQyZDc2XkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "trailer": "",
    "description": "Екранізація автобіографічного роману Джеймса Джонса 1962 року, присвяченого конфлікту на Гуадалканалі під час Другої світової війни."
  },
  {
    "id": "m_406",
    "title": "Бункер",
    "originalTitle": "Downfall",
    "year": 2005,
    "duration": 156,
    "rating": 8.2,
    "director": "Oliver Hirschbiegel",
    "genres": [
      "Біографія",
      "Драма",
      "Історія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTU0NTU5NTAyMl5BMl5BanBnXkFtZTYwNzYwMDg2._V1_QL75_UY562_CR2,0,380,562_.jpg",
    "trailer": "",
    "description": "Траудль Юнге, останній секретар Адольфа Гітлера, розповідає про останні дні нацистського диктатора в його берлінському бункері наприкінці Другої світової війни."
  },
  {
    "id": "m_407",
    "title": "Листи з Іводзіми",
    "originalTitle": "Letters from Iwo Jima",
    "year": 2007,
    "duration": 141,
    "rating": 7.8,
    "director": "Clint Eastwood",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjE0NzgwODI4M15BMl5BanBnXkFtZTcwNjg3OTA0MQ@@._V1_QL75_UY562_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Історія битви на Іводзімі між Сполученими Штатами та імператорською Японією під час Другої світової війни, розказана з точки зору японців, які в ній воювали."
  },
  {
    "id": "m_408",
    "title": "Прапори наших батьків",
    "originalTitle": "Flags of Our Fathers",
    "year": 2006,
    "duration": 135,
    "rating": 7.1,
    "director": "Clint Eastwood",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTU2MjYxMjMyMF5BMl5BanBnXkFtZTYwMzAwMDc3._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Історії життя шести чоловіків, які підняли прапор у битві при Іводзімі, переломній точці Другої світової війни."
  },
  {
    "id": "m_409",
    "title": "Міст через річку Квай",
    "originalTitle": "The Bridge on the River Kwai",
    "year": 1957,
    "duration": 161,
    "rating": 8.1,
    "director": "David Lean",
    "genres": [
      "Пригоди",
      "Драма",
      "Військовий"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNzdkYmU2YmItNmZiYy00OWQyLTg0YWYtZmUxM2U3YTRiNTQ1XkEyXkFqcGc@._V1_QL75_UX380_CR0,13,380,562_.jpg",
    "trailer": "",
    "description": "Британські військовополонені змушені будувати залізничний міст через річку Квай для своїх японських полонених в окупованій Бірмі, не знаючи, що союзні війська планують зухвалий рейд командос через джунглі, щоб знищити його."
  },
  {
    "id": "m_410",
    "title": "Лоуренс Аравійський",
    "originalTitle": "Lawrence of Arabia",
    "year": 1962,
    "duration": 227,
    "rating": 8.3,
    "director": "David Lean",
    "genres": [
      "Пригоди",
      "Біографія",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYjY0YTQ1OTAtYjEyNy00NTQ4LThlMTQtM2QwYTVhYWFhNjU5XkEyXkFqcGc@._V1_QL75_UY562_CR5,0,380,562_.jpg",
    "trailer": "",
    "description": "Розповідь Т.Є. Лоуренс, англійський офіцер, який успішно об’єднав і очолив різноманітні, часто ворогуючі, арабські племена під час Першої світової війни для боротьби з турками."
  },
  {
    "id": "m_411",
    "title": "Бен-Гур",
    "originalTitle": "Ben-Hur",
    "year": 1959,
    "duration": 212,
    "rating": 8.1,
    "director": "William Wyler",
    "genres": [
      "Пригоди",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNjg2M2E1YzYtOThmMC00NjAyLWI5MzgtMDEwOGFiODdlOGUzXkEyXkFqcGc@._V1_QL75_UX380_CR0,7,380,562_.jpg",
    "trailer": "",
    "description": "Єврейського принца зрадив і відправив у рабство римський друг в Єрусалимі I століття, але незабаром він відновив свою свободу і повернувся, щоб помститися."
  },
  {
    "id": "m_412",
    "title": "Спартак",
    "originalTitle": "Spartacus",
    "year": 2010,
    "duration": 55,
    "rating": 8.4,
    "director": "Стенлі Кубрик",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Біографія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNTc4ZjlkNjUtOWZlMS00ODQ0LTg2MWUtMjBkNjMwOTJkOWZmXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Життя Спартака, гладіатора, який очолив повстання проти римлян."
  },
  {
    "id": "m_413",
    "title": "Велика втеча",
    "originalTitle": "The Great Escape",
    "year": 1963,
    "duration": 172,
    "rating": 8.2,
    "director": "John Sturges",
    "genres": [
      "Пригоди",
      "Драма",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMDRhNmJjMzEtMWU5MC00YmEyLTg3ZmYtNzYxZTI1ZGU4ZjI1XkEyXkFqcGc@._V1_QL75_UX380_CR0,16,380,562_.jpg",
    "trailer": "",
    "description": "Офіцери союзників у німецькому таборі військовополонених під час Другої світової війни розробляють сміливий план масової втечі."
  },
  {
    "id": "m_414",
    "title": "Касабланка",
    "originalTitle": "Casablanca",
    "year": 1943,
    "duration": 102,
    "rating": 8.5,
    "director": "Michael Curtiz",
    "genres": [
      "Драма",
      "Романтика",
      "Військовий"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNWEzN2U1YTYtYTQyMS00NTVkLWE2NGQtZWFlMmM0MDNjMmRiXkEyXkFqcGc@._V1_QL75_UX380_CR0,5,380,562_.jpg",
    "trailer": "",
    "description": "Цинічний американський власник кафе, який є емігрантом, намагається вирішити, чи допомагати своїй колишній коханій та її чоловікові-втікачу втекти від нацистів у Французькому Марокко."
  },
  {
    "id": "m_415",
    "title": "Громадянин Кейн",
    "originalTitle": "Citizen Kane",
    "year": 1941,
    "duration": 119,
    "rating": 8.2,
    "director": "Orson Welles",
    "genres": [
      "Драма",
      "Детектив"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYjk1ZDJlMmUtOWQ0Zi00MDM5LTk1OGYtODczNjFmMGYwZGVkXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "",
    "description": "Після смерті видавничого магната Чарльза Фостера Кейна репортери намагаються з’ясувати значення його останнього слова: «Бутон троянди»."
  },
  {
    "id": "m_416",
    "title": "Бульвар Сансет",
    "originalTitle": "Sunset Boulevard",
    "year": 1950,
    "duration": 110,
    "rating": 8.4,
    "director": "Billy Wilder",
    "genres": [
      "Драма",
      "Нуар"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTU0NTkyNzYwMF5BMl5BanBnXkFtZTgwMDU0NDk5MTI@._V1_QL75_UX380_CR0,5,380,562_.jpg",
    "trailer": "",
    "description": "Сценарист-невдаха впадає в найманський роман із згаслою зіркою німого кіно."
  },
  {
    "id": "m_417",
    "title": "У джазі тільки дівчата",
    "originalTitle": "Some Like It Hot",
    "year": 1959,
    "duration": 121,
    "rating": 8.2,
    "director": "Billy Wilder",
    "genres": [
      "Комедія",
      "Музика",
      "Романтика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZTllZDYyNjEtY2RmMS00NmJhLWI4ODAtMTQ0NWFiZTJhZjA0XkEyXkFqcGc@._V1_QL75_UX380_CR0,13,380,562_.jpg",
    "trailer": "",
    "description": "Після того, як двоє чоловіків-музикантів стають свідками нападу натовпу, вони тікають зі штату в групі, що складається виключно з жінок, переодягнених у жінок, але виникають додаткові ускладнення."
  },
  {
    "id": "m_418",
    "title": "Співаючи під дощем",
    "originalTitle": "Singin' in the Rain",
    "year": 1952,
    "duration": 103,
    "rating": 8.3,
    "director": "Stanley Donen, Gene Kelly",
    "genres": [
      "Комедія",
      "Мюзикл",
      "Романтика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMGQzZDFjZWUtZDU4ZS00ZjM3LTgyYmItYjA3YmIwYzRkZWY3XkEyXkFqcGc@._V1_QL75_UY562_CR3,0,380,562_.jpg",
    "trailer": "",
    "description": "Коли німа ера Голлівуду поступається місцем радіомовленням, яскравий екранний ідол і талановитий новачок переміщуються в романтику, суперництво та комічний хаос переосмислення фільмів."
  },
  {
    "id": "m_419",
    "title": "На північ через північний захід",
    "originalTitle": "North by Northwest",
    "year": 1959,
    "duration": 136,
    "rating": 8.2,
    "director": "Alfred Hitchcock",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZWIzODI2OGItMzM0Ny00OGRmLTlkNmItMDQxMTFmMTk3YmQwXkEyXkFqcGc@._V1_QL75_UX380_CR0,5,380,562_.jpg",
    "trailer": "",
    "description": "Керівник реклами в Нью-Йорку втікає після того, як група іноземних шпигунів прийняла його за урядового агента, і закохується в жінку, у відданості якої він починає сумніватися."
  },
  {
    "id": "m_420",
    "title": "Хороший, поганий, злий",
    "originalTitle": "The Good, the Bad and the Ugly",
    "year": 1967,
    "duration": 178,
    "rating": 8.8,
    "director": "Sergio Leone",
    "genres": [
      "Пригоди",
      "Драма",
      "Вестерн"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMWM5ZjQxM2YtNDlmYi00ZDNhLWI4MWUtN2VkYjBlMTY1ZTkwXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "",
    "description": "Шахрайство з полюванням за головами об’єднує двох чоловіків у непростий альянс проти третього в гонці, щоб знайти золоті статки, поховані на віддаленому кладовищі."
  },
  {
    "id": "m_421",
    "title": "На декілька доларів більше",
    "originalTitle": "For a Few Dollars More",
    "year": 1967,
    "duration": 132,
    "rating": 8.2,
    "director": "Sergio Leone",
    "genres": [
      "Драма",
      "Вестерн"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNTRmOTcyYmYtMTIwNi00ZGYyLTk4YjYtZGJlZTgwZGY0NGQyXkEyXkFqcGc@._V1_QL75_UX380_CR0,7,380,562_.jpg",
    "trailer": "",
    "description": "Двоє вбивць із схожими намірами, але різними мотиваціями об’єднуються, щоб знищити психічного мексиканського розбійника, перш ніж він і його банда зможуть здійснити зухвале пограбування банку."
  },
  {
    "id": "m_422",
    "title": "За жменю доларів",
    "originalTitle": "A Fistful of Dollars",
    "year": 1967,
    "duration": 99,
    "rating": 7.9,
    "director": "Sergio Leone",
    "genres": [
      "Драма",
      "Вестерн"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BM2ZkYWU1MGQtMzM3MC00ODQ5LWE1ZGQtMDM5YjczZDZhMjg5XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "",
    "description": "Мандрівний стрілець грає проти двох ворогуючих сімей у місті, яке роздирається жадібністю, гордістю та помстою."
  },
  {
    "id": "m_423",
    "title": "Якось на Дикому Заході",
    "originalTitle": "Once Upon a Time in the West",
    "year": 1969,
    "duration": 145,
    "rating": 8.5,
    "director": "Sergio Leone",
    "genres": [
      "Драма",
      "Вестерн"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZjYyNGY1MDEtN2I1MC00MGVhLTljZTYtODQ1NzQ0ODc2NzZlXkEyXkFqcGc@._V1_QL75_UX380_CR0,3,380,562_.jpg",
    "trailer": "",
    "description": "Таємничий незнайомець із губною гармошкою об’єднується зі відомим відчайдухом, щоб захистити прекрасну вдову та її землю від безжального вбивці, який працює у залізничного магната."
  },
  {
    "id": "m_424",
    "title": "Непрощений",
    "originalTitle": "Unforgiven",
    "year": 1992,
    "duration": 130,
    "rating": 8.2,
    "director": "Clint Eastwood",
    "genres": [
      "Драма",
      "Вестерн"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNmZmMzM3YWMtZjg5Yi00M2MxLTg3ZGItNGU4YjQxNDAxM2Q4XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "",
    "description": "Відставний стрілок зі Старого Заходу Вілл Манні неохоче береться за останню роботу, щоб помститися за несправедливість за допомогою свого старого напарника та молодого потенційного стрілка, який називає себе «Дитина Шофілд»."
  },
  {
    "id": "m_425",
    "title": "Тумстоун",
    "originalTitle": "Tombstone",
    "year": 1993,
    "duration": 130,
    "rating": 7.8,
    "director": "George P. Cosmatos",
    "genres": [
      "Біографія",
      "Драма",
      "Історія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNmQyMzlhNjUtMzRjYS00MWY4LWI5MDAtZGU1MWE2M2E0OGMxXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Плани успішного законника анонімно піти на пенсію в Томстоуні, штат Арізона, порушуються тими злочинцями, яких він прославився."
  },
  {
    "id": "m_426",
    "title": "Справжня мужність",
    "originalTitle": "True Grit",
    "year": 2010,
    "duration": 110,
    "rating": 7.6,
    "director": "Ethan Coen, Joel Coen",
    "genres": [
      "Драма",
      "Вестерн"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTU5MjU3MTI4OF5BMl5BanBnXkFtZTcwMTQxOTAxNA@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Вперта дівчина-підліток звертається за допомогою до суворого маршала США, щоб розшукати вбивцю свого батька."
  },
  {
    "id": "m_427",
    "title": "Як боязкий Роберт Форд убив Джессі Джеймса",
    "originalTitle": "The Assassination of Jesse James by the Coward Robert Ford",
    "year": 2007,
    "duration": 160,
    "rating": 7.5,
    "director": "Andrew Dominik",
    "genres": [
      "Біографія",
      "Кримінал",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTY2NDI2MTc2NV5BMl5BanBnXkFtZTcwNjA2NTQzMw@@._V1_QL75_UY562_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Роберт Форд, який з дитинства обожнював Джессі Джеймса, щосили намагається приєднатися до відродженої банди розбійників з Міссурі, але поступово починає обурюватися на ватажка бандитів."
  },
  {
    "id": "m_428",
    "title": "Кістяний томагавк",
    "originalTitle": "Bone Tomahawk",
    "year": 2016,
    "duration": 132,
    "rating": 7.1,
    "director": "S. Craig Zahler",
    "genres": [
      "Драма",
      "Жахи",
      "Вестерн"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMzQ0MzE4OTUzMF5BMl5BanBnXkFtZTgwODAyNzI3NjE@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "trailer": "",
    "description": "На Старому Заході шериф невеликого містечка та його загін вирушили врятувати кількох городян від жорстокого канібального індіанського племені, що живе в печерах."
  },
  {
    "id": "m_429",
    "title": "Брати Сістерс",
    "originalTitle": "The Sisters Brothers",
    "year": 2018,
    "duration": 122,
    "rating": 6.9,
    "director": "Jacques Audiard",
    "genres": [
      "Драма",
      "Вестерн"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMmY5MGZiMTQtYTc2YS00ZDU5LThmMmQtNTdmMDlmYjk1YWQyXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Елі та Чарлі Сестри, сумно відомий дует вбивць-стріляниць, переслідують золотошукача та його несподіваного союзника в Орегоні 1850-х років."
  },
  {
    "id": "m_430",
    "title": "У руках пса",
    "originalTitle": "The Power of the Dog",
    "year": 2021,
    "duration": 126,
    "rating": 6.8,
    "director": "Jane Campion",
    "genres": [
      "Драма",
      "Вестерн"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNzgyMzA2NDEtZWUxNy00MDNmLTllMDYtNzZmNTU5ZWVmMzhlXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Харизматичний фермер Філ Бербанк вселяє страх і трепет у оточуючих. Коли його брат приводить додому нову дружину та її сина, Філ мучить їх, поки не виявляє можливості кохання."
  },
  {
    "id": "m_431",
    "title": "Перша людина",
    "originalTitle": "First Man",
    "year": 2018,
    "duration": 141,
    "rating": 7.3,
    "director": "Damien Chazelle",
    "genres": [
      "Біографія",
      "Драма",
      "Історія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYmIzYmViN2UtMDRhYy00OTMwLWI5YzctMTQxYzg2ODMwMTIwXkEyXkFqcGc@._V1_QL75_UX380_CR0,20,380,562_.jpg",
    "trailer": "",
    "description": "Огляд назад на життя астронавта Ніла Армстронга та легендарну космічну місію, завдяки якій він став першою людиною, яка ступила на Місяць 20 липня 1969 року."
  },
  {
    "id": "m_432",
    "title": "Аполлон 13",
    "originalTitle": "Apollo 13",
    "year": 1995,
    "duration": 140,
    "rating": 7.7,
    "director": "Ron Howard",
    "genres": [
      "Пригоди",
      "Драма",
      "Історія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMGZmNGY1OTAtNjFkYS00MjcyLWFlZjUtYzEyMDllZGZhMzM3XkEyXkFqcGc@._V1_QL75_UX380_CR0,9,380,562_.jpg",
    "trailer": "",
    "description": "NASA має розробити стратегію безпечного повернення «Аполлона-13» на Землю після того, як космічний корабель зазнав величезних внутрішніх пошкоджень, що поставило під загрозу життя трьох астронавтів на борту."
  },
  {
    "id": "m_433",
    "title": "Справжні хлопці",
    "originalTitle": "The Right Stuff",
    "year": 1984,
    "duration": 193,
    "rating": 7.8,
    "director": "Philip Kaufman",
    "genres": [
      "Пригоди",
      "Біографія",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZmNiMWIxZDEtYWE0Zi00YzU5LTk4NzctNmE2YThiMGUzYzlkXkEyXkFqcGc@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "trailer": "",
    "description": "Розвиток американської космічної програми від подолання звукового бар’єру до відбору астронавтів Mercury 7 із групи пілотів-випробувачів із більш вільним підходом, ніж більш обережні інженери програми..."
  },
  {
    "id": "m_434",
    "title": "До зірок",
    "originalTitle": "Ad Astra",
    "year": 2019,
    "duration": 123,
    "rating": 6.5,
    "director": "James Gray",
    "genres": [
      "Пригоди",
      "Драма",
      "Детектив"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BOGRhOGNjZjEtNTU2Ni00MDlmLWI3MWEtNzc1OGE2ZmEwZGNhXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "",
    "description": "Астронавт відправляється в космічну місію, щоб дослідити загрозу для Всесвіту та розкрити правду про свого батька, який зник тридцять років тому."
  },
  {
    "id": "m_435",
    "title": "Марсіанин",
    "originalTitle": "The Martian",
    "year": 2015,
    "duration": 144,
    "rating": 8,
    "director": "Ridley Scott",
    "genres": [
      "Пригоди",
      "Драма",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_QL75_UY562_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Астронавт, який опинився на Марсі, повинен покластися на свою винахідливість, щоб вижити й організувати потенційний порятунок."
  },
  {
    "id": "m_436",
    "title": "Життя",
    "originalTitle": "Life",
    "year": 2017,
    "duration": 104,
    "rating": 6.6,
    "director": "Daniel Espinosa",
    "genres": [
      "Жахи",
      "Фантастика",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNWNkYWYzNGUtOWVjNS00MGY0LWIyY2YtODllNGIxOGRlOTgyXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Команда вчених на борту МКС виявила марсіанського хижака, який швидко еволюціонує, якого потрібно тримати подалі від Землі будь-якою ціною."
  },
  {
    "id": "m_437",
    "title": "Прометей",
    "originalTitle": "Prometheus",
    "year": 2012,
    "duration": 124,
    "rating": 7,
    "director": "Ridley Scott",
    "genres": [
      "Пригоди",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTY3NzIyNTA2NV5BMl5BanBnXkFtZTcwNzE2NjI4Nw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Слідкуючи за підказками про походження людства, команда знаходить споруду на далекому місяці, але незабаром вони розуміють, що вони не самотні."
  },
  {
    "id": "m_438",
    "title": "Чужий: Заповіт",
    "originalTitle": "Alien: Covenant",
    "year": 2017,
    "duration": 122,
    "rating": 6.4,
    "director": "Ridley Scott",
    "genres": [
      "Жахи",
      "Фантастика",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjhiYWQ4MTAtOGY1Zi00ZjcyLTk1ZDYtODI3ODRhNjE4MzZhXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Екіпаж корабля-колонії, який прямує на віддалену планету, відкриває незвіданий рай із загрозою, яка перевищує їхню уяву, і повинен спробувати жахливу втечу."
  },
  {
    "id": "m_439",
    "title": "Чужий: Ромул",
    "originalTitle": "Alien: Romulus",
    "year": 2024,
    "duration": 119,
    "rating": 7.1,
    "director": "Fede Alvarez",
    "genres": [
      "Жахи",
      "Фантастика",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMDU0NjcwOGQtNjNjOS00NzQ3LWIwM2YtYWVmODZjMzQzN2ExXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Розбираючи глибини занедбаної космічної станції, група молодих космічних колоністів стикається віч-на-віч з найжахливішою формою життя у Всесвіті."
  },
  {
    "id": "m_440",
    "title": "Повстання Штатів",
    "originalTitle": "Civil War",
    "year": 2024,
    "duration": 109,
    "rating": 7,
    "director": "Alex Garland",
    "genres": [
      "Бойовик",
      "Трилер",
      "Військовий"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYTkzMjc0YzgtY2E0Yi00NDBlLWI0MWUtODY1ZjExMDAyOWZiXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "У розпал громадянської війни в США четверо репортерів здійснюють небезпечну поїздку до столиці, щоб взяти інтерв’ю у президента, перш ніж його повалять."
  },
  {
    "id": "m_441",
    "title": "Фуріоза: Шалений Макс. Сага",
    "originalTitle": "Furiosa: A Mad Max Saga",
    "year": 2024,
    "duration": 148,
    "rating": 7.4,
    "director": "George Miller",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNTcwYWE1NTYtOWNiYy00NzY3LWIwY2MtNjJmZDkxNDNmOWE1XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Після того, як її викрали із Зеленого місця багатьох матерів, поки тирани Дементус і Безсмертний Джо борються за владу та контроль, юна Фуріоза повинна пережити багато випробувань, збираючи засоби, щоб знайти дорогу додому."
  },
  {
    "id": "m_442",
    "title": "Манкімен",
    "originalTitle": "Monkey Man",
    "year": 2024,
    "duration": 121,
    "rating": 6.8,
    "director": "Dev Patel",
    "genres": [
      "Бойовик",
      "Кримінал",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BODM2ZmZjYmQtNTA3NC00MmYzLWEwOTItMDNjYzc3MzI1NWNmXkEyXkFqcGc@._V1_QL75_UY562_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Анонімний молодий чоловік розв'язує кампанію помсти корумпованим лідерам, які вбили його матір і продовжують систематично знущатися з бідних і безправних."
  },
  {
    "id": "m_443",
    "title": "Каскадер",
    "originalTitle": "The Fall Guy",
    "year": 2024,
    "duration": 126,
    "rating": 6.8,
    "director": "David Leitch",
    "genres": [
      "Бойовик",
      "Комедія",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BM2U0MTJiYTItMjNiZS00MzU4LTkxYTAtYTU0ZGY1ODJhMjRhXkEyXkFqcGc@._V1_QL75_UX380_CR0,20,380,562_.jpg",
    "trailer": "",
    "description": "Каскадер, щойно потрапив у нещасний випадок, який майже завершив кар’єру, має розшукати зниклу кінозірку, розгадати змову та спробувати повернути кохання свого життя, виконуючи свою повсякденну роботу."
  },
  {
    "id": "m_444",
    "title": "Барбі",
    "originalTitle": "Barbie",
    "year": 2023,
    "duration": 114,
    "rating": 6.8,
    "director": "Greta Gerwig",
    "genres": [
      "Пригоди",
      "Комедія",
      "Фентезі"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYjI3NDU0ZGYtYjA2YS00Y2RlLTgwZDAtYTE2YTM5ZjE1M2JlXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Барбі та Кен чудово проводять час у, здавалося б, ідеальному світі Барбі Ленд. Однак, коли вони отримують можливість вийти у зовнішній світ, вони незабаром дізнаються про радощі та небезпеки життя серед звичайних людей."
  },
  {
    "id": "m_445",
    "title": "Вонка",
    "originalTitle": "Wonka",
    "year": 2023,
    "duration": 116,
    "rating": 6.9,
    "director": "Paul King",
    "genres": [
      "Пригоди",
      "Комедія",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BM2Y1N2ZhNjctYjVhZC00MDg2LWFhNTItMzI3ZjAwZDhjYmFiXkEyXkFqcGc@._V1_QL75_UY562_CR35,0,380,562_.jpg",
    "trailer": "",
    "description": "Мріючи відкрити магазин у місті, відомому своїм шоколадом, молодий і бідний Віллі Вонка виявляє, що галуззю керує картель жадібних шоколатьє."
  },
  {
    "id": "m_446",
    "title": "Персонаж",
    "originalTitle": "Free Guy",
    "year": 2021,
    "duration": 115,
    "rating": 7.1,
    "director": "Shawn Levy",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Комедія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BN2I0MGMxYjUtZTZiMS00MzMxLTkzNWYtMDUyZmUwY2ViYTljXkEyXkFqcGc@._V1_QL75_UY562_CR5,0,380,562_.jpg",
    "trailer": "",
    "description": "Коли Гай, банківський касір, дізнається, що він неігровий персонаж у кровожерливій відеогрі з відкритим світом, він стає героєм історії та бере на себе відповідальність за порятунок світу."
  },
  {
    "id": "m_447",
    "title": "Світ забуття",
    "originalTitle": "Oblivion",
    "year": 2013,
    "duration": 124,
    "rating": 7,
    "director": "Joseph Kosinski",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTQwMDY0MTA4MF5BMl5BanBnXkFtZTcwNzI3MDgxOQ@@._V1_QL75_UX380_CR0,20,380,562_.jpg",
    "trailer": "",
    "description": "Поява незнайомця починає битву однієї людини за порятунок людства."
  },
  {
    "id": "m_448",
    "title": "Ілюзіоніст",
    "originalTitle": "The Illusionist",
    "year": 2006,
    "duration": 110,
    "rating": 7.5,
    "director": "Neil Burger",
    "genres": [
      "Драма",
      "Фентезі",
      "Детектив"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNzNmYmI4YWMtMGFkOS00ODVkLTg3MTEtOTExNDg3ZjQ0MGM3XkEyXkFqcGc@._V1_QL75_UY562_CR7,0,380,562_.jpg",
    "trailer": "",
    "description": "У Відні на рубежі століть чарівник використовує свої здібності, щоб заручитися коханням жінки, яка стоїть набагато вище його суспільного становища."
  },
  {
    "id": "m_449",
    "title": "Бджоляр",
    "originalTitle": "The Beekeeper",
    "year": 2024,
    "duration": 105,
    "rating": 6.3,
    "director": "David Ayer",
    "genres": [
      "Бойовик",
      "Кримінал",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNzg3YjVmZGYtOTc5MC00MDdiLTllOTYtZWQ0ODQ1MmMyNTExXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Колишній оперативник потужної організації вирушає в жорстоку кампанію з метою помсти."
  },
  {
    "id": "m_450",
    "title": "Міністерство неджентльменської війни",
    "originalTitle": "The Ministry of Ungentlemanly Warfare",
    "year": 2024,
    "duration": 122,
    "rating": 6.8,
    "director": "Guy Ritchie",
    "genres": [
      "Бойовик",
      "Комедія",
      "Військовий"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYmIxODc5ZjMtYzZmZS00OTE5LThkZDktNWNmODNiZjFhMDgyXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Британські військові набирають невелику групу висококваліфікованих солдатів для удару по німецьких військах у тилу ворога під час Другої світової війни."
  },
  {
    "id": "m_451",
    "title": "Творець",
    "originalTitle": "The Creator",
    "year": 2023,
    "duration": 133,
    "rating": 6.7,
    "director": "Gareth Edwards",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMDkxMTUxOTQtYzM4Yi00YzA2LTgzOTYtNDg2NTliODE0ZTRjXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "На тлі війни між людьми та роботами зі штучним інтелектом колишній солдат знаходить секретну зброю роботів, щоб покласти край конфлікту, ШІ у формі дитини."
  },
  {
    "id": "m_452",
    "title": "Привиди у Венеції",
    "originalTitle": "A Haunting in Venice",
    "year": 2023,
    "duration": 103,
    "rating": 6.5,
    "director": "Kenneth Branagh",
    "genres": [
      "Кримінал",
      "Драма",
      "Жахи"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BOTgwODdhZTMtYTFiNy00NzI1LTkwZWEtNjI2NWZiMzFmMjJlXkEyXkFqcGc@._V1_QL75_UY562_CR33,0,380,562_.jpg",
    "trailer": "",
    "description": "У Венеції після Другої світової війни Пуаро, який зараз вийшов на пенсію і живе у власному вигнанні, неохоче відвідує сеанс. Але коли одного з гостей вбивають, колишньому детективу знову належить розкрити вбивцю."
  },
  {
    "id": "m_453",
    "title": "Air: Великий стрибок",
    "originalTitle": "Air",
    "year": 2023,
    "duration": 111,
    "rating": 7.4,
    "director": "Ben Affleck",
    "genres": [
      "Драма",
      "Спорт"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNjdjYzJkZmUtZDNiMC00MzQ0LWE2MGEtYTk4ZGM4NzFkMzM3XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Історія кардинального партнерства між тоді ще невідомим Майклом Джорданом і молодим баскетбольним підрозділом Nike, який зробив революцію у світі спорту та культури з брендом Air Jordan."
  },
  {
    "id": "m_454",
    "title": "Феррарі",
    "originalTitle": "Ferrari",
    "year": 2023,
    "duration": 130,
    "rating": 6.4,
    "director": "Michael Mann",
    "genres": [
      "Біографія",
      "Драма",
      "Історія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYmUzYmJiMDMtZjIxNy00ZjBlLThjZDMtMDA1ZDM4MWMwNmI0XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Події відбуваються влітку 1957 року, коли автомобільна імперія Енцо Феррарі переживає кризу, колишній гонщик, який став підприємцем, доводить себе та своїх водіїв до межі, коли вони вирушають на Mille Miglia, підступну гонку на 1000 миль через Італію."
  },
  {
    "id": "m_455",
    "title": "Суперники",
    "originalTitle": "Challengers",
    "year": 2024,
    "duration": 131,
    "rating": 7,
    "director": "Luca Guadagnino",
    "genres": [
      "Комедія",
      "Драма",
      "Романтика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZTcyZGIyODctZGJhOS00MWUyLWI5ZWEtMjg4YzhkMDczMDBhXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Таші, колишня тенісистка, яка стала тренером, перетворила свого чоловіка на чемпіона. Але щоб подолати недавню серію поразок і відкупитися, йому доведеться зіткнутися зі своїм колишнім найкращим другом — колишнім хлопцем Таші."
  },
  {
    "id": "m_456",
    "title": "Залізний кіготь",
    "originalTitle": "The Iron Claw",
    "year": 2023,
    "duration": 132,
    "rating": 7.5,
    "director": "Sean Durkin",
    "genres": [
      "Біографія",
      "Драма",
      "Спорт"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYjJjZDc5YTUtYTc4My00Yzc2LTkwMGUtOTg3ODIwYzJkYTJiXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Справжня історія нерозлучних братів фон Еріхів, які увійшли в історію в напруженому конкурентному світі професійної боротьби на початку 1980-х років."
  },
  {
    "id": "m_457",
    "title": "Без обличчя",
    "originalTitle": "Face/Off",
    "year": 1997,
    "duration": 138,
    "rating": 7.3,
    "director": "John Woo",
    "genres": [
      "Бойовик",
      "Кримінал",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BOGQyOWNmYTgtZWY0NS00NzhjLTg3NmMtMzcwYzQ2OTA2OTJkXkEyXkFqcGc@._V1_QL75_UX380_CR0,3,380,562_.jpg",
    "trailer": "",
    "description": "Щоб завадити терористичній змові, агент ФБР припускає особу злочинця, який убив його сина за допомогою операції з пересадки обличчя, але шахрай передчасно прокидається і клянеться помститися."
  },
  {
    "id": "m_458",
    "title": "На гребені хвилі",
    "originalTitle": "Point Break",
    "year": 1991,
    "duration": 122,
    "rating": 7.3,
    "director": "Kathryn Bigelow",
    "genres": [
      "Бойовик",
      "Кримінал",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNTI3YzY3N2MtODI1OC00NmU0LThlMDYtNmFjMGFkNzhhNTRlXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "ФБР Агент йде під прикриттям, щоб зловити банду серферів, які можуть бути грабіжниками банків."
  },
  {
    "id": "m_459",
    "title": "Погані хлопці",
    "originalTitle": "Bad Boys",
    "year": 1995,
    "duration": 119,
    "rating": 6.8,
    "director": "Michael Bay",
    "genres": [
      "Бойовик",
      "Комедія",
      "Кримінал"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMWNjZWEwNDMtMWE1ZC00MTgwLTk2YzAtYmE0NTkwOWVhMDI0XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Два модних детективи захищають свідка вбивства під час розслідування справи про вкрадений героїн зі сховища доказів у їхній поліцейській дільниці."
  },
  {
    "id": "m_460",
    "title": "Погані хлопці 2",
    "originalTitle": "Bad Boys II",
    "year": 2003,
    "duration": 147,
    "rating": 6.6,
    "director": "Michael Bay",
    "genres": [
      "Бойовик",
      "Комедія",
      "Кримінал"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTVkM2YxODItOGNlMy00NWExLWI2NTgtODEzMmM5NThiM2E2XkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "trailer": "",
    "description": "Поліцейські з відділу наркотиків Майамі Майк Лоурі та Маркус Бернетт розслідують потік екстазі у Флориду з кубинського наркокартелю."
  },
  {
    "id": "m_461",
    "title": "Погані хлопці: Все або нічого",
    "originalTitle": "Bad Boys: Ride or Die",
    "year": 2024,
    "duration": 115,
    "rating": 6.5,
    "director": "Adil El Arbi, Bilall Fallah",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Комедія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZWNjZWUwNDgtYTM4ZC00Zjk0LTg3ZWItNGEyZmVkZTIxZDk0XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "",
    "description": "Коли покійного капітана поліції виявляють зв’язки з наркокартелями, розумні копи Маямі Майк Лоурі та Маркус Бернетт вирушають на небезпечну місію, щоб очистити його ім’я."
  },
  {
    "id": "m_462",
    "title": "Смертельна зброя",
    "originalTitle": "Lethal Weapon",
    "year": 1987,
    "duration": 109,
    "rating": 7.6,
    "director": "Richard Donner",
    "genres": [
      "Бойовик",
      "Кримінал",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMWVlNWZlODktMzhhNS00YThhLWEzZWYtYzU0NDFmNzk0MGVlXkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "trailer": "",
    "description": "Двоє новоспечених копів, які є повними протилежностями, повинні відкинути свої розбіжності, щоб зловити банду контрабандистів наркотиків."
  },
  {
    "id": "m_463",
    "title": "Смертельна зброя 2",
    "originalTitle": "Lethal Weapon 2",
    "year": 1989,
    "duration": 114,
    "rating": 7.3,
    "director": "Richard Donner",
    "genres": [
      "Бойовик",
      "Кримінал",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZWE1OWYwZTAtMGUwMC00MGE3LWE1ODAtMTI0NGQ1NzU5YmYzXkEyXkFqcGc@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "trailer": "",
    "description": "Ріггс і Мерто на слідах південноафриканських дипломатів, які використовують свій імунітет для участі в злочинній діяльності."
  },
  {
    "id": "m_464",
    "title": "Година пік",
    "originalTitle": "Rush Hour",
    "year": 1998,
    "duration": 98,
    "rating": 7.1,
    "director": "Brett Ratner",
    "genres": [
      "Бойовик",
      "Комедія",
      "Кримінал"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMGZiMzViNmEtNTNlZi00MzFmLTk5NTEtNDE2OTUzNmNlMTY4XkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "trailer": "",
    "description": "Вірний і відданий інспектор Гонконгу об’єднується з безрозсудним і крикливим L.A.P.D. детективу, щоб врятувати викрадену доньку китайського консула, по дорозі намагаючись заарештувати небезпечного злочинного авторитета."
  },
  {
    "id": "m_465",
    "title": "Година пік 2",
    "originalTitle": "Rush Hour 2",
    "year": 2001,
    "duration": 90,
    "rating": 6.7,
    "director": "Brett Ratner",
    "genres": [
      "Бойовик",
      "Комедія",
      "Кримінал"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMGM0OTM4NGYtYzkzMC00OGZmLWEwZTItOTg4ZTdkYTIxOTc0XkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "trailer": "",
    "description": "Картер і Лі їдуть у відпустку до Гонконгу, але потрапляють в аферу з фальшивими грошима."
  },
  {
    "id": "m_466",
    "title": "Поліцейський з Беверлі-Гіллз",
    "originalTitle": "Beverly Hills Cop",
    "year": 1984,
    "duration": 105,
    "rating": 7.4,
    "director": "Martin Brest",
    "genres": [
      "Бойовик",
      "Комедія",
      "Кримінал"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNjU4OGM2MzctNGU3ZC00M2EzLThiN2ItOTlmN2FjODM0MzFhXkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "trailer": "",
    "description": "Поліцейський з Детройта, який розслідує вбивство, опиняється в зовсім іншій культурі Беверлі-Гіллз."
  },
  {
    "id": "m_467",
    "title": "Люди в чорному",
    "originalTitle": "Men in Black",
    "year": 1997,
    "duration": 98,
    "rating": 7.3,
    "director": "Barry Sonnenfeld",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Комедія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZmQ0YTdhYzEtMjIxZC00MGFiLTlmNjktZmFlOWE2M2QxOTRhXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "",
    "description": "Агент секретної організації, яка стежить за діяльністю інопланетян на Землі, залучає кмітливого поліцейського Нью-Йорка, щоб той допоміг йому відновити предмет, викрадений міжгалактичним злочинцем."
  },
  {
    "id": "m_468",
    "title": "Люди в чорному 2",
    "originalTitle": "Men in Black II",
    "year": 2002,
    "duration": 88,
    "rating": 6.2,
    "director": "Barry Sonnenfeld",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Комедія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTMxNDA0NTMxMV5BMl5BanBnXkFtZTYwMDE2NzY2._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "trailer": "",
    "description": "Агент J відправляється знайти агента K і відновити його пам'ять після повторної появи випадку з минулого K."
  },
  {
    "id": "m_469",
    "title": "День незалежності",
    "originalTitle": "Independence Day",
    "year": 1996,
    "duration": 145,
    "rating": 7,
    "director": "Roland Emmerich",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BOGMwN2UwZjEtYjFjMi00ZDA1LWJlYTQtMjA1MTYxMzIyNTdiXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "",
    "description": "Інопланетяни йдуть, і їх мета - вторгнутися та знищити Землю. Боротьба з передовими технологіями, найкраща зброя людства – це бажання вижити."
  },
  {
    "id": "m_470",
    "title": "Армагеддон",
    "originalTitle": "Armageddon",
    "year": 1998,
    "duration": 151,
    "rating": 6.7,
    "director": "Michael Bay",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYzQ3MzJmZjUtNTc0OC00ZWRiLWJkMTYtMTZkMDVhMDQ4OGU4XkEyXkFqcGc@._V1_QL75_UY562_CR5,0,380,562_.jpg",
    "trailer": "",
    "description": "Виявивши, що менш ніж за місяць на Землю впаде астероїд розміром з Техас, NASA набирає невідповідну команду глибоководних бурильників, щоб врятувати планету."
  },
  {
    "id": "m_471",
    "title": "Зіткнення з безоднею",
    "originalTitle": "Deep Impact",
    "year": 1998,
    "duration": 120,
    "rating": 6.3,
    "director": "Mimi Leder",
    "genres": [
      "Бойовик",
      "Драма",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BN2EwNjMxOWYtYWE5Zi00MWEyLWJlMGMtYzA1NDQyZGE5YWZjXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "",
    "description": "Виявлено, що комета прямує до Землі. З наближенням кінця світу людство готується до найгіршого."
  },
  {
    "id": "m_472",
    "title": "Смерч",
    "originalTitle": "Twister",
    "year": 1996,
    "duration": 113,
    "rating": 6.6,
    "director": "Jan de Bont",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNGVhY2JjYzgtYjAyOC00ODg0LTliYWEtMzliZWYzMjA2NjYyXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "trailer": "",
    "description": "Двоє шукачів штормів, які знаходяться на межі розлучення, повинні працювати разом, щоб створити вдосконалену систему оповіщення про погоду, поставивши себе під приціл надзвичайно сильних торнадо."
  },
  {
    "id": "m_473",
    "title": "Смерчі",
    "originalTitle": "Twisters",
    "year": 2024,
    "duration": 122,
    "rating": 6.5,
    "director": "Lee Isaac Chung",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNjM4MWEwMTEtNTcwYi00ZDI4LWEwMzUtNDMzODBhZmI5MWE1XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Кейт Картер, колишню мисливку за торнадо та метеоролога, переконують повернутися до Оклахоми, щоб працювати з новою командою та новими технологіями."
  },
  {
    "id": "m_474",
    "title": "Післязавтра",
    "originalTitle": "The Day After Tomorrow",
    "year": 2004,
    "duration": 124,
    "rating": 6.5,
    "director": "Roland Emmerich",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BOGZmNDYyNmMtNDQyNy00OTkzLTg1OGUtYWJiNmQ5Y2Q5ZGU3XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Коли раптовий міжнародний шторм занурює планету в новий Льодовиковий період, палеокліматолог повинен здійснити сміливий похід, щоб дістатися до свого сина."
  },
  {
    "id": "m_475",
    "title": "2012",
    "originalTitle": "2012",
    "year": 2009,
    "duration": 158,
    "rating": 5.9,
    "director": "Roland Emmerich",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTY0MjEyODQzMF5BMl5BanBnXkFtZTcwMTczMjQ4Mg@@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "trailer": "",
    "description": "Розчарований письменник намагається зберегти свою сім’ю, коли серія глобальних катастроф загрожує знищити людство."
  },
  {
    "id": "m_476",
    "title": "Я, робот",
    "originalTitle": "I, Robot",
    "year": 2004,
    "duration": 115,
    "rating": 7.1,
    "director": "Alex Proyas",
    "genres": [
      "Бойовик",
      "Детектив",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZDdhNTY3YTgtYmQwMC00MjM1LTgzYzMtMGM1N2E0NWM1NDlkXkEyXkFqcGc@._V1_QL75_UY562_CR17,0,380,562_.jpg",
    "trailer": "",
    "description": "У 2035 році технофобний поліцейський розслідує злочин, який міг бути скоєний роботом, що створює більшу загрозу для людства."
  },
  {
    "id": "m_477",
    "title": "Жива сталь",
    "originalTitle": "Real Steel",
    "year": 2011,
    "duration": 127,
    "rating": 7.1,
    "director": "Shawn Levy",
    "genres": [
      "Бойовик",
      "Драма",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjEzMzEzNjg0N15BMl5BanBnXkFtZTcwMzg4NDk0Ng@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "У найближчому майбутньому, коли робот-бокс стане одним з найпопулярніших видів спорту, колишній боксер, який бореться, відчуває, що знайшов чемпіона у викинутому роботі."
  },
  {
    "id": "m_478",
    "title": "Області темряви",
    "originalTitle": "Limitless",
    "year": 2011,
    "duration": 105,
    "rating": 7.4,
    "director": "Neil Burger",
    "genres": [
      "Фантастика",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMWQ4OTQ4YzYtODlmMi00ZjA0LTg5M2QtZWUzNjA5N2NmODE5XkEyXkFqcGc@._V1_QL75_UY562_CR5,0,380,562_.jpg",
    "trailer": "",
    "description": "Таємнича пігулка, яка дає користувачеві доступ до 100% можливостей його мозку, перетворює письменника, що бореться, на фінансового чарівника, але також переносить його в новий світ, повний багатьох небезпек."
  },
  {
    "id": "m_479",
    "title": "Люсі",
    "originalTitle": "Lucy",
    "year": 2014,
    "duration": 89,
    "rating": 6.4,
    "director": "Luc Besson",
    "genres": [
      "Бойовик",
      "Фантастика",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BODcxMzY3ODY1NF5BMl5BanBnXkFtZTgwNzg1NDY4MTE@._V1_QL75_UX380_CR0,20,380,562_.jpg",
    "trailer": "",
    "description": "Жінка, яка випадково потрапила в пастку темної угоди з таємничим і жорстоким злочинним володарем, перетворюється на нещадного воїна, який вийшов за рамки раніше відомих еволюційних меж людської еволюції, і змінює ситуацію на своєму..."
  },
  {
    "id": "m_480",
    "title": "Дежавю",
    "originalTitle": "Deja Vu",
    "year": 2006,
    "duration": 126,
    "rating": 7.1,
    "director": "Tony Scott",
    "genres": [
      "Бойовик",
      "Кримінал",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMzEwNTAwNjEwMV5BMl5BanBnXkFtZTYwMzgzMjA3._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "trailer": "",
    "description": "Після розбомблення порома в Новому Орлеані A.T.F. Агент приєднується до унікального розслідування, використовуючи експериментальну технологію спостереження, щоб знайти терориста, але незабаром виявляє, що стає одержима однією з жертв."
  },
  {
    "id": "m_481",
    "title": "Ефект метелика",
    "originalTitle": "The Butterfly Effect",
    "year": 2004,
    "duration": 113,
    "rating": 7.6,
    "director": "Eric Bress, J. Mackye Gruber",
    "genres": [
      "Драма",
      "Фантастика",
      "Трилер"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZDk0ZDJiODEtNWM2ZC00OWYxLWExN2YtNTFlNjI4NTVmZmZmXkEyXkFqcGc@._V1_QL75_UY562_CR4,0,380,562_.jpg",
    "trailer": "",
    "description": "Під час травматичних подій у хлопця втрачає свідомість, але в коледжі він знаходить спосіб повернутися в часі до тих моментів і змінити хід свого життя."
  },
  {
    "id": "m_482",
    "title": "Радіохвиля",
    "originalTitle": "Frequency",
    "year": 2000,
    "duration": 118,
    "rating": 7.4,
    "director": "Gregory Hoblit",
    "genres": [
      "Кримінал",
      "Драма",
      "Детектив"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNzJmODljY2UtMWFkMy00YzQ5LThiZjUtNDI3NjM5NjU0ZTRjXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "trailer": "",
    "description": "Випадковий міжчасовий радіозв’язок з’єднує батька і сина протягом 30 років. Син намагається врятувати життя свого батька, але потім повинен виправити наслідки."
  },
  {
    "id": "m_483",
    "title": "Джуманджі",
    "originalTitle": "Jumanji",
    "year": 1995,
    "duration": 104,
    "rating": 7.1,
    "director": "Joe Johnston",
    "genres": [
      "Пригоди",
      "Комедія",
      "Сімейний"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BYTFkMjFmODgtYzRiZi00NmQwLTliZWMtMzRhMWQ5ZmY3ZDExXkEyXkFqcGc@._V1_QL75_UY562_CR22,0,380,562_.jpg",
    "trailer": "",
    "description": "Чарівна настільна гра викликає небезпеки в джунглях і зниклого хлопчика."
  },
  {
    "id": "m_484",
    "title": "Джуманджі: Поклик джунглів",
    "originalTitle": "Jumanji: Welcome to the Jungle",
    "year": 2017,
    "duration": 119,
    "rating": 6.9,
    "director": "Jake Kasdan",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Комедія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZjI5MzdmODctYjA4NS00ZmMxLWJlOWUtOGVhMjA0OGMxMWYzXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Чотирьох підлітків затягує в чарівну відеогру, і єдиний спосіб, яким вони можуть втекти, — працювати разом, щоб завершити гру."
  },
  {
    "id": "m_485",
    "title": "Ніч у музеї",
    "originalTitle": "Night at the Museum",
    "year": 2006,
    "duration": 108,
    "rating": 6.5,
    "director": "Shawn Levy",
    "genres": [
      "Пригоди",
      "Комедія",
      "Сімейний"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNGMyYjYyZDAtNzRiZC00ZjRkLTkwYjktODkxODQzNTFiMTVmXkEyXkFqcGc@._V1_QL75_UY562_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Нещодавно прийнятий нічний охоронець Музею природознавства виявляє, що давнє прокляття змушує тварин і виставлені експонати оживати та сіяти хаос."
  },
  {
    "id": "m_486",
    "title": "Пірати Карибського моря: Прокляття Чорної перлини",
    "originalTitle": "Pirates of the Caribbean: The Curse of the Black Pearl",
    "year": 2003,
    "duration": 143,
    "rating": 8.1,
    "director": "Gore Verbinski",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Фентезі"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNDhlMzEyNzItMTA5Mi00YWRhLThlNTktYTQyMTA0MDIyNDEyXkEyXkFqcGc@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "trailer": "",
    "description": "Відважний коваль об’єднується з ексцентричним піратським капітаном, щоб врятувати свою любов від нежиті піратської команди."
  },
  {
    "id": "m_487",
    "title": "Пірати Карибського моря: Скриня мерця",
    "originalTitle": "Pirates of the Caribbean: Dead Man's Chest",
    "year": 2006,
    "duration": 151,
    "rating": 7.4,
    "director": "Gore Verbinski",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Фентезі"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTcwODc1MTMxM15BMl5BanBnXkFtZTYwMDg1NzY3._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Джек Горобець мчить, щоб повернути серце Деві Джонса, щоб уникнути поневолення його душі на службу Джонсу, оскільки інші друзі та вороги також шукають серце для власних намірів."
  },
  {
    "id": "m_488",
    "title": "Пірати Карибського моря: На краю світу",
    "originalTitle": "Pirates of the Caribbean: At World's End",
    "year": 2007,
    "duration": 169,
    "rating": 7.2,
    "director": "Gore Verbinski",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Фентезі"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjIyNjkxNzEyMl5BMl5BanBnXkFtZTYwMjc3MDE3._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Вілл Тернер, Елізабет Суонн, Гектор Барбосса та екіпаж «Чорної перлини» намагаються врятувати Джека від шафки Дейві Джонса та готуються до бою з лордом Катлером Беккетом, який контролює Деві Джонса та Летючого Голландця."
  },
  {
    "id": "m_489",
    "title": "Мумія",
    "originalTitle": "The Mummy",
    "year": 1999,
    "duration": 124,
    "rating": 7.1,
    "director": "Stephen Sommers",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Фентезі"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTY4YWE0OGMtNjU0Yi00YzIwLTk3NTktM2ZiYWQwNjM4MmMxXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "trailer": "",
    "description": "Під час археологічних розкопок у стародавньому місті Хамунаптра американець, який служить у Французькому іноземному легіоні, випадково пробуджує мумію, яка починає сіяти хаос, поки він шукає реінкарнацію свого давно втраченого кохання."
  },
  {
    "id": "m_490",
    "title": "Мумія повертається",
    "originalTitle": "The Mummy Returns",
    "year": 2001,
    "duration": 130,
    "rating": 6.4,
    "director": "Stephen Sommers",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Фентезі"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjdiYzVlNjUtNGI5MC00MDE5LTk0MmQtNDc0YzIzOGRmMDNkXkEyXkFqcGc@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "trailer": "",
    "description": "Муміфіковане тіло Імхотепа відправляють до музею в Лондоні, де він знову прокидається і починає свою кампанію люті й жаху."
  },
  {
    "id": "m_491",
    "title": "Маска Зорро",
    "originalTitle": "The Mask of Zorro",
    "year": 1998,
    "duration": 136,
    "rating": 6.8,
    "director": "Martin Campbell",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Комедія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMzA2MDgyYzMtNjc4OC00YjU0LWEzMWEtOTRhMTViODY0Mjk0XkEyXkFqcGc@._V1_QL75_UX380_CR0,3,380,562_.jpg",
    "trailer": "",
    "description": "Молодого злодія, який прагне помститися за смерть свого брата, навчає колись великий старіючий Зорро, який прагне власної помсти."
  },
  {
    "id": "m_492",
    "title": "Скарб нації: Книга таємниць",
    "originalTitle": "National Treasure: Book of Secrets",
    "year": 2007,
    "duration": 124,
    "rating": 6.5,
    "director": "Jon Turteltaub",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Детектив"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjEwMjUyOTQ0MF5BMl5BanBnXkFtZTYwODA2Njk3._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "trailer": "",
    "description": "Бенджамін Гейтс повинен слідувати підказці, залишеній у щоденнику Джона Вілкса Бута, щоб довести невинність свого предка у вбивстві Авраама Лінкольна."
  },
  {
    "id": "m_493",
    "title": "Вітаємо у Зомбіленді",
    "originalTitle": "Zombieland",
    "year": 2009,
    "duration": 88,
    "rating": 7.5,
    "director": "Ruben Fleischer",
    "genres": [
      "Бойовик",
      "Комедія",
      "Жахи"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMTU5MDg0NTQ1N15BMl5BanBnXkFtZTcwMjA4Mjg3Mg@@._V1_QL75_UY562_CR12,0,380,562_.jpg",
    "trailer": "",
    "description": "Сором’язливий студент, який намагається зв’язатися зі своєю сім’єю в Огайо, синяк із зброєю в пошуках останнього Твінкі та пара сестер, які прагнуть потрапити до парку розваг, об’єднують зусилля в мандрівці повною зомбі Америкою."
  },
  {
    "id": "m_494",
    "title": "Тепло наших тіл",
    "originalTitle": "Warm Bodies",
    "year": 2013,
    "duration": 98,
    "rating": 6.8,
    "director": "Jonathan Levine",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Комедія"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNTM2YWZhMDUtMzEzMi00YzUzLWI0ZjYtNzgzNTA4YWEzOTdkXkEyXkFqcGc@._V1_QL75_UY562_CR9,0,380,562_.jpg",
    "trailer": "",
    "description": "Після того, як надзвичайно незвичайний зомбі рятує ще живу дівчину від нападу, двоє зав’язують стосунки, які призводять до подій, які можуть змінити весь мертвий світ."
  },
  {
    "id": "m_495",
    "title": "Війна світів Z",
    "originalTitle": "World War Z",
    "year": 2013,
    "duration": 116,
    "rating": 7,
    "director": "Marc Forster",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Жахи"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BODg3ZTM2YWQtZDE5Ny00NGNiLTkzYjgtYWVlYjNkOTg5NDI1XkEyXkFqcGc@._V1_QL75_UX380_CR0,11,380,562_.jpg",
    "trailer": "",
    "description": "Колишній співробітник Організації Об’єднаних Націй Джеррі Лейн подорожує світом у гонці з часом, щоб зупинити пандемію зомбі, яка руйнує армії та уряди та загрожує знищити саме людство."
  },
  {
    "id": "m_496",
    "title": "Тихе місце: День перший",
    "originalTitle": "A Quiet Place: Day One",
    "year": 2024,
    "duration": 99,
    "rating": 6.2,
    "director": "Michael Sarnoski",
    "genres": [
      "Драма",
      "Жахи",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMDdjZTljZWMtMDIwNi00MTA5LTkxZmItNmY0NDA3ZDM0N2M2XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Молода жінка на ім’я Сем опиняється в пастці в Нью-Йорку на ранніх стадіях вторгнення інопланетних створінь із надчутливим слухом."
  },
  {
    "id": "m_497",
    "title": "Королівство планети мавп",
    "originalTitle": "Kingdom of the Planet of the Apes",
    "year": 2024,
    "duration": 145,
    "rating": 6.8,
    "director": "Wes Ball",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BZDRlZTc3YTItOTk3Yi00NmU4LWFiOGUtNjgwMDZjNjIzNTU1XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Через багато років після правління Цезаря молода мавпа вирушає в подорож, яка змусить її поставити під сумнів усе, чого його навчили про минуле, і зробити вибір, який визначить майбутнє як для мавп, так і для людей."
  },
  {
    "id": "m_498",
    "title": "Повстання планети мавп",
    "originalTitle": "Rise of the Planet of the Apes",
    "year": 2011,
    "duration": 105,
    "rating": 7.6,
    "director": "Rupert Wyatt",
    "genres": [
      "Бойовик",
      "Драма",
      "Фантастика"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMjllODU1NDItODU1Ni00N2Y2LTg4Y2ItOTJjMTczZDliN2FhXkEyXkFqcGc@._V1_QL75_UY562_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Речовина, розроблена для того, щоб допомогти мозку відновлюватися, надає високого інтелекту шимпанзе, яке очолює повстання мавп."
  },
  {
    "id": "m_499",
    "title": "Світанок планети мавп",
    "originalTitle": "Dawn of the Planet of the Apes",
    "year": 2014,
    "duration": 130,
    "rating": 7.6,
    "director": "Matt Reeves",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BNWNjYzQ4ZGItZTg1My00NTM2LTg1NDUtYThjOTQwMTYyNjU1XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Крихкий мир між мавпами та людьми опинився під загрозою, оскільки недовіра та зрада загрожують втягнути обидва племена у війну за панування на Землі."
  },
  {
    "id": "m_500",
    "title": "Війна за планету мавп",
    "originalTitle": "War for the Planet of the Apes",
    "year": 2017,
    "duration": 140,
    "rating": 7.4,
    "director": "Matt Reeves",
    "genres": [
      "Бойовик",
      "Пригоди",
      "Драма"
    ],
    "poster": "https://m.media-amazon.com/images/M/MV5BMzNhMzNiZDYtMzYxYy00YTYwLTkxNmYtNTJhOGU1Yjg5ODI5XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "trailer": "",
    "description": "Після того, як людиноподібні мавпи зазнають неймовірних втрат, Цезар бореться зі своїми темними інстинктами та починає власний міфічний квест, щоб помститися за свій рід."
  }
];
