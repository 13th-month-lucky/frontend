/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
