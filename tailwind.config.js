/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#f0f9f0',
          100: '#dcf1dc',
          200: '#b8e3b8',
          300: '#8fd08f',
          400: '#5cb85c',
          500: '#449d44',
          600: '#398439',
          700: '#2C5E1A',
          800: '#224115',
          900: '#193412',
        },
        brown: {
          50: '#f9f6f3',
          100: '#f3ede7',
          200: '#e7dbcf',
          300: '#d9c3ad',
          400: '#c4a383',
          500: '#b08763',
          600: '#96714f',
          700: '#8B4513',
          800: '#6b3e20',
          900: '#593419',
        },
        wheat: {
          50: '#fffef8',
          100: '#fffcf0',
          200: '#fff9e2',
          300: '#fff5d0',
          400: '#ffefb8',
          500: '#F5DEB3',
          600: '#ebc266',
          700: '#dea140',
          800: '#c17920',
          900: '#9f5a17',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
};