// tailwind.config.js
module.exports = {
    purge: [
        './.components/**/*.{js,ts,njk,html}',
        './.layouts/**/*.{js,ts,njk,html}',
        './.scripts/**/*.{js,ts,njk,html}',
        './.styles/**/*.{js,ts,njk,html}',
    ],
    darkMode: false, // or 'media' or 'class'
    mode: 'jit',
    theme: {
        fontWeight: {
            hairline: 100,
            thin: 200,
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
            black: 900,
        },
        screens: {
            '2xl': { 'max': '1535px' },
            // => @media (max-width: 1535px) { ... }

            'xl': { 'max': '1279px' },
            // => @media (max-width: 1279px) { ... }

            'lg': { 'max': '1023px' },
            // => @media (max-width: 1023px) { ... }

            'md': { 'max': '767px' },
            // => @media (max-width: 767px) { ... }

            'sm': { 'max': '639px' },
            // => @media (max-width: 639px) { ... }

            'above-2xl': { 'min': '1535px' },
            // => @media (min-width: 1535px) { ... }

            'above-xl': { 'min': '1279px' },
            // => @media (min-width: 1279px) { ... }

            'above-lg': { 'min': '1023px' },
            // => @media (min-width: 1023px) { ... }

            'above-md': { 'min': '767px' },
            // => @media (min-width: 767px) { ... }

            'above-sm': { 'min': '639px' },
            // => @media (min-width: 639px) { ... }
        },
        extend: {
            outline: {
                red: '2px dotted #FF0000',
            },
            width: {
                '3.5/5': '70%',
                '9.5/10': '95%',
            },
            colors: {
                'primary-blue': '#1769FF',
                'not-black': '#212121',
                'birthday-pink': '#FFEEEE'
            }
        },
        fontFamily: {
            'sans': ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        }
    },
    variants: {
        extend: {
            textColor: [
                'responsive',
                'hover',
                'focus',
                'before',
                'after',
                'hover::before',
                'hover::after',
                'focus::before'
            ],
        },
    },
    plugins: [],
}