
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     screens: {
      xs: "370px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      // "13inch": "1300px",
      // "14inch": "1440px",
      // "2xl": "1538px",
    },
    fontFamily: {
      BeVietnamPro: "BeVietnamPro"
    },
    extend: {
      colors: {
        grey: "#fafafa",
        glass: "rgba(255,255,255,0.45)",
        transparentBlack : "rgba(0,0,0,0.7)"
      },
      fontFamily: {
        puplic: ['"Public Sans"', 'sans-serif'],
        georgia: ['Georgia', 'serif'],
      },
      backgroundImage: {
        'snow-gradient': 'linear-gradient(to bottom, #ffffff, #f0f4f8)'
      }
    },
   
  },
  plugins: [],
};