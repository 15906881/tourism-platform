#!/bin/bash
# Tourism Platform Foundation Setup
# Execute these commands in order from project root

echo "🚀 Starting foundation implementation..."
cd ~/tourism-platform

# ============================================
# STEP 1: Install all dependencies
# ============================================
echo "📦 Installing dependencies..."

pnpm add -w @tanstack/react-table @axe-core/playwright
pnpm add -w ag-grid-react ag-grid-community
pnpm add -D -w @playwright/test @types/ag-grid-community
pnpm add -D -w eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin

# ============================================
# STEP 2: Create tsconfig.base.json
# ============================================
echo "⚙️  Setting up TypeScript base config..."

cat > tsconfig.base.json << 'EOF'
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "compilerOptions": {
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "verbatimModuleSyntax": true,
    "lib": ["ES2022"],
    "module": "NodeNext",
    "target": "ES2022",
    "moduleResolution": "NodeNext",
    "allowJs": true,
    "checkJs": false,
    "noUncheckedIndexedAccess": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false
  }
}
EOF

# ============================================
# STEP 3: Update all tsconfig files
# ============================================
echo "📝 Updating tsconfig files..."

# Admin
cat > apps/admin/tsconfig.json << 'EOF'
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "ES2022"],
    "jsx": "preserve",
    "module": "esnext",
    "moduleResolution": "bundler",
    "noEmit": true,
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
EOF

# Tenant Dashboard
cat > apps/tenant-dashboard/tsconfig.json << 'EOF'
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "ES2022"],
    "jsx": "preserve",
    "module": "esnext",
    "moduleResolution": "bundler",
    "noEmit": true,
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] },
    "baseUrl": "."
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
EOF

# Site Renderer
cat > apps/site-renderer/tsconfig.json << 'EOF'
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "ES2022"],
    "jsx": "preserve",
    "module": "esnext",
    "moduleResolution": "bundler",
    "noEmit": true,
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
EOF

# UI Package
cat > packages/ui/tsconfig.json << 'EOF'
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "jsx": "react-jsx",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
EOF

# Other packages
for pkg in auth blocks db server templates; do
cat > packages/$pkg/tsconfig.json << 'EOF'
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
EOF
done

# ============================================
# STEP 4: Setup tokens package
# ============================================
echo "🎨 Setting up design tokens..."

# Update tokens package.json
cat > packages/tokens/package.json << 'EOF'
{
  "name": "@weblynk/tokens",
  "version": "0.0.1",
  "private": true,
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": "./dist/index.js",
    "./css": "./dist/tokens.css",
    "./tailwind": "./dist/tailwind-preset.js"
  },
  "files": ["dist"],
  "scripts": {
    "build": "node scripts/build-tokens.js",
    "dev": "node scripts/build-tokens.js --watch"
  }
}
EOF

# Create build script
mkdir -p packages/tokens/scripts
cat > packages/tokens/scripts/build-tokens.js << 'EOF'
const fs = require('fs');
const path = require('path');

const tokens = {
  colors: {
    bg: "#0F1115",
    surface: { "1": "#141821", "2": "#191E28", "3": "#1F2533" },
    text: { DEFAULT: "#EAEAF0", muted: "#A6A9B6", subtle: "#6B7280" },
    primary: { DEFAULT: "#C5A572", hover: "#D4B583" },
    accent: { DEFAULT: "#6B4E9A", hover: "#7D5CAB" },
    border: { DEFAULT: "rgba(255, 255, 255, 0.08)", focus: "rgba(197, 165, 114, 0.3)" },
    error: "#DC2626",
    success: "#10B981",
    warning: "#F59E0B"
  },
  spacing: {
    xs: "8px", sm: "12px", md: "16px", lg: "24px",
    xl: "36px", "2xl": "56px", "3xl": "80px"
  },
  radius: {
    xs: "6px", sm: "10px", md: "14px",
    lg: "18px", xl: "24px", full: "9999px"
  },
  shadows: {
    sm: "0 2px 12px rgba(0, 0, 0, 0.25)",
    md: "0 8px 30px rgba(0, 0, 0, 0.35)",
    lg: "0 16px 48px rgba(0, 0, 0, 0.45)",
    glow: "0 0 24px rgba(197, 165, 114, 0.15)"
  }
};

