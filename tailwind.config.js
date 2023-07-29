/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dark-purple": "#4338ca",
        "sky400":"#7dd3fc",
        "light-white":"rgba(255,255,255,0.17)",
        "white":"#f8fafc",
         
      },
    },
  },
  plugins: [],
}

