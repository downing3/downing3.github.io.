import React from "react";
import DarkNavbar from "./DarkNavbar";
import DarkFooter from "./DarkFooter";
import img from "../Assets/Images/mbta.png";



function Mbta() {
    return (
        <div className="container mx-auto px-4 py-8 bg-white">
        <div className="fixed top-0 left-0 right-0 z-50">
          <DarkNavbar />
        </div>
      <div className="text-center pt-10 px-20">
        <h2 className="text-sm lowercase mb-6 text-black">personal project - summer 2023</h2>
        <h1 className="text-6xl font-bold my-10 text-black">Urban Transit: Independent App Design for Boston Public Transportation</h1>
        <img 
          src={img} 
          alt="transportation Project" 
          className="mx-auto mb-10 mt-16"  
          style={{ maxWidth: '800px', height: 'auto' }} 
        />
      </div>
      
      <div className="text-left pl-10 text-black">
        <div className="my-4">
          <h3 className="text-lg font-bold inline-block mr-2">summary:</h3>
          <span>an application aimed at simplifying the use of public transportation in Boston.</span>
        </div>

        <div className="my-4">
          <h3 className="text-lg font-bold inline-block mr-2">position:</h3>
          <span>product designer</span>
        </div>

        <div className="my-4">
          <h3 className="text-lg font-bold inline-block mr-2">tech stack:</h3>
          <span>miro, figma</span>
        </div>
      </div>

      <div className="my-20 text-center">
        <hr className="border-t border-black mx-auto" style={{ width: '20%' }} />
      </div>

      <div className="text-center mt-8 px-16 text-black"> 
        <p className="text-lg mx-auto"> 
        As a student who uses the public transpotation within Boston quite often, I  recognized areas where there could be improvement. I decided to prototype an application aimed at providing Boston's community with a simple way to manage their Charlie Card and navigate to their destination, easing the use of public transportation.        </p>
      </div>

      <hr className="my-20 border-t border-black" />

      <div className="text-center mt-8 px-10 text-black">
        <h2 className="text-3xl font-bold mb-4">Key Features</h2>

        <div className="mt-16 text-left">
          <h3 className="text-2xl font-bold mb-2">1. Navigate: Simplify your Commute</h3>
          <p className="text-lg">
          Users are given the ability to navigate through town using the mode of transportation of their choice - subway, commuter rail, or bus. Through this feature users are able to check where different lines may run throughout the city, at what time their desired vehicle is arriving, or any alerts that may be impeding their transportation experience. This allows for a simple, efficient method of planning.
          </p>
        </div>

        <div className="mt-10 text-left">
          <h3 className="text-2xl font-bold mb-2">2. Plan a Trip: A Personal Transit Guide</h3>
          <p className="text-lg">
          This feature presents you with the most efficient routes available to reach your desired destination. Seamlessly adapt your travel plans based on changing circumstances and stay ahead of delays, ensuring you reach your destination with maximum efficiency. Tailor your preferences, save your preferred routes, and let this app do the heavy lifting to ensure you never miss a connection.</p>
        </div>

        <div className="mt-10 text-left">
          <h3 className="text-2xl font-bold mb-2">3. Manage Charlie Card</h3>
          <p className="text-lg">
          Experience more control over your transit finances with the "Manage Charlie Card" functionality. Conveniently load funds onto your Charlie Card using secure payment options, eliminating the need for physical cash or searching for the nearest Add-Value station. Gain insights into your card balance and a comprehensive transaction history to track expenses and understand your travel patterns. </p>
           </div>
      </div>

      <div className="my-20 text-center">
        <hr className="border-t border-black mx-auto" style={{ width: '20%' }} />
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

      <DarkFooter/>
    </div>
    );
}

export default Mbta;