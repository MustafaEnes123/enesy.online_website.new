/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./hackclub.html",
    "./bookmarking.html",
    "./database.html",
    "./delete_account.html",
    "./gallery.html",
    "./privacy_policy.html",
    "./App.tsx",
    "./index.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        'charcoal': '#1a1614',
        'mocha': '#2A2422',
        'sand': '#E5D4B8',
        'gold': '#D4AF37',
        'gold-light': '#F4E5BC',
        'glass-border': 'rgba(255, 255, 255, 0.08)',
        'glass-surface': 'rgba(255, 255, 255, 0.03)',
        'glass-surface-hover': 'rgba(255, 255, 255, 0.06)',
        'hackclub': {
          'charcoal': '#0a0807',
          'mocha': '#1a0f0e',
          'crimson': '#ef4444',
          'glass-border': 'rgba(239, 68, 68, 0.2)',
          'glass-surface': 'rgba(239, 68, 68, 0.03)',
        }
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'blob': 'blob 10s infinite',
        'scale-in': 'scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'glow': 'glow 4s infinite alternate',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95) translateY(10px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        glow: {
          '0%': { opacity: '0.3' },
          '100%': { opacity: '0.6' }
        }
      }
    },
  },
  plugins: [],
}
