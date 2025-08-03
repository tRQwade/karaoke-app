/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "ping-once": "ping 0.8s ease-in-out 1",
      },
      extend: {
        fontFamily: {
          cinzel: ["Cinzel", "serif"],
        },
        colors: {
          diciccoRed: "#C00000",
          diciccoGreen: "#1D7D38",
        },
      },
    },
  },
  plugins: [],
};
