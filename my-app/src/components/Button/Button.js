import React from "react";
import styles from "./Button.module.css";

const Button = ({ type, handler, text }) => {
  return (
    <button
      className={styles.button}
      type={type}
      onClick={handler}
      onSubmit={handler}
    >
      {text}
    </button>
  );
};

export default Button;
