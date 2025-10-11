const js = require("@eslint/js");
module.exports = {
  env: { node: true, es2023: true },
  extends: [js.configs.recommended, "prettier"],
  parserOptions: { ecmaVersion: "latest", sourceType: "script" },
};
