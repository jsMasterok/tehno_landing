/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({
      // strategy: "base", // only generate global styles
      strategy: "class", // only generate classes
    }),
  ],
};
