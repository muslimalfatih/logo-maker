/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "Avenir", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        "transparent-white": "rgba(255, 255, 255, 0.87)",
      },
    },
  },
  plugins: [],
};
