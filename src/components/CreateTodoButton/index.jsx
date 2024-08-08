import { MyTodosContext } from "../Context";
import "./index.css";
import { useContext } from "react";

export const CreateTodoButton = () => {
  const {setOpenModal} = useContext(MyTodosContext)
  const toggleModal = () => {
    setOpenModal(state => !state)
  }
  return (
    <>
      <div className="button-container">
        <button className="create-button"
        onClick={toggleModal}>+</button>
      </div>
    </>
  );
};
