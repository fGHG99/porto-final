/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      ...colors, // Spread Tailwind’s default colors
      primary: colors.blue, // Primary color palette (blue)
      secondary: colors.white, // Set secondary color to white
      background: "var(--background)", // Custom background color
      foreground: "var(--foreground)", // Custom foreground color
    },
  },
  plugins: [],
};
