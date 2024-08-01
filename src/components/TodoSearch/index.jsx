import "./index.css";
import React from "react";

export const TodoSearch = ({ searchValue, setSearchValue }) => {
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
