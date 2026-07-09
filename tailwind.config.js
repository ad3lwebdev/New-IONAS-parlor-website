/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F3E8CE",
        paperLight: "#FBF4E3",
        ink: "#2A2118",
        inkSoft: "#5B4E3F",
        forest: "#2F5233",
        forestDeep: "#1B3020",
        annatto: "#B8451F",
        annattoDeep: "#93361A",
        brass: "#C6982F",
        pacific: "#336B7A",
        line: "#D9C8A4",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"],
        body: ["var(--font-work-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-space-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        card: "0 24px 48px -24px rgba(27, 20, 12, 0.35)",
        soft: "0 12px 28px -18px rgba(27, 20, 12, 0.3)",
      },
      backgroundImage: {
        grain: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        reveal: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        reveal: "reveal 0.7s ease forwards",
      },
    },
  },
  plugins: [],
};
