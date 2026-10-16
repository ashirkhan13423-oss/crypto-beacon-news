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
const issues = [];

for (const file of files) {
  const c = fs.readFileSync(file, 'utf8');
  // Find URL or PAGE_URL or URL_CANONICAL declarations
  const m = c.match(/const\s+(URL|PAGE_URL|URL_CANONICAL|AUTHOR_URL)\s*=\s*['"`]([^'"`]+)['"`]/);
  if (m) {
    const varName = m[1];
    const u = m[2];
    if (!u.startsWith('https://www.cryptobeacon.site')) {
      issues.push({ file, varName, u, reason: 'Does not start with https://www.cryptobeacon.site' });
    }
    if (u.endsWith('/') && u !== 'https://www.cryptobeacon.site/') {
      issues.push({ file, varName, u, reason: 'Unwanted trailing slash' });
    }
  }
}

console.log('Issues found:', issues.length);
if (issues.length) console.log(JSON.stringify(issues, null, 2));
