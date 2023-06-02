/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      gilroy: ["Gilroy", "sans-serif"],
    },
    extend: {
      colors: {
        formula: "#C7F860",
        batman: "#131616",
        byzantine: "#3457d5",
        babyBlue: "#1f75f3",
        whiteSmoke: "#F4F6FC",
        white: "#fff",
        whiteShade: "#f9f9f9",
        purpy: "#7D2AE8",
        purpyHover: "#6b20ce",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
