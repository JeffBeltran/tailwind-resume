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
        sans: ["Cabin", ...defaultTheme.fontFamily.sans],
        handwriting: ["Rock Salt", ...defaultTheme.fontFamily.serif],
        heading: ["Roboto Condensed", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
