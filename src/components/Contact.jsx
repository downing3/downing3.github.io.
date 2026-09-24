import React from "react";
import WhiteNavbar from "./WhiteNavbar";
import bg from "../Assets/Images/main.png";
import resume from "../Assets/Files/Resume.pdf";
import "./Contact.css"; // Ensure this CSS file has the correct styling

function Contact() {
  return (
    <div
      className="flex flex-col min-h-screen justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="fixed top-0 left-0 right-0">
        <WhiteNavbar />
      </div>
      <div className="text-center hover-effect">
        {/* Use similar button/link styles as in Hero and Projects */}
        <a
          href="mailto:downing3@bu.edu" 
          className="contact-link mb-4"
        >
          downing3@bu.edu
        </a>
        <a className="contact-link mb-4" href="https://www.linkedin.com/in/naomi-downing">
          LinkedIn
        </a>
        <a className="contact-link mb-4" href="https://github.com/downing3">
          GitHub
        </a>
        <a className="contact-link mb-4" href={resume} download="NaomiDowning-Resume">
          Resume
        </a>
      </div>
    </div>
  );
}

export default Contact;
