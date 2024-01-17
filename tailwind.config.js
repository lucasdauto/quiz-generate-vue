/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/**/*.html',
    './src/**/*.vue',
    './src/**/*.js',
  ],
  darkMode: 'false',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}

