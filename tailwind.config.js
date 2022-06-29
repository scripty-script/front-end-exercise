/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        '2xl': '2rem',
      },
    },
    fontFamily: {
      'sans': ['Outfit', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
