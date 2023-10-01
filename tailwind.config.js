/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'lg': '768px'
      // => @media (min-width: 768px)
    },
    fontFamily: {
      'poppins': ['poppins', 'system-ui'],
    },
    container: {
      padding: {
        DEFAULT: '1rem',
      },
    },
    extend: {
      backgroundImage: {
        'form-bg-mobile': "url('/src/assets/images/bg-shorten-mobile.svg')",
        'boost-bg-mobile': "url('/src/assets/images/bg-boost-mobile.svg')",
        'form-bg-desktop': "url('/src/assets/images/bg-boost-desktop.svg')",
        'boost-bg-desktop': "url('/src/assets/images/bg-boost-desktop.svg')",
      }
    },
  },
  plugins: [],
}

