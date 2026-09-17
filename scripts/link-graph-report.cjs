const fs = require("fs");
const path = require("path");

const ROUTES_DIR = path.join(__dirname, "../src/routes");
const METADATA_PATH = path.join(__dirname, "../src/data/generated-metadata.json");

function run(outputFile) {
  const metadata = JSON.parse(fs.readFileSync(METADATA_PATH, "utf-8"));
  // Array of valid article paths (e.g. "/bitcoin/how-bitcoin-wallets-work")
  const articleUrls = Object.keys(metadata);

  const graph = {}; // url -> { in: Set, out: Set }
  articleUrls.forEach(url => {
    graph[url] = { in: new Set(), out: new Set() };
  });

  const files = fs.readdirSync(ROUTES_DIR).filter(f => f.endsWith(".tsx"));

  let totalInBodyLinks = 0;

  for (const file of files) {
    // Only analyze files that are articles
    const isArticleFile = articleUrls.some(url => {
      const expectedFilename = url.substring(1).replace(/\//g, ".") + ".tsx";
      return file === expectedFilename;
    });
    
    if (!isArticleFile) continue;

    const sourceUrl = "/" + file.replace(".tsx", "").replace(/\./g, "/");
    if (!graph[sourceUrl]) continue;

    const content = fs.readFileSync(path.join(ROUTES_DIR, file), "utf-8");

    // We specifically want to look for in-body internal links.
    // However, the prompt says "zero inbound internal links from other articles".
    // We will extract <Link to="..."> and <a href="...">
    const linkRegex = /<(?:Link|a)[^>]+(?:to|href)=["'](\/[a-zA-Z0-9\-\/]+)["'][^>]*>/g;
    let match;
    
    while ((match = linkRegex.exec(content)) !== null) {
      let targetUrl = match[1];
      // strip trailing slash if any
      if (targetUrl.endsWith("/") && targetUrl.length > 1) {
        targetUrl = targetUrl.slice(0, -1);
      }
      
      // If the target is a valid article and not itself
      if (graph[targetUrl] && targetUrl !== sourceUrl) {
        graph[sourceUrl].out.add(targetUrl);
        graph[targetUrl].in.add(sourceUrl);
        totalInBodyLinks++;
      }
    }
  }

  const sortedArticles = articleUrls.map(url => ({
    url,
    inCount: graph[url].in.size,
    outCount: graph[url].out.size
  })).sort((a, b) => b.inCount - a.inCount);

  const orphans = sortedArticles.filter(a => a.inCount === 0);
  const underLinked = sortedArticles.filter(a => a.inCount < 3);

  const avgLinks = (totalInBodyLinks / articleUrls.length).toFixed(2);

  let report = `# Internal Link Graph Report\n\n`;
  report += `**Total Articles:** ${articleUrls.length}\n`;
  report += `**Average Inbound Links per Article:** ${avgLinks}\n\n`;

  report += `## Orphan Articles (0 Inbound Links)\n`;
  report += `Count: ${orphans.length}\n`;
  orphans.forEach(a => report += `- ${a.url}\n`);

  report += `\n## Under-Linked Articles (< 3 Inbound Links)\n`;
  report += `Count: ${underLinked.length}\n`;
  // Only list if under 50 to avoid massive files, otherwise just count
  if (underLinked.length < 50) {
    underLinked.forEach(a => report += `- ${a.url} (${a.inCount} links)\n`);
  } else {
    report += `*Skipping full list as there are >50 under-linked articles*\n`;
  }

  report += `\n## Most Linked Articles\n`;
  sortedArticles.slice(0, 5).forEach(a => report += `- ${a.url} (${a.inCount} links)\n`);

  report += `\n## Least Linked Articles\n`;
  const leastLinked = [...sortedArticles].reverse().slice(0, 5);
  leastLinked.forEach(a => report += `- ${a.url} (${a.inCount} links)\n`);

  fs.writeFileSync(path.join(__dirname, "../", outputFile), report);
  console.log(`Generated ${outputFile}`);
}

const args = process.argv.slice(2);
const outName = args[0] || "link-report-baseline.md";
run(outName);
