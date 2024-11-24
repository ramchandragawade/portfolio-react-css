/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'india-colors': 'linear-gradient(130deg, #FF671F 30%,#FFFFFF,#046A38)',
        'custom-gradient': 'linear-gradient(to right, #B415FF,#DF8908)',
        'custom-gradient-rev': 'linear-gradient(to right, #DF8908, #B415FF)',
      }
    },
  },
  plugins: [],
}

