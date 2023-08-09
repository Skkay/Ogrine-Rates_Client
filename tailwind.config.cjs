/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'shadow': "url('/src/assets/shadow.png')"
      },
      colors: {
        blurple: {
             50: '#E8E9FD',
            100: '#CFD2FB',
            200: '#AFB5F9',
            300: '#8C95F6',
            400: '#5865F2',
            500: '#4E5AD7',
            600: '#424CB5',
            700: '#373F97',
            800: '#2F3580',
            900: '#1D214F',
        },
      },
    },
  },
  plugins: [],
}
