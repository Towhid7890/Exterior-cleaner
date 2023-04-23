/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#05464E",
        secondary: "#FFB748",
        info: "#878472",
        black: "#000000",
        red: "#FF0000",
        accent: "#F9F4EA",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
