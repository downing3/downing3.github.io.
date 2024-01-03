import React from "react";
import resume from "../Assets/Files/Resume.pdf"

function DarkFooter() {
  return (
    <footer className="footer flex justify-center p-4 bg-transparent font-light text-black">
      <div className="flex justify-center space-x-4">
        <a
          href="https://www.linkedin.com/in/naomi-downing"
        >
          linkedin
        </a>
        <a
            href={resume}
            download="naomidowning-resume.pdf"
        >
            resume
        </a>
      </div>
    </footer>
  );
}

export default DarkFooter;
