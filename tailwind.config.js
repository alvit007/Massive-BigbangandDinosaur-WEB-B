/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          primary: '#1F3364', // Ganti dengan warna primer yang diinginkan
          secondary: '#F8F8FF',
          tertiary: '#EE786C',
          background: '#F3F3F3',
        textsm: '#B5B5B5',
        grey: '#E0E0E0',
        merah: '#BF0404',
          
        },
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
        },
    },
  },
  plugins: [],
}