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
    extend: {
      fontFamily: {
        'valofont': ['ValoFont', 'sans-serif'],
        'jet' : ['FJETT','sans-serif'],
        'ubuntu' : ['Ubuntu', 'sans-serif'],
        'monoubuntu' : ['Ubuntu Mono', 'monospace'],
      },
      colors: {
        'dark' : '#18181E', 
        'white': '#FFFFFF',
        'orange': '#E46A48',
        'cyan': '#52E5FE',
        'color': '#691C17',
        'red' :'#FF0303',
        'blue' : '#240DEF'
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
      },
      keyframes: {
       
      }
    },
  },
  plugins: [],
}
