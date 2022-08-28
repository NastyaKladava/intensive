import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, classtype, type, handler, disabled }) => {
  return (
    <button
      classtype={classtype}
      type={type}
      onClick={handler}
      className={styles[classtype]}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
