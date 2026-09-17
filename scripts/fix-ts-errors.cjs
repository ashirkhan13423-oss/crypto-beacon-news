const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const routesDir = path.join(__dirname, '../src/routes');
const files = fs.readdirSync(routesDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(routesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // 1. Fix missing builder imports
  const needsBreadcrumb = content.includes('buildBreadcrumbSchema') && !content.includes('buildBreadcrumbSchema }');
  const needsArticle = content.includes('buildArticleSchema') && !content.includes('buildArticleSchema }');
  const needsFAQ = content.includes('buildFAQSchema') && !content.includes('buildFAQSchema }');

  if (needsBreadcrumb || needsArticle || needsFAQ) {
    const toImport = [];
    if (needsBreadcrumb) toImport.push('buildBreadcrumbSchema');
    if (needsArticle) toImport.push('buildArticleSchema');
    if (needsFAQ) toImport.push('buildFAQSchema');

    const importStmt = `\nimport { ${toImport.join(', ')} } from "@/lib/schema/builders";`;
    
    if (content.includes('import { buildMetadata } from "@/lib/metadata";')) {
      content = content.replace('import { buildMetadata } from "@/lib/metadata";', `import { buildMetadata } from "@/lib/metadata";${importStmt}`);
    } else {
      content = importStmt + '\n' + content;
    }
    changed = true;
  }

  // 2. Fix missing TITLE, DESC, URL constants in index.tsx files
  if (file.endsWith('.index.tsx') || file === 'terms.tsx' || file === 'privacy.tsx' || file === 'disclaimer.tsx' || file === 'about.tsx' || file === 'contact.tsx' || file === 'author.tsx') {
    if (content.includes('title: TITLE') && !content.includes('const TITLE =')) {
      try {
        const originalContent = execSync(`git show 5aa6873:src/routes/${file}`).toString();
        
        let titleMatch = originalContent.match(/\{ title:\s*\"([^\"]+)\"/);
        if (!titleMatch) titleMatch = originalContent.match(/title:\s*\"([^\"]+)\"/);
        
        let descMatch = originalContent.match(/name:\s*\"description\",\s*content:\s*\"([^\"]+)\"/);
        if (!descMatch) descMatch = originalContent.match(/description:\s*\"([^\"]+)\"/);
        if (!descMatch) descMatch = originalContent.match(/content:\s*\"([^\"]+)\"/);
        
        let urlMatch = originalContent.match(/property:\s*\"og:url\",\s*content:\s*\"([^\"]+)\"/);
        if (!urlMatch) urlMatch = originalContent.match(/url:\s*\"([^\"]+)\"/);

        const title = titleMatch ? titleMatch[1] : `CryptoBeacon - ${file.replace('.tsx', '')}`;
        const desc = descMatch ? descMatch[1] : `Read more about ${file.replace('.tsx', '')} on CryptoBeacon.`;
        const url = urlMatch ? urlMatch[1] : `https://www.cryptobeacon.site/${file.replace('.tsx', '').replace('.index', '')}`;

        const injectString = `\nconst TITLE = "${title}";\nconst DESC = "${desc}";\nconst URL = "${url}";\n`;
        
        // Insert after imports
        content = content.replace(/(import [^\n]+\n)+(?!import)/, (match) => match + injectString);
        changed = true;
      } catch (e) {
        console.error(`Failed to extract metadata for ${file}`, e.message);
      }
    }
  }

  // 3. Fix missing Link import in some hub pages
  if (content.includes('<Link') && !content.includes('import { Link }') && !content.includes('import { Link,')) {
    if (content.includes('import { createFileRoute }')) {
        content = content.replace('import { createFileRoute } from "@tanstack/react-router";', 'import { createFileRoute, Link } from "@tanstack/react-router";');
    } else {
        content = `import { Link } from "@tanstack/react-router";\n` + content;
    }
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${file}`);
  }
}
