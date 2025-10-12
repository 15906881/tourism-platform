module.exports = {
    theme: {
        extend: {
            fontFamily: {
                display: ['var(--font-display)', 'serif'],
                sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                xs: ['0.75rem', { lineHeight: '1rem' }],
                sm: ['0.875rem', { lineHeight: '1.25rem' }],
                base: ['1rem', { lineHeight: '1.5rem' }],
                lg: ['1.125rem', { lineHeight: '1.75rem' }],
                xl: ['1.25rem', { lineHeight: '1.75rem' }],
                '2xl': ['1.5rem', { lineHeight: '2rem' }],
                '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
                '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
                '5xl': ['3rem', { lineHeight: '1' }],
                '6xl': ['3.75rem', { lineHeight: '1' }],
            },
            colors: {
                gold: {
                    50: '#fefcf3', 100: '#fef7e0', 200: '#fdeec1', 300: '#fbe192',
                    400: '#f8cd5c', 500: '#f4b73e', 600: '#e69823', 700: '#c2761a',
                    800: '#9a5c1a', 900: '#7c4b19', 950: '#43250b',
                },
                rose: {
                    50: '#fef2f3', 100: '#fde6e7', 200: '#fbd0d5', 300: '#f7aab2',
                    400: '#f27a8a', 500: '#e74c64', 600: '#d42f52', 700: '#b22143',
                    800: '#961e3e', 900: '#801b3a', 950: '#470a1b',
                },
                navy: {
                    50: '#f0f4f8', 100: '#d9e2ec', 200: '#bcccdc', 300: '#9fb3c8',
                    400: '#829ab1', 500: '#627d98', 600: '#486581', 700: '#334e68',
                    800: '#243b53', 900: '#102a43', 950: '#091e2f',
                },
            },
            spacing: { 18: '4.5rem', 112: '28rem', 128: '32rem' },
            boxShadow: {
                luxury: '0 10px 30px -5px rgba(0, 0, 0, 0.15)',
                'luxury-lg': '0 20px 60px -10px rgba(0, 0, 0, 0.25)',
            },
        },
    },
};
export {};
//# sourceMappingURL=tailwind.luxury-preset.js.map