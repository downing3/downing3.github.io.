import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import b from "../Assets/Images/fijiBeach.png";

function Projects() {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundImage: `url(${b})` }}
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
          <p className="text-5xl font-thin mt-12 text-white">
            <span className="hover:bg-buttons hover:text-white transition-colors duration-300 cursor-pointer">
              project1: dibs!
            </span>
          </p>
          <p className="text-5xl font-thin mt-12 text-white">
            <span className="hover:bg-buttons hover:text-white transition-colors duration-300 cursor-pointer">
              project2: barbuddy
            </span>
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Projects;
