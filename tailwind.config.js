/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0a0a0f',
          surface: '#13131a',
          surface2: '#1c1c27',
          border: '#2a2a3a',
          accent: '#6366f1',
          accent2: '#8b5cf6',
          green: '#10b981',
          muted: '#9090a8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
