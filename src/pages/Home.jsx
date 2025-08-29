import { useState, useCallback, useEffect } from 'react';

export default function App() {
  const [ingredients, setIngredients] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [saveMessage, setSaveMessage] = useState('');

  const SPOONACULAR_API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;




  useEffect(() => {
    if (saveMessage) {
      const timer = setTimeout(() => {
        setSaveMessage('');
      }, 1000); //
      return () => clearTimeout(timer);
    }
  }, [saveMessage]);

  const handleAddIngredient = (e) => {
    e.preventDefault();
    if (searchInput.trim() !== "") {
      setIngredients(prevIngredients => [...prevIngredients, searchInput.trim()]);
      setSearchInput("");
      setRecipes([]);
      setSelectedRecipe(null);
      setSaveMessage('');
    }
  };
  
  const handleRemoveIngredient = (ingredientToRemove) => {
    setIngredients(prevIngredients => prevIngredients.filter(
      ingredient => ingredient !== ingredientToRemove
    ));
    setRecipes([]);
    setSelectedRecipe(null);
    setSaveMessage('');
  };

  const searchRecipes = useCallback(async () => {
    if (ingredients.length === 0) {
      setRecipes([]);
      return;
    }
    setLoading(true);
    setError(null);
    setSelectedRecipe(null);
    setSaveMessage('');

    try {
      const ingredientString = ingredients.join(", ");
      const res = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${encodeURIComponent(ingredientString)}&number=10&apiKey=${SPOONACULAR_API_KEY}`);
      
      if (!res.ok) {
        throw new Error('Failed to fetch recipes from Spoonacular API. The API key might be invalid.');
      }
      
      const data = await res.json();
      setRecipes(data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch recipes. Please ensure your Spoonacular API key is valid and try again.");
    } finally {
      setLoading(false);
    }
  }, [ingredients, SPOONACULAR_API_KEY]);

  const getRecipeDetails = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    setSaveMessage('');
    try {
      const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${SPOONACULAR_API_KEY}`);
      if (!res.ok) {
        throw new Error('Failed to fetch recipe details.');
      }
      const data = await res.json();
      setSelectedRecipe(data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch recipe details.");
    } finally {
      setLoading(false);
    }
  }, [SPOONACULAR_API_KEY]);

  const handleSaveFavorite = () => {
    if (selectedRecipe) {
      try {
        const existingFavorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
        const isAlreadySaved = existingFavorites.some(recipe => recipe.id === selectedRecipe.id);
        
        if (isAlreadySaved) {
          setSaveMessage('This recipe is already in your favorites!');
        } else {
          const newFavorites = [...existingFavorites, selectedRecipe];
          localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
          setSaveMessage('Recipe added to favorites!');
        }
      } catch (e) {
        console.error("Failed to save to local storage:", e);
        setSaveMessage('Failed to save the recipe. Please try again.');
      }
    }
  };

  const renderIngredients = (recipeData) => {
    if (!recipeData.extendedIngredients) return null;
    return (
      <ul className="list-disc list-inside space-y-2">
        {recipeData.extendedIngredients.map((item) => (
          <li key={item.id}>
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              {item.original}
            </span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <form onSubmit={handleAddIngredient} className= "dark:bg-gray-800 p-6 sm:p-8 shadow-lg transition-all duration-300 rounded-3xl mb-8">
          <h1 className="text-3xl sm:text-4xl text-center font-bold text-gray-800 dark:text-gray-100 mb-2">Find Your Perfect Recipe</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
            Enter ingredients you have on hand and click "Add".
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <input
              type="text"
              placeholder="What ingredients do you have?"
              aria-label="Add ingredient"
              name="ingredient"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="flex-grow py-3 px-5 rounded-full border-2 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button type="submit" className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors">
              Add
            </button>
          </div>
        </form>

        {ingredients.length > 0 && (
          <section className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Ingredients on hand:</h2>
            <ul className="flex flex-wrap gap-2 mb-6">
              {ingredients.map((ingredient, index) => (
                <li 
                  key={index} 
                  className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-full flex items-center gap-2 text-gray-700 dark:text-gray-300"
                >
                  {ingredient}
                  <button 
                    onClick={() => handleRemoveIngredient(ingredient)}
                    className="text-red-500 hover:text-red-700"
                    aria-label={`Remove ${ingredient}`}
                  >
                    &times;
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex justify-center">
              <button 
                onClick={searchRecipes}
                className="px-8 py-3 bg-green-600 text-white rounded-full font-bold hover:bg-green-700 transition-colors"
              >
                Find Recipes
              </button>
            </div>
          </section>
        )}
        
        <section>
          {loading && (
            <div className="flex justify-center items-center h-48">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
            </div>
          )}

          {error && (
            <div className="bg-red-100 text-red-700 p-4 rounded-lg text-center mb-8">
              <p>{error}</p>
            </div>
          )}

          {saveMessage && (
            <div className="bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-200 p-4 rounded-lg text-center mb-8">
              <p>{saveMessage}</p>
            </div>
          )}

          {!loading && !error && recipes.length > 0 && !selectedRecipe && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {recipes.map(recipe => (
                <article key={recipe.id} className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg transform transition-all duration-300 hover:scale-[1.02]">
                  <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-100">{recipe.title}</h3>
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <button
                    onClick={() => getRecipeDetails(recipe.id)}
                    className="w-full px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
                  >
                    View Recipe
                  </button>
                </article>
              ))}
            </div>
          )}

          {!loading && !error && selectedRecipe && (
            <article className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl shadow-lg">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
                <button onClick={() => setSelectedRecipe(null)} className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                  &larr; Back to Results
                </button>
                <button 
                  onClick={handleSaveFavorite} 
                  className="px-4 py-2 bg-pink-500 text-white rounded-full font-semibold hover:bg-pink-600 transition-colors w-full sm:w-auto text-center"
                >
                  Add to Favorites
                </button>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">{selectedRecipe.title}</h2>
              <img
                src={selectedRecipe.image}
                alt={selectedRecipe.title}
                className="w-full h-auto rounded-2xl mb-6 shadow-md"
              />

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-100">Ingredients</h3>
                  {renderIngredients(selectedRecipe)}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-100">Instructions</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: selectedRecipe.instructions }}></p>
                </div>
              </div>
            </article>
          )}

          {!loading && !error && ingredients.length > 0 && recipes.length === 0 && !selectedRecipe && (
            <div className="text-center text-lg text-gray-500 mt-8">
              No recipes found with these ingredients.
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
