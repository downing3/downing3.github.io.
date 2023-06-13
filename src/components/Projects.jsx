import React, { useState } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import b from "../Assets/Images/fijiBeach.png";

function Projects() {
  const [showDescription, setShowDescription] = useState(false);

  const handleMouseEnter = () => {
    setShowDescription(true);
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
  };

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        backgroundImage: `url(${b})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="fixed top-0 left-0 right-0">
        <NavBar />
      </div>
      <div className="flex-1 h-full flex flex-col justify-center items-center">
        <div className="text-center -mt-10">
          <Link to="/photography">
            <p className="text-5xl font-thin text-white">
              <span className="hover:bg-buttons hover:text-white transition-colors duration-300 cursor-pointer">
                photography
              </span>
            </p>
          </Link>
          <div className="relative mt-12">
            <a
              href="https://dibs.boston/"
              className="text-5xl font-thin text-white hover:bg-buttons hover:text-white transition-colors duration-300 cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              project1: dibs!
            </a>
            {showDescription && (
              <div className="absolute top-full left-0 right-0">
                <p className="text-xl font-thin text-white mt-5 mx-auto max-w-screen-lg">
                  dibs! is an application intended to tackle the issue of waste production on college campuses.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Projects;
