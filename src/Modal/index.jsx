import React from "react";
import ReactDom from "react-dom";
import "../Modal/index.css";

export const Modal = ({ children }) => {
  return ReactDom.createPortal(
    <div className="modal">
      <div className="modal-background">
        {children}
      </div>
    </div>,
    document.getElementById("modalTodos")
  );
};
