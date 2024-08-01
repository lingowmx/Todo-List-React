//COMPONENTS
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoCounter } from "./components/TodoCounter";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoItem } from "./components/TodoItem";

import "./App.css";

const defaultTodos = [
  {text: "Completar el curso", completed:true},
  {text: "Completar el curso 2 ", completed:false},
  {text: "Completar el curso 3", completed:true},
  {text: "Completar el curso 4", completed:true},
  {text: "Completar el curso 5", completed:true}



]


function App() {
  return (
    <>
      <TodoCounter completed={16} total={20} />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed = {todo.completed}/>
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
