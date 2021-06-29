module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
      Exo_2: ["Exo 2", "sans-serif"],
    },

    extend: {
      colors: {
        blue: { dark: "rgb(20 25 58)" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
