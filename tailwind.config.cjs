/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A192F",
        secondary: "#112240",
        accent: "#64FFDA",
        light: "#CCD6F6",
        textPrimary: "#8892B0"
      }
    },
  },
  plugins: [],
}