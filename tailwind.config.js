module.exports = {
  content: ["dist/**/*.html", "src/**/*.njk"],
  theme: {
    extend: {
      

      backgroundColor: {
        lightGreen: '#65E4A3',
      },

      maxWidth: {
        '1/2': '50%',
        '1400':'1400px',
      },

      colors: {
        darkBlue: '#0A2640',
        lightGreen: '#65E4A3',
      }
    },
  },
  plugins: [],
};
