import React from "react";
import { TodoIcon } from "../index";

export const CompleteIcon = ({ completed, onComplete}) => {
  return <TodoIcon type="check" color={completed ? "green" : "grey"} onClick={onComplete}/>;
};
