/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/Components/**/*.{js,ts,tsx}",
    "./src/Components/RecipeCard/RecipeCrad.jsx",
    "./src/Pages/**/*.{js,ts,tsx}",
    "./src/Pages/Home/Home.jsx",
    "./src/Pages/RecipesPage/RecipePage.jsx",
    "./src/Pages/DetailPage/DetailPage.jsx",
    "./src/**/*.{js,ts,tsx}",
    "./App.{js,ts,tsx}",
  ],

  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
