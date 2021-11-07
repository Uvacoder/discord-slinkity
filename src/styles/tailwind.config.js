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
        extend: {
            colors: {
                'ivory': 'rgb(255, 245, 233)',
                'lead': '#121211',
                'sunglow': '#FFB522',
                'brass': '#CD7A29',
            }
        },
        fontFamily: {
            'sans': ['HelveticaNowDisplay', 'Helvetica', 'Arial', 'sans-serif'],
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
        }
    },
    corePlugins: {
        container: false
    },
    plugins: [
        function ({ addComponents }) {
            addComponents({
                '.container': {
                    maxWidth: '100vw',
                    '@screen sm': {
                        maxWidth: '90vw',
                    },
                    '@screen md': {
                        maxWidth: '90vw',
                    },
                    '@screen lg': {
                        maxWidth: '80vw',
                    },
                    '@screen xl': {
                        maxWidth: '80vw',
                    },
                }
            })
        }
    ],
}