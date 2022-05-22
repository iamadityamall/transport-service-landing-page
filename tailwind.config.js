module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs_1: "320px",
        xs_2: "375px",
        xs_3: "425px",
      },
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
      animation: {
        flow: "flow 10s linear infinite",
        paused: "paused",
      },

      keyframes: {
        flow: {
          "0%": { left: 0 },
          "100%": { left: -766 },
        },
      },
      transition: {
        alls: "all .2s ease-out",
      },
    },
  },
  plugins: [],
};
