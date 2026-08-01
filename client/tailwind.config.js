/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        rose: {
          50: '#F4E3E5',  // One shade darker soft Rose Pink box tint
          100: '#E8CCD0',
          200: '#D6A5AC',
          300: '#BE7B85',
          400: '#9E5460',
          500: '#6E3841',
          600: '#542830',
          700: '#3D1B22',  // One shade darker deep Rose
          800: '#2A1117',
          900: '#1A0A0E',
        },
        olive: {
          50: '#EBF0E6',  // One shade darker soft Olive Green box tint
          100: '#D6E0CD',
          200: '#B5C7A5',
          300: '#8FA67C',
          400: '#6C8558',
          500: '#4C613D',
          600: '#38492C',
          700: '#28351F',  // One shade darker deep Olive
          800: '#1A2414',
          900: '#0F150B',
        },
        cream: {
          50: '#FFFFFF',  // Pure White
          100: '#F7F8F5', // Soft Off-White
          200: '#EBF0E6',
          300: '#D6E0CD',
        },
        noir: {
          800: '#28351F',
          900: '#1A2414',
          950: '#0F150B',
        }
      },
      fontFamily: {
        sans: ['"Brandon Grotesque"', 'Jost', 'Montserrat', 'sans-serif'],
        serif: ['"Bodoni Moda"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', '"Bodoni Moda"', 'serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        ultra: '0.35em',
      },
    },
  },
  plugins: [],
}
