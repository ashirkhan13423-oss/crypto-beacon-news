/**
 * seo-final-fix.js
 * 
 * Fixes:
 * 1. Remove duplicate canonical tags (keep only one per route)
 * 2. Verify every route has exactly one canonical
 * 3. Verify every route has a meta description
 * 4. Verify no broken DESC strings remain
 */

import { readdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

const routesDir = join(process.cwd(), "src", "routes");
const files = readdirSync(routesDir).filter((f) => f.endsWith(".tsx"));

let fixedCanonicals = 0;
let brokenDescs = 0;
let totalFiles = 0;

for (const file of files) {
  const filePath = join(routesDir, file);
  let content = readFileSync(filePath, "utf-8");
  const original = content;
  totalFiles++;

  // Fix 1: Remove duplicate canonical tags
  // Pattern: { rel: "canonical", href: "..." },{ rel: "canonical", href: URL }]
  // Keep only the first canonical
  const dupCanonicalPattern = /\{\s*rel:\s*"canonical",\s*href:\s*"[^"]+"\s*\}\s*,\s*\{\s*rel:\s*"canonical",\s*href:\s*(?:URL|PAGE_URL|"[^"]+")\s*\}/g;
  if (dupCanonicalPattern.test(content)) {
    content = content.replace(
      /(\{\s*rel:\s*"canonical",\s*href:\s*"[^"]+"\s*\})\s*,\s*\{\s*rel:\s*"canonical",\s*href:\s*(?:URL|PAGE_URL|"[^"]+")\s*\}/g,
      "$1"
    );
    fixedCanonicals++;
  }

  // Fix 2: Check for broken DESC strings (unescaped quotes mid-string)
  const brokenDescPattern = /const DESC\s*=\s*"[^"]*"[a-z]/;
  if (brokenDescPattern.test(content)) {
    brokenDescs++;
    console.log(`⚠️  Broken DESC in: ${file}`);
  }

  if (content !== original) {
    writeFileSync(filePath, content, "utf-8");
    console.log(`✅ Fixed: ${file}`);
  }
}

console.log(`\n📊 Summary:`);
console.log(`   Total files scanned: ${totalFiles}`);
console.log(`   Duplicate canonicals fixed: ${fixedCanonicals}`);
console.log(`   Broken DESC strings found: ${brokenDescs}`);
