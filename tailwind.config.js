/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'dm-sans': ['"DM Sans"', 'sans-serif'],
        'birthstone': ['"Birthstone Bounce"', 'cursive'],
      },
    },
  },
  plugins: [],
}