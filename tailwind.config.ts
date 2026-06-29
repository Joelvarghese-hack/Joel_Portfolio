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
        // Bright green / white / ink system
        green: {
          DEFAULT: "#1FBF4B",
          deep: "#128A37",
          dark: "#0E6E2C",
          lime: "#3BD865",
          soft: "#E6F8EC",
        },
        grape: "#8B5CF6",
        ink: "#0C0A0A",
        slatey: "#3A3A3E",
        paper: "#FFFFFF",
        mist: "#F2F4EF",
        cloud: "#E5E8E1",
      },
      fontFamily: {
        sans: ["var(--font-hanken)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
