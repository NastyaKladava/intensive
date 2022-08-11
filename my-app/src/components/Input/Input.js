import React from "react";
import styles from "./Input.module.css";

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
        />
      </div>
    );
  }
}

export default Input;
