import React from 'react';
import { Link } from 'react-router-dom';
import treesBackground from '../Assets/Images/trees.png';

function Hero() {
  return (
    <div
      className="h-screen bg-center bg-cover flex flex-col justify-start items-center pt-10"
      style={{ backgroundImage: `url(${treesBackground})` }}
    >
      <div className="text-white text-center text-7xl font-thin italic mt-16 pb-12 mb-10">
        <h1>naomi mendocino downing</h1>
      </div>
      <div className="flex flex-col space-y-4">
        <Link to="/about">
          <button className="bg-buttons text-white text-xl font-thin px-12 py-6 mb-3 cursor-pointer w-full">
            about me
          </button>
        </Link>
        <Link to="/projects">
          <button className="bg-buttons text-white text-xl font-thin px-12 py-6 mb-3 cursor-pointer w-full">
            projects / my work
          </button>
        </Link>
        <Link to="/contact">
          <button className="bg-buttons text-white text-xl font-thin px-12 py-6 cursor-pointer w-full">
            contact
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
