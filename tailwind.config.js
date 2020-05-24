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
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        handwriting: ["Rock Salt", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
