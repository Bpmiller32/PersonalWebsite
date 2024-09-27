/** @type {import('tailwindcss').Config} */
import forms from "@tailwindcss/forms";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#32e7e7",
        secondary: "#8c32e7",

        neutralForground: "#232929",
        neutralBackgound: "#181b1b",
        neutralBorder: "#3b4545",

        textBright: "#fbfbfb",
        textLight: "#d6dcdc",
        textDark: "#9facac",
      },
    },
  },
  plugins: [forms],
};
