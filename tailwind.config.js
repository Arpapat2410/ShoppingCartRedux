/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["luxury"],
  },
  plugins: [require("daisyui")],
  
  fontFamily: {
    'poppins': ['Poppins', 'sans-serif'],
    'Prompt' : ['Prompt', 'sans-serif' ]
  },
}
