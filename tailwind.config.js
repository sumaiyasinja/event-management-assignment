/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-blue': '#000080', 
        'lavender': '#D6A2E8',
        'gold': '#FFD700',
        'light-gray': '#F0F0F0',
        'dark-gray': '#333333',
        'light-navy-blue': '#3A5F80',
      },
    },
  },
  plugins: [require("daisyui")],
}

