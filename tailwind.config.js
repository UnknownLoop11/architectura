/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FAFAFA",
        secondary: "#2E2E2E",
        ternary: "#D4AF37",
        accent: "#E3DAC9",
      },
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        secondary: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
