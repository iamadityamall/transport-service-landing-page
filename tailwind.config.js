module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        colorOne: "#F79044",
        colorTwo: "#1E1C55",
        colorThree: "#FFFFFF",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        logistics: "url('/public/images/complete-logistics.png')",
      },
    },
  },
  plugins: [],
};
