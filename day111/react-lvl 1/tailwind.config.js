/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: "1rem",
      container: {
        center:true,
        "2xl" : "1440px"
      }
    },
  },
  plugins: [],
}