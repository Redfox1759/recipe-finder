import React, {useState, useEffect} from 'react'

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  
  useEffect(() => {
    let myData = localStorage.getItem('favoriteRecipes');
    const storedFavorites = myData ? JSON.parse(myData) : [];
    setFavorites(storedFavorites);
  }, []);

  const handleRemoveFavorite = (idToRemove) => {
    
    const updatedFavorites = favorites.filter(item => item.id !== idToRemove);
    
    
    setFavorites(updatedFavorites);
    localStorage.setItem('favoriteRecipes', JSON.stringify(updatedFavorites));
  };

  const favoriteRecipes = favorites.map((item) => {
    return (
      <div key={item.id} className="bg-gray-800 text-gray-100 rounded-3xl p-6 shadow-lg transition-transform transform hover:scale-105 relative">
        <button 
          onClick={() => handleRemoveFavorite(item.id)}
          className="absolute top-4 right-4 text-red-400 hover:text-red-600 font-bold"
        >
          Remove
        </button>
        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
        <p className="mb-4">**Instructions:** {item.instructions}</p>
      </div>
    );
  });

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">My Favorite Recipes</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {favorites.length > 0 ? (
          favoriteRecipes
        ) : (
          <p>You haven't added any favorite recipes yet.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
