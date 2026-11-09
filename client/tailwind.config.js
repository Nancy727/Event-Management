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
          50: '#F8E2E6',  // Softened gentle Rose Pink background tint
          100: '#F0C9CF', // Soft light Rose Pink
          200: '#E2ABB4', // Soft delicate Rose Pink border
          300: '#CD8A96',
          400: '#B06975',
          500: '#81434F',
          600: '#64303B',
          700: '#81434F',  // Softened Rose Taupe
          800: '#33151D',
          900: '#200B10',
        },
        olive: {
          50: '#E1EAD8',  // Softened gentle Olive Green card background tint
          100: '#C9D8BD', // Soft light Olive Green
          200: '#AABD9C', // Soft delicate Olive Green border
          300: '#899F7B',
          400: '#6B825E',
          500: '#4F6543',
          600: '#394C2E',
          700: '#4F6543',  // Softened Forest Olive Green
          800: '#1A2714',
          900: '#0F170B',
        },
        cream: {
          50: '#FFFFFF',  // Pure White background
          100: '#F4F8F1', // Softened gentle background tint
          200: '#E1EAD8',
          300: '#C9D8BD',
        },
        noir: {
          800: '#27381F',
          900: '#1A2714',
          950: '#0F170B',
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
