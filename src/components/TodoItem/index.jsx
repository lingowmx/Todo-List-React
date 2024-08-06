import "./index.css";

import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";

export const TodoItem = ({ text, completed, onComplete, onDelete }) => {
  return (
    <li className="items">
      <CompleteIcon completed={completed} onComplete={onComplete} />
      {/* <span className={`icon icon-check ${completed && "icon-check--active"}`}
        onClick={onComplete}><SiNike /></span> */}
      <p className={`todo-item ${completed && "todo-item-complete"}`}>{text}</p>
      <DeleteIcon onDelete={onDelete} />
      {/* <span className="icon icon-close"
        onClick={onDelete}><IoCloseSharp /></span> */}
    </li>
  );
};
