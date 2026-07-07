/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        typing: {
          from: { width: '0' },
          to: { width: '13.2ch' },
        },
        'blink-caret': {
          '50%': { borderColor: 'transparent' },
        },
        'chatbot-blink': {
          '0%, 100%': { opacity: '0' },
          '50%':       { opacity: '1' },
        },
      },
      animation: {
        typing: 'typing 5s steps(13, end) forwards, blink-caret 0.5s step-end infinite alternate',
        'chatbot-blink': 'chatbot-blink 1.2s infinite',
      },
    },
  },
  plugins: [],
}

