import React from "react";
import styles from "./Input.module.css";

const Input = ({
  name,
  labelEl,
  id,
  classtype,
  type,
  placeholder,
  min,
  max,
  notice,
  noticeEl,
  value,
  handleInputChanges,
}) => {
  return (
    <div className={styles.inputBox}>
      {labelEl}
      <input
        id={id}
        classtype={classtype}
        className={styles[classtype]}
        type={type}
        name={name}
        placeholder={placeholder}
        min={min}
        max={max}
        notice={notice}
        value={value}
        onChange={handleInputChanges}
      />
      {noticeEl}
    </div>
  );
};

export default Input;
