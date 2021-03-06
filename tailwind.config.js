/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        texture: 'url(/src/assets/images/texture.jpg)',
      },
      fontFamily: {
        sans: 'Poppins, sans-serif',
      },
      colors: {
        red: {
          300: '#e50813',
        },
        gray: {
          300: '#6c757d',
        },
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
}
