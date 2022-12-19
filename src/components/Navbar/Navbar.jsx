import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import Cv from "../../Assets/Sudev-kumar-Resume.pdf";

function Navbar() {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

  const handleClick = () => setClick(!click);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const handleClickEvent = () => {
    window.open(
      "https://drive.google.com/file/d/1-O6Y1qVOGjvnNgXPW2B3MBmI3fowEiCk/view?usp=share_link",
      "_blank",
      "noopener,noreferrer"
    );
  };

  window.addEventListener("scroll", changeColor);



  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        {/* <h1>ₛᵤDₑᵥ ₖᵤₘₐᵣ</h1> */}
        <h1 className="sudev-kumar-heading">ＳＵＤΣＶ ＫＵＭΛＲ</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/project">Project</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

        <li>
          <a href={Cv} download onClick={handleClickEvent}>
            Resume
          </a>
        </li>
      </ul>

      <div className="hamberger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
}

export default Navbar;
