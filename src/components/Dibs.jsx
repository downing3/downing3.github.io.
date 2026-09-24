import React from "react";
import dibsimg from "../Assets/Images/dibs.png";
import stickie from "../Assets/Images/stickie.jpeg";
import proto from "../Assets/Images/proto.jpeg";
import flowItemType from "../Assets/Images/dibs-flow-item-type.png";
import flowMapListView from "../Assets/Images/dibs-flow-map-list-view.png";
import flowConfirmPost from "../Assets/Images/dibs-flow-confirm-post.png";
import flowUploadImage from "../Assets/Images/dibs-flow-upload-image.png";
import DarkNavbar from "./DarkNavbar";
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import DarkFooter from "./DarkFooter";
import pressBostonCom from "../Assets/Images/dibs-press-bostoncom.png";
import pressGlobe from "../Assets/Images/dibs-press-globe.png";
import pressStooping from "../Assets/Images/dibs-press-stooping.png";
import finalScreens from "../Assets/Images/dibs-final-screens.png";
import iteration1 from "../Assets/Images/dibs-iteration1.png";
import iteration2 from "../Assets/Images/dibs-iteration2.png";
import iteration3 from "../Assets/Images/dibs-iteration3.png";

function Dibs() {
    const pieChartData = (filledPercentage) => ({
        datasets: [{
          data: [filledPercentage, 100 - filledPercentage],
          backgroundColor: ['#000000', '#e0e0e0'],
          borderColor: ['#000000', '#e0e0e0'],
          borderWidth: 1,
        }],
      });

      const pieChartStyle = {
        maxWidth: '150px',  
        maxHeight: '150px'
      };

  return (
    <div className="container mx-auto px-4 py-8">
        <div className="fixed top-0 left-0 right-0 z-50">
          <DarkNavbar />
        </div>
      <div className="text-center pt-10">
        <h2 className="text-sm lowercase mb-6">innovation fellowship - spring 2023</h2>
        <h1 className="text-6xl font-bold my-10">Reducing Waste on College Campuses</h1>
        <img 
          src={dibsimg} 
          alt="Dibs Project" 
          className="mx-auto mb-10 mt-16"  
          style={{ maxWidth: '800px', height: 'auto' }} 
        />
      </div>
      
      <div className="text-left pl-10">
        <div className="my-4">
          <h3 className="text-lg font-bold inline-block mr-2">summary:</h3>
          <span>An application aimed at reducing waste on college campuses, and promoting sustainable consumption habits amongst students.</span>
        </div>

        <div className="my-4">
          <h3 className="text-lg font-bold inline-block mr-2">position:</h3>
          <span>lead product design / front-end dev</span>
        </div>

        <div className="my-4">
          <h3 className="text-lg font-bold inline-block mr-2">tech stack:</h3>
          <span>Figma, React, TailwindCSS, Google Maps API, Google Firebase</span>
        </div>
      </div>

      <hr className="my-20 border-t border-gray-200" />

      <div className="text-center mt-8 px-16"> 
        <h2 className="text-3xl font-bold mb-4">Problem Statement & Validation</h2>
        <p className="text-lg mx-auto"> 
          In 2022, my best friend and I lived off-campus in Boston. During this time we experienced two move-out periods - this is when we realized how large of an issue waste production during moving periods is. The town of Allston had even coined a term "Allston Christmas", a time when college students, riddled with unwanted items, would leave them on the streets, hoping someone would find their lightly-used items and take them home. We recognized the need for a more-organized system to aid students in their disposal and collection, and thus came 'dibs!', our solution.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <img
            src={pressBostonCom}
            alt="Boston.com article: A brief guide to staying sane during the madness of Allston Christmas"
            className="w-full"
          />
          <img
            src={pressGlobe}
            alt="Boston Globe article: Confessions of an Allston Christmas newbie"
            className="w-full"
          />
          <img
            src={pressStooping}
            alt="Article: Allston Christmas every week, a guide to greater Boston stooping"
            className="w-full"
          />
        </div>
      </div>

      <div className="my-20 text-center">
        <hr className="border-t border-gray-200 mx-auto" style={{ width: '20%' }} />
      </div>

      <div className="text-center mt-8 px-16"> 
        <h2 className="text-3xl font-bold mb-4">User Research & Key Insights</h2>
        <p className="text-lg mx-auto"> 
          After conducting 50 user interviews and sending out a survey to students, we were able to conclude that what we believed was an issue, truly was an issue.
        </p>
      </div>

      <div className="flex justify-center items-center space-x-4 mt-16">
        <div style={pieChartStyle}>
          <Pie data={pieChartData(85)} />
        </div>
        <div style={pieChartStyle}>
          <Pie data={pieChartData(70)} />
        </div>
        <div style={pieChartStyle}>
          <Pie data={pieChartData(60)} />
        </div>
      </div>

      <div className="text-center mt-16 px-10">
        <ul className="list-disc mx-10">
          <li>85% of interviewees said they struggled with time when moving</li>
          <li>70% of interviewees said they struggled with money when moving</li>
          <li>60% of interviewees said they struggled with finding furniture when moving</li>
        </ul>
      </div>

      <hr className="my-20 border-t border-gray-200" />

      <div className="text-center mt-8 px-10"> 
        <h2 className="text-3xl font-bold mb-4">Competitive Analysis</h2>
      </div>

      <div className="mt-16 px-28">
          <h3 className="text-2xl font-bold">Facebook Marketplace</h3>
          <ul className="list-disc mx-auto text-lg">
            <li>Strengths: Large user base, convenient communication, social integration</li>
            <li>Weaknesses: Direct interaction between buyer and seller, limited anonymity, potential for unresponsive users</li>
          </ul>
        </div>

        <div className="mt-6 px-28">
          <h3 className="text-2xl font-bold">eBay</h3>
          <ul className="list-disc mx-auto text-lg">
            <li>Strengths: Large variety of items, buyer & seller protection, advanced search & filter options</li>
            <li>Weaknesses: Seller fees, competition & pricing pressure, shipping logistics, counterfeit & fraudulent listings</li>
          </ul>
        </div>

        <div className="mt-6 px-28">
          <h3 className="text-2xl font-bold">Craigslist</h3>
          <ul className="list-disc mx-auto text-lg">
            <li>Strengths: Anonymity, flexible transactions</li>
            <li>Weaknesses: Limited trust and accountability, inconsistent quality of listings, communication challenges, safety concerns, lack of specificity impacting user's quality of search</li>
          </ul>
        </div>

    <div className="my-20 text-center">
        <hr className="border-t border-gray-200 mx-auto" style={{ width: '20%' }} />
      </div>

      <div className="text-center mt-8 px-10"> 
        <h2 className="text-3xl font-bold mb-4">Key Takeaways</h2>
        <ol className="list-decimal mx-auto text-lg text-left pl-10 mt-12">
          <li className="mb-6">
            <em>Lack of Respect for Users' Time</em>
            <p >Respecting a user's time and providing an efficient platform is crucial for enhancing user experience and satisfaction, this is essential because people value efficiency and convenience in their online interactions.</p>
          </li>
          <li className="mb-6">
            <em>Need for Specialized Platform</em>
            <p>Specialized platforms are crucial because they cater to specific needs and target audiences, providing tailored experienced and focused solutions. Platforms highly-saturated in their available services may be difficult to navigate, and users may find less specialization in their desired product or service.</p>
          </li>
          <li className="mb-6">
            <em>Simple User Interface</em>
            <p>Having an intuitive user interface (UI) that is simple and easy to use is vital, because users appreciate a seamless and straightforward experience that allows them to navigate effortlessly and achieve their goals efficiently. By prioritizing simplicity and intuitiveness in UI design, a platform can create a positive user experience, foster user engagement, and build long-term user loyalty.</p>
          </li>
        </ol>
      </div>

      <hr className="my-20 border-t border-gray-200" />

      <div className="text-center mt-8 px-10"> 
        <h2 className="text-3xl font-bold mb-4">Project Scoping & Initial Sketches</h2>
      </div>

      <div className="text-center mt-12">
        <img 
          src={stickie} 
          alt="Initial Brainstorming of Product - Stickie" 
          className="mx-auto mb-4"
          style={{ maxWidth: '500px', height: 'auto' }} 
        />
        <p className="text-md mb-8">Initial brainstorming of product</p>

        <img 
          src={proto} 
          alt="Initial Brainstorming of Product - Proto" 
          className="mx-auto mb-4"
          style={{ maxWidth: '500px', height: 'auto' }} 
        />
        <p className="text-md">Initial brainstorming of product</p>
      </div>

      <div className="my-20 text-center">
        <hr className="border-t border-gray-200 mx-auto" style={{ width: '20%' }} />
      </div>

      <div className="text-center mt-8 px-10"> 
        <h2 className="text-3xl font-bold mb-4">User Flowcharts & LoFi Prototypes</h2>
        <p className="text-lg mx-auto max-w-3xl mb-16 mt-4">
          Before building out the high-fidelity designs, I mapped out the core user flows and sketched low-fidelity wireframes to work through the logic and layout of each feature.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img
              src={flowItemType}
              alt="User flow and wireframes for specifying item type when posting"
              className="mx-auto"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>

          <div>
            <img
              src={flowMapListView}
              alt="User flow and wireframes for viewing items by map or list"
              className="mx-auto"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>

          <div>
            <img
              src={flowConfirmPost}
              alt="User flow and wireframes for confirming a post before submitting"
              className="mx-auto"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>

          <div>
            <img
              src={flowUploadImage}
              alt="User flow and wireframes for the upload step when posting"
              className="mx-auto"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>

      <hr className="my-20 border-t border-gray-200" />

      <div className="text-center mt-8 px-10">
        <h2 className="text-3xl font-bold mb-4">Iteration 1</h2>
        <p className="text-lg mx-auto max-w-3xl mb-16 mt-4">
          The first round of high-fidelity designs explored a teal and yellow color palette with a hamburger navigation menu.
        </p>
        <img
          src={iteration1}
          alt="First iteration of high-fidelity screens for dibs, in a teal and yellow color palette"
          className="mx-auto"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>

      <hr className="my-20 border-t border-gray-200" />

      <div className="text-center mt-8 px-10">
        <h2 className="text-3xl font-bold mb-4">Iteration 2</h2>
        <p className="text-lg mx-auto max-w-3xl mb-16 mt-4">
          The second iteration moved toward a more minimal layout with a sage green accent color.
        </p>
        <img
          src={iteration2}
          alt="Second iteration of high-fidelity screens for dibs, in a sage green and neutral color palette"
          className="mx-auto"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>

      <hr className="my-20 border-t border-gray-200" />

      <div className="text-center mt-8 px-10">
        <h2 className="text-3xl font-bold mb-4">Solution Validation</h2>
        <p className="text-lg mx-auto max-w-3xl mb-16 mt-4">
          Before moving into development, a solution survey was run to test the homepage and post-item page mockups.
        </p>
      </div>

      <div className="flex justify-center items-center space-x-4 mt-4">
        <div style={pieChartStyle}>
          <Pie data={pieChartData(92)} />
        </div>
        <div style={pieChartStyle}>
          <Pie data={pieChartData(82)} />
        </div>
        <div style={pieChartStyle}>
          <Pie data={pieChartData(97)} />
        </div>
      </div>

      <div className="text-center mt-16 px-10">
        <ul className="list-disc mx-10 text-left inline-block">
          <li>92% liked the layout of the homepage</li>
          <li>82% found the post-item page intuitive</li>
          <li>The large majority of respondents said they'd use dibs! to both dispose of and find items, rather than just one or the other</li>
          <li>The most-requested piece of info before claiming a free item was its condition, followed by location and price</li>
        </ul>
      </div>

      <hr className="my-20 border-t border-gray-200" />

      <div className="text-center mt-8 px-10">
        <h2 className="text-3xl font-bold mb-4">Iteration 3</h2>
        <p className="text-lg mx-auto max-w-3xl mb-16 mt-4">
          Incorporating feedback from the solution survey, the third iteration settled on a clean black-and-white palette that carried through to the final designs.
        </p>
        <img
          src={iteration3}
          alt="Third iteration of high-fidelity screens for dibs, in a black and white color palette"
          className="mx-auto"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>

      <hr className="my-20 border-t border-gray-200" />

      <div className="text-center mt-8 px-10"> 
        <h2 className="text-3xl font-bold mb-4">Key Features</h2>
      </div>

      <div className="text-center mt-8 px-10"> 
        <ol className="list-decimal mx-auto text-lg text-left pl-10 mt-12">
          <li className="mb-6">
            <em>Post / View / Favorite</em>
            <p >Post: If you have furniture you no longer need, you can easily post it on the app. Provide a description, add photos, and specify relevant details. By posting your furniture items, you're opening up the opportunity for other students to discover and claim them.</p>
            <p >View: When browsing through the app, you can explore a wide variety of listings posted by fellow students. View detailed information, including photos and descriptions, to get a clear picture of each furniture item.</p>
            <p >Favorite: Found a furniture item you love? Simply mark it as a favorite to save it for future reference. This feature allows you to create a personalized collection of furniture pieces that caught your interest. It's a convenient way to keep track of your preferred items and make informed decisions when it's time to claim or arrange pickups.</p>
          </li>
          <li className="mb-6">
            <em>Proximity-Based Claiming</em>
            <p>Proximity-Based Claiming is a unique feature of the app that ensures a fair and efficient furniture exchange experience. Here's how it works: When you come across a furniture item you're interested in, you can only claim it if you're within 300 feet of its location. This means you can't just sit at home and claim items remotely. Instead, you need to physically be in close proximity to the item to secure it through the app. This feature encourages local connections, prevents unfair claiming, and adds a level of excitement to your search for free furniture.</p>
          </li>
          <li className="mb-6">
            <em>Filter by Tags</em>
            <p>Personalize your search and explore targeted furniture options by applying tags such as color, condition, or item type. Refine your search results to eliminate irrelevant listings, ensuring that the furniture presented to you aligns closely with your desired criteria. It's a powerful feature that saves you time and allows you to focus on finding the perfect furniture pieces that match your unique preferences.</p>
          </li>
        </ol>
      </div>

      <hr className="my-20 border-t border-gray-200" />

      <div className="text-center mt-8 px-10">
        <h2 className="text-3xl font-bold mb-4">Final Designs</h2>
        <p className="text-lg mx-auto max-w-3xl mb-16 mt-4">
          Incorporating feedback from the solution survey, here are the final high-fidelity screens for browsing items, posting a new item, and viewing an item's details.
        </p>
        <img
          src={finalScreens}
          alt="Final high-fidelity screens for the homepage, post item form, and item details page"
          className="mx-auto"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>

      <div className="text-center mt-28 mb-28">
        <a
          href="https://www.figma.com/proto/SlVv2eJhHMfaxX39i2agZw/Dibs-Mobile-Prototype?page-id=0%3A1&type=design&node-id=1-264&viewport=809%2C-55%2C0.22&t=U0Cd8YstaFU5In4K-1&scaling=min-zoom&starting-point-node-id=1%3A264&mode=design"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white py-6 px-12 rounded-full"
        >
          View Final Prototype
        </a>
      </div>

      <DarkFooter/>
    </div>
  );
}

export default Dibs;
