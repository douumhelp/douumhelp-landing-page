/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        purpleTheme: {
          light: '#ffffff',
          default: '#242424',
          dark: '#242424',
        }
      }

    },
  },
  plugins: [],
}