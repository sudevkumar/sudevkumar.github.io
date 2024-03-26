import React from "react";
import Profile from "../../Assets/assets/home.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <section className=" home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I am Sudev Kumar.</span> Full Stack Developer.
          </h1>

          <p className="home__decription">
            I'm an India-based full-stack developer focused on crafting clean &
            user-friendly experiences. I'm passionate about building excellent
            websites and software that improve the lives of those around me. I
            want to begin a career as an entry-level software engineer with a
            reputable company that is focused on technology.
          </p>

          <Link to={"/about"} className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;
