import React from "react";
import beachImg from "./beach.png";
import commonsImg from "./commons.png";
import snowImg from "./snow.png";

function Carousel() {
  return (
    <div className="w-64 carousel rounded-none">
  <div className="carousel-item w-full">
    <img src={beachImg} className="w-full" alt="Tailwind CSS Carousel component" />
  </div> 
  <div className="carousel-item w-full">
    <img src={commonsImg} className="w-full" alt="Tailwind CSS Carousel component" />
  </div> 
  <div className="carousel-item w-full">
    <img src={snowImg} className="w-full" alt="Tailwind CSS Carousel component" />
  </div> 
  <div className="carousel-item w-full">
    <img src={beachImg} className="w-full" alt="Tailwind CSS Carousel component" />
  </div>
</div>
  );
}

export default Carousel;
