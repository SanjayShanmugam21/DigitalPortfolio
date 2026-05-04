/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        syne: ["'Syne'", "sans-serif"],
        grotesk: ["'Space Grotesk'", "sans-serif"],
      },
      colors: {
        bg: "#080c14",
        surface: "#0e1420",
        surface2: "#141b2a",
        border: "#1e2a3d",
        accent: "#4f8ef7",
        accent2: "#7c5af7",
        green: "#22d37a",
        muted: "#6b7a96",
      },
      animation: {
        blink: "blink 1s step-end infinite",
        pulse2: "pulse2 2s infinite",
        fadeUp: "fadeUp 0.7s ease forwards",
      },
      keyframes: {
        blink: { "0%,100%": { opacity: 1 }, "50%": { opacity: 0 } },
        pulse2: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(79,142,247,0.3)" },
          "50%": { boxShadow: "0 0 0 12px rgba(79,142,247,0)" },
        },
        fadeUp: {
          from: { opacity: 0, transform: "translateY(32px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
