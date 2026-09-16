const fs = require('fs');
const path = require('path');

const routesDir = path.join(__dirname, '../src/routes');

const hubs = [
  { file: 'bitcoin.index.tsx', category: 'Bitcoin' },
  { file: 'ethereum.index.tsx', category: 'Ethereum' },
  { file: 'news.index.tsx', category: 'News' },
  { file: 'altcoins.index.tsx', category: 'Altcoins' },
  { file: 'defi.index.tsx', category: 'DeFi' },
  { file: 'taxes.index.tsx', category: 'Taxes' },
  { file: 'etfs.index.tsx', category: 'ETFs' },
  { file: 'learn.index.tsx', category: 'Learn' } // Maybe? Let's check if it exists
];

hubs.forEach(({ file, category }) => {
  const filepath = path.join(routesDir, file);
  if (!fs.existsSync(filepath)) {
    console.log(`Skipping ${file}, does not exist`);
    return;
  }
  let c = fs.readFileSync(filepath, 'utf-8');
  
  // 1. Imports
  if (c.includes('ArticleGrid')) return; // already refactored
  c = c.replace(/import\s*\{\s*createFileRoute(,\s*Link)?\s*\}\s*from\s*['"]@tanstack\/react-router['"];/,
    `import { createFileRoute } from "@tanstack/react-router";\nimport { ArticleGrid } from "@/components/ArticleGrid";\nimport { z } from "zod";`);
  
  // 2. Search schema and Route
  c = c.replace(/export const Route = createFileRoute\([^)]+\)\(\{/, 
    `const searchSchema = z.object({ page: z.number().catch(1).optional().default(1) });\n\n$&`);
  c = c.replace(/export const Route = createFileRoute\([^)]+\)\(\{/, `$& validateSearch: searchSchema,`);
  
  // 3. Component UseSearch
  c = c.replace(/function [A-Za-z0-9_]+\(\) \{\s*return \(/, `$&`.replace('return (', 'const { page } = Route.useSearch();\n\n  return ('));
  
  // 4. Replace Grid
  // We want to replace everything from `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">` down to its closing `</div>` right before `</main>`
  // This can be tricky with regex if there are nested divs. 
  // Let's find the start of the grid.
  const gridStart = c.indexOf('<div className="grid grid-cols-1');
  const mainEnd = c.lastIndexOf('</main>');
  if (gridStart !== -1 && mainEnd !== -1) {
    const beforeGrid = c.substring(0, gridStart);
    const afterMain = c.substring(mainEnd);
    c = beforeGrid + `<ArticleGrid category="${category}" currentPage={page} />\n      ` + afterMain;
  } else {
    console.log(`Could not find grid or main tag in ${file}`);
  }
  
  fs.writeFileSync(filepath, c);
  console.log(`Refactored ${file}`);
});
