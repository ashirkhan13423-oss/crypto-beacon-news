const fs = require('fs');

const hubs = [
  'src/routes/learn.index.tsx',
  'src/routes/glossary.index.tsx',
  'src/routes/defi.index.tsx',
  'src/routes/etfs.index.tsx',
  'src/routes/taxes.index.tsx'
];

for (const f of hubs) {
  let c = fs.readFileSync(f, 'utf8');
  if (c.includes('noindex')) {
    console.log(f + ': already has noindex — skipped');
    continue;
  }
  // Find the head block and replace it with a function that injects noindex
  // Pattern: head: () => ({ ...buildMetadata({...}) ... })
  // We wrap by converting arrow expression to arrow block
  c = c.replace(/head:\s*\(\)\s*=>\s*\(\{/, 'head: () => { const _hd = (({');
  // find the matching close of that block - we'll look for '}),\n  component:'
  // and replace it with })); return { ..._hd, meta: [...(_hd.meta||[]), {name:'robots',content:'noindex, follow'}] }; },
  c = c.replace(/(\}\)),(\s*component:)/, "})); return { ..._hd, meta: [...(_hd.meta || []), { name: 'robots', content: 'noindex, follow' }] }; },$2");
  fs.writeFileSync(f, c);
  console.log(f + ': updated with noindex');
}
