/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4FD1C5',
          DEFAULT: '#38B2AC',
          dark: '#2C7A7B',
        },
        secondary: {
          light: '#f9fafb',
          DEFAULT: '#f3f4f6',
          dark: '#1f2937',
        },
        dark: {
          light: '#2C2C2C',
          DEFAULT: '#1A1A1A',
          dark: '#0D0D0D',
        },
        teal: {
          light: '#4FD1C5',
          DEFAULT: '#38B2AC',
          dark: '#2C7A7B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
