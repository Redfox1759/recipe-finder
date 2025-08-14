import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="logo-container">
          <div className="logo">
            <img src="./src/assets/logo.jpg" alt="logo"/>
          </div>
            <h1 className='title' >Recipe Finder</h1>
        </div>
        <div>
            <ul className='nav'>
                <li className='nav-link'>Home</li>
                <li className='nav-link'>Favorites</li>
                <li className='nav-link'>About</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
