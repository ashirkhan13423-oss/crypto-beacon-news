const { Project, SyntaxKind } = require("ts-morph");
const path = require("path");
const fs = require("fs");

const ROUTES_DIR = path.join(__dirname, "../src/routes");
const project = new Project();

// Load all tsx files in the routes directory
const sourceFiles = project.addSourceFilesAtPaths(path.join(ROUTES_DIR, "*.tsx"));

let missingKeyTakeawayCount = 0;
let fewerThan4FaqsCount = 0;
let articlesMissingKeyTakeaway = [];
let articlesFewerThan4Faqs = [];

for (const sourceFile of sourceFiles) {
  const filePath = sourceFile.getFilePath();
  const filename = path.basename(filePath);
  
  if (filename === "__root.tsx" || filename.includes("index") || filename.startsWith("api.")) {
    continue;
  }

  // Find if it's an article (has buildArticleSchema or <Author)
  const isArticle = sourceFile.getText().includes("buildArticleSchema");
  if (!isArticle) continue;

  let modified = false;

  // 1. Add imports if missing
  const addImport = (namedImport, moduleSpecifier) => {
    if (!sourceFile.getImportDeclaration(moduleSpecifier)) {
      sourceFile.addImportDeclaration({
        namedImports: [namedImport],
        moduleSpecifier: moduleSpecifier,
      });
      modified = true;
    }
  };

  addImport("KeyTakeaway", "@/components/KeyTakeaway");
  addImport("LastUpdated", "@/components/LastUpdated");
  addImport("TableOfContents", "@/components/TableOfContents");
  addImport("FAQ", "@/components/FAQ");

  // 2. Add keyTakeaway and MODIFIED constants if missing
  const variableDeclarations = sourceFile.getVariableDeclarations();
  const hasKeyTakeaway = variableDeclarations.some(v => v.getName() === "keyTakeaway");
  const hasModified = variableDeclarations.some(v => v.getName() === "MODIFIED");
  const publishedVar = variableDeclarations.find(v => v.getName() === "PUBLISHED");

  if (!hasModified && publishedVar) {
    const publishedStatement = publishedVar.getFirstAncestorByKind(SyntaxKind.VariableStatement);
    publishedStatement.getParent().insertVariableStatement(publishedStatement.getChildIndex() + 1, {
      declarations: [{ name: "MODIFIED", initializer: "PUBLISHED" }]
    });
    modified = true;
  }

  if (!hasKeyTakeaway && publishedVar) {
    const publishedStatement = publishedVar.getFirstAncestorByKind(SyntaxKind.VariableStatement);
    publishedStatement.getParent().insertVariableStatement(publishedStatement.getChildIndex() + 2, {
      declarations: [{ name: "keyTakeaway", initializer: '""' }]
    });
    modified = true;
    
    missingKeyTakeawayCount++;
    articlesMissingKeyTakeaway.push(filename);
  }

  // Check FAQ count
  const faqsVar = variableDeclarations.find(v => v.getName() === "faqs");
  if (faqsVar) {
    const init = faqsVar.getInitializer();
    if (init && init.getKind() === SyntaxKind.ArrayLiteralExpression) {
      const elements = init.getElements();
      if (elements.length < 4) {
        fewerThan4FaqsCount++;
        articlesFewerThan4Faqs.push(filename);
      }
    }
  }

  // 3. Inject components into JSX
  // Finding the main return statement of the default exported component or ArticlePage component
  const articlePageFunc = sourceFile.getFunction("ArticlePage") || sourceFile.getFunction("ArticleLayout") || sourceFile.getDefaultExportSymbol()?.getValueDeclaration();
  
  if (articlePageFunc) {
    // We will do a text replacement for the JSX part to be safe, because manipulating deep JSX trees in ts-morph is painful
    const fullText = sourceFile.getFullText();
    let newText = fullText;

    // Replace old FAQ map
    // Look for a div or section containing {faqs.map
    // It's easier to just replace {faqs.map(...) with <FAQ faqs={faqs} />
    const faqMapRegex = /\{faqs\.map\(\(f[^\)]*\)\s*=>\s*\([\s\S]*?\)\)\}/g;
    if (newText.match(faqMapRegex)) {
      newText = newText.replace(faqMapRegex, "<FAQ faqs={faqs} />");
      modified = true;
    }

    // Inject KeyTakeaway and LastUpdated after Author
    if (!newText.includes("<KeyTakeaway") && newText.includes("<Author")) {
      newText = newText.replace(/(<Author[^>]*\/>)/, "$1\n        <LastUpdated date={MODIFIED} />\n        <KeyTakeaway text={keyTakeaway} />\n        <TableOfContents />");
      modified = true;
    }

    if (modified) {
      sourceFile.replaceWithText(newText);
    }
  }

  if (modified) {
    sourceFile.saveSync();
  }
}

// Generate Report
const reportPath = path.join(__dirname, "../structural-report.md");
let report = `# Structural SEO Update Report\n\n`;
report += `## Missing Key Takeaway\n`;
report += `Total articles missing keyTakeaway: ${missingKeyTakeawayCount}\n\n`;
articlesMissingKeyTakeaway.forEach(a => report += `- ${a}\n`);

report += `\n## Fewer Than 4 FAQs\n`;
report += `Total articles with < 4 FAQs: ${fewerThan4FaqsCount}\n\n`;
articlesFewerThan4Faqs.forEach(a => report += `- ${a}\n`);

fs.writeFileSync(reportPath, report);
console.log("Migration complete. Report generated at structural-report.md.");
