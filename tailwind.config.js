/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/index.html",
    "./src/*.js",
    "./icons.js",
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

