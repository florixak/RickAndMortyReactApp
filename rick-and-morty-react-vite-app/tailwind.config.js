/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "fade-in": "fadeIn 3s linear",
        "fade-out": "fadeOut 3s linear",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "25%": { opacity: 0.25 },
          "50%": { opacity: 0.5 },
          "75%": { opacity: 0.75 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "25%": { opacity: 0.75 },
          "50%": { opacity: 0.5 },
          "75%": { opacity: 0.25 },
          "100%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
