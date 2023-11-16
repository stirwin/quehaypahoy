/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  
  ],
  theme: {
    extend: {
      backgroundImage: {
        
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
    },
      colors:{
        azul:{
         200:'#DBE2EF',
         100:'#EDEDF5'
        },  
        texto:{
          900:'#222831',
        },
        morado:{
          200:'#D1A5D8',
          500:'#A5009C'
        },
        blancoraro:{
          500:'#FCFCFC'
        }
       },

       borderRadius: {
        muic: '8px 8px 80px 8px',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}
