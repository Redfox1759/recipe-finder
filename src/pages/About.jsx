import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans p-4">
      <div className="max-w-3xl mx-auto py-8">
        <article className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl shadow-lg">
          <h1 className="text-3xl sm:text-4xl text-center font-bold text-gray-800 dark:text-gray-100 mb-4">
            About the Recipe Finder
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
            This app helps you find delicious recipes based on the ingredients you already have!
          </p>
          
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-2xl shadow-inner">
              <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                Step 1: Add Your Ingredients
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Start by typing the name of an ingredient you have into the text box. Click the <span className="font-bold">"Add"</span> button to add it to your list. You can add as many ingredients as you like! If you make a mistake, just click the small <span className="font-bold">"&times;"</span> button next to an ingredient to remove it from your list.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-2xl shadow-inner">
              <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                Step 2: Find Recipes
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Once you have added all your ingredients, click the big <span className="font-bold">"Find Recipes"</span> button. The app will then use your list of ingredients to search for potential recipes that you can make. It will display a list of recipes that match your ingredients.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-2xl shadow-inner">
              <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                Step 3: View a Recipe
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                From the list of recipe results, click on the <span className="font-bold">"View Recipe"</span> button for any recipe that looks interesting. This will take you to a new page that shows the full details of that recipe, including the ingredients and cooking instructions.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center text-gray-500 dark:text-gray-400">
            <p>Happy cooking!</p>
          </div>
        </article>
      </div>
    </div>
  )
}

export default About
