import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoCounter } from "../components/TodoCounter";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoItem } from "../components/TodoItem";
import { TodosLoading } from "../components/TodosLoading";
import { TodosError } from "../components/TodosError";
import { TodosEmpty } from "../components/TodosEmpty";
import { useContext } from "react";
import { Modal } from "../Modal"
import { TodoModal } from "../components/TodoModal"
import { MyTodosContext } from "../components/Context";


export const AppUI = () => {
  const { loading, error, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal } =
    useContext(MyTodosContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {error && <TodosError />}
        {!loading && searchedTodos.length === 0 && <TodosEmpty />}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
      {openModal && (
        <Modal>
          <TodoModal />
        </Modal>
      )}
    </>
  );
};
