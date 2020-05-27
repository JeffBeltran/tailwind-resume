const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    content: ["./components/**/*.js", "./pages/**/*.js"],
    options: {
      defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || [],
    },
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Serif", ...defaultTheme.fontFamily.sans],
        handwriting: ["Rock Salt", ...defaultTheme.fontFamily.serif],
        heading: ["Oxygen", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    padding: ["responsive", "first"],
    margin: ["responsive", "first"],
  },
  plugins: [require("@tailwindcss/ui")],
};
