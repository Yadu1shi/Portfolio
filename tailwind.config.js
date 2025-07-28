
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      plugins: [require('tailwind-scrollbar-hide')],

      colors:{
        primary:"#F1F1F1",
        secondary:"#BDBDBD",
        border:"#DCDCDC",
        card:"#1A1A1A"
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        subheading: ["Inter", "sans-serif"],
        lato: ['Lato', 'sans-serif'], // ✅ Should be lowercase "lato"
        source: ['"Source Code Pro"', 'monospace'],
        space: ['"Space Grotesk"',	'Neo-grotesque'],
        montserrat: ['Montserrat', 'sans-serif'],
      }

    },
  },
  plugins: [],
}

