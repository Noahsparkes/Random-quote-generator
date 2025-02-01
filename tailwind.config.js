/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
       colors:{
         light_cyan: "#CEE3E9",
         neon_green: "#52FFA8",
         grey_blue: "#4E5D73",
         dark_grey:"#323A49",
         dark_blue: "#1F2632",
         turquoise: "#1ABC9C",
       }
    },
  },
  plugins: [],
}


