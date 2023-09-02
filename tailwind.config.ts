import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
  plugins: [],
}
export default config
