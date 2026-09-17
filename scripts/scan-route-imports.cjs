/* eslint-disable no-console */
// Defensive integrity check for the route fixer. Not used by pipeline.
const fs = require("fs");
const path = require("path");
const ROUTES = path.join(__dirname, "..", "src", "routes");

const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const f = path.join(d, e.name);
    if (e.isDirectory()) walk(f);
    else if (e.name.endsWith(".tsx")) files.push(f);
  }
})(ROUTES);

for (const file of files) {
  const text = fs.readFileSync(file, "utf8");
  const lines = text.split(/\r?\n/);
  const standalone = lines.filter((l) =>
    /^import \{ Link \} from "@tanstack\/react-router";$/.test(l)
  ).length;
  const otherBinders = lines.filter(
    (l) =>
      !/^import \{ Link \} from "@tanstack\/react-router";$/.test(l) &&
      /from "@tanstack\/react-router"/.test(l) &&
      /\bLink\b/.test(l)
  ).length;
  if (standalone === 1 && otherBinders >= 1) {
    console.log("DUPLICATE: " + path.relative(ROUTES, file));
  }
}
