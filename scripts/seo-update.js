import fs from 'fs';
import path from 'path';

const routesDir = path.join(process.cwd(), 'src/routes');
const publicDir = path.join(process.cwd(), 'public');

function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walkDir(filePath));
    } else if (file.endsWith('.tsx') && !file.startsWith('_')) {
      results.push(filePath);
    }
  });
  return results;
}

const files = walkDir(routesDir);

const sitemapUrls = [];
const siteUrl = 'https://www.cryptobeacon.site';

files.forEach((filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Determine URL path
  const relativePath = path.relative(routesDir, filePath);
  let routePath = relativePath.replace(/\\/g, '/').replace('.tsx', '');
  if (routePath.endsWith('.index')) {
    routePath = routePath.replace('.index', '');
  }
  if (routePath === 'index') {
    routePath = '';
  }
  
  // Format URL replacing '.' with '/' for TanStack router
  routePath = routePath.replace(/\./g, '/');
  
  const fullUrl = `${siteUrl}/${routePath}`.replace(/\/$/, ''); // no trailing slash unless it's root
  const sitemapUrl = routePath === '' ? siteUrl + '/' : fullUrl;
  
  sitemapUrls.push(sitemapUrl);

  // 1. Add canonical tag if not present
  if (!content.includes('rel="canonical"')) {
    // try to insert after `links: [`
    if (content.includes('links: [')) {
      content = content.replace('links: [', `links: [\n      { rel: "canonical", href: "${sitemapUrl}" },`);
    } else if (content.includes('meta: [')) {
      // If links array doesn't exist but meta does, add links array
      content = content.replace(/(meta:\s*\[[\s\S]*?\],)/, `$1\n    links: [{ rel: "canonical", href: "${sitemapUrl}" }],`);
    }
  }

  // 2. External links target="_blank"
  content = content.replace(/<a\s+href="http([^"]+)"([^>]*)>/g, (match, url, rest) => {
    if (!rest.includes('target=')) {
      return `<a href="http${url}" target="_blank" rel="noopener noreferrer"${rest}>`;
    }
    return match;
  });

  // 3. Fix missing alt tags on imgs
  content = content.replace(/<img\s+([^>]+)>/g, (match, attributes) => {
    if (!attributes.includes('alt=')) {
      return `<img alt="CryptoBeacon image" ${attributes}>`;
    }
    return match;
  });

  // 4. Update Meta Description to ~160 chars
  const descMatch = content.match(/const DESC\s*=\s*["']([^"']+)["']/);
  if (descMatch) {
    let desc = descMatch[1];
    if (desc.length > 160) {
      desc = desc.substring(0, 157) + "...";
      content = content.replace(descMatch[0], `const DESC = "${desc}"`);
    }
  } else {
    // Direct content replacement
    content = content.replace(/\{\s*name:\s*["']description["'],\s*content:\s*["']([^"']+)["']\s*\}/g, (match, desc) => {
      if (desc.length > 160) {
         let shortDesc = desc.substring(0, 157) + "...";
         return `{ name: "description", content: "${shortDesc}" }`;
      }
      return match;
    });
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
});

// Generate Sitemap (Sorted alphabetically as requested)
sitemapUrls.sort();
let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
sitemapUrls.forEach(url => {
  sitemapXml += `  <url>\n    <loc>${url}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
});
sitemapXml += `</urlset>`;

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf8');

console.log('SEO updates complete!');
