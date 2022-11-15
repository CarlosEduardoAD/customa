/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      raleway: ["Red Hat Text", "sans-serif"],
    },
    extend: {
      backgroundImage : {
          "phone" : "url('./src/assets/phone.svg')",
          "email" : "url('./src/assets/at.svg')",
          "nome" : "url('./src/assets/typo.svg')",
          "cnpj" : "url('./src/assets/card-id.svg')",
          "rect" : "url('./src/assets/rect.svg')"
      }
    },
  },
  plugins: [
    // ...
    require("tailwind-scrollbar"),
  ],
};
