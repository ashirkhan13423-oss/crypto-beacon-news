/**
 * Ensures every <img> tag in route files has:
 *  - loading="lazy" and decoding="async" if it is a secondary image
 *    (i.e., does NOT already have fetchPriority="high")
 *  - width and height attributes on hero images (width=1600 height=896 as default)
 *
 * The script is idempotent: running it twice produces the same result.
 */
const fs = require("fs");
const path = require("path");

const ROUTES_DIR = path.join(__dirname, "../src/routes");
const files = fs.readdirSync(ROUTES_DIR).filter((f) => f.endsWith(".tsx"));

let modifiedCount = 0;

for (const file of files) {
  const filePath = path.join(ROUTES_DIR, file);
  let content = fs.readFileSync(filePath, "utf8");
  let modified = content;

  // 1. Hero images: add width/height if missing
  modified = modified.replace(
    /(<img[\s\S]*?fetchPriority=["']high["'][\s\S]*?)(\/>)/g,
    (match) => {
      if (!match.includes("width=") && !match.includes('width="')) {
        return match.replace("/>", 'width={1600} height={896} />');
      }
      return match;
    }
  );

  // 2. Secondary images (no fetchPriority="high"): add loading="lazy" decoding="async"
  modified = modified.replace(
    /<img(?![\s\S]*?fetchPriority)([\s\S]*?)\/>/g,
    (match) => {
      let result = match;
      if (!result.includes('loading="lazy"') && !result.includes("loading={")) {
        result = result.replace("/>", 'loading="lazy" decoding="async" />');
      }
      return result;
    }
  );

  if (modified !== content) {
    fs.writeFileSync(filePath, modified, "utf8");
    console.log(`✓ Updated: ${file}`);
    modifiedCount++;
  }
}

console.log(`\nDone. Updated ${modifiedCount} files.`);
