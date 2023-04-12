import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from './main.png';

function Homepage() {
  return (
    <div 
      className="bg-cover bg-center h-screen flex justify-center items-center" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Link to="/hero">
        <button 
          className="bg-buttons text-white font-thin px-8 py-4 cursor-pointer"
        >
          click here to enter
        </button>
      </Link>
    </div>
  );
}

export default Homepage;
