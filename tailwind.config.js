// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6", // Tailwind blue-500
        accent: "#22d3ee",  // Tailwind cyan-400
        dark: "#0f172a",    // original deep dark blue (used before)
        darkLight: "#1e293b", // slate-800ish for cards
        blueGradientStart: "#3b82f6",
        blueGradientEnd: "#22d3ee",
        cardBg: "#1e1e2e", // fallback for backgrounds like in contact cards
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
