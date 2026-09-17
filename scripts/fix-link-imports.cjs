const fs = require("fs");
const path = require("path");
const ROUTES = path.join(__dirname, "..", "src", "routes");
const STANDALONE = "import { Link } from " + String.fromCharCode(34) + "@tanstack/react-router" + String.fromCharCode(34) + ";";
const BOM = String.fromCharCode(0xFEFF);
const files = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full);
    else if (e.name.endsWith(".tsx")) files.push(full);
  }
})(ROUTES);

let removed = 0;
const report = [];
let fixed = 0;

for (const file of files) {
  let raw = fs.readFileSync(file, "utf8");
  const hadBom = raw.indexOf(BOM) !== -1;
  let text = raw;
  if (hadBom) text = text.split(BOM).join("");
  const lines = text.split("\n");
  const idx = lines.indexOf(STANDALONE);
  if (idx === -1) continue;
  const other = lines.findIndex(function (l, i) {
    return i !== idx && l.indexOf("import") !== -1 && l.indexOf("@tanstack/react-router") !== -1 && new RegExp("\\bLink\\b").test(l);
  });
  if (other === -1) continue;
  lines.splice(idx, 1);
  removed++;
  fs.writeFileSync(file, lines.join("\n"), "utf8");
  report.push(path.relative(ROUTES, file));
}
console.log("Standalone Link imports removed: " + removed);
