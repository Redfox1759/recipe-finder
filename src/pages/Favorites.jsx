import React, {useState, useEffect} from 'react'

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage when the component mounts
  useEffect(() => {
    let myData = localStorage.getItem('favoriteRecipes');
    const storedFavorites = myData ? JSON.parse(myData) : [];
    setFavorites(storedFavorites);
  }, []);

  const handleRemoveFavorite = (idToRemove) => {
    // Filter out the recipe with the matching ID
    const updatedFavorites = favorites.filter(item => item.id !== idToRemove);
    
    // Update both the state and localStorage
    setFavorites(updatedFavorites);
    localStorage.setItem('favoriteRecipes', JSON.stringify(updatedFavorites));
  };

  const favoriteRecipes = favorites.map((item) => {
    return (
      <div key={item.id} className="bg-gray-800 text-gray-100 rounded-3xl p-6 shadow-lg transition-transform transform hover:scale-105 relative">
        <button 
          onClick={() => handleRemoveFavorite(item.id)}
          className="absolute top-2 right-2 text-white bg-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl leading-none hover:bg-red-700 transition-colors"
          aria-label="Remove from favorites"
        >
          &times;
        </button>
        <h3 className="text-xl font-semibold mb-2"> {item.title} </h3>
        <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-md mb-4" />
        <div className="text-sm space-y-1">
          <p> Ready in <span className="font-medium">{item.readyInMinutes}</span> minutes </p>
          <p> Servings: <span className="font-medium">{item.servings}</span> </p>
           <span className="font-medium">{item.instructions}</span>
        </div>
      </div>
    )
  });

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl sm:text-4xl text-center font-bold text-gray-800 dark:text-gray-100 mb-8">
        Your Favorite Recipes
      </h1>
      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favoriteRecipes}
        </div>
      ) : (
        <div className="text-center text-gray-600 dark:text-gray-400 mt-8">
          <p>You haven't saved any favorite recipes yet.</p>
        </div>
      )}
    </div>
  );
};

export default Favorites;

