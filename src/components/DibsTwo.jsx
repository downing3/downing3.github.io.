import React from "react";
import dibsimg from "../Assets/Images/newdibs.png";
import WhiteNavbar from "./WhiteNavbar";
import LightFooter from "./LightFooter";
import logoTesting from "../Assets/Images/dibstwo-logo-testing.png";
import flowClaimButton from "../Assets/Images/dibstwo-flow-claim-button.png";
import flowEmojiReactions from "../Assets/Images/dibstwo-flow-emoji-reactions.png";

function DibsTwo() {
  return (
    <div className="bg-black min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <WhiteNavbar />
      </div>

      <div className="container mx-auto px-4 py-8">
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

        <div className="text-center mt-8 px-10 text-white">
          <h2 className="text-3xl font-bold mb-4">Logo & UI Exploration</h2>
          <p className="text-lg mx-auto max-w-3xl mb-16 mt-4">
            Alongside the functional changes, I explored new logo directions and homepage UI treatments to find a look and feel that fit the pivot to mobile.
          </p>
          <img
            src={logoTesting}
            alt="Logo and homepage UI exploration for the Dibs mobile app"
            className="mx-auto"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>

        <div className="my-20 text-center">
          <hr className="border-t border-white mx-auto" style={{ width: '20%' }} />
        </div>

        <div className="text-center mt-8 px-10 text-white">
          <h2 className="text-3xl font-bold mb-4">User Testing</h2>
          <p className="text-lg mx-auto max-w-3xl mb-16 mt-4">
            To validate the mobile flow, I ran a user study comparing a notification-and-claim-button flow against an emoji-reaction-based alternative.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src={flowClaimButton}
                alt="Homescreen option with a formal claim button and in-range user count"
                className="mx-auto"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              <p className="text-center text-sm text-gray-400 mt-4">Option A: formal claim button</p>
            </div>
            <div>
              <img
                src={flowEmojiReactions}
                alt="Homescreen option using emoji-based reactions instead of a claim button"
                className="mx-auto"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              <p className="text-center text-sm text-gray-400 mt-4">Option B: emoji reactions</p>
            </div>
          </div>

          <ul className="list-disc mx-10 text-left inline-block">
            <li>Testers strongly preferred the notification-and-claim-button flow, since it made the next step clear (get notified, see who's nearby, claim it) instead of leaving them guessing what an emoji reaction meant</li>
            <li>A formal "claim" button was seen as necessary by nearly everyone, both to prevent wasted trips when an item was already gone and to create a sense of urgency, compared by one tester to a "book now" or "buy" button</li>
            <li>Several testers flagged that elements like "items near me" and "users in range" made the screen feel cluttered, reinforcing the decision to simplify the homescreen</li>
            <li>Testers also suggested a light mode option and a comment section for item updates</li>
          </ul>
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
    </div>
  );
}

export default DibsTwo;