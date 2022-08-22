import React from "react";
import styles from "./Input.module.css";

const Input = ({
  name,
  labelText,
  id,
  type,
  placeholder,
  notice,
  value,
  handleInputChanges,
}) => {
  return (
    <div className={styles.inputBox}>
      <label className={styles.inputLabel} htmlFor={name}>
        {labelText}
      </label>
      <input
        id={id}
        className={styles.inputValue}
        type={type}
        name={name}
        placeholder={placeholder}
        notice={notice}
        value={value}
        onChange={handleInputChanges}
      />
      <span className={styles.inputNotice}>{notice}</span>
    </div>
  );
};

export default Input;
