/* eslint-env node */

/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
    content: ["./scr/**/*.{vue,js}"],
    theme: {
        extend: {colors},
    },
    plugins: [],
};