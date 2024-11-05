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
      textShadow: {
        "custom-black": `
          -1px -1px 0 black,
          1px -1px 0 black,
          -1px 1px 0 black,
          1px 1px 0 black
        `,
      },
    },
  },
  plugins: [
    forms,
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-black": {
          textShadow: `
          -1px -1px 0 black,
          1px -1px 0 black,
          -1px 1px 0 black,
          1px 1px 0 black
        `,
        },
      });
    },
  ],
};
