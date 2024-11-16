/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-purple": "#8967B3",
        "custom-slate": "#F7F7F7",
        "custom-tags": "#DFDFDF",
      },
    },
  },
  plugins: [],
};
