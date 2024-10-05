/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1320px",
        info: "1122px",
        slider: "1920px",
      },
      colors: {
        color1: "#789D0E",
        color2: "#4B6A0A",
        color3: "#1B270C",
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      fredoka: ["Fredoka", "sans-serif"],
    },
    backgroundImage: {
      banner: "url('/bg/bannerbg.png')",
      feature: "url('/bg/featurebg.png')",
    },
    screens: {
      xxs: "320px",
      xs: "540px",
      sm: "640px",
      md: "768px",
      xmd: "888px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1288px",
    },
  },
  plugins: [],
};