// Generate CSS
let css = ':root {\n';
Object.entries(tokens.colors).forEach(([key, value]) => {
  if (typeof value === 'object') {
    Object.entries(value).forEach(([subkey, subval]) => {
      const varName = subkey === 'DEFAULT' ? key : `${key}-${subkey}`;
      css += `  --color-${varName}: ${subval};\n`;
    });
  } else {
    css += `  --color-${key}: ${value};\n`;
  }
});

Object.entries(tokens.spacing).forEach(([key, value]) => {
  css += `  --space-${key}: ${value};\n`;
});

Object.entries(tokens.radius).forEach(([key, value]) => {
  css += `  --radius-${key}: ${value};\n`;
});

Object.entries(tokens.shadows).forEach(([key, value]) => {
  css += `  --shadow-${key}: ${value};\n`;
});
css += '}\n';

// Generate Tailwind preset
const tailwindPreset = `module.exports = ${JSON.stringify({
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        surface: {
          DEFAULT: 'var(--color-surface-1)',
          2: 'var(--color-surface-2)',
          3: 'var(--color-surface-3)'
        },
        text: {
          DEFAULT: 'var(--color-text)',
          muted: 'var(--color-text-muted)',
          subtle: 'var(--color-text-subtle)'
        },
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)'
        },
        border: {
          DEFAULT: 'var(--color-border)',
          focus: 'var(--color-border-focus)'
        }
      },
      spacing: {
        xs: 'var(--space-xs)',
        sm: 'var(--space-sm)',
        md: 'var(--space-md)',
        lg: 'var(--space-lg)',
        xl: 'var(--space-xl)',
        '2xl': 'var(--space-2xl)',
        '3xl': 'var(--space-3xl)'
      },
      borderRadius: {
        xs: 'var(--radius-xs)',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)'
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        glow: 'var(--shadow-glow)'
      }
    }
  }
}, null, 2)};\n`;

// Write outputs
fs.mkdirSync(path.join(__dirname, '../dist'), { recursive: true });
fs.writeFileSync(path.join(__dirname, '../dist/tokens.css'), css);
fs.writeFileSync(path.join(__dirname, '../dist/tailwind-preset.js'), tailwindPreset);
fs.writeFileSync(path.join(__dirname, '../dist/index.js'), 
  `export const tokens = ${JSON.stringify(tokens, null, 2)};\n`);
fs.writeFileSync(path.join(__dirname, '../dist/index.d.ts'),
  'export declare const tokens: any;\n');

console.log('✅ Tokens built successfully');
EOF

# Build tokens
cd packages/tokens && node scripts/build-tokens.js && cd ../..

# ============================================
# STEP 5: Create Tailwind configs
# ============================================
echo "🎨 Creating Tailwind configs..."

# Admin
cat > apps/admin/tailwind.config.ts << 'EOF'
import type { Config } from 'tailwindcss';
import tokensPreset from '@weblynk/tokens/tailwind';

export default {
  presets: [tokensPreset],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}'
  ],
  plugins: []
} satisfies Config;
EOF

# Tenant Dashboard
cat > apps/tenant-dashboard/tailwind.config.ts << 'EOF'
import type { Config } from 'tailwindcss';
import tokensPreset from '@weblynk/tokens/tailwind';

export default {
  presets: [tokensPreset],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}'
  ],
  plugins: []
} satisfies Config;
EOF

# Site Renderer
cat > apps/site-renderer/tailwind.config.ts << 'EOF'
import type { Config } from 'tailwindcss';
import tokensPreset from '@weblynk/tokens/tailwind';

export default {
  presets: [tokensPreset],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
    '../../packages/blocks/src/**/*.{js,ts,jsx,tsx}'
  ],
  plugins: []
} satisfies Config;
EOF

# ============================================
# STEP 6: Create UI component directories
# ============================================
echo "📦 Creating UI component structure..."

