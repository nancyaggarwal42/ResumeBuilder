// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['var(--font-roboto)', 'sans-serif'],
        opensans: ['var(--font-open-sans)', 'sans-serif'],
        lato: ['var(--font-lato)', 'sans-serif'],
        arial: ['Arial', 'sans-serif'],
        calibri: ['Calibri', 'sans-serif'],
        times: ['"Times New Roman"', 'serif'],
      },
    },
  },
  plugins: [],
};


