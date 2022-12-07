/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*/*.html"],
  theme: {
    fontFamily:{
      noto:"Noto Sans, sans-serif",
      RobotoMono:"Roboto Mono, monospace"
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
        "softBlack":"#151515",
        "lightBlack":"#202225",
        "darkYellow":"#E9BF39",
        "gold":"#f1d046"
      }
    },
  },
  plugins: [],
}
