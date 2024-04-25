/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#F6F4EB',
        'skyBlue' : '#91C8E4',
        'seaBlue' : '#749BC2',
        'blue' : '#4682A9'
      },
    },
  },
  plugins: [],
}

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      extend: {
        colors: {
          'white': '#F6F4EB',
          'skyBlue' : '#91C8E4',
          'seaBlue' : '#749BC2',
          'blue' : '#4682A9'
        },
      },
    },
  },
  plugins: [],
});