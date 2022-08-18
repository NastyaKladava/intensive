import React from "react";
import styles from "./Textarea.module.css";

const Textarea = ({
  rows,
  maxLength,
  name,
  placeholder,
  notice,
  value,
  handleInputChanges,
}) => {
  return (
    <div className={styles.textareaBox}>
      <textarea
        className={styles.textarea}
        rows={rows}
        maxLength={maxLength}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChanges}
      />
      <span className={styles.textareaCounter}>{value.length}/600</span>
      <span className={styles.textareaNotice}>{notice}</span>
    </div>
  );
};

export default Textarea;
