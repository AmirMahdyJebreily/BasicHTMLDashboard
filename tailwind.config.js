/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html,js}",
    "./src/icons/*.js",
  ],
  theme: {

    extend: {
      colors: {
        primary: 'var(--clr-primary)',
        secondary: 'var(--clr-secondary)',
        background: 'var(--clr-background)',
      },
    },
  },
  plugins: [],
  darkMode: 'selector'
}

