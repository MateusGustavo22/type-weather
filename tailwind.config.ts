import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      screens: {
        mobile1: { max: '414px' },
        mobile2: { max: '532px' },
        tablet1: { max: '670px' },
        tablet2: { max: '1200px' },
        desktop1: { max: '1314px' },
        desktop2: { max: '1366px' },
      },
      colors: {
        blue_light: '#8FB2F5',
        base: {
          'gray-900': '#13131A',
          'gray-800': '#16161F',
          'gray-700': '#1C1C27',
          'gray-600': '#22222F',
          'gray-500': '#3B3B54',
          'gray-400': '#7F7F98',
          'gray-300': '#ABABC4',
          'gray-200': '#BFBFD4',
          'gray-100': '#FAFAFA',
        },
      },
      fontFamily: {
        nunito: 'var(--font-nunito)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
