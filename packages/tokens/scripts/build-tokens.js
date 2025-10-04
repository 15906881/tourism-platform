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
