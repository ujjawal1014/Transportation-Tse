import React from "react";
import MAIN from "./MAIN.mp4"; // Corrected the path
import "./Video_Section.css";

export default function Video_Section() {
  return (
    <div className="video-section">
      <video className="background-video" autoPlay loop muted>
        <source src={MAIN} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
