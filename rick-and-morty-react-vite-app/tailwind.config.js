/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f8fafc",
        secondary: "#cbd5e1",
        "light-slate": "#334155",
        "dark-slate": "#1e293b",
        "light-green": "#97FB9B",
        cyan: "#4ade80",
      },
      animation: {
        scaling: "scaling 1.5s linear",
        "infinite-scaling": "scaling 3s linear infinite",
      },
      keyframes: {
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
