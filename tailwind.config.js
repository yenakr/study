/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          50: '#FAF9F5',
          100: '#F4F2EB',
          200: '#EAE6DB',
        },
        ink: {
          900: '#18181B',
          800: '#27272A',
          700: '#3F3F46',
          500: '#71717A',
          400: '#A1A1AA',
        },
        accent: {
          DEFAULT: '#0F2942', // Single editorial deep navy
          dark: '#0A1A2B',
          light: '#1E3E62',
        },
        crimson: {
          DEFAULT: '#881337', // Restricted alert point color
          light: '#FFE4E6',
        }
      },
      fontFamily: {
        sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['"Noto Serif KR"', 'Georgia', 'serif'],
      },
      borderRadius: {
        sm: '2px',
        DEFAULT: '4px',
        md: '4px',
        lg: '4px',
        xl: '4px',
        '2xl': '4px',
      }
    },
  },
  plugins: [],
}
