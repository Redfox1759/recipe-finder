import React from 'react'
import { Link } from 'react-router-dom'
import SiteLogo from '../assets/logo.jpg'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="logo-container">
          <div className="logo">
            <img src={SiteLogo} alt="logo"/>
          </div>
            <h1 className='title' >Recipe Finder</h1>
        </div>
        <div>
            <ul className='nav'>
                <li className='nav-link'>
                  <Link to="/">Home</Link>
                  
                </li>
                <li className='nav-link'>
                  <Link to="/about">About</Link>
                 
                </li>
                <li className='nav-link'>
                  <Link to="/favorites">Favorites</Link>
                 
                </li>
                
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
