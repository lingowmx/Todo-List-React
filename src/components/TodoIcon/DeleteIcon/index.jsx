import React from "react";
import { TodoIcon } from "../";

export const DeleteIcon = ({onDelete}) => {
  return <TodoIcon type="delete" color="grey" onClick={onDelete}/>;
};
 