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
      backgroundImage: {
        backgroundPomo: "var(--background)",
        backgroundShort: "var(--background-short-break)",
        backgroundLong: "var(--background-long-break)",
        foreground: "var(--foreground)",
      },
      keyframes:{
        rippleEffect: {
          "0%": {
            width: "0px",
            height: "0px",
            opacity: "0.5"
          },
          "100%": {
            width: "300px",
            height: "300px",
            background: "0"
          },
        },
        loaderEffect:{
          "0%":{
            transform: "translate(-50%,-50%) rotate(0deg)"
          },
          "100%":{
            transform: "translate(-50%,-50%) rotate(360deg)"
          }
        }
      },
      animation:{
        "rippleAnim": "rippleEffect .9s linear infinite",
        "loader": "loaderEffect 1s linear infinite"
      }
    },
  },
  plugins: [],
};
export default config;
