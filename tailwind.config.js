module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'primary-lighter': 'hsl(0, 0%, 100%)',
        'primary-light': 'hsla(0, 0%, 100%, 0.75)',
        'primary-base': 'hsla(0, 0%, 100%, 0.6)',
        'primary-dark': 'hsl(244, 38%, 16%)',
        'primary-darker': 'hsl(233, 47%, 7%)',

        'secondary-light': 'hsl(277, 64%, 30%)',
        'secondary-base': 'hsl(277, 64%, 61%)',
      },

      fontFamily: {
        primary: ["'Inter'", 'sans-serif'],
        secondary: ["'Lexend Deca'", 'sans-serif'],
      },
    },
  },
  plugins: [],
};
