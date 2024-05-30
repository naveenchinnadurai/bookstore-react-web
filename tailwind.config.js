/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff6347',
        secondary: '#4a90e2',
        tertiary: '#8e44ad',
        background:'#05000a'
      },
      screens: {
        'sm': '490px'
      },
    },
  },
  plugins: [],
}