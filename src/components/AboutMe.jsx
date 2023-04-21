import React from "react";
import img from "../Assets/Images/IMG_4178.png";
import DarkNavbar from "./DarkNavbar";
import AboutText from "./AboutText";

function AboutMe() {
  return (
    <>
      <div
        className="h-screen flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="fixed top-0 left-0 right-0">
          <DarkNavbar />
        </div>
        <div className="w-full">
          <div className="text-left ml-8 mr-80 mt-12">
            <p className="text-5xl sm:text-4xl md:text-5xl lg:text-5xl -mt-80 text-white font-thin bg-black">
              who am i?
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 ml-8 mb-8 mr-8">
          <AboutText />
        </div>
      </div>
    </>
  );
}

export default AboutMe;
