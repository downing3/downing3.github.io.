import React from "react";
import img from "../Assets/Images/IMG_4178.png";
import DarkNavbar from "./DarkNavbar";
import AboutText from "./AboutText";

function AboutMe() {
  return (
    <>
      <div className="relative min-h-screen">
        <div className="fixed top-0 left-0 right-0 z-50">
          <DarkNavbar />
        </div>
        <div
          className="flex flex-col items-center justify-center pt-24 pb-8"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="text-left ml-5">
            <p className="text-5xl sm:text-5xl md:text-6xl lg:text-6xl text-white font-thin bg-black sticky left-0">
              Who Am I?
            </p>
          </div>
          <div className="mt-5 mx-20">
            <AboutText />
          </div>
          <div className="container mx-auto mt-8">

          <div className="text-black mb-4 p-4">
            <p className="text-5xl sm:text-4xl md:text-5xl lg:text-5xl font-thin">
                <span className="text-white bg-black">Skills</span>
            </p>
            <p className="text-2xl mt-4 font-light">
              <span className="bg-white">- Python, Java, CSS, HTML, Javascript, React, Figma, Microsoft Office</span>
            </p>
          </div>



          <div className="text-black mb-4 p-4">
            <p className="text-5xl sm:text-4xl md:text-5xl lg:text-5xl font-thin">
              <span className="text-white bg-black">Education</span>
            </p>
            <p className="mt-4 font-light">
              <span className="text-2xl bg-white">- Boston University (2020-2024)</span><br />
              <span className="text-xl bg-white ml-4">B.A. in Computer Science, President of Girls Who Code, Dean's List</span><br />
              <p className="mt-3">
                <span className="text-2xl bg-white">- Cornell University (2019)</span><br />
                <span className="text-xl bg-white ml-4">Course in Adolescent Development</span><br />
              
              <p className="mt-3"></p>
                <span className="text-2xl bg-white">- Hong Kong International School (2017-2020)</span><br />
                <span className="text-xl bg-white ml-4">33 ACT, Junior Varsity Soccer Captain</span>
              </p>
            </p>
        </div>



          <div className="text-black mb-4 p-4 mt-10">
            <p className="text-5xl sm:text-4xl md:text-5xl lg:text-5xl font-thin">
              <span className="text-white bg-black">Interests</span>
            </p>
            <p className="text-2xl mt-4 font-light">
              <span className="bg-white">- Music, some of my favorite artists are: Bon Iver, Phoebe Bridgers, and Lorde.</span><br />
              <span className="bg-white">- Reading memoirs, one of my favorites is "The Glass Castle" by Jeannette Walls.</span><br />
              <span className="bg-white">- Crocheting, I have created a sweater, scarves, and mittens.</span><br />
              <span className="bg-white">- Video Production/Photography</span>
              </p>
          </div>


          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
