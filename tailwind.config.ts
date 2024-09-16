import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "sm": "500px",
        "md": "760px",
        "lg": "960px",
        "xl": "1100px",
      },
      colors: {
        backgroundPomo: "var(--background)",
        backgroundShort: "var(--background-short-break)",
        backgroundLong: "var(--background-long-break)",
        foreground: "var(--foreground)",
      },
      keyframes:{
        rippleEffect: {
          "0%": {
            transform: "scale(0)",
            opacity: "0.5",
          },
          "100%": {
            transform: "scale(2)",
            opacity: "0",
          },
        }
      },
      animation:{
        "rippleAnim": "rippleEffect 0.9s ease infinite"
      }
    },
  },
  plugins: [],
};
export default config;
