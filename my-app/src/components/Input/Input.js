import React from "react";
import styles from "./Input.module.css";

export function formatPhoneNumber(value) {
  if (!value) return value;

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

class Input extends React.Component {
  render() {
    return (
      <div className={styles.inputBox}>
        <label className={styles.inputLabel} htmlFor={this.props.htmlFor}>
          {this.props.labelText}
        </label>
        <input
          id={this.props.id}
          className={styles.inputValue}
          type={this.props.type}
          name={this.props.name}
          placeholder={this.props.placeholder}
          maxLength={this.props.maxLength}
          value={this.props.value}
          onChange={this.props.handleInputChanges}
        />

        <span className={styles.inputNotice}>{this.props.notice}</span>
      </div>
    );
  }
}

export default Input;
