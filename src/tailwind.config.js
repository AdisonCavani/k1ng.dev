/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './data/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      typography: theme => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.600')
              },
              code: { color: theme('colors.blue.400') }
            }
          }
        }
      })
    }
  },
  plugins: [
    require('@headlessui/tailwindcss'),
    require('@tailwindcss/typography')
  ]
}
