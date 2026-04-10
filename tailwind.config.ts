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
      keyframes: {
        shine: {
          from: { backgroundPosition: "200% center" },
          to: { backgroundPosition: "-200% center" },
        },
        pulseGlow: {
          "0%, 100%": { 
            boxShadow: "0 0 15px 2px rgba(196, 139, 124, 0.4), inset 0 0 8px 0 rgba(255, 255, 255, 0.2)" 
          },
          "50%": { 
            boxShadow: "0 0 25px 6px rgba(196, 139, 124, 0.6), inset 0 0 15px 4px rgba(255, 255, 255, 0.4)" 
          },
        }
      },
      animation: {
        shine: "shine 4s linear infinite",
        pulseGlow: "pulseGlow 2.5s ease-in-out infinite",
        "premium-btn": "shine 4s linear infinite, pulseGlow 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
