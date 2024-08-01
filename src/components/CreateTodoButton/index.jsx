import "./index.css";

export const CreateTodoButton = () => {
  return (
    <>
      <div className="button-container">
        <button className="create-button"
        onClick={(event) => {console.log(event.target)}}>+</button>
      </div>
    </>
  );
};
