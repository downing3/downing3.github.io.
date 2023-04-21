import React from "react";
import RedNavbar from "./RedNavbar";
import beachImg from "../Assets/Images/beach.png";
import commonsImg from "../Assets/Images/commons.png";
import snowImg from "../Assets/Images/snow.png";
import fijiBeach from "../Assets/Images/fijiBeach.png";
import miami from "../Assets/Images/miami.png";
import highlands from "../Assets/Images/highlands.png";
import clothes from "../Assets/Images/clothes.png";
import sky from "../Assets/Images/sky.png";
import fiji from "../Assets/Images/fiji.png";
import camp from "../Assets/Images/camp.png";
import DarkFooter from "./DarkFooter";

function Photography() {
  const images = [
    { src: beachImg, alt: "img of beach, florida", caption: "South Beach, Florida" },
    { src: commonsImg, alt: "img of boston commons", caption: "Boston Commons, Boston" },
    { src: snowImg, alt: "img of boston, winter", caption: "Allston, Boston" },
    { src: miami, alt: "img of playa del carmen", caption: "Playa Del Carmen, Mexico" },
    { src: fijiBeach, alt: "img of beach", caption: "Nadi, Fiji" },
    { src: highlands, alt: "img of highlands", caption: "Highlands, Fiji" },
    { src: clothes, alt: "img of clothesline", caption: "Highlands, Fiji" },
    { src: sky, alt: "img of sky", caption: "Highlands, Fiji" },
    { src: fiji, alt: "img of fiji", caption: "Highlands, Fiji" },
    { src: camp, alt: "img of camp", caption: "Redwood Glen, California" },
  ];

  return (
    <div
      className="h-screen flex flex-col justify-center"
      style={{
        backgroundSize: "80%", // adjust to control image size
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat", 
        backgroundColor: "black",
      }}
    >
      <RedNavbar />
      <div className="flex-1 overflow-y-scroll">
        <div className="grid grid-cols-2 gap-4 p-4">
          {images.map((image) => (
            <div key={image.alt} className="w-full">
              <img
                src={image.src}
                className="w-full h-auto object-cover"
                alt={image.alt}
              />
              <p className="text-center font-light text-white bg-transparent mt-4">
                {image.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <DarkFooter />
      </div>
    </div>
  );
}

export default Photography;
