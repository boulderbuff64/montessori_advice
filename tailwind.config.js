/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Primary colors
                sage: {
                    50: '#f4f6f3',
                    100: '#e5e9e3',
                    200: '#cdd5c9',
                    300: '#a9b7a3',
                    400: '#728c69', // Primary Earthy Sage
                    500: '#5a7352',
                    600: '#465c41',
                    700: '#384a35',
                    800: '#2f3d2d',
                    900: '#283326',
                },
                sand: {
                    50: '#fdfcfa',
                    100: '#F5F1E9', // Primary Soft Sand
                    200: '#ebe4d6',
                    300: '#ddd2bd',
                    400: '#c9b899',
                    500: '#b9a17d',
                    600: '#a88a67',
                    700: '#8c7156',
                    800: '#735d49',
                    900: '#5f4d3d',
                },
                terracotta: {
                    50: '#fdf6f4',
                    100: '#fae9e4',
                    200: '#f5d1c7',
                    300: '#ecb19f',
                    400: '#C06C4C', // Accent Terracotta
                    500: '#b05a3a',
                    600: '#994930',
                    700: '#7d3c29',
                    800: '#673326',
                    900: '#562d24',
                },
                forest: {
                    50: '#f3f4f3',
                    100: '#e3e6e3',
                    200: '#c9cfc9',
                    300: '#a3ada3',
                    400: '#738173',
                    500: '#566356',
                    600: '#434d43',
                    700: '#373f37',
                    800: '#2D3B2D', // Accent Deep Forest Green
                    900: '#262f26',
                },
            },
            fontFamily: {
                serif: ['var(--font-lora)', 'Georgia', 'serif'],
                sans: ['var(--font-open-sans)', 'system-ui', 'sans-serif'],
            },
            animation: {
                'grow': 'grow 2s ease-in-out infinite',
                'fade-in': 'fadeIn 0.5s ease-out',
                'slide-up': 'slideUp 0.4s ease-out',
                'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
            },
            keyframes: {
                grow: {
                    '0%, 100%': { transform: 'scaleY(1)' },
                    '50%': { transform: 'scaleY(1.1)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                pulseSoft: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.7' },
                },
            },
        },
    },
    plugins: [],
};
