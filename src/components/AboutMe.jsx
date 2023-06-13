import React, { useState, useEffect } from "react";
import img from "../Assets/Images/IMG_4178.png";
import DarkNavbar from "./DarkNavbar";
import AboutText from "./AboutText";

function AboutMe() {
  const [showAboutText, setShowAboutText] = useState(true);
  const [showSkillsInterests, setShowSkillsInterests] = useState(false);

  useEffect(() => {
    const aboutTextTimeout = setTimeout(() => {
      setShowAboutText(false);
      setShowSkillsInterests(true);
    }, 15000); // Adjust the duration of AboutText display before fading out (in milliseconds)

    return () => {
      clearTimeout(aboutTextTimeout);
    };
  }, []);

  const fadeOutStyles = {
    opacity: showAboutText ? 1 : 0,
    transition: "opacity 1s ease-out"
  };

  const [isSkillsHovered, setIsSkillsHovered] = useState(false);
  const [isInterestsHovered, setIsInterestsHovered] = useState(false);

  const handleSkillsHover = () => {
    setIsSkillsHovered(true);
  };

  const handleSkillsLeave = () => {
    setIsSkillsHovered(false);
  };

  const handleInterestsHover = () => {
    setIsInterestsHovered(true);
  };

  const handleInterestsLeave = () => {
    setIsInterestsHovered(false);
  };

  const skillsStyles = {
    fontSize: "7xl",
    fontWeight: "light",
  };

  const interestsStyles = {
    fontSize: "7xl",
    fontWeight: "light",
    marginTop: "8px",
  };

  const skillsText = "Python, Java, React, Figma";
  const interestsText = "Music, Art, Fitness, Hiking, Travel, Memoirs";

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
              Who Am I?
            </p>
            {showSkillsInterests && (
              <div className="mt-10">
                <p
                  className="text-5xl sm:text-5xl md:text-7xl lg:text-7xl text-black font-light"
                  style={skillsStyles}
                  onMouseEnter={handleSkillsHover}
                  onMouseLeave={handleSkillsLeave}
                >
                  skills
                </p>
                {isSkillsHovered && <p>{skillsText}</p>}
                <p
                  className="text-5xl sm:text-5xl md:text-7xl lg:text-7xl text-black font-light pt-8"
                  style={interestsStyles}
                  onMouseEnter={handleInterestsHover}
                  onMouseLeave={handleInterestsLeave}
                >
                  interests
                </p>
                {isInterestsHovered && <p>{interestsText}</p>}
              </div>
            )}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 ml-8 mb-8 mr-8">
          {showAboutText && (
            <div style={fadeOutStyles}>
              <AboutText />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AboutMe;
