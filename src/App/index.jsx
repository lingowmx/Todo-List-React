import React from "react";
//COMPONENTS
import { AppUI } from "./AppUI";
import { useLocalStorage } from "./useLocalStorage";

import "../App.css";

// localStorage.removeItem('todos_v1');

// const defaultTodos = [
//   { text: "Completar el curso", completed: true },
//   { text: "Alimentar al gatico ", completed: false },
//   { text: "Llamar al veterinario", completed: true },
//   { text: "Pedir la bateria del coche", completed: true },
//   { text: "Acudir al C5", completed: true },
//   { text: "Entregar el pez al ACUARIO", completed: false },
// ];

// localStorage.setItem('todos_v1', JSON.stringify(defaultTodos));

//funcion actualizadora al estado  y local storage

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("todos_v1", []);
  const [searchValue, setSearchValue] = React.useState("");
  console.log("los usuarios buscan todos de" + searchValue);

  //estados derivados
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

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
    <AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
