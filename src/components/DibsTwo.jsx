import React from "react";
import dibsimg from "../Assets/Images/newdibs.png";
import WhiteNavbar from "./WhiteNavbar";
import LightFooter from "./LightFooter";

function DibsTwo() {
  return (
    <div className="container mx-auto px-4 py-8 bg-black">
        <div className="fixed top-0 left-0 right-0 z-50">
          <WhiteNavbar />
        </div>
      <div className="text-center pt-10">
        <h2 className="text-sm lowercase mb-6 text-white">launch lab fellowship - fall 2023</h2>
        <h1 className="text-6xl font-bold my-10 text-white">Refining Dibs: A Study in Product Improvement</h1>
        <img 
          src={dibsimg} 
          alt="Dibs Project" 
          className="mx-auto mb-10 mt-16"  
          style={{ maxWidth: '800px', height: 'auto' }} 
        />
      </div>
      
      <div className="text-left pl-10 text-white">
        <div className="my-4">
          <h3 className="text-lg font-bold inline-block mr-2">summary:</h3>
          <span>An application aimed at reducing waste on college campuses, and promoting sustainable consumption habits amongst students.</span>
        </div>

        <div className="my-4">
          <h3 className="text-lg font-bold inline-block mr-2">position:</h3>
          <span>lead product design</span>
        </div>

        <div className="my-4">
          <h3 className="text-lg font-bold inline-block mr-2">tech stack:</h3>
          <span>Figma, React Native + Expo + Typescript, Firebase + Google Auth</span>
        </div>
      </div>

      <div className="my-20 text-center">
        <hr className="border-t border-white mx-auto" style={{ width: '20%' }} />
      </div>

      <div className="text-center mt-8 px-16 text-white"> 
        <p className="text-lg mx-auto"> 
        Following the development of our web application, we knew we wanted to migrate Dibs over to a mobile app. While doing this, we surveyed students and determined that we needed to pivot our design. The feedback revealed a strong preference for a more intuitive and user-centric interface. This pivot wasn't just a transformation in technology; it was a shift towards a more empathetic and user-driven approach, ensuring that Dibs was not only functional but also genuinely aligned with the lifestyle and preferences of its primary users – students.        </p>
      </div>

      <hr className="my-20 border-t border-white" />

      <div className="text-center mt-8 px-10 text-white">
        <h2 className="text-3xl font-bold mb-4">Design Updates</h2>

        <div className="mt-16 text-left">
          <h3 className="text-2xl font-bold mb-2">1. Homescreen Simplification</h3>
          <p className="text-lg">
          By eliminating excess functionality and minimizing distractions, we've transformed the homepage into a clean, posts-centric interface. This update not only declutters the user experience but also ensures that the content — the posts themselves — takes center stage. Now, users can enjoy a more straightforward and intuitive navigation experience right from the start.
          </p>
        </div>

        <div className="mt-10 text-left">
          <h3 className="text-2xl font-bold mb-2">2. Emphasis on Imagery</h3>
          <p className="text-lg">
          The simplified design aesthetic puts the spotlight on the pictures, allowing the users to visually explore items with minimal textual interference. This shift not only makes the app more visually appealing but also aligns with our goal of creating a more immersive and intuitive browsing experience, where the features subtly complement the visual journey.          </p>
        </div>

        <div className="mt-10 text-left">
          <h3 className="text-2xl font-bold mb-2">3. Streamlined Posting Process</h3>
          <p className="text-lg">
          To make posting on Dibs more efficient and user-friendly, we've optimized the process to require just two key pieces of information: location and description. This streamlined approach not only speeds up the posting process but also aligns with our commitment to simplicity and ease of use. </p>
           </div>

        <div className="mt-10 text-left">
          <h3 className="text-2xl font-bold mb-2">4. Enhanced Security: Boston University Exclusive Access</h3>
          <p className="text-lg">
            Access to the app is currently exclusive to Boston University students. This decision was made to bolster security and create a trusted community environment within the app.
          </p>
        </div>
      </div>

      <div className="my-20 text-center">
        <hr className="border-t border-white mx-auto" style={{ width: '20%' }} />
      </div>



      <div className="text-center mt-28 mb-28">
        <a
          href="https://www.figma.com/file/uEinSaA0OW9tdjPukbzSlf/Untitled?type=design&node-id=0%3A1&mode=design&t=7PZ3DjrIXcr8tWnq-1"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black py-6 px-12 rounded-full"
        >
          View Final Prototype
        </a>
      </div>

      <LightFooter/>
    </div>
  );
}

export default DibsTwo;
