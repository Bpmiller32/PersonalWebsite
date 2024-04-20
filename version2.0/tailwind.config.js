/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter"],
      },

      colors: {
        bteal: {
          50: "#66D9ED",
          100: "#66D9ED",
          200: "#66D9ED",
          300: "#66D9ED",
          400: "#66D9ED",
          500: "#66D9ED",
          600: "#66D9ED",
          700: "#66D9ED",
          800: "#66D9ED",
          900: "#66D9ED",
        },
        bpink: {
          50: "#BB77FF",
          100: "#BB77FF",
          200: "#BB77FF",
          300: "#BB77FF",
          400: "#BB77FF",
          500: "#BB77FF",
          600: "#BB77FF",
          700: "#BB77FF",
          800: "#BB77FF",
          900: "#BB77FF",
        },
        bzync: {
          50: "#0e0e0e",
          100: "#0e0e0e",
          200: "#0e0e0e",
          300: "#0e0e0e",
          400: "#0e0e0e",
          500: "#0e0e0e",
          600: "#0e0e0e",
          700: "#0e0e0e",
          800: "#0e0e0e",
          900: "#0e0e0e",
        },
      },
    },
  },
  plugins: [],
};
