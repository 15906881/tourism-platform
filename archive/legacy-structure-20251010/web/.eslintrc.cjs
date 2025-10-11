const js = require("@eslint/js");
module.exports = {
  env: { browser: true, es2023: true },
  extends: [
    js.configs.recommended,
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "detect" } },
};
