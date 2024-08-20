/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'soft-blue': '#8BACD9',
        'cyan': '#00FFF8',
        'very-dark-blue-main': '#0D192C',
        'very-dark-blue-card': '#15263F',
        'very-dark-blue': '#2E405A',
        'white': '#FFFFFF',
      },
      spacing: {
        596: '37.25rem',
        543: '33.9375rem',
        350: '21.875rem',
        327: '20.4375rem',
        302: '18.875rem',
        278: '17.375rem',
        33: '2.0625rem',
      },
      fontSize: {
        22: '1.375rem',
        18: '1.125rem',
        16: '1rem',
        15: '0.9375rem',
      },
      lineHeight: {
        28: '1.75rem',
        26: '1.625rem',
        19: '1.1875rem',
        20: '1.25rem',
      },
    },
  },
  plugins: [],
}

