import React from "react";
import WhiteNavbar from "./WhiteNavbar";
import bg from "../Assets/Images/main.png";
import resume from "../Assets/Files/Resume.pdf";
import "./Contact.css";

function Contact() {
  return (
    <div
      className="bg-sage min-h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="fixed top-0 left-0 right-0">
        <WhiteNavbar />
      </div>
      <div className="text-center hover-effect">
        <p className="contact-item text-xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl mb-4">
          <span className="font-thin text-white bg-black p-1">downing3@bu.edu</span>
        </p>
        <a
          className="contact-item text-xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl hover:font-bold transition duration-300 mb-4 block"
          href="https://www.linkedin.com/in/naomi-downing"
        >
          <span className="font-thin text-white bg-black p-1">LinkedIn</span>
        </a>
        <a
          className="contact-item text-xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl hover:font-bold transition duration-300 mb-4 block"
          href="https://github.com/downing3"
        >
          <span className="font-thin text-white bg-black p-1">GitHub</span>
        </a>
        <a
          className="contact-item text-xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl hover:font-bold transition duration-300 mb-4 block"
          href={resume}
          download="NaomiDowning-Resume"
        >
          <span className="font-thin text-white bg-black p-1">Resume</span>
        </a>
      </div>
    </div>
  );
}

export default Contact;