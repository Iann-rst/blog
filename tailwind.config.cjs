/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
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
