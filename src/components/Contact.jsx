import React from "react";
import RedNavbar from "./RedNavbar";
import bg from "../Assets/Images/main.png";
import resume from "../Assets/Files/Resume.pdf";

function Contact() {
  return (
    <div
      className="bg-sage min-h-screen flex flex-col justify-center items-start sm:px-4 md:px-10 lg:px-20 xl:px-32"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="fixed top-0 left-0 right-0">
        <RedNavbar />
      </div>
      <div className="ml-10 md:ml-18 lg:ml-18">
        <p className="text-white font-light text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-7xl mb-8 sm:mb-10 lg:mb-12 -mt-24 sm:-mt-28 lg:-mt-20">
          contact me
        </p>
        <p className="text-white font-thin text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl mb-8">
          email: downing3@bu.edu
        </p>
        <a
          className="text-white font-thin text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl hover:text-buttons transition-colors duration-300 mb-4 pb-5 block"
          href="https://www.linkedin.com/in/naomi-downing"
        >
          LinkedIn
        </a>
        <a
          className="text-white font-thin text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl hover:text-buttons transition-colors duration-300 mb-4 pb-5 block"
          href="https://github.com/downing3"
        >
          GitHub
        </a>
        <a
          className="text-white font-thin text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl hover:text-buttons transition-colors duration-300 block"
          href={resume}
          download="NaomiDowning-Resume"
        >
          Resume
        </a>
      </div>
    </div>
  );
}





export default Contact;
