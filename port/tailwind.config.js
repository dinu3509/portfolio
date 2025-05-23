/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from "tailwind-scrollbar"
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage :{
        'dmbg' : "url(/dmbg.webp)",
        'cc' : "url(/cc.jpg)",
        'bg' : "url(/bg.webp)"
      },
    },
  },
  plugins: [tailwindScrollbar
  ],
}