/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#003366',
        accent: '#F7931E',
        light: '#4FAAFF',
        background: '#F2F2F2',
      },
    },
  },
  plugins: [],
};
