import React from "react";
import DarkNavbar from "./DarkNavbar";
import DarkFooter from "./DarkFooter";
import img from "../Assets/Images/mbta.png";
import signInImg from "../Assets/Images/mbta-signin.png";
import homeMapImg from "../Assets/Images/mbta-home-map.png";
import subwayLinesImg from "../Assets/Images/mbta-subway-lines.png";
import commuterRailLinesImg from "../Assets/Images/mbta-commuter-rail-lines.png";
import greenLineScheduleImg from "../Assets/Images/mbta-green-line-schedule.png";



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

      <div className="text-center mt-8 px-10 text-black">
        <h2 className="text-3xl font-bold mb-4">Selected Screens</h2>
        <p className="text-lg mx-auto max-w-3xl mb-16">
          A closer look at some of the key screens from the app.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-left">
          <div>
            <img
              src={signInImg}
              alt="Sign in screen"
              className="w-full rounded-lg shadow-md border border-gray-200"
            />
            <p className="text-center text-sm text-gray-500 mt-4">Sign In</p>
          </div>

          <div>
            <img
              src={homeMapImg}
              alt="Home map screen"
              className="w-full rounded-lg shadow-md border border-gray-200"
            />
            <p className="text-center text-sm text-gray-500 mt-4">Home &amp; Map</p>
          </div>

          <div>
            <img
              src={subwayLinesImg}
              alt="Subway line picker screen"
              className="w-full rounded-lg shadow-md border border-gray-200"
            />
            <p className="text-center text-sm text-gray-500 mt-4">Subway Lines</p>
          </div>

          <div>
            <img
              src={commuterRailLinesImg}
              alt="Commuter Rail line picker screen"
              className="w-full rounded-lg shadow-md border border-gray-200"
            />
            <p className="text-center text-sm text-gray-500 mt-4">Commuter Rail Lines</p>
          </div>

          <div>
            <img
              src={greenLineScheduleImg}
              alt="Green Line schedule screen"
              className="w-full rounded-lg shadow-md border border-gray-200"
            />
            <p className="text-center text-sm text-gray-500 mt-4">Green Line Schedule</p>
          </div>
        </div>
      </div>

      <DarkFooter/>
    </div>
    );
}

export default Mbta;
