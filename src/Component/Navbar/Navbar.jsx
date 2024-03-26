import React, { useState } from "react";
import { links } from "../../Assets/data";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="nav">
      <div className={` ${showMenu ? "nav__menu show-menu" : "nav__menu"}`}>
        <ul className="nav__list">
          {links?.map(({ name, icon, path }, ind) => (
            <li className="nav__item" key={ind}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? "nav__link active-nav" : "nav__link"
                }
                onClick={() => setShowMenu(!showMenu)}
              >
                {icon}
                <h3 className="nav__name">{name}</h3>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={` ${
          showMenu ? "nav__toggle animate-toggle" : "nav__toggle"
        }`}
        onClick={() => setShowMenu(!showMenu)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
