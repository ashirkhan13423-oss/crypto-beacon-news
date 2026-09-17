const fs = require("fs");
const path = require("path");
const ROUTES = path.join(__dirname, "..", "src", "routes");
const STANDALONE = import("?") ;