/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                petsup_purple: "#7E2C61",
                petsup_orange: "#F49C63",
                petsup_lighter_gray: "#F8F8F8"
            }
        }
    },
    plugins: [],
}