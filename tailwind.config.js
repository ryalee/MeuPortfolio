/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        BreeSerif: ['Bree Serif', 'sans-serif'],
        Code: ['Source Code Pro', 'sans serif'],
      },
    },
  },
  plugins: [],
}