const fs = require('fs');
const path = require('path');

const routesDir = path.join(__dirname, '../src/routes');
const files = fs.readdirSync(routesDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(routesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // 1. Fix missing `const { page } = Route.useSearch();` in Index pages
  if (file.endsWith('.index.tsx') && content.includes('currentPage={page}') && !content.includes('const { page } = Route.useSearch();')) {
    const componentMatch = content.match(/function\s+[a-zA-Z0-9_]+\s*\(\)\s*\{/);
    if (componentMatch) {
      content = content.replace(componentMatch[0], componentMatch[0] + '\n  const { page } = Route.useSearch();');
      changed = true;
    }
  }

  // 2. Fix missing `buildMetadata` import
  if (content.includes('buildMetadata(') && !content.includes('buildMetadata }')) {
    content = 'import { buildMetadata } from "@/lib/metadata";\n' + content;
    changed = true;
  }

  // 3. Fix missing buildPersonSchema in author.tsx
  if (file === 'author.tsx' && content.includes('buildPersonSchema') && !content.includes('buildPersonSchema }')) {
    content = 'import { buildPersonSchema } from "@/lib/schema/builders";\n' + content;
    changed = true;
  }

  // 4. Fix missing TITLE/DESC in search.tsx
  if (file === 'search.tsx' && content.includes('title: TITLE') && !content.includes('const TITLE')) {
    const inject = `\nconst TITLE = "Search | CryptoBeacon";\nconst DESC = "Search across our entire library of crypto articles and guides.";\nconst URL = "https://www.cryptobeacon.site/search";\n`;
    content = content.replace(/(import [^\n]+\n)+(?!import)/, (match) => match + inject);
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${file}`);
  }
}
