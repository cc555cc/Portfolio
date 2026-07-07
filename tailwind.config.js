/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        // From Uiverse.io by H_K_MENON
        typing: {
          from: { width: '0' },
          to: { width: 'calc(17ch + 5.1em)' },
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
        typing: 'typing 3s steps(17, end), blink-caret 0.5s step-end infinite alternate',
        'chatbot-blink': 'chatbot-blink 1.2s infinite',
      },
    },
  },
  plugins: [],
}

