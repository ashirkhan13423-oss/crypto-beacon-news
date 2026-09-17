const fs = require('fs');
let c = fs.readFileSync('src/routes/glossary.index.tsx','utf-8');
c = c.replace('{g.terms.map((t) => (', '{g.terms.map((t) => { const termId = t.term.toLowerCase().replace(/[^a-z0-9]+/g, "-"); return (');
c = c.replace('<div key={t.term} className="p-md rounded-lg border border-outline-variant bg-surface-container-low">', '<div key={t.term} id={termId} className="p-md rounded-lg border border-outline-variant bg-surface-container-low scroll-mt-28">');
c = c.replace('))}', ')})}');
fs.writeFileSync('src/routes/glossary.index.tsx', c);
