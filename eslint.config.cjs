/** @type {import('eslint').Linter.FlatConfig[]} */
const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
  js.configs.recommended,

  // Backend/Node (CommonJS)
  {
    files: ['*.js', 'api/**/*.js', 'scripts/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: { ...globals.node },
    },
    rules: {
      'no-console': 'off',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'no-empty': 'warn',
      'no-empty-function': 'warn',
    },
  },

  // Frontend apps (ESM in browser)
  {
    files: ['apps/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.es2021 },
    },
    rules: {
      'no-console': 'off',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'no-empty': 'warn',
      'no-empty-function': 'warn',
    },
  },

  // Ignores
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      '.github/workflows/**',
      'package-lock.json',
    ],
  },
];
