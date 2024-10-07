/** @type {import('tailwindcss').Config} */
import forms from "@tailwindcss/forms";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        projectPrimary: "#32e7e7",
        projectSecondary: "#8c32e7",

        projectForeground: "#232929",
        projectBackground: "#181b1b",
        projectBorder: "#3b4545",

        projectBright: "#fbfbfb",
        projectDark: "#9facac",
      },
    },
  },
  plugins: [forms],
};
