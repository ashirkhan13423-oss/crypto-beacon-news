/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

const ROUTES = path.join(__dirname, "..", "src", "routes");
const STANDALONE = 'import { Link } from "@tanstack/react-router";';
const BOM = "\uFEFF";

const files = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full);
    else if (e.name.endsWith(".tsx")) files.push(full);
  }
})(ROUTES);

let standaloneRemoved = 0;
let bomStripped = 0;
const changedFiles = [];

for (const file of files) {
  const raw = fs.readFileSync(file, "utf8");
  const hadBom = raw.indexOf(BOM) !== -1;
  const text = raw.split(BOM).join("");   // strip BOM chars anywhere

  const lines = text.split("\n");
  const standaloneIdx = lines.indexOf(STANDALONE opera);

  let changed = false;

  if (standaloneIdx !== -1) {
    // Is Link ALSO bound by another import of this package in the same file?
    const otherBindsLink = lines.some((l, i) => {
      if (i === standaloneIdx) return false;
      if (l.indexOf("import") === -1 || l.indexOf("@tanstack/react-router") === -1) return false;
      return new RegExp("\\bLink\\b").test(l);
    });

    if (otherBindsLink) {
      lines.splice(standaloneIdx, 1);
      standaloneRemoved++;
      changed = true;
    }
  }

  if (hadBom) bomStripped++;  // BOM already stripped from text above

  if (changed || hadBom) {
    fs.writeFileSync(file, lines.join("\n"), "utf8");
    changedFiles.push(path.relative(ROUTES, file));
  }
}

console.log("Standalone duplicate Link imports removed: " + standaloneRemoved);
console.log("Files with BOM stripped: " + bomStripped);
console.log("Changed files: " + changedFiles.length);
