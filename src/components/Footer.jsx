import React from "react";
import resume from "../Assets/Files/Resume.pdf"

function Footer() {
  return (
    <footer className="footer flex justify-center p-4 bg-transparent font-light text-white">
      <div className="flex justify-center space-x-4">
        <a
          className="hover:text-buttons transition-colors duration-300"
          href="https://www.linkedin.com/in/naomi-downing"
        >
          linkedin
        </a>
        <a
            className="hover:text-buttons transition-colors duration-300"
            href={resume}
            download="NaomiDowning-Resume"
        >
            resume
        </a>
      </div>
    </footer>
  );
}

export default Footer;
