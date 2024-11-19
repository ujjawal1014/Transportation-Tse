import React from "react";
import "./Carousel.css";

export default function Carousel() {
  return (
    <div className="container-carousel">
      {/* Left Section: Be Safe Text */}
      <div className="text-section">
        <h1 className="text">Be Safe</h1>
        <p className="subtext">Your safety is our priority!</p>
      </div>

      {/* Right Section: Image */}
      <div className="image-section">
        <img 
          src="https://27eastmount.s3.amazonaws.com/2020/01/Heller_EHFD-MVA-HR-27-at-Georgica-Rd-1-20-20_2876-scaled.jpg" 
          alt="Transportation Safety"
          className="image"
        />
      </div>
    </div>
  );
}
