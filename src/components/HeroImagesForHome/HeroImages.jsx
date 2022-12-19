import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./heroimages.css";
import Cv from "../../Assets/Sudev-kumar-Resume.pdf";
import Aboutme from "../AboutMe/Aboutme";
import MyProjects from "../MyProjects/MyProjects";

function HeroImages() {
  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/1-O6Y1qVOGjvnNgXPW2B3MBmI3fowEiCk/view?usp=share_link",
      "_blank",
      "noopener,noreferrer"
    );
  };

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
          <a href={Cv} download className="btn" onClick={handleClick}>
            Download CV
          </a>

          <Link to="/contact" className="btn btn-light">
            CONTACT
          </Link>
        </div>
      </div>
      <Aboutme />
      <div className="my-project-projects">
        <h1 className="flow about-heading">
          <span>My</span> Projects{" "}
        </h1>
        <MyProjects />
      </div>
      {/* <MyProjects /> */}
    </div>
  );
}

export default HeroImages;
