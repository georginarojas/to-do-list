/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
      black: "#000",
      white: "#fff",

      gray: {
        700: "#0D0D0D",
        600: "#1A1A1A",
        500: "#262626",
        400: "#333333",
        300: "#808080",
        200: "#D9D9D9",
        200: "#F2F2F2",
      },

      purple: {
        500: "#8284FA",
        800: "#5E60CE",
      },

      blue: {
        500: "#4EA8DE",
        800: "#1E6F9F",
      },

      red: "#E25858",
    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
