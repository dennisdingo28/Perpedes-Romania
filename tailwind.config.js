/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*/*.html"],
  theme: {
    fontFamily:{
      noto:"Noto Sans, sans-serif",
      RobotoMono:"Roboto Mono, monospace"
    },
    screens:{
      xs:"368px",
      sm:"480px",
      md:"768px",
      lg:"976px",
      xl:"1440px"
    },
    buttons:{
      instagram:"linear-gradient(to right, #fbc2eb 0%, #a6c1ee 51%, #fbc2eb 100%)"
    },
    extend: {
      colors:{
        "softBlack":"#151515",
        "darkYellow":"#E9BF39",
        "gold":"#f1d046",
        "darkGreen":"#19413c",
        "softBlue":"#5561f5",
        "darkPurple":"#780FF7",
        "lightPink":"#FD01C7",
        "pinkedRed":"#FA286E",
        "lightYellow":"#FDA300"
      }
    },
  },
  plugins: [],
}
