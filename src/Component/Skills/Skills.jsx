import React from "react";
import { skills } from "../../Assets/data";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  return (
    <>
      {skills?.map(({ title, percentage }, ind) => (
        <div className="progress__box" key={ind}>
          <div className="progress__circle">
            <CircularProgressbar
              strokeWidth={5.5}
              text={`${percentage}%`}
              value={percentage}
            />
          </div>

          <h3 className="skills__title">{title}</h3>
        </div>
      ))}
    </>
  );
};

export default Skills;
