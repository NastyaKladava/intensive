import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

export const NotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <p className={styles.notFoundMessage}>
        Что-то пошло не так. Данной страницы не существует!
        <Link to="/" className={styles.notFoundLink}>
          Перейти на главную страницу.
        </Link>
      </p>
    </div>
  );
};
