import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors from visual-identity.md
        coral: {
          DEFAULT: '#D97757',
          light: 'rgba(217, 119, 87, 0.1)',
        },
        cream: {
          DEFAULT: '#FAF9F6',
          panel: '#F0EFEB',
        },
        text: {
          primary: '#1A1A1A',
          secondary: '#6B6B6B',
          muted: '#9B9B9B',
        },
        border: {
          light: '#E5E4E0',
          medium: '#D1D0CC',
        },
      },
      fontFamily: {
        serif: ['Source Serif 4', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        'h1': '36px',
        'h2': '24px',
        'body': '17px',
        'small': '13px',
      },
      borderRadius: {
        'button': '8px',
        'card': '12px',
        'panel': '16px',
      },
      boxShadow: {
        'subtle': '0 4px 12px rgba(0, 0, 0, 0.08)',
      },
      transitionDuration: {
        'hover': '150ms',
      },
    },
  },
  plugins: [],
} satisfies Config
