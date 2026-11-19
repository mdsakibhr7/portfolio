/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#EEF1F8",      // main text (light on dark)
        paper: "#07090F",    // page background
        panel: "#0E121C",    // cards, surfaces
        muted: "#8A93A8",
        accent: "#FF7A1A",
        glow: "#2A1A0E",
        lime: "#B8F25C",
        mint: "#5EEAD4",
        blue: "#7C9CFF",
      },
      fontFamily: {
        display: ['"Bebas Neue"', "Impact", "sans-serif"],
        serif: ['"Instrument Serif"', "Georgia", "serif"],
        sans: ["Manrope", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 60px -24px rgba(0,0,0,.75)",
        glow: "0 30px 80px -30px rgba(255,122,26,.45)",
      },
    },
  },
  plugins: [],
};
