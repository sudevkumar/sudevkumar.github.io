import React from "react";
import { stats } from "../../Assets/data";
import parse from "html-react-parser";

const Stats = () => {
  return (
    <>
      {stats.map(({ no, title }, ind) => (
        <div className="stats__box" key={ind}>
          <h3 className="stats__no">{no}</h3>
          <p className="stats__title">{parse(title)}</p>
        </div>
      ))}
    </>
  );
};

export default Stats;
