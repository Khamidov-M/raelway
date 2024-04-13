import Container from "postcss/lib/container";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        contain: "1080px",
      },
      backgroundColor: {
        base: "#621DED",
        rule: "#13151B",
      },
    },
  },
  plugins: [],
};
