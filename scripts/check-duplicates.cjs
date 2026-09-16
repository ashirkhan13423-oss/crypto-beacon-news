const fs = require('fs');
const path = require('path');

const routesDir = path.join(process.cwd(), 'src/routes');
const files = fs.readdirSync(routesDir).filter(f => f.endsWith('.tsx') && !f.startsWith('_') && !f.includes('index.tsx') && f !== 'search.tsx');

let hasViolations = false;
const globalParagraphs = new Map();

function extractParagraphs(content) {
  const pTags = content.match(/<[pP][^>]*>([\s\S]*?)<\/[pP]>/g) || [];
  return pTags.map(p => {
    return p.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  }).filter(text => text.length > 0 && text !== '{children}');
}

for (const file of files) {
  const content = fs.readFileSync(path.join(routesDir, file), 'utf-8');
  const paragraphs = extractParagraphs(content);
  
  const localParagraphs = new Map();

  for (const text of paragraphs) {
    localParagraphs.set(text, (localParagraphs.get(text) || 0) + 1);

    const wordCount = text.split(' ').filter(w => w.length > 0).length;
    if (wordCount >= 20) {
      if (!globalParagraphs.has(text)) {
        globalParagraphs.set(text, new Set());
      }
      globalParagraphs.get(text).add(file);
    }
  }

  for (const [text, count] of localParagraphs.entries()) {
    if (count > 1) {
      console.error(`\n[VIOLATION: LOCAL REPEAT] File: src/routes/${file}`);
      console.error(`Repeated ${count} times in same file.`);
      console.error(`Text: "${text}"`);
      hasViolations = true;
    }
  }
}

for (const [text, fileSet] of globalParagraphs.entries()) {
  if (fileSet.size > 1) {
    const fileList = Array.from(fileSet).map(f => `src/routes/${f}`).join(', ');
    console.error(`\n[VIOLATION: GLOBAL REPEAT] Found in files: ${fileList}`);
    console.error(`Text: "${text}"`);
    hasViolations = true;
  }
}

if (hasViolations) {
  console.error('\nBuild failed: Duplicate paragraphs found.');
  process.exit(1);
} else {
  console.log('Success: No duplicate paragraphs found.');
  process.exit(0);
}
