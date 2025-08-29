🍳 Recipe Finder App

A responsive web application built with React and styled using Tailwind CSS. The app allows users to search for recipes by ingredients, save their favorites, and learn more about the app. It uses the Spoonacular API for recipe data.

✨ Features

🥕 Ingredient Search – Find recipes based on the ingredients you have at home.

❤️ Favorites Page – Save and manage your favorite recipes (persisted in local storage).

📖 About Page – Quick guide on how to use the app.

📱 Responsive Design – Optimized for both desktop and mobile devices.

🛠 Technology Stack

Frontend: React

Styling: Tailwind CSS

API: Spoonacular API

State Management: Local state 

Persistence: Browser Local Storage

🚀 Getting Started
1. Clone the repository
git clone https://github.com/Redfox1759/recipe-finder.git
cd recipe-finder

2. Install dependencies
npm install

3. Install Tailwind CSS

If Tailwind isn’t already installed, set it up with:

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


Update your tailwind.config.js with:

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}


Add the Tailwind directives to your src/index.css:

@tailwind base;
@tailwind components;
@tailwind utilities;

4. Run the app
npm run dev


The app will be available at http://localhost:5173/ (if you’re using Vite).

💡 Usage

Search Recipes: Enter one or more ingredients (e.g., chicken, rice, garlic) in the search bar.

Save Favorites: Click the ❤️ icon on recipe cards to add them to your favorites.

View Favorites: Open the "Favorites" page to see saved recipes.

Learn More: Visit the "About" page for a quick guide.

🌟 Demo 
👉 https://recipe-finder-one-dusky.vercel.app/
