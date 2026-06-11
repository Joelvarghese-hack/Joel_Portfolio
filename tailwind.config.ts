import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "velocity-red": "#E63946",
        "crimson-shadow": "#8B1E2D",
        "amber-pulse": "#F4A261",
        "amber-deep": "#C77B3F",
        ink: "#0E0E10",
        paper: "#F5F1E8",
        navy: "#1A2B4A",
        gold: "#C9A961",
      },
      fontFamily: {
        sans: ["var(--font-bricolage)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
