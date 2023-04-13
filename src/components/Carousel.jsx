import React from "react";
import beachImg from "../Assets/Images/beach.png";
import commonsImg from "../Assets/Images/commons.png";
import snowImg from "../Assets/Images/snow.png";
import fijiBeach from "../Assets/Images/fijiBeach.png";
import fiji from "../Assets/Images/fiji.png";
import Fbeach from "../Assets/Images/Fbeach.png";
import highlands from "../Assets/Images/highlands.png";
import clothes from "../Assets/Images/clothes.png";
import sky from "../Assets/Images/sky.png";



function Carousel() {
  return (
    <div className="w-64 carousel rounded-none">
  <div className="carousel-item w-full">
    <img src={beachImg} className="w-full" alt="img of beach, florida" />
  </div> 
  <div className="carousel-item w-full">
    <img src={commonsImg} className="w-full" alt="img of boston commons" />
  </div> 
  <div className="carousel-item w-full">
    <img src={snowImg} className="w-full" alt="img of boston, winter" />
  </div> 
  <div className="carousel-item w-full">
    <img src={fijiBeach} className="w-max" alt="img of beach" />
  </div>
  <div className="carousel-item w-full">
    <img src={fiji} className="w-full" alt="img of fiji" />
  </div>
  <div className="carousel-item w-full">
    <img src={Fbeach} className="w-full" alt="img of beach, fiji" />
  </div>
  <div className="carousel-item w-full">
    <img src={highlands} className="w-full" alt="img of highlands" />
  </div>
  <div className="carousel-item w-full">
    <img src={clothes} className="w-full" alt="img of clothesline" />
  </div>
  <div className="carousel-item w-full">
    <img src={sky} className="w-full" alt="img of sky" />
  </div>
</div>
  );
}

export default Carousel;
