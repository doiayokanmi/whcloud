/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        homepage: 'url("/images/whcloud-homepage.jpg")',
        about: 'url("/images/about.jpg")',
      }
    },
  },
  plugins: [],
}

