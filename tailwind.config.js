/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
        'boost-bg-mobile': "url('/src/assets/images/bg-boost-mobile.svg')"
      }
    },
  },
  plugins: [],
}

