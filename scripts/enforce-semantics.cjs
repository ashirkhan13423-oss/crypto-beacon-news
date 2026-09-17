const { Project, SyntaxKind } = require("ts-morph");
const path = require("path");
const fs = require("fs");

const ROUTES_DIR = path.join(__dirname, "../src/routes");
const project = new Project();
const sourceFiles = project.addSourceFilesAtPaths(path.join(ROUTES_DIR, "*.tsx"));

let headingViolations = [];

for (const sourceFile of sourceFiles) {
  const filename = path.basename(sourceFile.getFilePath());
  if (filename === "__root.tsx" || filename.includes("index") || filename.startsWith("api.")) continue;

  const text = sourceFile.getFullText();
  
  // 1. Check for exactly one H1
  const h1Matches = text.match(/<h1[^>]*>/gi);
  if (!h1Matches || h1Matches.length !== 1) {
    headingViolations.push(`${filename}: Has ${h1Matches ? h1Matches.length : 0} <h1> tags (should be exactly 1)`);
  }

  // 2. Check for skipped heading levels (H1 -> H3)
  // This is a naive regex check but catches obvious skips
  let modified = false;
  let newText = text;

  // We are not auto-fixing everything because it can break layout, but we report it
  if (text.includes("<h1>") && text.match(/<\/h1>[\s\S]*?<h3/i) && !text.match(/<\/h1>[\s\S]*?<h2/i)) {
    headingViolations.push(`${filename}: Skipped heading level from H1 directly to H3`);
  }

  // 3. Ensure <main> has <article>
  // Since we know the layout is <main ...> ... </main>, we can wrap the content in <article> if it isn't already.
  if (newText.includes("<main") && !newText.includes("<article")) {
    newText = newText.replace(/(<main[^>]*>)/, "$1\n        <article>");
    newText = newText.replace(/(<\/main>)/, "        </article>\n$1");
    modified = true;
  }

  if (modified) {
    sourceFile.replaceWithText(newText);
    sourceFile.saveSync();
  }
}

// Append to report
const reportPath = path.join(__dirname, "../structural-report.md");
let report = fs.readFileSync(reportPath, "utf-8");

report += `\n## Heading Hierarchy Violations\n`;
if (headingViolations.length === 0) {
  report += `No violations found.\n`;
} else {
  headingViolations.forEach(v => report += `- ${v}\n`);
}

fs.writeFileSync(reportPath, report);
console.log("Semantic checks complete.");
