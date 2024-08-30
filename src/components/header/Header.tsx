import React, { useState, useEffect } from "react";
import "./Header.css";
import { headerImages } from "../../contants";
export default function Header() {
  const images = headerImages;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentImageIndex ? "active" : ""}`}
        >
          <img loading="lazy" src={image} alt={`Slide ${index}`} />
          <div className="overlay">
            <p>Get Ready to Bite into Flavor Heaven!</p>
          </div>
        </div>
      ))}
    </div>
  );
}
