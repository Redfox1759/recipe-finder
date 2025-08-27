import React, {useState} from 'react'

const Favorites = () => {

  let myData = localStorage.getItem('favoriteRecipes')
  myData = JSON.parse(myData)
  console.log(myData)

  const [favorites, setFavorites] = useState(myData || [])

  

  return (
    <div>
        <h2>Favorites page</h2>
    </div>
  )
}

export default Favorites
