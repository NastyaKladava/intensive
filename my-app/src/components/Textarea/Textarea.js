import React from "react";
import styles from "./Textarea.module.css";

class Textarea extends React.Component {
  render() {
    return (
      <div className={styles.textareaBox}>
        <textarea
          className={styles.textarea}
          rows={this.props.rows}
          maxLength={this.props.maxLength}
          name={this.props.name}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.handleInputChanges}
        />
        <span className={styles.textareaCounter}>{this.props.counter}/600</span>
        <span className={styles.textareaNotice}>{this.props.notice}</span>
      </div>
    );
  }
}

export default Textarea;
