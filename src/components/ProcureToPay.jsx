import React from "react";
import DarkNavbar from "./DarkNavbar";
import DarkFooter from "./DarkFooter";

import sitemapImg from "../Assets/Images/procuretopay-sitemap.jpg";
import homepageImg from "../Assets/Images/procuretopay-homepage.jpg";
import sourcingPageImg from "../Assets/Images/procuretopay-sourcing-page.jpg";
import heroMockupImg from "../Assets/Images/procuretopay-hero-mockup.png";

function ProcureToPay() {
  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <div className="fixed top-0 left-0 right-0 z-50">
        <DarkNavbar />
      </div>
      <div className="text-center pt-10 px-20">
        <h2 className="text-sm lowercase mb-6 text-black">bu spark! client project - spring 2025</h2>
        <h1 className="text-6xl font-bold my-10 text-black">Modernizing Procurement: A Website Redesign for BU's Procurement Office</h1>

        <div className="flex justify-center mb-10 mt-4">
          <img
            src={heroMockupImg}
            alt="MacBook mockup of the redesigned Procure to Pay homepage"
            style={{ maxWidth: '900px', width: '100%', height: 'auto' }}
          />
        </div>
      </div>

      <div className="text-left pl-10 text-black">
        <div className="my-4">
          <h3 className="text-lg font-bold inline-block mr-2">summary:</h3>
          <span>A full visual and UX redesign of BU's Procurement Office website, aimed at modernizing outdated content and improving the overall user experience.</span>
        </div>

        <div className="my-4">
          <h3 className="text-lg font-bold inline-block mr-2">position:</h3>
          <span>UI/UX design, client relationship management</span>
        </div>

        <div className="my-4">
          <h3 className="text-lg font-bold inline-block mr-2">tech stack:</h3>
          <span>Figma</span>
        </div>
      </div>

      <div className="my-20 text-center">
        <hr className="border-t border-black mx-auto" style={{ width: '20%' }} />
      </div>

      <div className="text-center mt-8 px-16 text-black">
        <p className="text-lg mx-auto">
          As a BU Spark! fellowship alum, I was invited back to help the Boston University Procurement Office modernize their website. Much of the existing content was outdated, and the look and feel no longer reflected a clear, modern user experience. I partnered directly with the client to lead a full UI/UX redesign — managing the relationship from initial audit through final designs.
        </p>
      </div>

      <hr className="my-20 border-t border-black" />

      <div className="text-center mt-8 px-16 text-black">
        <h2 className="text-3xl font-bold mb-4">Mapping the Existing Site</h2>
        <p className="text-lg mx-auto">
          Before any visual design work began, the first step was understanding the full scope of what already existed. I built a complete site map of the Procurement Office's website — auditing every page and subpage across areas like Sourcing & Procurement, Travel Services, Payment Services, and Accounts Payable. This gave both my team and the client a shared, visual understanding of the site's actual structure, and surfaced opportunities to consolidate redundant pages, flag content that needed to move, and make key decisions about what to simplify — laying the groundwork for the navigation restructure that followed.
        </p>

        <a href={sitemapImg} target="_blank" rel="noopener noreferrer" className="block mt-12">
          <img
            src={sitemapImg}
            alt="Initial site map and content audit of the BU Procurement Office website"
            className="mx-auto rounded-lg shadow-md"
            style={{ maxWidth: '900px', width: '100%', height: 'auto' }}
          />
        </a>
        <p className="text-sm text-gray-500 mt-4">Initial site map and content audit — click to view full size</p>
      </div>

      <hr className="my-20 border-t border-black" />

      <div className="text-center mt-8 px-10 text-black">
        <h2 className="text-3xl font-bold mb-4">Key Features</h2>

        <div className="mt-16 text-left">
          <h3 className="text-2xl font-bold mb-2">1. Visual Identity & Branding Refresh</h3>
          <p className="text-lg">
            The site's outdated look and feel no longer reflected the university's standards or the Procurement Office's role as a trusted resource. We refreshed the visual identity — typography, color palette, and layout — to create a cleaner, more modern, and more credible presence for the office.
          </p>
        </div>

        <div className="mt-10 text-left">
          <h3 className="text-2xl font-bold mb-2">2. Restructured Navigation</h3>
          <p className="text-lg">
            The previous navigation buried key resources and forms behind unclear labels and disorganized menus. We restructured the site's navigation to group related content logically, making it easier for students, faculty, and staff to quickly find the procurement resources they need.
          </p>
        </div>
      </div>

      <div className="my-20 text-center">
        <hr className="border-t border-black mx-auto" style={{ width: '20%' }} />
      </div>

      <div className="text-center mt-8 px-10 text-black">
        <h2 className="text-3xl font-bold mb-4">Selected Pages</h2>
        <p className="text-lg mx-auto max-w-3xl mb-16">
          A closer look at two of the redesigned pages, shown at full length.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          <div>
            <img
              src={homepageImg}
              alt="Redesigned Procure to Pay homepage"
              className="w-full rounded-lg shadow-md border border-gray-200"
            />
            <p className="text-center text-sm text-gray-500 mt-4">Homepage</p>
          </div>

          <div>
            <img
              src={sourcingPageImg}
              alt="Redesigned Sourcing page"
              className="w-full rounded-lg shadow-md border border-gray-200"
            />
            <p className="text-center text-sm text-gray-500 mt-4">Sourcing Page</p>
          </div>
        </div>
      </div>

      <div className="my-20 text-center">
        <hr className="border-t border-black mx-auto" style={{ width: '20%' }} />
      </div>

      <div className="text-center mt-28 mb-28">
        {/* TODO: once you have a real Figma/prototype link, swap this <button> back to an <a href="..." target="_blank" rel="noopener noreferrer"> */}
        <button
          type="button"
          title="Prototype link coming soon"
          className="bg-white text-black py-6 px-12 rounded-full border border-black cursor-not-allowed opacity-60"
        >
          View Final Prototype
        </button>
      </div>

      <DarkFooter/>
    </div>
  );
}

export default ProcureToPay;
