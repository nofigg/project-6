/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'white',
            a: {
              color: 'white',
              '&:hover': {
                color: '#a78bfa',
              },
            },
            strong: {
              color: 'white',
            },
            'ol > li::marker': {
              color: 'white',
            },
            'ul > li::marker': {
              color: 'white',
            },
            hr: {
              borderColor: '#1f2937',
            },
            blockquote: {
              borderLeftColor: '#1f2937',
              color: 'white',
            },
            h1: {
              color: 'white',
              fontFamily: '"IBM Plex Sans", sans-serif',
              fontWeight: '600',
            },
            h2: {
              color: 'white',
              fontFamily: '"IBM Plex Sans", sans-serif',
              fontWeight: '600',
            },
            h3: {
              color: 'white',
              fontFamily: '"IBM Plex Sans", sans-serif',
              fontWeight: '600',
            },
            h4: {
              color: 'white',
              fontFamily: '"IBM Plex Sans", sans-serif',
              fontWeight: '600',
            },
            h5: {
              color: 'white',
              fontFamily: '"IBM Plex Sans", sans-serif',
              fontWeight: '600',
            },
            h6: {
              color: 'white',
              fontFamily: '"IBM Plex Sans", sans-serif',
              fontWeight: '600',
            },
            code: {
              color: 'white',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              color: 'white',
              backgroundColor: '#1f2937',
            },
          },
        },
      },
      fontFamily: {
        'ibm-plex-sans': ['"IBM Plex Sans"', 'sans-serif'],
        'ibm-plex-mono': ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')],
};
