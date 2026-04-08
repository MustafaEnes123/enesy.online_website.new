/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./hackclub.html",
    "./delete_account.html",
    "./privacy_policy.html",
    "./institutions.html",
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
        'charcoal': '#050e09',
        'mocha': '#0b2018',
        'sand': '#86efac',
        'gold': '#00c875',
        'gold-light': '#ccfce7',
        'glass-border': 'rgba(0, 200, 117, 0.10)',
        'glass-surface': 'rgba(0, 200, 117, 0.04)',
        'glass-surface-hover': 'rgba(0, 200, 117, 0.08)',
        'hackclub': {
          'charcoal': '#050e09',
          'mocha': '#0b2018',
          'crimson': '#ef4444',
          'glass-border': 'rgba(239, 68, 68, 0.2)',
          'glass-surface': 'rgba(239, 68, 68, 0.03)',
        },
        'institutions': {
          'charcoal': '#050e09',
          'mocha': '#0b2018',
          'purple': '#8b5cf6',
          'glass-border': 'rgba(139, 92, 246, 0.2)',
          'glass-surface': 'rgba(139, 92, 246, 0.03)',
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
