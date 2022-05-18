module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.html', './src/**/*.tsx', './public/index.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'encode-sans': ['Encode Sans', 'sans-serif'],
    },
    extend: {
      minWidth: {
        'qualification-options': '6.875rem',
      },
      maxWidth: {
        'student-form-section': '48rem',
      },
      width: {
        147: '36.75rem',
      },
      colors: {
        primary: {
          500: '#37BBED',
        },
        error: {
          500: '#F4626B',
        },
        success: {
          500: '#1BBB1F',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
