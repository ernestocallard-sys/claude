/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAFAF7',
        brown: {
          dark: '#3D2B1F',
          DEFAULT: '#5C3D2E',
        },
        gold: '#C9953A',
        eucalyptus: '#6B9E78',
        coral: '#E9877E',
        rose: '#F5E6E8',
        beige: '#F7E8D0',
        'text-soft': '#6F6A64',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
