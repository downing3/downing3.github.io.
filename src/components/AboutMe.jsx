import React from "react";
import NavBar from "./NavBar";
import img from "../Assets/Images/IMG_4178.png";

function AboutMe() {
  return (
    <>
      <div
        className="bg-sage h-screen flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="fixed top-0 left-0 right-0">
          <NavBar />
        </div>
        <div className="w-full">
          <div className="text-left ml-8 -mt-10">
            <p className="text-5xl text-white font-thin mt-12">hi, i'm naomi!</p>
          </div>
        </div>
        <div className="w-full">
          <div className="text-left ml-8 mr-40">
            <p className="text-5xl text-white font-thin mt-12 bg-black">
              who am i
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
