/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#FAF5F3',
        blush: '#F7ECEA',
        'dusty-rose': '#C4787A',
        burgundy: '#8B4557',
        'warm-brown': '#3D2B2B',
        gold: '#C9953A',
        eucalyptus: '#8A9A7B',
        'warm-white': '#FFFDF9',
      },
    },
  },
  plugins: [],
}
