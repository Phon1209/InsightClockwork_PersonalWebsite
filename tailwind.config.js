/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css,scss}",
  ],
  theme: {
    extend: {
      screens: {
        md2: "1280px",
      },
      colors: {
        dark: {
          light: "#56657F",
          divider: "#313C4E",
          black: "#212936",
          "white-extra": "#AFBDD1",
          "black-light": "#2B3648",
          "black-grey": "#2A313D",
        },
      },
    },
  },
  plugins: [],
};
