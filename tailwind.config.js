/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'chatbot-blink': {
          '0%, 100%': { opacity: '0' },
          '50%':       { opacity: '1' },
        },
        'fade-in': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        'chatbot-blink': 'chatbot-blink 1.2s infinite',
        'fade-in': 'fade-in 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}

