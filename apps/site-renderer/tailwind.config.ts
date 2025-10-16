import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{ts,tsx,js,jsx,mdx}',
    './components/**/*.{ts,tsx,js,jsx,mdx}',
    './pages/**/*.{ts,tsx,js,jsx,mdx}',
    './src/**/*.{ts,tsx,js,jsx,mdx}',
    '../**/node_modules/**/*.{ts,tsx,js,jsx}', // in case of linked pkgs
    '../../packages/ui/**/*.{ts,tsx,js,jsx,mdx}', // adjust/remove if unused
  ],
  theme: { extend: {} },
  plugins: [],
} satisfies Config
