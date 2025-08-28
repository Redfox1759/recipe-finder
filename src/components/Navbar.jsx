

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import SiteLogo from '../assets/logo.jpg'; // Make sure this path is correct

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md w-full px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20">
        {/* Logo and Title Section */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12">
              <img 
                src={SiteLogo} 
                alt="logo" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h1 className='text-2xl font-bold text-gray-800 hidden sm:block'>
              Recipe Finder
            </h1>
          </Link>
        </div>

        {/* Navigation Links */}
        <div>
          <ul className='flex items-center space-x-4 sm:space-x-6 md:space-x-8'>
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) =>
                  isActive 
                  ? "text-orange-500 font-semibold border-b-2 border-orange-500 pb-1" 
                  : "text-gray-600 font-medium hover:text-orange-500 transition-colors duration-300"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) =>
                  isActive 
                  ? "text-orange-500 font-semibold border-b-2 border-orange-500 pb-1" 
                  : "text-gray-600 font-medium hover:text-orange-500 transition-colors duration-300"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/favorites" 
                className={({ isActive }) =>
                  isActive 
                  ? "text-orange-500 font-semibold border-b-2 border-orange-500 pb-1" 
                  : "text-gray-600 font-medium hover:text-orange-500 transition-colors duration-300"
                }
              >
                Favorites
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
