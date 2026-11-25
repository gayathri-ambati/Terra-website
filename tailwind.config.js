/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          900: '#0B211B',
          800: '#102F27',
          700: '#16382D',
          600: '#244B3C',
          500: '#2F5D4A',
        },
        sage: {
          300: '#CFDDB4',
          400: '#B7CC9B',
          500: '#9FB478',
        },
        linen: '#E9E7DC',
        ivory: '#F8F8F3',
        charcoal: '#202722',
        clay: '#C4664A',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        heading: ['Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.22em',
      },
      maxWidth: {
        shell: '90rem',
      },
    },
  },
  plugins: [],
};
