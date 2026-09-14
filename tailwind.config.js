/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0A1128',
          800: '#101F42',
          700: '#1C2D5A',
          600: '#253C78',
        },
        brand: {
          blue: '#1E64D4',
          lightblue: '#4B8BF5',
          sky: '#EBF3FE',
          red: '#DC2626',
          darkred: '#991B1B',
          softred: '#FEE2E2',
        }
      },
      fontFamily: {
        sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
