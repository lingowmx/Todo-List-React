import { MyTodosContext } from "../Context";
import "./index.css";
import React, { useContext } from "react";

export const TodoSearch = () => {
  const {searchValue, setSearchValue} = useContext(MyTodosContext);
  return (
    <>
      <div className="input-container">
        <input
          placeholder="Comenzar el curso"
          value={searchValue}
          onChange={(event) => {
            console.log("escribiste en search");
            setSearchValue(event.target.value);
          }}
        />
      </div>
    </>
  );
};
