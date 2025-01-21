/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF4500',
        'primary-dark': '#CC3700',
      },
      fontFamily: {
        sans: ['var(--font-sf-pro-display)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}