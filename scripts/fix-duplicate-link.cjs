#! /usr/bin/env node
/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
const ROUTES = path.join(__dirname, "..", "src", "routes");
const ROOT_FILE = path.join(ROUTES, "__root.tsx");

const files = [];
(function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith(".tsx")) files.push(full);
  }
})(ROUTES);

function removeDuplicateStandaloneLink(full) {
  const raw = fs.readFileSync(full, "utf8");
  const text = raw.split("\uFEFF").join("");
  const lines = text.split("\n");
  const standaloneIdx = lines.findIndex(function (l) {
    return l === 'import { Link } from "@tanstack/react-router";';
  });
  if (standaloneIdx === -1) return false;

  let otherImportBindsLink = false;
  lines.forEach(function (l, i) {
    if (i === standaloneIdx) return;
    if (l.indexOf("import") !== -1 && l.indexOf("react-router") !== -1) {
      if (new RegExp("\\bLink\\b").test(l)) otherImportBindsLink = true;
    }
  });

  if (!otherImportBindsLink) return false; // Link needed as-is

  lines.splice(standaloneIdx, 1);
  fs.writeFileSync(full, lines.join("\n"), "utf8");
  return true;
}

let removed = 0;
const report = [];
for (const f of files) {
  const before = fs.readFileSync(f, "utf8");
  const hadBom = before.indexOf("\uFEFF") !== -1;
  if (removeDuplicateStandaloneLink(f)) {
    removed++;
    report.push(path.relative(ROUTES, f) + (hadBom ? " [BOM]" : ""));
  }
}
console.log("Removed duplicate standalone Link import in " + removed + " files");
report.forEach(function (r) { console.log("  - " + r); });