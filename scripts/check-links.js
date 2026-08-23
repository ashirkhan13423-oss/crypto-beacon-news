#!/usr/bin/env node
/**
 * check-links.js
 *
 * Scans every .tsx/.ts file in src/ for TanStack Router <Link to="..."> props
 * and verifies each internal path resolves to a real route file.
 *
 * Run:  node scripts/check-links.js
 * Or:   npm run check-links
 *
 * Exit code 1 when broken links are found (CI-friendly).
 */

import { readdirSync, readFileSync } from "fs";
import { join, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const ROOT = resolve(__dirname, "..");
const ROUTES_DIR = join(ROOT, "src", "routes");
const SRC_DIR = join(ROOT, "src");

// ─── 1. Build the set of valid routes from src/routes/*.tsx filenames ──────
//
// TanStack Router file-based convention:
//   bitcoin.what-is-mining.tsx  ->  /bitcoin/what-is-mining
//   index.tsx                   ->  /
//   bitcoin.index.tsx           ->  /bitcoin  (and /bitcoin/)
//   bitcoin.tsx                 ->  layout shell only (not a navigable URL)
//
function buildValidRoutes() {
  const files = readdirSync(ROUTES_DIR).filter(
    (f) => f.endsWith(".tsx") && !f.startsWith("__")
  );

  const routes = new Set();
  routes.add("/");

  for (const file of files) {
    const base = file.replace(/\.tsx$/, "");
    const parts = base.split(".");

    if (parts.length === 1) {
      // Single-segment file: about.tsx -> /about, index.tsx -> /
      if (base === "index") {
        routes.add("/");
      } else {
        // Layout shell (bitcoin.tsx, guides.tsx) — also register as navigable
        routes.add("/" + base);
        routes.add("/" + base + "/");
      }
      continue;
    }

    const isIndex = parts[parts.length - 1] === "index";
    if (isIndex) {
      const prefix = "/" + parts.slice(0, -1).join("/");
      routes.add(prefix);
      routes.add(prefix + "/");
    } else {
      routes.add("/" + parts.join("/"));
    }
  }

  return routes;
}

// ─── 2. Collect all .tsx/.ts files under src/ recursively ─────────────────
function collectSourceFiles(dir, results = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      collectSourceFiles(full, results);
    } else if (entry.name.endsWith(".tsx") || entry.name.endsWith(".ts")) {
      results.push(full);
    }
  }
  return results;
}

// ─── 3. Extract every `to="..."` / `path: "..."` value from source ────────
function extractLinks(source) {
  const found = [];
  let m;

  // to="/path"  or  to='/path'
  const strRe = /\bto=["']([^"']+)["']/g;
  while ((m = strRe.exec(source)) !== null) found.push(m[1]);

  // to={"/path"}  or  to={`/path`}
  const exprRe = /\bto=\{["'`]([^"'`]+)["'`]\}/g;
  while ((m = exprRe.exec(source)) !== null) found.push(m[1]);

  // path: "/path"  (used in search article index)
  const pathRe = /\bpath:\s*["'`]([^"'`]+)["'`]/g;
  while ((m = pathRe.exec(source)) !== null) found.push(m[1]);

  return found;
}

// ─── 4. Main ──────────────────────────────────────────────────────────────
const validRoutes = buildValidRoutes();
const sourceFiles = collectSourceFiles(SRC_DIR);

// Skip auto-generated files — they contain route strings by design
const SKIP_FILES = new Set(["routeTree.gen.ts"]);

const errors = [];

for (const filePath of sourceFiles) {
  const fileName = filePath.split(/[\\/]/).pop();
  if (SKIP_FILES.has(fileName)) continue;

  const source = readFileSync(filePath, "utf8");
  const links = extractLinks(source);

  for (const link of links) {
    // Only check absolute internal paths
    if (!link.startsWith("/")) continue;
    // Strip query strings and hashes
    const clean = link.split("?")[0].split("#")[0];
    if (clean === "/" || clean === "") continue;

    const withoutTrailing = clean.replace(/\/$/, "");
    if (!validRoutes.has(clean) && !validRoutes.has(withoutTrailing)) {
      const rel = filePath
        .replace(ROOT + "/", "")
        .replace(ROOT + "\\", "")
        .replaceAll("\\", "/");
      errors.push({ file: rel, link: clean });
    }
  }
}

// ─── 5. Report ────────────────────────────────────────────────────────────
if (errors.length === 0) {
  console.log("\n✅  All internal links resolve to real routes.\n");
  process.exit(0);
} else {
  console.error(`\n❌  Found ${errors.length} broken internal link(s):\n`);
  for (const { file, link } of errors) {
    console.error(`   ${link}`);
    console.error(`     └─ referenced in ${file}`);
  }
  console.error(
    "\nFix these links before shipping. Each path must match a file in src/routes/.\n"
  );
  process.exit(1);
}
