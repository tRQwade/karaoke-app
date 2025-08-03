/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "ping-once": "ping 0.8s ease-in-out 1",
      },
    },
  },
  plugins: [],
};
