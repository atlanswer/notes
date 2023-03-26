/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,ts,tsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./theme.config.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
