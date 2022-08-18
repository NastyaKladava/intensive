import React from "react";
import styles from "./Input.module.css";

export function formatPhoneNumber(value) {
  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;

  if (phoneNumberLength < 1) return phoneNumber;
  if (phoneNumberLength < 6) {
    return `${phoneNumber.slice(0, 1)}-${phoneNumber.slice(1)}`;
  }
  return `${phoneNumber.slice(0, 1)}-${phoneNumber.slice(
    1,
    5
  )}-${phoneNumber.slice(5, 10)}`;
}

const Input = ({
  name,
  labelText,
  id,
  type,
  placeholder,
  maxLength,
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
        maxLength={maxLength}
        notice={notice}
        value={value}
        onChange={handleInputChanges}
      />
      <span className={styles.inputNotice}>{notice}</span>
    </div>
  );
};

export default Input;
