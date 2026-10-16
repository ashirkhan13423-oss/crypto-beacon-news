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
  const content = fs.readFileSync(file, 'utf8');
  const matches = [...content.matchAll(/buildMetadata\s*\(\s*\{([^}]+)\}/gs)];
  for (const m of matches) {
    const block = m[1];
    const urlMatch = block.match(/\burl\s*:\s*([^,\n]+)/);
    if (!urlMatch) {
      issues.push({ file, issue: 'No url in buildMetadata' });
      continue;
    }
    const val = urlMatch[1].trim();
    // evaluate what val is in the file
    if (val === 'URL') {
      // Check if URL is defined
      const hasUrl = /^\s*(const|let|var)\s+URL\s*=/m.test(content);
      if (!hasUrl) {
        issues.push({ file, issue: 'url: URL but URL is undeclared (resolves to global URL)' });
      } else {
        // Find value of URL
        const valMatch = content.match(/^\s*const\s+URL\s*=\s*(['"`][^'"`]+['"`])/m);
        issues.push({ file, isOkWithDecl: true, val: valMatch ? valMatch[1] : 'dynamic' });
      }
    } else if (val.includes('URL')) {
      issues.push({ file, expression: val });
    }
  }
}

console.log(JSON.stringify(issues.filter(i => !i.isOkWithDecl), null, 2));
