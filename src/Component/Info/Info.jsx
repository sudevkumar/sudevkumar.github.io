import React from "react";
import { personalInfo } from "../../Assets/data";

const Info = () => {
  return (
    <>
      {personalInfo?.map(({ title, description }, ind) => (
        <li className="info__item" key={ind}>
          <span className="info__title">{title}</span>
          <span className="info__description">{description}</span>
        </li>
      ))}
    </>
  );
};

export default Info;
