/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'shadow': "url('/src/assets/shadow.png')"
      }
    },
  },
  plugins: [],
}
