import React from "react";
import NavBar from "./NavBar";
import { Link } from 'react-router-dom';


function Projects() {
  return (
    <div className="bg-sage h-screen flex flex-col justify-center items-center">
      <div className="fixed top-0 left-0 right-0">
        <NavBar />
      </div>
      <div className="text-center -mt-10"> 
      <Link to="/photography">
      <p className="text-5xl text-white font-thin">photography</p>
      </Link>
        <p className="text-5xl text-white font-thin mt-12">project1: dibs!</p>
        <p className="text-5xl text-white font-thin mt-12">project2: barbuddy</p>
      </div>
    </div>
  );
}

export default Projects;
