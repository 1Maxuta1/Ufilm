/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light_purple: "#ab00ff",
        medium_purple: "#8300c4",
        dark_purple: "#4c00a4",
        medium_purple_blue: "#33007b",
        dark_purple_blue: "#31004a",
      },
      fontFamily: {
        sans: ["Your Font Name", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
