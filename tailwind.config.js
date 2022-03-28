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
        gray1: "#36393F",
        gray2: "#313339",
        gray3:"#202225",
        gray4:"#2F3136",
        graylight: "#9FA1A5",
      },
    },
  },
  plugins: [],
}
