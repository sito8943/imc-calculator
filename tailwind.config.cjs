/** @type {import('tailwindcss').Config} */

export default {
  // eslint-disable-next-line no-undef

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "383px" },
      // => @media (max-width: 383px) { ... }
    },
    colors: {
      primary: "#195075",
      dark: "#101010",
      light: "#f7f7f7",
      success: "#4CAF50",
      warning: "#FFC107",
      error: "#FF5722",
    },
    extend: {
      maxWidth: {
        60: "240px",
        75: "300px",
      },
      width: {
        66: "264px",
        60: "240px",
      },
      height: {
        15: "60px",
        66: "264px",
      },
    },
  },
  plugins: [],
};
