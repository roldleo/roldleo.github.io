/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Fira Code"', "monospace"],
      },
      keyframes: {
        typing: {
          "0%": { width: "0%" },
          "50%": { width: "50%" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "black" },
        },
      },
      animation: {
        typing:
          "typing 3s steps(30, end) 1s 1 normal both, blink .75s step-end infinite",
      },
    },
  },
  plugins: [],
};
