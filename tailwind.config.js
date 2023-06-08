/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: "rgba(0,0,0,0.8);"
      },
      fontFamily: {
        barlowcondensed:"barlowcondensed",
        bellefair: "Bellefair",
        barlow: "Barlow"
      },
      outlineOffset:{
        
      },
      outlineWidth:{
        "60" : "60px"
      },
      ringOffsetWidth:{
         "60" : "60px"
      },
      animation:{
        "spin-slow" : "spin 60s linear infinite",
      },
      width:{
        "800" : "450px",
      }
    },
  },
  plugins: [],
}