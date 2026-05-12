/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        night: '#071426',
        navy: '#0B1B33',
        'navy-mid': '#0E2040',
        gold: '#C9953A',
        'gold-light': '#E4B75F',
        'gold-pale': '#F0D49A',
        cream: '#FFF8EC',
        moon: '#FAF7F0',
        'gray-blue': '#7C8DA5',
        beige: '#F3E7D2',
        'beige-dark': '#E8D4B8',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'night-gradient': 'linear-gradient(160deg, #071426 0%, #0B1B33 50%, #0E2040 100%)',
        'gold-gradient': 'linear-gradient(135deg, #C9953A 0%, #E4B75F 100%)',
        'cream-gradient': 'linear-gradient(180deg, #FFF8EC 0%, #F3E7D2 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 30px rgba(201,149,58,0.15)',
        'gold-strong': '0 0 40px rgba(201,149,58,0.25)',
        card: '0 4px 24px rgba(7,20,38,0.12)',
        'card-dark': '0 8px 40px rgba(7,20,38,0.35)',
      },
    },
  },
  plugins: [],
}
