import React from "react";
import { SiNike } from "react-icons/si";
import { IoCloseSharp } from "react-icons/io5";
import "./index.css";

const iconTypes = {
  check: (color) => <SiNike className="icon-svg" fill={color} />,
  delete: (color) => <IoCloseSharp className="icon-svg" fill={color} />,
};

export const TodoIcon = ({ type, color, onClick }) => {
  return (
    <span className={`icon-container icon-container-${type}`} onClick={onClick}>
      {iconTypes[type](color)}
    </span>
  );  
};
