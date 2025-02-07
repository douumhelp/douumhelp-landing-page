/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
          light: '#ffffff',
          default: '#242424',
          dark: '#242424',
      }

    },
  },
  plugins: [],
}