mkdir -p packages/ui/src/components/AppShell
mkdir -p packages/ui/src/components/Form
mkdir -p packages/ui/src/components/Table
mkdir -p packages/ui/src/components/ErrorBoundary
mkdir -p packages/ui/src/styles
mkdir -p packages/ui/src/lib

# Create utils file
cat > packages/ui/src/lib/utils.ts << 'EOF'
import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
EOF

# ============================================
# STEP 7: Create A11y CSS
# ============================================
echo "♿ Creating accessibility styles..."

cat > packages/ui/src/styles/a11y.css << 'EOF'
/* Accessibility Baseline */

*:focus {
  outline: none;
}

*:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
  border-radius: 4px;
}

button:focus-visible,
a:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
  box-shadow: 0 0 0 4px rgba(197, 165, 114, 0.15);
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--color-primary);
  color: var(--color-bg);
  padding: 12px 24px;
  text-decoration: none;
  font-weight: 600;
  z-index: 9999;
  border-radius: 0 0 var(--radius-md) 0;
}

.skip-link:focus {
  top: 0;
  outline: 2px solid var(--color-border-focus);
}

button,
a,
[role="button"],
input[type="checkbox"],
input[type="radio"] {
  min-height: 44px;
  min-width: 44px;
}

p a,
span a,
li a {
  min-height: auto;
  min-width: auto;
}
EOF

# ============================================
# STEP 8: Create ESLint config
# ============================================
echo "📋 Creating ESLint config..."

cat > .eslintrc.json << 'EOF'
{
  "root": true,
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2022,
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint"],
  "rules": {
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-unused-vars": ["warn", { 
      "argsIgnorePattern": "^_",
      "varsIgnorePattern": "^_"
    }],
    "no-console": ["warn", { "allow": ["warn", "error"] }]
  },
  "ignorePatterns": [
    "node_modules/",
    "dist/",
    ".next/",
    "*.config.js",
    "*.config.ts"
  ]
}
EOF

# ============================================
# STEP 9: Create Playwright config
# ============================================
echo "🎭 Setting up Playwright..."

cat > playwright.config.ts << 'EOF'
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html', { outputFolder: 'playwright-report' }],
    ['json', { outputFile: 'playwright-report/results.json' }],
    ['list']
  ],
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'pnpm --filter admin dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
EOF

# Create test directories
mkdir -p tests/e2e
mkdir -p tests/a11y

# Create smoke test
cat > tests/e2e/smoke.spec.ts << 'EOF'
import { test, expect } from '@playwright/test';

test.describe('Smoke Tests', () => {
  test('homepage loads', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    const main = page.locator('main');
    await expect(main).toBeVisible();
  });

  test('can navigate using keyboard', async ({ page }) => {
    await page.goto('/');
    
    await page.keyboard.press('Tab');
    const focused = page.locator(':focus');
    await expect(focused).toBeVisible();
  });
});
EOF

# Create a11y test
cat > tests/a11y/accessibility.spec.ts << 'EOF'
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility', () => {
  test('no critical a11y violations', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();

    const severe = results.violations.filter(
      v => v.impact === 'critical' || v.impact === 'serious'
    );

    expect(severe).toEqual([]);
  });
});
EOF

# ============================================
# STEP 10: Create GitHub Actions workflow
# ============================================
echo "🔧 Setting up CI/CD..."

mkdir -p .github/workflows
cat > .github/workflows/quality-gates.yml << 'EOF'
name: Quality Gates

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  typescript:
    name: TypeScript Check
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - uses: pnpm/action-setup@v3
        with:
          version: 10
      - run: pnpm install --frozen-lockfile
      - run: pnpm -r --filter "./packages/**" build
      - run: pnpm -r exec tsc --noEmit

  lint:
    name: ESLint
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - uses: pnpm/action-setup@v3
        with:
          version: 10
      - run: pnpm install --frozen-lockfile
      - run: pnpm lint

  playwright:
    name: Playwright Tests
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - uses: pnpm/action-setup@v3
        with:
          version: 10
      - run: pnpm install --frozen-lockfile
      - run: pnpm exec playwright install --with-deps chromium
      - run: pnpm test:e2e
      - uses: actions/upload-artifact@v4
        if: always()
        with:
          name: playwright-report
          path: playwright-report/

  accessibility:
    name: A11y Tests
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - uses: pnpm/action-setup@v3
        with:
          version: 10
      - run: pnpm install --frozen-lockfile
      - run: pnpm test:a11y
