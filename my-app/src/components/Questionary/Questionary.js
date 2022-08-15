import React from "react";
import { userData } from "../Form/Form";
import styles from "./Questionary.module.css";

class Questionary extends React.Component {
  render() {
    return (
      <div className={styles.questionary}>
        <h2 className={styles.questionaryHeader}>
          {userData.name} {userData.surname}
        </h2>
        <p className={styles.questionaryText}>
          <span>Дата рождения: </span>
          {userData.birthDate}
        </p>
        <p className={styles.questionaryText}>
          <span>Номер телефона: </span>
          {userData.tel}
        </p>
        <p className={styles.questionaryText}>
          <span>Сайт: </span>
          {userData.site}
        </p>
        <p className={styles.questionaryText}>
          <span>О себе: </span>
          {userData.about}
        </p>
        <p className={styles.questionaryText}>
          <span>Стек технологий: </span>
          {userData.technologies}
        </p>
        <p className={styles.questionaryText}>
          <span>Описание последнего проекта: </span>
          {userData.lastProject}
        </p>
      </div>
    );
  }
}

export default Questionary;
