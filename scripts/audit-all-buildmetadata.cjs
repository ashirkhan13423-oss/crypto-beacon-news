const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) {
      results = results.concat(walk(p));
    } else if (f.endsWith('.ts') || f.endsWith('.tsx')) {
      results.push(p);
    }
  }
  return results;
}

const files = walk('src/routes');
const results = [];

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  // Match buildMetadata calls
  const matches = [...content.matchAll(/buildMetadata\s*\(\s*\{([^}]+)\}/gs)];
  for (const m of matches) {
    const block = m[1];
    const urlMatch = block.match(/\burl\s*:\s*([^,\n]+)/);
    if (!urlMatch) {
      results.push({ file, status: 'NO_URL' });
      continue;
    }
    const val = urlMatch[1].trim();
    results.push({ file, val });
  }
}

console.log(`Found ${results.length} buildMetadata calls.`);
// Group by val style
const styles = {};
for (const r of results) {
  styles[r.val] = (styles[r.val] || 0) + 1;
}
console.log('Value distribution:', styles);
