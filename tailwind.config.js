// https://tailwindcss.com/docs/installation/using-postcss

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false, // disable Tailwind's reset
  },
  // my markdown stuff is in ../docs, not /src
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./notes/**/*.{tsx,mdx}"],
  // hooks into docusaurus' dark mode settigns
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [],
};
