import React from "react";
import RedNavbar from "./WhiteNavbar";
import beachImg from "../Assets/Images/beach.png";
import snowImg from "../Assets/Images/snow.png";
import fijiBeach from "../Assets/Images/fijiBeach.png";
import miami from "../Assets/Images/miami.png";
import highlands from "../Assets/Images/highlands.png";
import clothes from "../Assets/Images/clothes.png";
import sky from "../Assets/Images/sky.png";
import fiji from "../Assets/Images/fiji.png";
import camp from "../Assets/Images/camp.png";
import DarkFooter from "./DarkFooter";
import ivanmiami from "../Assets/Images/ivanmiami.JPG";
import bostonsnow from "../Assets/Images/bostonsnow.JPG";
import miamisun from "../Assets/Images/miamisun.JPG";
import macau from "../Assets/Images/mongs.jpeg";
import aus from "../Assets/Images/aus.jpeg";
import boscomm from "../Assets/Images/boscommons.JPG";
import buIvySign from "../Assets/Images/bu-ivy-sign.jpg";
import buLawn from "../Assets/Images/bu-lawn.jpg";
import playaDelCarmenHouse from "../Assets/Images/playa-del-carmen-house.jpg";
import playaDelCarmenPalms from "../Assets/Images/playa-del-carmen-palms.jpg";
import fijiHighlandsDoorway from "../Assets/Images/fiji-highlands-doorway.jpg";
import fijiHighlandsHouse from "../Assets/Images/fiji-highlands-house.jpg";
import fijiHighlandsWater from "../Assets/Images/fiji-highlands-water.jpg";
import fijiHighlandsHikers from "../Assets/Images/fiji-highlands-hikers.jpg";

function Photography() {
  const images = [
    { src: fijiBeach, alt: "img of beach", caption: "Nadi, Fiji" },
    { src: highlands, alt: "img of highlands", caption: "Highlands, Fiji" },
    { src: clothes, alt: "img of clothesline", caption: "Highlands, Fiji" },
    { src: sky, alt: "img of sky", caption: "Highlands, Fiji" },
    { src: fiji, alt: "img of fiji", caption: "Highlands, Fiji" },
    { src: fijiHighlandsDoorway, alt: "img of kids in a doorway, Fiji", caption: "Highlands, Fiji" },
    { src: fijiHighlandsHouse, alt: "img of house with kids, Fiji", caption: "Highlands, Fiji" },
    { src: fijiHighlandsWater, alt: "img of kids playing in water, Fiji", caption: "Highlands, Fiji" },
    { src: fijiHighlandsHikers, alt: "img of hikers overlooking Fiji highlands", caption: "Highlands, Fiji" },
    { src: playaDelCarmenHouse, alt: "img of beach house in Playa Del Carmen", caption: "Playa Del Carmen, Mexico" },
    { src: snowImg, alt: "img of boston, winter", caption: "Allston, Boston" },
    { src: miami, alt: "img of playa del carmen", caption: "Playa Del Carmen, Mexico" },
    { src: ivanmiami, alt: "img of friend in florida", caption: "South Beach, Florida" },
    { src: bostonsnow, alt: "img of boston snowfall", caption: "Allston, Boston" },
    { src: miamisun, alt: "img of florida sun", caption: "South Beach, Florida" },
    { src: macau, alt: "img of macau", caption: "Macau, China" },
    { src: camp, alt: "img of camp", caption: "Redwood Glen, California" },
    { src: aus, alt: "img of australia", caption: "Gold Coast, Australia" },
    { src: boscomm, alt: "img of boston commons", caption: "Boston Commons, Boston" },
    { src: buIvySign, alt: "img of Boston University ivy sign", caption: "Boston University" },
    { src: beachImg, alt: "img of beach, florida", caption: "South Beach, Florida" },
    { src: buLawn, alt: "img of students relaxing on BU lawn", caption: "Boston University" },
    { src: playaDelCarmenPalms, alt: "img of palm trees on the beach in Playa Del Carmen", caption: "Playa Del Carmen, Mexico" },
  ];

  return (
    <div
      className="h-screen flex flex-col justify-center"
      style={{
        backgroundSize: "80%", 
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
