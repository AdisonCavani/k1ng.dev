/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.tsx", "./components/**/*.tsx", "./styles/**/*.css"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
