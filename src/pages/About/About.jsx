import React from "react";
import Info from "../../Component/Info/Info";
import { FaDownload } from "react-icons/fa";
import Cv from "../../Assets/SudevKumar.pdf";
import Stats from "../../Component/Stats/Stats";
import "./About.css";
import Skills from "../../Component/Skills/Skills";
import { resume } from "../../Assets/data";
import ResumeItem from "../../Component/ResumeItem/ResumeItem";

const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section__title">
          About <span>Me</span>
        </h2>

        <div className="about__container grid">
          <div className="about__info">
            <h3 className="section__subtitle">Personal Info's</h3>

            <ul className="info__list grid">
              <Info />
            </ul>
            <a href={Cv} className="button" download>
              Download CV{" "}
              <span className="button__icon">
                <FaDownload />
              </span>
            </a>
          </div>

          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>

      <div className="separator"></div>

      <section className=" skills">
        <h3 className="section__subtitle subtitle__center">My Skills</h3>

        <div className="skills__container grid">
          <Skills />
        </div>
      </section>

      <div className="separator"></div>

      <div className="resume">
        <h3 className="section__subtitle subtitle__center">Education</h3>

        <div className="resume__container">
          <div className="resume__data">
            {resume?.map((ele, ind) => (
              <ResumeItem key={ele.id} {...ele} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
