/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        main: {
          1: "#3BBA9C",
          2: "#2E3047",
          3: "#43455C",
          4: "#3C3F58",
          5: "#707793",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
