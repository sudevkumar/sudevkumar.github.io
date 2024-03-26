import React from "react";

const ThemeItem = ({
  color,
  img,
  changeColor,
  showSwitcher,
  setShowSwitcher,
}) => {
  return (
    <img
      src={img}
      alt="color"
      className="theme__img"
      onClick={() => {
        changeColor(color);
        setShowSwitcher(!showSwitcher);
      }}
    />
  );
};

export default ThemeItem;
