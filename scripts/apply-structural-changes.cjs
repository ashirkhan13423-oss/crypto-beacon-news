const fs = require("fs");
const path = require("path");

const ROUTES_DIR = path.join(__dirname, "../src/routes");

// Helper to slugify for IDs
function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
}

function processArticle(filePath) {
  let content = fs.readFileSync(filePath, "utf-8");
  let modified = false;

  // 1. Add KeyTakeaway
  if (!content.includes("const keyTakeaway =")) {
    content = content.replace(/(const PUBLISHED = "[^"]+";)/, "$1\nconst MODIFIED = $1; // Update when modifying\nconst keyTakeaway = \"\";");
    modified = true;
  }

  // Add KeyTakeaway Component Import
  if (!content.includes("KeyTakeaway")) {
    content = content.replace(/import { Author } from "@\/components\/Author";/, "import { Author } from \"@/components/Author\";\nimport { KeyTakeaway } from \"@/components/KeyTakeaway\";");
    modified = true;
  }

  // Inject KeyTakeaway below Author
  if (!content.includes("<KeyTakeaway text={keyTakeaway} />")) {
    // Some files have <Author /> others <Author publishedDate=... />
    content = content.replace(/(<Author[^>]*\/>)/, "$1\n        <KeyTakeaway text={keyTakeaway} />");
    modified = true;
  }

  // Inject Last Updated Date into Author or near it
  // Actually, wait, the user said "Render 'Last updated: [date]' prominently near the top"
  // We can just add a LastUpdated component.
  if (!content.includes("LastUpdated")) {
    content = content.replace(/import { KeyTakeaway } from "@\/components\/KeyTakeaway";/, "import { KeyTakeaway } from \"@/components/KeyTakeaway\";\nimport { LastUpdated } from \"@/components/LastUpdated\";");
    content = content.replace(/(<KeyTakeaway text={keyTakeaway} \/>)/, "<LastUpdated date={MODIFIED} />\n        $1");
    modified = true;
  }

  // 2. FAQ Upgrade
  if (content.includes("const faqs:")) {
    if (!content.includes("import { FAQ } from \"@/components/FAQ\";")) {
      content = content.replace(/import { Author/, "import { FAQ } from \"@/components/FAQ\";\nimport { Author");
      modified = true;
    }
    
    // Replace old FAQ mapping logic with <FAQ faqs={faqs} />
    // Old logic varies but usually is {faqs.map(...)} or <div className="space-y-md">{faqs.map(...)}</div>
    // We will do a generic regex that looks for `{faqs.map` up to the closing tags, but that's hard.
    // Instead, I will leave it to another script or do it manually if it's too complex to regex.
  }

  if (modified) {
    fs.writeFileSync(filePath, content, "utf-8");
  }
}

function run() {
  const files = fs.readdirSync(ROUTES_DIR).filter(f => f.endsWith(".tsx") && f !== "__root.tsx" && !f.includes("index") && !f.startsWith("api."));
  
  for (const file of files) {
    const fullPath = path.join(ROUTES_DIR, file);
    const content = fs.readFileSync(fullPath, "utf-8");
    if (content.includes("const URL =") && content.includes("<Author")) {
      processArticle(fullPath);
    }
  }
}

run();
