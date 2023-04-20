import React from "react";
import RedNavbar from "./RedNavbar";
import bg from "../Assets/Images/main.png";

function Contact() {
  return (
    <div
      className="bg-sage h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="fixed top-0 left-0 right-0">
        <RedNavbar />
      </div>
      <div className="text-left mt-20 ml-10">
        <p className="text-white font-light text-7xl mb-20 -mt-48">contact me</p>
        <p className="text-white font-thin text-5xl mb-10">
          email: downing3@bu.edu
        </p>
        <a
          className="text-white font-thin text-5xl hover:text-buttons transition-colors duration-300 mb-4 pb-5 block"
          href="https://www.linkedin.com/in/naomi-downing"
        >
          LinkedIn
        </a>
        <a
          className="text-white font-thin text-5xl hover:text-buttons transition-colors duration-300 block"
          href="https://github.com/downing3"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Contact;
