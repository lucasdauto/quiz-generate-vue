/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/**/*.html",
    "./src/**/*.vue",
    "./src/**/*.js",
    "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "false",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
