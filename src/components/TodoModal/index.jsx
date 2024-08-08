import React, { useContext, useState } from "react";
import { MyTodosContext } from "../Context";

import "./index.css";

export const TodoModal = () => {
  const {
    setOpenModal,
    addTodo
  } = useContext(MyTodosContext);
  const [newTodoValue, setNewTodoValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue)
    setOpenModal(false);
  };
  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }
  return (
    <form className="todo-form" onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea 
        placeholder="Cortar zanahoria" 
        value={newTodoValue}
        onChange={onChange}/>
      <div className="TodoForm-buttton-container">
        <button
          className="todo-form-button todo-form-button--cancel"
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          className="todo-form-button todo-form-button--add"
          type="submit"
        >
          Agregar
        </button>
      </div>
    </form>
  );
};
