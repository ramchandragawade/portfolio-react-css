/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'site-purple': '#B415FF',
        'site-yellow': '#DF8908',
        'modal-bg': 'rgba(0, 0, 0, 0.9)'
      },
      backgroundImage: {
        'india-colors': 'linear-gradient(130deg, #FF671F 30%,#FFFFFF,#046A38)',
        'custom-gradient': 'linear-gradient(to right, #B415FF,#DF8908)',
        'custom-gradient-rev': 'linear-gradient(to right, #DF8908, #B415FF)',
        'custom-gradient-rev-light': 'linear-gradient(120deg, #DF8908 50%,#B415FF,#DF8908)',
      }
    },
  },
  plugins: [],
}

