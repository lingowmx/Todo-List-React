import React, { useState } from "react";
import { createContext } from "react";
import { useLocalStorage } from "../../App/useLocalStorage";

export const MyTodosContext = createContext();
export const TodosProvider = ({ children }) => {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("todos_v1", []);
  const [searchValue, setSearchValue] = React.useState("");
  console.log("los usuarios buscan todos de" + searchValue);
  const [openModal, setOpenModal] = useState(false);
//   const openModal = () => setIsOpenModal(true)
//   const closeModal = () => setIsOpenModal(false)

  //estados derivados
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false
    });
    saveTodos(newTodos)
  }

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  return (
    <MyTodosContext.Provider
      value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        addTodo,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,

      }}
    >
      {children}
    </MyTodosContext.Provider>
  );
};
