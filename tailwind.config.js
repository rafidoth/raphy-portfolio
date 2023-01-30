/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    colors: {
      'dark' : '#18181E', 
      'white': '#FFFFFF',
      'orange': '#E46A48',
      'cyan': '#52E5FE',
    },
    fontFamily: {
      'valofont': ['ValoFont', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
