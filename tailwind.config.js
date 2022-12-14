/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        'primary': '#4fe222',
        'seconday': '#707070'
      }
    },

  },
  
  variants:{
    extends:{
      display:['group-hover']
    }
  },
  plugins: [require('@tailwindcss/forms')],
}
