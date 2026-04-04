import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: { DEFAULT: "#FDF8F4", dark: "#F5EDE6" },
        blush: { DEFAULT: "#E8C4B8", light: "#F2DDD6", dark: "#C9948A" },
        rose: { DEFAULT: "#C48B7C", deep: "#A86B5E" },
        gold: { DEFAULT: "#C6A87D", light: "#D4BC9A", dark: "#A88A5E" },
        charcoal: { DEFAULT: "#2C2C2C", light: "#4A4A4A" },
        gray: { salon: "#7A7A7A", muted: "#B8B8B8" },
        /** Text „nude” pe fundal cream (meniu mobil etc.) */
        nude: {
          DEFAULT: "#8E6B60",
          deep: "#6E4A42",
          soft: "#A67F72",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        nav: ["var(--font-josefin)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        salon: "0 4px 20px rgba(44,44,44,0.08)",
        "salon-lg": "0 8px 40px rgba(44,44,44,0.12)",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
