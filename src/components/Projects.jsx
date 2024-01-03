import React from "react";
import NavBar from "./WhiteNavbar";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import b from "../Assets/Images/fijiBeach.png";
import './Projects.css'; // Make sure this CSS file is correctly linked

function Projects() {
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
      <div className="flex-1 flex flex-col justify-center items-center pt-24">
        <div className="flex flex-col items-center justify-center hover-effect">
          <Link to="/dibs" className="project-link text-3xl text-white mb-5 cursor-pointer text-center">
            dibs web app: reducing waste on college campuses
          </Link>
          <Link to="/dibstwo" className="project-link text-3xl text-white mb-5 cursor-pointer text-center">
            dibs mobile: reducing waste on college campuses
          </Link>
          <Link to="/Mbta" className="project-link text-3xl text-white mb-5 cursor-pointer text-center">
            public transportation product re-design
          </Link>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Projects;
