/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        background: '#0a0a0a',
        surface: '#111111',
        primary: '#4ade80', // Electric Green
        secondary: '#8b5cf6', // Deep Purple
      },
    },
  },
  plugins: [],
}