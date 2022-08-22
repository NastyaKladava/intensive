import React from "react";

const Button = ({ children, handler, type }) => {
  return (
    <button type={type} onClick={handler}>
      {children}
    </button>
  );
};

export default Button;
