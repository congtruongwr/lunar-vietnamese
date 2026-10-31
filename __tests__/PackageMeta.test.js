const assert = require("assert");
const pkg = require("../package.json");

console.log("Testing package.json metadata...");
assert.strictEqual(
  pkg.name,
  "lunar-vietnamese",
  "Package name must be lunar-vietnamese",
);
assert.ok(
  pkg.author && pkg.author.includes("congtruongwr"),
  "Author must contain congtruongwr",
);
console.log("PASS: package.json metadata valid");
