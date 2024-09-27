/** @type {import('tailwindcss').Config} */
import forms from "@tailwindcss/forms";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#123456",
        secondary: "#123456",

        neutralForground: "#232929",
        neutralBackgound: "#181b1b",
        neutralBorder: "#3b4545",

        textBright: "#fbfbfb",
        textLight: "#d6dcdc",
        textDark: "#9facac",
      },
      backgroundImage: {
        "radial-at-mouse":
          "radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%)",
      },
    },
  },
  plugins: [forms],
};
