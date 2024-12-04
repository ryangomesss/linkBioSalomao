const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Define a fonte para os títulos <h1>
        sans: ["Bebas Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
