const fs = require('fs');
const path = require('path');

const routesDir = path.join(__dirname, '../src/routes');
const filesToFix = [
  'altcoins.index.tsx',
  'defi.index.tsx',
  'etfs.index.tsx',
  'taxes.index.tsx'
];

for (const file of filesToFix) {
  const filePath = path.join(routesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // We are missing a closing </section> tag after <ArticleGrid />
  if (!content.includes('</section>')) {
      const match = content.match(/<ArticleGrid category=".*?" currentPage=\{page\} \/>/);
      if (match) {
          content = content.replace(match[0], match[0] + '\n          </section>');
          fs.writeFileSync(filePath, content);
          console.log(`Added </section> to ${file}`);
      }
  }
}
