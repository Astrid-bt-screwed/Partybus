/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        bg: {
          main: "#050505",
          secondary: "#0A0A0A",
          surface: "#121212"
        },
        primary: {
          main: "#D900FF",
          glow: "#E033FF"
        },
        secondary: {
          main: "#00F0FF"
        },
        accent: {
          purple: "#7000FF",
          dark: "#1A0B2E"
        },
        text: {
          primary: "#EDEDED",
          secondary: "#A1A1AA",
          muted: "#52525B"
        }
      },
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        unbounded: ["Unbounded", "sans-serif"],
        manrope: ["Manrope", "sans-serif"]
      },
      boxShadow: {
        neon: "0 0 20px rgba(217, 0, 255, 0.5)",
        "neon-cyan": "0 0 20px rgba(0, 240, 255, 0.5)",
        "neon-strong": "0 0 30px rgba(217, 0, 255, 0.6)"
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(to right, #7000FF, #D900FF)",
        "gradient-glass": "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)"
      }
    }
  },
  plugins: []
};
