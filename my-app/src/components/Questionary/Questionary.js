import React from "react";
import styles from "./Questionary.module.css";

class Questionary extends React.Component {
  render() {
    const { fields } = this.props.state;

    return (
      <div className={styles.questionary}>
        <h2 className={styles.questionaryHeader}>
          {fields.name} {fields.surname}
        </h2>
        <p className={styles.questionaryText}>
          <span>Дата рождения: </span>
          {fields.birthDate}
        </p>
        <p className={styles.questionaryText}>
          <span>Номер телефона: </span>
          {fields.tel}
        </p>
        <p className={styles.questionaryText}>
          <span>Сайт: </span>
          {fields.site}
        </p>
        <p className={styles.questionaryText}>
          <span>О себе: </span>
          {fields.about}
        </p>
        <p className={styles.questionaryText}>
          <span>Стек технологий: </span>
          {fields.technologies}
        </p>
        <p className={styles.questionaryText}>
          <span>Описание последнего проекта: </span>
          {fields.lastProject}
        </p>
      </div>
    );
  }
}

export default Questionary;
