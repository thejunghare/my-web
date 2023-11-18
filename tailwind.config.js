/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*",
    'node_modules/preline/dist/*.js',
    'components/*'
  ],

  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('preline/plugin'),
  ],
}

