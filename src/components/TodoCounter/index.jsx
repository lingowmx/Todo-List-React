import "./index.css";
import { IoArrowBack } from "react-icons/io5";
import { useContext } from "react";
import { MyTodosContext } from "../Context";

export const TodoCounter = () => {
  const { completedTodos, totalTodos } = useContext(MyTodosContext);
  return (
    <>
      <section className="main-section">
        <span className="icon-left">
          <IoArrowBack />
        </span>
        <h1 className="my-day-planner">My Day Planner</h1>
        <div className="today">Friday October 13</div>
        {totalTodos > 0 && completedTodos === totalTodos ? (
          <h2>Felicidades!!!</h2>
        ) : (
          <h2
            style={{
              fontSize: "20px",
              textAlign: "center",
              margin: 0,
            }}
          >
            Tasks completed {completedTodos} from {totalTodos}
          </h2>
        )}
      </section>
    </>
  );
};
