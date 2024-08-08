import React from "react";
//COMPONENTS
import { AppUI } from "./AppUI";
import "../App.css";
import { TodosProvider } from "../components/Context";

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
  return (
    <TodosProvider>
      <AppUI />
    </TodosProvider>
  );
}

export default App;
