const fs = require('fs');
const path = require('path');

const routesDir = path.join(__dirname, '../src/routes');

const files = fs.readdirSync(routesDir).filter(f => f.endsWith('.tsx') && !f.startsWith('__') && !['author.tsx', 'about.tsx', 'contact.tsx', 'privacy.tsx', 'terms.tsx', 'search.tsx', 'disclaimer.tsx', 'corrections.tsx', 'editorial-policy.tsx', 'affiliate-disclosure.tsx'].includes(f));

for (const file of files) {
  const filePath = path.join(routesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Skip if already migrated
  if (content.includes('buildMetadata(')) continue;

  // Determine section and path
  const isArticle = file.split('.').length > 2;
  const isHub = file.endsWith('.index.tsx');
  
  let sectionName = '';
  let urlPath = '';
  let type = 'website';
  let publishedVar = 'PUBLISHED';
  
  if (isArticle) {
      const parts = file.replace('.tsx', '').split('.');
      sectionName = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
      urlPath = '/' + parts.join('/');
      type = 'article';
      if (!content.includes('PUBLISHED')) {
          publishedVar = 'undefined';
      }
  } else if (isHub) {
      const parts = file.replace('.index.tsx', '');
      sectionName = parts.charAt(0).toUpperCase() + parts.slice(1);
      urlPath = '/' + parts;
  }
  
  // Replace meta and links arrays inside head: () => ({ ... })
  const metaRegex = /meta:\s*\[[\s\S]*?\],/g;
  const linksRegex = /links:\s*\[[\s\S]*?\],?/g;
  
  let buildArgs = `{ title: TITLE, description: DESC, url: URL, type: '${type}', path: '${urlPath}'`;
  if (type === 'article') {
      buildArgs += `, publishedTime: ${publishedVar}, section: '${sectionName}'`;
  }
  buildArgs += ` }`;
  
  // Actually, we can replace the whole meta + links block with ...buildMetadata(...)
  // Because the order of meta and links might differ, let's just do a string replacement
  // We'll find head: () => ({ ... })
  const headMatch = content.match(/head:\s*\(\)\s*=>\s*\(\{([\s\S]*?)\}\),/);
  if (headMatch) {
      let headContent = headMatch[1];
      headContent = headContent.replace(metaRegex, '');
      headContent = headContent.replace(linksRegex, '');
      
      const newHeadContent = `\n    ...buildMetadata(${buildArgs}),` + headContent;
      content = content.replace(headMatch[1], newHeadContent);
  }
  
  // Add import for buildMetadata
  if (!content.includes('import { buildMetadata }')) {
      content = content.replace(/(import .*?;\n)/, `$1import { buildMetadata } from "@/lib/metadata";\n`);
  }
  
  // Remove readTime prop from <Author />
  content = content.replace(/readTime="[^"]*"/g, '');
  content = content.replace(/readTime=\{[^}]*\}/g, '');
  
  fs.writeFileSync(filePath, content);
  console.log(`Migrated ${file}`);
}

// Now handle the special pages that we skipped
const specialPages = ['author.tsx', 'about.tsx', 'contact.tsx', 'privacy.tsx', 'terms.tsx', 'search.tsx', 'corrections.tsx', 'editorial-policy.tsx', 'affiliate-disclosure.tsx', '__root.tsx'];

for (const file of specialPages) {
  const filePath = path.join(routesDir, file);
  if (!fs.existsSync(filePath)) continue;
  let content = fs.readFileSync(filePath, 'utf-8');

  if (content.includes('buildMetadata(')) continue;

  const urlPath = file === '__root.tsx' ? '/' : '/' + file.replace('.tsx', '');
  const type = 'website';
  
  // Find head: () => ({ ... })
  const headMatch = content.match(/head:\s*\(\)\s*=>\s*\(\{([\s\S]*?)\}\),/);
  if (headMatch) {
      let headContent = headMatch[1];
      headContent = headContent.replace(/meta:\s*\[[\s\S]*?\],/g, '');
      headContent = headContent.replace(/links:\s*\[[\s\S]*?\],?/g, '');
      
      let buildArgs = `{ title: TITLE, description: DESC, url: URL || "https://www.cryptobeacon.site${urlPath}", type: '${type}', path: '${urlPath}' }`;
      if (file === '__root.tsx') {
          buildArgs = `{ title: "CryptoBeacon", description: "Independent cryptocurrency research...", url: "https://www.cryptobeacon.site", type: 'website', path: '/' }`;
      }
      
      const newHeadContent = `\n    ...buildMetadata(${buildArgs}),` + headContent;
      content = content.replace(headMatch[1], newHeadContent);
  }
  
  if (!content.includes('import { buildMetadata }') && headMatch) {
      if (content.includes('import {')) {
          content = content.replace(/(import .*?;\n)/, `$1import { buildMetadata } from "@/lib/metadata";\n`);
      } else {
          content = `import { buildMetadata } from "@/lib/metadata";\n` + content;
      }
  }
  
  fs.writeFileSync(filePath, content);
  console.log(`Migrated special page ${file}`);
}
