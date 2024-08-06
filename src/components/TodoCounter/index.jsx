import "./index.css";
import { IoArrowBack } from "react-icons/io5";

export const TodoCounter = ({ total, completed }) => {
  return (
    <>
      <section className="main-section">
        <span className="icon-left">
          <IoArrowBack />
        </span>
        <h1 className="my-day-planner">My Day Planner</h1>
        <div className="today">Friday October 13</div>
        {completed === total ? (
          <h2>Felicidades!!!</h2>
        ) : (
          <h2
            style={{
              fontSize: "20px",
              textAlign: "center",
              margin: 0,
            }}
          >
            Tasks completed {completed} from {total}
          </h2>
        )}
      </section>
    </>
  );
};
