/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      lg: "960px",
      // => @media (min-width: 960px) { ... }
      sm: "550px",
      // => @media(min-width: 960px) { ... }
    },

    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },

    keyframes: {
      slideLeft: {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(-100px)" },
      },
    },

    extend: {
      animation: {
        slideLeft:
          "slideLeft 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },
    },
  },
  plugins: [],
};
