const colors = require("tailwindcss/colors");

module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                slate: colors.blueGray,
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
