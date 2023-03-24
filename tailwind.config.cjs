/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        background: '#121214',
        primary: '#e1e5ee',
        secondary: '#04df9d'
      },
      fontFamily: {
        sans: ['Roboto, sans-serif']
      },

      gridTemplateColumns: {
        'wrapper': '256px 1fr'
      }
    },
  },
  plugins: [],
}
