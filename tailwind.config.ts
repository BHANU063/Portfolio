import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef9ff',
          100: '#d7f0ff',
          200: '#aee1ff',
          300: '#7dd1ff',
          400: '#3fbaff',
          500: '#0ea5ff',
          600: '#0383db',
          700: '#0566ad',
          800: '#084f86',
          900: '#0a416e'
        }
      },
      boxShadow: {
        glow: '0 0 60px rgba(14,165,255,0.25)'
      },
      backgroundImage: {
        'grid': "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
        'hero-gradient': 'linear-gradient(135deg, #0ea5ff 0%, #7c3aed 100%)'
      }
    }
  },
  plugins: []
}
export default config
