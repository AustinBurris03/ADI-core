/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./apps/ADI-SUIT/src/**/*.{html,ts}",],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-primeui')],
}

