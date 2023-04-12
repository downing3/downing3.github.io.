import React from "react";
import Carousel from "./Carousel";
import Footer from "./Footer";
import NavBar from "./NavBar";

function Photography() {
  return (
    <div className="bg-sage h-screen flex flex-col justify-center">
      <NavBar />
      <div className="flex-1 flex items-center justify-center">
        <Carousel />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Photography;
