const js = require('@eslint/js');
const typescriptParser = require('@typescript-eslint/parser');
const typescriptPlugin = require('@typescript-eslint/eslint-plugin');

module.exports = [
  {
    // Ignore patterns in flat config
    ignores: [
      '**/.next/',
      '**/dist/',
      '**/build/',
      '**/node_modules/',
      '**/generated/',
      '**/scripts/',
      '**/*.config.js',
      '**/tailwind.*.js',
      '*.d.ts',
      '*.generated.*',
      'archive/' // Ignore legacy code
    ]
  },
  {
    // Apply to all JS/TS files
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        // Browser globals
        React: 'readonly',
        console: 'readonly',
        document: 'readonly',
        window: 'readonly',
        fetch: 'readonly',
        alert: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        // DOM types
        HTMLInputElement: 'readonly',
        HTMLButtonElement: 'readonly',
        HTMLDivElement: 'readonly',
        HTMLSpanElement: 'readonly',
        HTMLSelectElement: 'readonly',
        HTMLTextAreaElement: 'readonly',
        HTMLTableElement: 'readonly',
        HTMLTableSectionElement: 'readonly',
        HTMLTableRowElement: 'readonly',
        HTMLTableCellElement: 'readonly',
        HTMLHeadingElement: 'readonly',
        // Events
        MouseEvent: 'readonly',
        KeyboardEvent: 'readonly',
        Node: 'readonly',
        // Node.js globals (for config files)
        process: 'readonly',
        Buffer: 'readonly',
        require: 'readonly',
        module: 'readonly',
        __dirname: 'readonly',
        // Web APIs
        URL: 'readonly',
        Request: 'readonly',
        Response: 'readonly'
      }
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin
    },
    rules: {
      ...js.configs.recommended.rules,
      ...typescriptPlugin.configs.recommended.rules,
      // Custom rule adjustments
      'no-undef': 'off', // TypeScript handles this
      '@typescript-eslint/no-unused-vars': ['error', { 
        'argsIgnorePattern': '^_',
        'varsIgnorePattern': '^_' 
      }],
      '@typescript-eslint/no-explicit-any': 'warn' // Change to warn instead of error
    }
  }
];
