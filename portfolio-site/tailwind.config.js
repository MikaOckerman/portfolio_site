/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', // *** Check this
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Roboto', 'sans-serif'],
        secondary: ['Libre Baskerville', 'serif'],
        accent: ['My Soul', 'cursive'],
        header: ['Rye', 'serif'],
      },
      colors: {
        primary: '#1B2432', // Dark gray for primary elements
        secondary: '#394F49', // Lighter gray for secondary elements
        accent_green: '#65743A',
        accent_gold: '#b09537',
        accent_orange: '#CC5803',
        graph_blue: '#1765FF',
        graph_green: '#00B92F',
        background: '#E8E8E8', // Light gray for backgrounds
        highlight: '#E53E3E',
        accent: {
          green: '#65743A',
          gold: '#b09537',
          orange: '#CC5803',
        },
        graph: {
          blue: '#1765FF',
          green: '#00B92F',
        },
      },
    },
  },
  plugins: [],
}

