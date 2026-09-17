const fs = require('fs');
const path = require('path');

const routesDir = path.join(__dirname, '../src/routes');
const files = fs.readdirSync(routesDir).filter(f => f.endsWith('.tsx') && !f.startsWith('__'));

let titleWarnings = [];
let descWarnings = [];

for (const file of files) {
  const content = fs.readFileSync(path.join(routesDir, file), 'utf-8');

  const titleMatch = content.match(/const\s+TITLE\s*=\s*["'](.*?)["']/);
  const descMatch = content.match(/const\s+DESC\s*=\s*["'](.*?)["']/);

  if (titleMatch) {
    const title = titleMatch[1];
    if (title.length < 50 || title.length > 60) {
      titleWarnings.push(`- ${file}: length ${title.length} ("${title}")`);
    }
  }

  if (descMatch) {
    const desc = descMatch[1];
    if (desc.length < 145 || desc.length > 155) {
      descWarnings.push(`- ${file}: length ${desc.length}`);
    }
  }
}

if (titleWarnings.length > 0 || descWarnings.length > 0) {
  console.warn("\n================ METADATA WARNINGS ================\n");
  if (titleWarnings.length > 0) {
    console.warn(`WARNING: ${titleWarnings.length} titles are outside the 50-60 character limit:\n`);
    titleWarnings.forEach(w => console.warn(w));
    console.warn("\n");
  }
  
  if (descWarnings.length > 0) {
    console.warn(`WARNING: ${descWarnings.length} descriptions are outside the 145-155 character limit:\n`);
    descWarnings.forEach(w => console.warn(w));
    console.warn("\n");
  }
  console.warn("===================================================\n");
} else {
  console.log("Metadata length checks passed successfully.");
}

// Exit with 0 so the build does not fail
process.exit(0);
