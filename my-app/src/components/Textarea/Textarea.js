import React from "react";
import styles from "./Textarea.module.css";

const textareaData = [
  { rows: "7", maxLength: "600", name: "about", placeholder: "О себе..." },
  {
    rows: "7",
    maxLength: "600",
    name: "technologies",
    placeholder: "Стек технологий...",
  },
  {
    rows: "7",
    maxLength: "600",
    name: "lastProject",
    placeholder: "Описание последнего проекта...",
  },
];
class Textarea extends React.Component {
  render() {
    const { fields, errors, texareaCounters } = this.props.state;

    return textareaData.map((el, index) => (
      <div className={styles.textareaBox} key={index}>
        <textarea
          className={styles.textarea}
          rows={el.rows}
          maxLength={el.maxLength}
          name={el.name}
          placeholder={el.placeholder}
          value={fields[el.name]}
          onChange={this.props.handleInputChanges}
        />
        <span className={styles.textareaCounter}>
          {texareaCounters[el.name]}/600
        </span>
        <span className={styles.textareaNotice}>{errors[el.name]}</span>
      </div>
    ));
  }
}

export default Textarea;
