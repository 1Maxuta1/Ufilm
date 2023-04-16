/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        template_night: "#4A0678",
        neutral_gray: "",
      },
      fontFamily: {
        sans: ["Your Font Name", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
