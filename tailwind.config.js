/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "#86ffc4",
            h2: { color: "#ab57ff" },
            h3: { color: "#cd9bff" },
            strong: { color: "#ffc48a" },
            a: { color: "#ffab56" },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
