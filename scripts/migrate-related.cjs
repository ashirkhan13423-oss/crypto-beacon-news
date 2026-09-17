const { Project, SyntaxKind } = require("ts-morph");
const path = require("path");
const fs = require("fs");

const ROUTES_DIR = path.join(__dirname, "../src/routes");
const project = new Project();
const sourceFiles = project.addSourceFilesAtPaths(path.join(ROUTES_DIR, "*.tsx"));

for (const sourceFile of sourceFiles) {
  const filename = path.basename(sourceFile.getFilePath());
  if (filename === "__root.tsx" || filename.includes("index") || filename.includes("glossary")) continue;

  const isArticle = sourceFile.getText().includes("buildArticleSchema");
  if (!isArticle) continue;

  let modified = false;

  // 1. Add Import
  const addImport = (namedImport, moduleSpecifier) => {
    if (!sourceFile.getImportDeclaration(moduleSpecifier)) {
      sourceFile.addImportDeclaration({
        namedImports: [namedImport],
        moduleSpecifier: moduleSpecifier,
      });
      modified = true;
    }
  };

  addImport("RelatedArticles", "@/components/RelatedArticles");

  // 2. We use regex to replace the old hardcoded section
  let newText = sourceFile.getFullText();

  // The old block typically starts with <section className="mt-xxl">\n<h2 ...>Related Reading</h2>
  // And ends with </section>
  const relatedRegex = /<section[^>]*>[\s\S]*?<h2[^>]*>Related Reading<\/h2>[\s\S]*?<\/section>/g;
  
  if (newText.match(relatedRegex)) {
    newText = newText.replace(relatedRegex, "<RelatedArticles currentUrl={URL} />");
    modified = true;
  } else if (!newText.includes("<RelatedArticles")) {
    // If it didn't have one, we can inject it right above </main> or </article>
    newText = newText.replace(/(<\/article>)/, "  <RelatedArticles currentUrl={URL} />\n        $1");
    modified = true;
  }

  if (modified) {
    sourceFile.replaceWithText(newText);
    sourceFile.saveSync();
  }
}

console.log("Related articles migration complete.");
