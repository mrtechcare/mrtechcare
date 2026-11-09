/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          950: '#04070D',
          900: '#080E19', // Primary midnight navy requested
          850: '#0C1525',
          800: '#111D33',
          700: '#1A2A47',
          600: '#263B60',
        },
        electric: {
          400: '#4096FF',
          500: '#1677FF', // Primary electric blue requested
          600: '#0958D9',
          700: '#003EB3',
          glow: '#00F0FF',
        },
        surface: {
          dark: 'rgba(12, 21, 37, 0.75)',
          card: 'rgba(17, 29, 51, 0.65)',
          hover: 'rgba(26, 42, 71, 0.85)',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-active': 'rgba(22, 119, 255, 0.4)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(22, 119, 255, 0.25)',
        'glow-md': '0 0 30px rgba(22, 119, 255, 0.35)',
        'glow-lg': '0 0 45px rgba(22, 119, 255, 0.45)',
        'card-elevated': '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 1px 1px rgba(255, 255, 255, 0.05)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
