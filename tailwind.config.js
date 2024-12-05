/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      xs: "360px",
      ...defaultTheme.screens,
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        card: "0px 2px 10px 0px rgba(144, 144, 144, 0.5)",
      },

      fontSize: {
        "xl+": "1.375rem",
        "2xl+": "1.5625rem",
        "5xl+": "3.5rem",
        "6xl+": "4.25rem",
      },

      fontFamily: {
        anton: ["var(--font-anton)", "ui-sans-serif"],
        barlow: ["var(--font-barlow)", "ui-sans-serif"],
        crimsonText: ["var(--font-crimsonText)", "ui-sans-serif"],
        birthstone: ["var(--font-birthstone)", "ui-sans-serif"],
      },

      transitionDuration: {
        600: "600ms",
      },

      backgroundImage: {
        gradient1: "linear-gradient(45deg, #3b38eb 0%, #6600d3 100%)",
        gradient2: "linear-gradient(45deg, #6600d3 0%, #3b38eb 100%)",
        dot: "radial-gradient(currentColor,currentColor 50%,transparent 50%,transparent 100%)",
      },

      backgroundSize: {
        dotSized: "4px 4px",
      },

      colors: {
        primary: {
          DEFAULT: "#FF79AD",
          light: "#F1F5FD",
        },

        secondary: {
          DEFAULT: "#6600d3",
        },

        gray: {
          DEFAULT: "#E7E6E8",
          text: "#515264",
          text2: "#3f444b",
        },

        header: {
          navLink: "#615E68",
        },

        text: "#555",

        border: {
          DEFAULT: "#eee",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      transitionDuration: {
        10000: "10000ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
