import React from "react";
import "../App.css";
import "./HeroSection2.css";
import Rankings from "../images/ifhe-ranking-banner.jpg";
function HeroSection2() {
  return (
    <>
      <h1>
        <i className="fa-sharp fa-solid fa-award-simple"></i>Rankings/Awards
      </h1>
      <div className="hero-container2">
        <img src={Rankings} alt="" className="ranking" />
        <div className="rnkPara">
          <h2>National Assessment and Accreditation Council (NAAC) - 2022</h2>
          <p>3.59/4.00 A++ Grade</p>
          <h2>CRISIL Business School Grading 2022</h2>
          <p>A*** at National & State Level</p>
          <h2>Careers 360 University Ranking Survey - 2022</h2>
          <p>3.59/4.00 A++ Grade</p>
        </div>
      </div>
    </>
  );
}

export default HeroSection2;
