module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.html', './src/**/*.tsx', './public/index.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        'qualification-options': '6.875rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
