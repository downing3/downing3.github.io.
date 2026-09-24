import React from "react";
import WhiteNavbar from "./WhiteNavbar";
import img from "../Assets/Images/IMG_4178.png";

function AboutMe() {
  return (
    <>
      <div className="relative min-h-screen bg-black"
           style={{
             backgroundImage: `url(${img}), url(../Assets/Images/IMG_4178.png)`,
             backgroundSize: '200px auto, cover', 
             backgroundRepeat: 'no-repeat, no-repeat',
             backgroundPosition: '60% center, center center' 
           }}>
        <div className="fixed top-0 left-0 right-0 z-50">
          <WhiteNavbar />
        </div>
        <div className="flex flex-col items-center justify-center pt-24 pb-8">
          <div className="container mx-auto flex">
            <div className="text-left ml-24">         

              <div className="text-white mb-6 p-4">
                <p className="text-3xl sm:text-2xl md:text-3xl lg:text-3xl font-thin">
                  Education
                </p>
                <p className="mt-2 font-light">
                  <span className="text-lg">- Boston University (2020-2024)</span><br />
                  <span className="text-md ml-4">B.A. in Computer Science, President of Girls Who Code, Dean's List</span><br />
                  <span className="text-lg mt-3">- Cornell University (2019)</span><br />
                  <span className="text-md ml-4">Course in Adolescent Development</span><br />
                  <span className="text-lg mt-3">- Hong Kong International School (2017-2020)</span><br />
                  <span className="text-md ml-4">33 ACT, Junior Varsity Soccer Captain</span>
                </p>
              </div>

              <div className="text-white mb-6 p-4">
                <p className="text-3xl sm:text-2xl md:text-3xl lg:text-3xl font-thin">
                  Skills
                </p>
                <p className="mt-2 font-light">
                  <span className="text-lg">- Languages & Frameworks</span><br />
                  <span className="text-md ml-4">JavaScript, React, HTML, CSS, Python, Java, Go, C, OCaml, Assembly</span><br />
                  <span className="text-lg mt-3">- Tools & Platforms</span><br />
                  <span className="text-md ml-4">Microsoft Azure DevOps, GitHub, Jira, Miro, Trello, Claude, Claude Skills, Lovable, Figma, Canva, Photoshop, Illustrator, Microsoft Office</span>
                </p>
              </div>

              <div className="text-white mb-6 p-4">
                <p className="text-3xl sm:text-2xl md:text-3xl lg:text-3xl font-thin">
                  Interests
                </p>
                <p className="text-lg mt-2 font-light">
                  - Music, some of my favorite artists are: Bon Iver, Phoebe Bridgers, and Lorde.<br />
                  - Reading memoirs, one of my favorites is "The Glass Castle" by Jeannette Walls.<br />
                  - Crocheting, I have created a sweater, scarves, and mittens.<br />
                  - Video Production/Photography
                </p>
              </div>

              <div className="text-white mb-6 p-4">
                <p className="text-3xl sm:text-2xl md:text-3xl lg:text-3xl font-thin">
                  Top Three
                </p>
                <p className="text-lg mt-2 font-light">
                  - Song: Just Like Heaven by The Cure<br />
                  - Movie: Good Will Hunting<br />
                  - Book: Heart the Lover by Lily King
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
