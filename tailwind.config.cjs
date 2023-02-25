/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      notoSans: "'Noto Sans', sans-serif",
    },
    extend: {
      colors: {
        primary: "#2B2B2B",
        secondary: "#4B4B4B",
        navLink: "#262626",
        sideBarActive: "#006CBE",
        sideBarHover: "#F2F2F2",
      },
    },
  },
  plugins: [],
};
