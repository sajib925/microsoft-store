/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      notoSans: "'Noto Sans', sans-serif",
    },

    screens: {
      sm: "575px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      colors: {
        primary: "#2B2B2B",
        secondary: "#4B4B4B",
        navLink: "#262626",
        sideBarActive: "#006CBE",
        sideBarHover: "#F2F2F2",
        cardText: "#717171",
        cardBtnBorder: "#EDEDED",
        searchBorder: "#BEBEBE",
        searchActiveBorder: "#888888",
        signUpIcon: "#333333",
        sliderPrice: "#EEEEEE",
        sliderDescription: "#C8C6C4",
        sliderBtnBg: "rgba(255, 255, 255, 0.125)",
        sliderBtnHoverBg: "rgba(255, 255, 255, 0.19)",
        microsoftBtn: "#0078D4",
      },
      boxShadow: {
        cardShadow: "0px 0px 3px rgb(0 0 0 / 24%)",
        cardHoverShadow:
          "0px 3px 6px rgb(0 0 0 / 13%),0px 0px 4px rgb(0 0 0 / 13%)",
        cardBtnShadow: "0px 0.3px rgb(111 111 111 / 60%)",
        searchShadow: "0px 0px 0px 1px #88888888",
        microsoftStoreShadow:
          "0px 1.6px 3.6px rgb(0 0 0 / 13%), 0px 0px 2.9px rgb(0 0 0 / 11%)",
      },
    },
  },
  plugins: [],
};
