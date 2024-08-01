import "./index.css"
import { SiNike } from "react-icons/si";
import { IoCloseSharp } from "react-icons/io5";

export const TodoItem = ({text, completed}) => {
  return (
    <li className="items">
        <span className={`icon icon-check ${completed && "icon-check--active"}`}><SiNike /></span>
        <p className={`todo-item ${completed && "todo-item-complete"}`}>{text}</p>
        <span className="icon icon-close"><IoCloseSharp /></span>
    </li>
  )
}
