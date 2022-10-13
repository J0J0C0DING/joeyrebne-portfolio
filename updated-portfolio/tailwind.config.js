/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js, jsx, ts, tsx}'],
  theme: {
    colors: {
      black: '#0D0D0D',
      lightPurple: '#A497F6',
      darkPurple: '#2A08FF',
      lightWhite: '#DFEBF2',
    },
    extend: {
      fontFamily: {
        brand: "'transducer', sans-serif",
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
