module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    fontSize: {
      'extra-large': '2.0rem',
      'medium': '1.5rem',
      'normal': '1.0rem',
    },

    extend: {
      // Add any custom theme configuration here
      backgroundImage: {
        glass: 'rgba(0, 0, 255, 0.3)',
      },

      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },

      

    },
  },
  variants: {},
  plugins: [],
};
