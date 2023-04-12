/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          "buttons": "#AA4646",
          "main": "#4B3F36",
          "sage": "#C6C8BD",
        },
      },
    },
      plugins: [require("daisyui")],
  }