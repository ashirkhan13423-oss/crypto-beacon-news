const fs = require('fs');
const path = require('path');

const routesDir = path.join(__dirname, '../src/routes');
const files = fs.readdirSync(routesDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(routesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Remove all duplicate Disclaimer imports
  const disclaimerImportRegex = /import\s+\{\s*Disclaimer\s*\}\s+from\s+"@\/components\/Disclaimer";?\s*\n/g;
  const matches = content.match(disclaimerImportRegex) || [];
  if (matches.length > 1) {
    // Remove all occurrences
    content = content.replace(disclaimerImportRegex, '');
    // Add a single import at the top after the last existing import statement
    const importLines = content.match(/^import.*;$/gm) || [];
    const lastImport = importLines.length ? importLines[importLines.length - 1] : null;
    const insertion = 'import { Disclaimer } from "@/components/Disclaimer";\n';
    if (lastImport) {
      const idx = content.indexOf(lastImport) + lastImport.length;
      content = content.slice(0, idx) + '\n' + insertion + content.slice(idx);
    } else {
      // No existing imports, prepend
      content = insertion + '\n' + content;
    }
    fs.writeFileSync(filePath, content);
    console.log(`Cleaned up Disclaimer imports in ${file}`);
  }
}
console.log('Disclaimer import cleanup done');
