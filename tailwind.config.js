/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#11c4d8",

          "secondary": "#6ef95e",

          "accent": "#f486e0",

          "neutral": "#242533",

          "base-100": "#2F4656",

          "info": "#87A7DE",

          "success": "#219C77",

          "warning": "#F4A734",

          "error": "#EB5683",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}