/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        '95': '95%',
      },
      height: {
        'header': '54px',
      },
      boxShadow: {
        'shadowNav': ' 0px 4px 18px 0px rgba(0, 0, 0, 0.0784313725)',
      }
    },
  },
  plugins: [],
}

