import React from "react";
import styles from "./Questionary.module.css";

const Questionary = (props) => {
  const {
    fields: {
      name,
      surname,
      birthDate,
      tel,
      site,
      about,
      technologies,
      lastProject,
    },
  } = props.state;
  return (
    <div className={styles.questionary}>
      <h2 className={styles.questionaryHeader}>
        {name} {surname}
      </h2>
      <p className={styles.questionaryText}>
        <span>Дата рождения: </span>
        {birthDate}
      </p>
      <p className={styles.questionaryText}>
        <span>Номер телефона: </span>
        {tel}
      </p>
      <p className={styles.questionaryText}>
        <span>Сайт: </span>
        {site}
      </p>
      <p className={styles.questionaryText}>
        <span>О себе: </span>
        {about}
      </p>
      <p className={styles.questionaryText}>
        <span>Стек технологий: </span>
        {technologies}
      </p>
      <p className={styles.questionaryText}>
        <span>Описание последнего проекта: </span>
        {lastProject}
      </p>
    </div>
  );
};

export default Questionary;
