/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "1/2": "50%",
        "1/9": "6%",
        "11/11": "12%",
        49: "14rem",
        70: "70%",
        80: "80%",
        60: "60%",
        50: "50%",
      },
      colors: {
        "side-black": "rgb(32,43,59)",
        "main-black": "rgb(11,19,30)",
      },
      margin: {
        "1/9": "10%",
      },
    },
  },
  plugins: [],
};
