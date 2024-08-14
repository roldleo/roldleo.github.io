/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionDelay: {
        0: "0ms",
        100: "100ms",
        200: "200ms",
        300: "300ms",
        400: "400ms",
        500: "500ms",
      },
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
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        typing:
          "typing 3s steps(30, end) 1s 1 normal both, blink .75s step-end infinite",
        fadeIn: "fadeIn 2s ease-out",
        slideIn: "slideIn 2s ease-out",
      },
    },
  },
  plugins: [],
};
