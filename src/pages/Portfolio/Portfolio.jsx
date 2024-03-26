import React from "react";
import { portfolio } from "../../Assets/data";
import PortfolioItem from "../../Component/PortfolioItem/PortfolioItem";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section className=" portfolio section">
      <h2 className=" section__title">
        My <span>Portfolio</span>
      </h2>

      <div className="portfilio__container container grid">
        {portfolio?.map((item, ind) => (
          <PortfolioItem key={ind} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
