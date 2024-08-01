import React from "react";
//COMPONENTS
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoCounter } from "./components/TodoCounter";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoItem } from "./components/TodoItem";

import "./App.css";

const defaultTodos = [
  { text: "Completar el curso", completed: true },
  { text: "Alimentar al gatico ", completed: false },
  { text: "Llamar al veterinario", completed: true },
  { text: "Pedir la bateria del coche", completed: true },
  { text: "Acudir al C5", completed: true },
  { text: "Entregar el pez al ACUARIO", completed: false },

];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState("");
  console.log("los usuarios buscan todos de" + searchValue);

  //estados derivados
const completedTodos = todos.filter(todo => !!todo.completed).length
const totalTodos = todos.length
const searchedTodos = todos.filter((todo) => {
  const todoText = todo.text.toLowerCase()
  const searchText = searchValue.toLowerCase()
  return todoText.includes(searchText)
})
  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
