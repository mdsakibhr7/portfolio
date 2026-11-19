/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0C",
        paper: "#FAFAF7",
        muted: "#6B6B73",
        accent: "#FF7A1A",
        glow: "#FFE2BD",
        lime: "#B8F25C",
      },
      fontFamily: {
        display: ['"Bebas Neue"', "Impact", "sans-serif"],
        serif: ['"Instrument Serif"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(11,11,12,0.18)",
      },
    },
  },
  plugins: [],
};
