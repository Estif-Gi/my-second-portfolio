/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "logobg" : "#D9D9D9",
        "navbg" :"#5F5D5D",
        "allbg" :"#403F3F",
        "tx" : "#BBB6B6"
      },
      

    },
  },
  plugins: [require('tailwindcss-motion')],
}

