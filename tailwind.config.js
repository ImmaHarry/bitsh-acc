/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        roboto_slab: ['Roboto Slab', 'serif'],
        roboto_mono: ['Roboto Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}

