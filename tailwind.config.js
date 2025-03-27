/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class", // Enables dark mode
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            montserrat: ["Montserrat", "arial"],
        },
        extend: {},
    },
    plugins: [],
};
