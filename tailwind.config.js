const defaultTheme = require("tailwindcss/defaultTheme");
const { sans } = defaultTheme.fontFamily;
const colors = require("tailwindcss/colors");

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                gray: colors.stone,
            },
            fontFamily: {
                sans: ['"Catamaran"', ...sans],
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
    ],
};
