/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "soft-blue": "hsl(231, 69%, 60%)",
        "soft-red": "hsl(0, 94%, 66%)",
        "grayish-blue": "hsl(229, 8%, 60%)",
        "light-grayish-blue": "hsla(229, 8%, 60%,.1)",
        "very-dark-blue": "hsl(229, 31%, 21%)",
      },
    },
  },
  plugins: [],
};
