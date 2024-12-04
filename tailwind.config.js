/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light: {
          text: '#180d06',
          background: '#F3F1ED',
          primary: '#42d7cd',
          secondary: '#bb5474',
          accent: '#4ea2a6',
        },
        dark: {
          text: '#f9eee7',
          background: '#0d0d0d',
          primary: '#28bdb3',
          secondary: '#ab4465',
          accent: '#59acb1',
        },
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Museo Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};