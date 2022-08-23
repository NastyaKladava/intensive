import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, handler, type }) => {
  return (
    <button type={type} onClick={handler} className={styles.btn}>
      {children}
    </button>
  );
};

export default Button;
