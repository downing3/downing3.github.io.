import React from "react";
import img from "../Assets/Images/IMG_4178.png";
import DarkNavbar from "./DarkNavbar";
import TypingAnimation from "./TypingAnimation";

function AboutMe() {
  return (
    <>
      <div
        className="bg-sage h-screen flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="fixed top-0 left-0 right-0">
            <DarkNavbar />
        </div>
        <div className="w-full">
        </div>
        <div className="w-full">
          <div className="text-left ml-8 mr-80 -mt-72">
            <p className="text-5xl text-white font-thin mt-12 bg-black">
              who am i?
            </p>
          </div>
          <div className="mt-10 ml-8">
            <TypingAnimation />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
