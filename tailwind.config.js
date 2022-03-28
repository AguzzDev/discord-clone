module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        discord: ["discord"],
        discordBold: ["discordBold"],
      },
      colors: {
        blue1: "#7289da",
        blue2: "#5865F2",
        bluedark: "#404EED",
        gray1: "#36393f",
        gray2: "#313339",
        gray3: "#202225",
        gray4: "#2F3136",
        gray5: "#4f545c",
        graylight: "#9FA1A5",
        graylight2: "#8e9297",
        black1:"#292b2f",
        green1: "#3BA55D",
      },
    },
  },
  plugins: [],
}
