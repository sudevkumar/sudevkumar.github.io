import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroImages from "../components/HeroImagesForHome/HeroImages";
import Footers from "../components/Footers/Footers";


function Home() {
  return (
    <div className="xyz">
      <Navbar />
      <HeroImages />
      <Footers />
    </div>
  );
}

export default Home;
