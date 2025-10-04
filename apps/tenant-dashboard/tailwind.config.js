const tokensPreset = require('@weblynk/tokens/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [tokensPreset],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}'
  ],
  plugins: []
};
