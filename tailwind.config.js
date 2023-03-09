/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        'text-40':' font-size:40px;',
        'text-error':'color: rgba(255, 255, 255, 0.6);'
      }
    },
  },
  plugins: [],
}
