import React from "react";
import styles from "./Textarea.module.css";

class Textarea extends React.Component {
  render() {
    return (
      <textarea
        className={styles.textarea}
        rows={this.props.rows}
        maxLength={this.props.maxLength}
        name={this.props.name}
        placeholder={this.props.placeholder}
      />
    );
  }
}

export default Textarea;
