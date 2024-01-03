import React from 'react';
import { Link } from 'react-router-dom';
import treesBackground from '../Assets/Images/trees.png';
import './Hero.css'; 

function Hero() {
  return (
    <div
      className="h-screen bg-center bg-cover flex flex-col justify-start items-center"
      style={{ backgroundImage: `url(${treesBackground})` }}
    >
      <div className="text-white text-center text-7xl font-bold italic mt-16 pb-12 mb-10 pt-20">
        <h1>naomi mendocino downing</h1>
      </div>
      <div className="flex flex-col space-y-2 hover-effect">
        <Link to="/about">
          <button className="hero-button text-white text-xl font-bold px-12 py-5 mb-3 cursor-pointer w-full transform transition-all">
            about me
          </button>
        </Link>
        <Link to="/projects">
          <button className="hero-button text-white text-xl font-bold px-12 py-5 mb-3 cursor-pointer w-full transform transition-all">
            projects
          </button>
        </Link>
        <Link to="/contact">
          <button className="hero-button text-white text-xl font-bold px-12 py-5 cursor-pointer w-full transform transition-all">
            contact
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
