/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D2691E',
          dark: '#8B4513',
          light: '#CD853F',
        },
        neutral: {
          dark: '#2F2F2F',
          light: '#F5F5DC',
        },
        accent: '#CD853F',
        cta: '#228B22',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
