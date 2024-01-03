import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function WhiteNavbar() {
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);

  // Toggle the dropdown
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  // Function to get the current page name
  const getCurrentPageName = () => {
    switch (location.pathname) {
      case '/about':
        return 'about';
      case '/projects':
        return 'projects';
      case '/contact':
        return 'contact';
      case '/photography':
        return 'photography';
      case '/dibs':
        return 'projects';
      case '/dibstwo':
        return 'projects';
      case '/Mbta':
        return 'projects';
      default:
        return 'home';
    }
  };

  return (
    <div>
      <nav className="bg-transparent py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
          <div className="flex items-center relative">
            <div 
              className="text-white text-xl font-bold cursor-pointer"
              onClick={toggleDropdown}
            >
              {getCurrentPageName()}
            </div>

            {showDropdown && (
              <div className="absolute top-full right-0 text-white p-2">
                <Link to="/" className="block" onClick={() => setShowDropdown(false)}>home</Link>
                <Link to="/about" className="block" onClick={() => setShowDropdown(false)}>about</Link>
                <Link to="/projects" className="block" onClick={() => setShowDropdown(false)}>projects</Link>
                <Link to="/photography" className="block" onClick={() => setShowDropdown(false)}>photography</Link>
                <Link to="/contact" className="block" onClick={() => setShowDropdown(false)}>contact</Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default WhiteNavbar;
