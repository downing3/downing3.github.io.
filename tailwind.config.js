/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          "buttons": "#AA4646",
          "main": "#4B3F36",
          "sage": "#C6C8BD",
          "red": "#FF0000",
          "lightBlue": "#d1eaf0",
        },
      },
    },
      plugins: [require("daisyui")],
  }