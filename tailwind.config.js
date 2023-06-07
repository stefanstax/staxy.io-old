/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      gilroy: ["Staxy", "sans-serif"],
    },
    extend: {
      colors: {
        formula: "#C7F860",
        babyBlue: "#1f75f3",
        whiteSmoke: "#F4F6FC",
        white: "#fff",
        whiteShade: "#f9f9f9",
        purpyHover: "#6b20ce",

        matte: "#131616",
        graphit: "#303249",
        byzantine: "#4555b5",
        pond: "#317BAB",
        purpy: "#8B91DE",
        beige: "#FFEFE8",
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
