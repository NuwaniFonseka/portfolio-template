// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8b5cf6",         // purple-500 for main accents (buttons, highlights)
        accent: "#a78bfa",          // lighter purple for secondary accents
        galaxy: "#1e1b2e",          // dark purple background base
        galaxySoft: "#2a213a",      // softer background for cards
        white: "#f8f8ff",           // off-white for text
        cardBorder: "#4b445c",      // subtle border color
      },
      backgroundImage: {
        'galaxy': "url('/galaxy-bg.png')", // custom class: bg-galaxy
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
