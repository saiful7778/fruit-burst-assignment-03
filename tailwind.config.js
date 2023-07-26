/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1496px",
      },
    },
    extend: {
      colors: {
        "clr-pri": "#F85559",
        "dark-01": "#121212",
        "dark-02": "#12121299",
        "dark-03": "#12121210",
      },
    },
    fontFamily: {
      loto: ["Lato", "sans-serif"],
    },
  },
  plugins: [],
};
