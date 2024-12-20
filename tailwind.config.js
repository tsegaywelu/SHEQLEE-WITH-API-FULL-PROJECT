/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-purple": "#8967B3",
        "custom-slate": "#F7F7F7",
        "custom-white": "#FFFFFF",
        "custom-tags": "#DFDFDF",
        "custom-black": "#000000",
        "custom-load": "#C9C9C9",
        "custom-placeholder": "#444444",
        "custom-blue": "#4285F4",
        dvider: "#DDDDDD",
        "custom-location": "#FCFCFC",
        "custom-gray": "#333333",
        "custom-red": "#EA4335",
        "white-slate": "#C7C7C7",
        itseemsgray: "#C9C8C8",
        itseemswhite: "#F3F3F3",
      },
      fill: ["hover", "focus"],
      stroke: ["hover", "focus"],
      fontFamily: {
        lora: ["Lora", "sans-serif"],
        kantumruy: ["Kantumruy Pro", "sans-serif"],
        recolta: ["Recolta", "Lora"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
