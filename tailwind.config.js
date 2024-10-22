/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html' , './hello.html'],
  theme: {
    extend: {
      colors: {
        'primary': '#3238f2'
      },
      fontFamily:{
        'body': ['Inter', 'sans-serif'],
        'display':['Poppins', 'sans-serif ']
      }

    },
  },
  plugins: [],
}

