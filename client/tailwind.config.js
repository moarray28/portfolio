 /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], 
  darkMode: 'class', 
  theme: {
    extend: {
     
      backgroundImage: {
        'light-gradient': 'linear-gradient(125deg,   #e9d8df, #c8a1ab,#d08199)',
        'dark-gradient': ' linear-gradient(125deg, #c01048, #4C0519,#1a0209)',
      },
      colors: {
        'light-text': '#000000', // Black for light theme
        'dark-text': '#ffffff',  // White for dark theme
      },
       keyframes: {
      bubble: {
        '0%': { transform: 'scale(0)', opacity: '0' },
        '80%': { transform: 'scale(1.2)', opacity: '1' },
        '100%': { transform: 'scale(1)', opacity: '1' },
      },
    },
    animation: {
      'bubble-pop': 'bubble 1s ease-in-out forwards',
    },


  },
  },
  plugins: [],
}