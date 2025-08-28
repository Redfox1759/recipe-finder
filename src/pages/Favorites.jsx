import React, {useState} from 'react'

const Favorites = () => {

  let myData = localStorage.getItem('favoriteRecipes')
  myData = JSON.parse(myData)
  // console.log(myData)

  const [favorites, setFavorites] = useState(myData || [])
  // console.log(favorites)

  const favoriteRecipes = favorites.map((item, index) => {   
    return (
      <div key={item.id} className="bg-gray-800 text-gray-100 rounded-3xl p-6 shadow-lg transition-transform transform hover:scale-105">
        <h3 className="text-xl font-semibold mb-2"> {item.title} </h3>
        <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-md mb-4" />
        <div className="text-sm space-y-1">
          <p> Ready in <span className="font-medium">{item.readyInMinutes}</span> minutes </p>
          <p> Servings: <span className="font-medium">{item.servings}</span> </p>
        </div>
      </div>
    )
  })

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
  )
}

export default Favorites
