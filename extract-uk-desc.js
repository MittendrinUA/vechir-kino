const fs = require('fs');

const dict = {};

function scanFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Шукаємо виклики add(...) або об'єкти з title/description
  const lines = content.split('\n');
  for (const line of lines) {
    // Формат add("Початок", "Inception", ..., "Опис")
    const matchAdd = line.match(/add\(\s*"([^"]+)",\s*"([^"]+)",[\s\S]*?"([^"]{20,})"\s*\);/);
    if (matchAdd) {
      const orig = matchAdd[2].trim().toLowerCase();
      const desc = matchAdd[3].trim();
      if (desc && !dict[orig]) {
        dict[orig] = desc;
      }
    }
  }
}

scanFile('generate-500.js');
scanFile('generate-catalog.js');
scanFile('build-500-movies.js');
scanFile('build-500-complete.js');

console.log('Знайдено готових українських описів:', Object.keys(dict).length);
fs.writeFileSync('uk-desc-cache.json', JSON.stringify(dict, null, 2), 'utf8');
