/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#0A0119",
        "blue-btn":"#3378FF",
        "b_green":"#75DB8B",
        "b_violet":"#6B71FF",
        "b_violet2":"#563AFF",
        "b_pink":"#B844FF",
        "b_orange":"#FF3636",
      }
    },
  },
  plugins: [],
}