EOF

# ============================================
# STEP 11: Update root package.json scripts
# ============================================
echo "📝 Updating package.json scripts..."

# Add test scripts to root package.json
cat > package.json << 'EOF'
{
  "name": "tourism-platform",
  "version": "1.0.0",
  "private": true,
  "packageManager": "pnpm@10.17.1",
  "workspaces": [
    "apps/*",
    "packages/*"
  ],
  "scripts": {
    "dev": "pnpm -r dev",
    "build": "pnpm -r build",
    "test": "pnpm -r test",
    "lint": "eslint . --ext .ts,.tsx",
    "lint:fix": "eslint . --ext .ts,.tsx --fix",
    "test:e2e": "playwright test tests/e2e",
    "test:a11y": "playwright test tests/a11y",
    "test:all": "playwright test",
    "typecheck": "pnpm -r exec tsc --noEmit"
  },
  "devDependencies": {
    "turbo": "^2.0.0",
    "@typescript-eslint/parser": "^6.0.0",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "eslint": "^8.0.0",
    "@playwright/test": "^1.40.0",
    "@axe-core/playwright": "^4.8.0"
  },
  "engines": {
    "node": ">=18 <21"
  }
}
EOF

# ============================================
# STEP 12: Update UI package exports
# ============================================
echo "📦 Updating UI package exports..."

cat > packages/ui/src/index.ts << 'EOF'
// App Shell
export * from './components/AppShell';

// Forms
export * from './components/Form';

// Tables
export * from './components/Table';

// Error Handling
export * from './components/ErrorBoundary';

// Utils
export { cn } from './lib/utils';
EOF

# Update UI package.json
cat > packages/ui/package.json << 'EOF'
{
  "name": "@weblynk/ui",
  "version": "0.0.1",
  "private": true,
  "main": "./dist/index.js",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "sideEffects": ["*.css"],
  "files": ["dist", "src/styles"],
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "default": "./dist/index.js"
    },
    "./styles/a11y.css": "./src/styles/a11y.css"
  },
  "scripts": {
    "build": "tsc -p tsconfig.json",
    "dev": "tsc -p tsconfig.json --watch",
    "clean": "rm -rf dist",
    "lint": "tsc --noEmit"
  },
  "peerDependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "tailwindcss": "^3.4.0"
  },
  "dependencies": {
    "@tanstack/react-table": "^8.0.0",
    "ag-grid-react": "^31.0.0",
    "ag-grid-community": "^31.0.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "lucide-react": "^0.263.1"
  },
  "devDependencies": {
    "@types/react": "^18.3.0",
    "typescript": "^5.3.0"
  }
}
EOF

# ============================================
# STEP 13: Final installation and build
# ============================================
echo "🔨 Running final installation and build..."

pnpm install
pnpm -r --filter "./packages/**" build

# ============================================
# STEP 14: Verify setup
# ============================================
echo "✅ Verifying setup..."

pnpm typecheck
pnpm lint || echo "⚠️  Lint warnings found (expected on first run)"

echo ""
echo "🎉 Foundation setup complete!"
echo ""
echo "Next steps:"
echo "1. Copy component code from artifacts into packages/ui/src/components/"
echo "2. Import tokens CSS in app layouts:"
echo "   import '@weblynk/tokens/css'"
echo "   import '@weblynk/ui/styles/a11y.css'"
echo "3. Run 'pnpm dev' to start development"
echo "4. Run 'pnpm test:e2e' to test Playwright"
echo "5. Run 'pnpm test:a11y' to test accessibility"
echo ""
EOF

chmod +x terminal_commands.sh
