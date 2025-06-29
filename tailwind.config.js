/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lavender-light': '#e9d8fb',
        'pink-vibrant': '#ed5073',
        'magenta-bold': '#b434b0',
        'violet-rich': '#b032b4',
        'purple-deep': '#7e12f0',
      },
      fontFamily: {
        'display': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s infinite linear',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      },
      boxShadow: {
        'glow': '0 0 20px rgba(126, 18, 240, 0.3)',
        'card': '0 4px 12px rgba(126, 18, 240, 0.1)',
        'card-hover': '0 8px 25px rgba(126, 18, 240, 0.15)',
      }
    },
  },
  plugins: [],
}