import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        circular: {
          "0%": {
            transform: "rotate(0deg) translate(-5px) rotate(0deg) ",
          },
          "100%": {
            transform: "rotate(360deg) translate(-5px) rotate(-360deg)",
          },
        },
      },
      animation: {
        circular: "circular 3s linear ",
      },
      colors: {
        dark: "#2b2b2b",
        darkHover: "#414141",
        primary: "#3fae29",
      },
      screens: {
        xs: "400px",
        xxs: "330px",
      },
      dropShadow: {
        sectors: "0px 2px 5px rgba(0, 0, 0, 0.15)",
      },
      backgroundImage: {
        partners: "linear-gradient(90deg, #f5fafd 50%, #edf2f5 100%)",

        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
      },
      boxShadow: {
        header: "2px 2px 5px 0 rgba(0, 0, 0, 0.15)",
        footer: "rgba(0, 0, 0, 0.2) 0px -2px 5px 0px",
        dropdownMenu: "0 5px 5px 0 rgba(0, 0, 0, 0.16)",
        learnMoreButton: "0 8px 16px rgba(0, 0, 0, 0.15)",
        cardhistory: "0 8px 16px rgba(0, 0, 0, 0.15)",
        "card-over": "0 8px 16px rgba(0, 0, 0, 0.15)",
        card: "rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0 8px 16px -8px",
        cardArea:
          "rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0 8px 16px -8px",
      },
    },
  },
  plugins: [],
};
export default config;
