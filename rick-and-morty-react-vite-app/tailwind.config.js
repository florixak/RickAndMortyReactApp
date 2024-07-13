/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#f8fafc",
        "secondary": "#cbd5e1",
        "light-slate": "#334155",
        "dark-slate": "#1e293b",
        "light-green": "#97ce4c",
        "cyan": "#4ade80",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "fade-in": "fadeIn 3s linear",
        "fade-out": "fadeOut 3s linear",
        "scaling": "scaling 1.5s linear",
        "infinite-scaling": "scaling 3s linear infinite",
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
        scaling: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
