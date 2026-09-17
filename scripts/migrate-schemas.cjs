const fs = require('fs');
const path = require('path');

const routesDir = path.join(__dirname, '../src/routes');
const files = fs.readdirSync(routesDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  let content = fs.readFileSync(path.join(routesDir, file), 'utf-8');

  if (!content.includes('createFileRoute')) continue;

  const originalContent = content;

  // 1. Remove all old schema variable declarations
  content = content.replace(/const articleSchema = \{[\s\S]*?\n\};?\n/g, '');
  content = content.replace(/const faqSchema = \{[\s\S]*?\n\};?\n/g, '');
  content = content.replace(/const breadcrumbSchema = \{[\s\S]*?\n\};?\n/g, '');
  content = content.replace(/const breadcrumbSchemaFromItems =.*?;\n/g, '');
  content = content.replace(/const websiteSchema = \{[\s\S]*?\n\};?\n/g, '');
  content = content.replace(/const organizationSchema = \{[\s\S]*?\n\};?\n/g, '');
  content = content.replace(/const collectionSchema = \{[\s\S]*?\n\};?\n/g, '');
  
  // Extract variables
  const urlMatch = originalContent.match(/const URL = "(.*?)";/);
  const titleMatch = originalContent.match(/const TITLE = "(.*?)";/);
  const descMatch = originalContent.match(/const DESC =[\s\S]*?"([\s\S]*?)";/);
  const pubMatch = originalContent.match(/const PUBLISHED = "(.*?)";/);
  
  const hasFaqs = originalContent.includes('const faqs: { q: string; a: string }[] = [');
  
  // Try to find hero image variable name
  const heroMatch = originalContent.match(/import (\w+) from "@\/assets\/.*?"/);
  const heroVar = heroMatch ? heroMatch[1] : '""';
  
  // figure out section
  const sectionPart = file.split('.')[0];
  let section = sectionPart.charAt(0).toUpperCase() + sectionPart.slice(1);
  if (section === 'Index' || section === '__root') section = '';
  const isNews = section === 'News';

  let importsToAdd = new Set();
  
  const scriptsRegex = /scripts:\s*\[([\s\S]*?)\](,?)/;
  
  if (scriptsRegex.test(content)) {
      // Is it a standard article?
      if (urlMatch && titleMatch && pubMatch) {
          const URL = urlMatch[1];
          const TITLE = titleMatch[1].replace(/"/g, '\\"');
          const DESC = descMatch ? descMatch[1].replace(/\n/g, ' ').replace(/"/g, '\\"') : '';
          const PUBLISHED = pubMatch[1];
          
          let scriptsReplacement = `scripts: [\n`;
          scriptsReplacement += `      { type: "application/ld+json", children: JSON.stringify(buildArticleSchema({ headline: "${TITLE}", description: "${DESC}", imageUrl: \`https://www.cryptobeacon.site\${${heroVar}}\`, datePublished: "${PUBLISHED}", dateModified: "${PUBLISHED}", url: "${URL}", section: "${section}", isNews: ${isNews} })) },\n`;
          importsToAdd.add('buildArticleSchema');
          
          if (hasFaqs) {
             scriptsReplacement += `      { type: "application/ld+json", children: JSON.stringify(buildFAQSchema(faqs)) },\n`;
             importsToAdd.add('buildFAQSchema');
          }
          
          scriptsReplacement += `      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([\n        { name: "Home", item: "https://www.cryptobeacon.site/" },\n        { name: "${section}", item: "https://www.cryptobeacon.site/${section.toLowerCase()}" },\n        { name: "${TITLE}", item: "${URL}" }\n      ])) }\n    ]$2`;
          importsToAdd.add('buildBreadcrumbSchema');
          
          content = content.replace(scriptsRegex, scriptsReplacement);
      } else if (file === '__root.tsx') {
          let scriptsReplacement = `scripts: [\n`;
          scriptsReplacement += `      { type: "application/ld+json", children: JSON.stringify(buildWebSiteSchema()) },\n`;
          scriptsReplacement += `      { type: "application/ld+json", children: JSON.stringify(buildOrganizationSchema()) }\n    ]$2`;
          importsToAdd.add('buildWebSiteSchema');
          importsToAdd.add('buildOrganizationSchema');
          content = content.replace(scriptsRegex, scriptsReplacement);
      } else if (file.endsWith('.index.tsx')) {
          // Hub pages
          const hubTitleMatch = originalContent.match(/title:\s*"(.*?)"/);
          const hubTitle = hubTitleMatch ? hubTitleMatch[1] : section;
          let scriptsReplacement = `scripts: [\n`;
          scriptsReplacement += `      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([\n        { name: "Home", item: "https://www.cryptobeacon.site/" },\n        { name: "${hubTitle}", item: "https://www.cryptobeacon.site/${section.toLowerCase()}" }\n      ])) }\n    ]$2`;
          importsToAdd.add('buildBreadcrumbSchema');
          content = content.replace(scriptsRegex, scriptsReplacement);
      } else {
          // just clear scripts for other pages like author.tsx, unless author
          if (file === 'author.tsx') {
             let scriptsReplacement = `scripts: [\n      { type: "application/ld+json", children: JSON.stringify(buildPersonSchema()) }\n    ]$2`;
             importsToAdd.add('buildPersonSchema');
             content = content.replace(scriptsRegex, scriptsReplacement);
          } else {
             content = content.replace(scriptsRegex, `scripts: []$2`);
          }
      }
  }

  if (importsToAdd.size > 0 && !content.includes('buildArticleSchema') && !content.includes('buildWebSiteSchema') && !content.includes('buildPersonSchema') && !content.includes('buildBreadcrumbSchema')) {
      const importsStr = `import { ${Array.from(importsToAdd).join(', ')} } from "@/lib/schema";\n`;
      content = content.replace(/(import .*?;\n)/, `$1${importsStr}`);
  }

  fs.writeFileSync(path.join(routesDir, file), content);
}

console.log("Migration done");
