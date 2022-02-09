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
        skeletonScreen: (theme) => ({
            DEFAULT: {
                baseColor: theme("colors.gray.200"),
                movingColor:
                    "linear-gradient(to right, transparent 0%, " +
                    theme("colors.gray.100") +
                    " 50%, transparent 100%)",
                duration: "1.2s",
                timing: "ease",
            },
            dark: {
                baseColor: theme("colors.gray.300"),
                movingColor:
                    "linear-gradient(to right, transparent 0%, " +
                    theme("colors.gray.200") +
                    " 50%, transparent 100%)",
                duration: "1.2s",
                timing: "ease",
            },
        }),
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@gradin/tailwindcss-skeleton-screen"),
        require("@tailwindcss/typography"),
    ],
};
