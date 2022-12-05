import React from "react";
import Footers from "../components/Footers/Footers";
import Navbar from "../components/Navbar/Navbar";
import HeroImages from '../components/HeroImageForRest/HeroImages'
import Aboutme from "../components/AboutMe/Aboutme";

function About() {
  return (
    <>
      <Navbar />
      <HeroImages heading="About me." />
      <Aboutme />
      <Footers />
    </>
  );
}

export default About;
