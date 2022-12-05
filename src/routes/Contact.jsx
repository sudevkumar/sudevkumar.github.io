import React from "react";
import Footers from "../components/Footers/Footers";
import Navbar from "../components/Navbar/Navbar";
import HeroImages from '../components/HeroImageForRest/HeroImages'
import Contactme from "../components/ContactMe/Contactme";

function Contact() {
  return (
    <>
      <Navbar />
      <HeroImages heading="Contact Me." text="Let's Have A Chat"/>
      <Contactme />
      <Footers />
    </>
  );
}

export default Contact;
