const { Project } = require("ts-morph");
const path = require("path");
const fs = require("fs");

const ROUTES_DIR = path.join(__dirname, "../src/routes");
const project = new Project();
const sourceFiles = project.addSourceFilesAtPaths(path.join(ROUTES_DIR, "*.index.tsx"));

let emptyHubs = [];

for (const sourceFile of sourceFiles) {
  const filename = path.basename(sourceFile.getFilePath());
  if (filename === "glossary.index.tsx") continue; // Glossary is a special hub

  let newText = sourceFile.getFullText();
  let modified = false;

  // 1. Add CollectionPage Schema
  const schemaRegex = /\{ type: "application\/ld\+json", children: JSON.stringify\(buildBreadcrumbSchema\(\[([\s\S]*?)\]\)\) \}/;
  
  if (schemaRegex.test(newText) && !newText.includes("CollectionPage")) {
    newText = newText.replace(schemaRegex, (match) => {
      return match + `,\n      { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": TITLE,
        "description": DESC,
        "url": URL
      }) }`;
    });
    modified = true;
  }

  // 2. Add Intro Copy Slot and Warning
  // Look for the <p> after the <h1>
  const headerRegex = /(<h1[^>]*>[\s\S]*?<\/h1>\s*)(<p[^>]*>[\s\S]*?<\/p>)/;
  if (headerRegex.test(newText) && !newText.includes("introCopy")) {
    newText = newText.replace(headerRegex, `$1$2\n          {/* INTRO COPY SLOT */}\n          <div className="mt-lg prose prose-lg dark:prose-invert text-on-surface">\n            {/* TODO: Add genuine intro section text here */}\n          </div>`);
    modified = true;
    emptyHubs.push(filename.replace(".index.tsx", ""));
  }

  if (modified) {
    sourceFile.replaceWithText(newText);
    sourceFile.saveSync();
  }
}

if (emptyHubs.length > 0) {
  console.warn("\\n\\x1b[33m[WARNING] The following Hub Pages have empty intro copy and require manual content generation:\\x1b[0m");
  emptyHubs.forEach(hub => console.warn(`- /${hub}`));
  console.warn("Please update the intro copy in their respective routes/*.index.tsx files.\\n");
}
