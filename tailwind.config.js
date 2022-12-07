/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*/*.html"],
  theme: {
    fontFamily:{
      noto:"Noto Sans, sans-serif"
    },
    screens:{
      xs:"300px",
      sm:"480px",
      md:"768px",
      lg:"976px",
      xl:"1440px"
    },
    extend: {
      colors:{
        "softBlack":"#151515"
      }
    },
  },
  plugins: [],
}
