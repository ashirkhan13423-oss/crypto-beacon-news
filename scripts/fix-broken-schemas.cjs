const fs = require('fs');
const path = require('path');

const routesDir = path.join(__dirname, '../src/routes');
const filesToFix = [
  'affiliate-disclosure.tsx',
  'corrections.tsx',
  'editorial-policy.tsx',
  'altcoins.index.tsx',
  'defi.index.tsx',
  'etfs.index.tsx',
  'glossary.index.tsx',
  'learn.index.tsx',
  'taxes.index.tsx'
];

for (const file of filesToFix) {
  const filePath = path.join(routesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // We need to replace the entire scripts: [...] array correctly.
  // We can use a regex that handles nested brackets or just replace from `scripts: [` to `  }),`
  
  if (file.endsWith('.index.tsx')) {
    const sectionPart = file.split('.')[0];
    let section = sectionPart.charAt(0).toUpperCase() + sectionPart.slice(1);
    const hubTitleMatch = content.match(/title:\s*"(.*?)"/);
    const hubTitle = hubTitleMatch ? hubTitleMatch[1] : section;
    
    const scriptsReplacement = `scripts: [
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([
        { name: "Home", item: "https://www.cryptobeacon.site/" },
        { name: "${hubTitle}", item: "https://www.cryptobeacon.site/${section.toLowerCase()}" }
      ])) }
    ]
  }),`;
    content = content.replace(/scripts:\s*\[[\s\S]*?\}\),/g, scriptsReplacement.replace('}),', '}),'));
    
    // Use string split and replace
    const parts = content.split('scripts: [');
    if (parts.length > 1) {
       const before = parts[0];
       const after = parts[1];
       const nextParen = after.indexOf('}),');
       content = before + 'scripts: [\n      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbSchema([\n        { name: "Home", item: "https://www.cryptobeacon.site/" },\n        { name: "' + hubTitle + '", item: "https://www.cryptobeacon.site/' + section.toLowerCase() + '" }\n      ])) }\n    ]\n  }),' + after.substring(nextParen + 3);
       
       if (!content.includes('buildBreadcrumbSchema')) {
         content = content.replace(/(import .*?;\n)/, `$1import { buildBreadcrumbSchema } from "@/lib/schema";\n`);
       }
    }

  } else {
    // For affiliate, corrections, editorial-policy
    const parts = content.split('scripts: [');
    if (parts.length > 1) {
       const before = parts[0];
       const after = parts[1];
       const nextParen = after.indexOf('}),');
       content = before + 'scripts: []\n  }),' + after.substring(nextParen + 3);
    }
  }

  // Also remove old inline schemas
  content = content.replace(/const breadcrumbSchema = \{[\s\S]*?\n\};?\n/g, '');
  content = content.replace(/const breadcrumbSchemaFromItems =.*?;\n/g, '');
  content = content.replace(/const collectionSchema = \{[\s\S]*?\n\};?\n/g, '');
  
  // also clean up breadcrumbSchemaFromItems import from components/Breadcrumbs if it exists
  content = content.replace(/import \{ Breadcrumbs, breadcrumbSchemaFromItems \} from "@\/components\/Breadcrumbs";/g, 'import { Breadcrumbs } from "@/components/Breadcrumbs";');

  fs.writeFileSync(filePath, content);
  console.log(`Fixed schema for ${file}`);
}
