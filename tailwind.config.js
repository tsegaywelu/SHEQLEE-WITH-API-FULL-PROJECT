/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-purple": "#8967B3",
        "custom-slate": "#F7F7F7",
        "custom-tags": "#DFDFDF",
        "custom-black": "#000000",
        "custom-load": "#C9C9C9",
        "custom-placeholder": "#444444",
        dvider: "#DDDDDD",
        "custom-location": "#FCFCFC",
      },
      fontFamily: {
        lora: ["Lora", "sans-serif"],
        kantumruy: ["Kantumruy Pro", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
