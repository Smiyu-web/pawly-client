module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {},
      colors: {},
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      height: {},
      width: {
        "70vw": "70vw",
        "80vw": "80vw",
        "90vw": "90vw",
      },
    },
    screens: {
      all: "0px",
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
