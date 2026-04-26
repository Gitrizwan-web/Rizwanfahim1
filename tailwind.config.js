/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      animation: {
        wordSlider: 'wordSlider 21s infinite cubic-bezier(0.9, 0.01, 0.3, 0.99)',
      },
      keyframes: {
        wordSlider: {
          '0%': { transform: 'translateY(0.5%)' },
          '12.5%': { transform: 'translateY(-12.5%)' },
          '25%': { transform: 'translateY(-25%)' },
          '37.5%': { transform: 'translateY(-37.5%)' },
          '50%': { transform: 'translateY(-50%)' },
          '62.5%': { transform: 'translateY(-62.5%)' },
          '75%': { transform: 'translateY(-75%)' },
          '87.5%': { transform: 'translateY(-87.5%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
    },
  },
  plugins: [],
}
