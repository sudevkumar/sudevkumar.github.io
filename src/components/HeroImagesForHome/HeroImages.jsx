import React from "react";
import { Link } from "react-router-dom";
import "./heroimages.css";
import Cv from "../../Assets/Cv.pdf"

function HeroImages() {
  return (
    <div className="hero">
      <div className="mask">
        <img
          src="https://wallpaperaccess.com/full/5651992.png"
          alt=""
          className="into-img"
        />
      </div>
      <div className="content">
        <p>Hi, I'm Sudev Kumar</p>
        <h1>FRONT-END DEVELOPER.</h1>
        <div className="btn-btn">
          <a href={Cv} download className="btn">
            Download CV
          </a>
          <Link to="/contact" className="btn btn-light">CONTACT</Link>
        </div>
      </div>
    </div>
  );
}

export default HeroImages;
