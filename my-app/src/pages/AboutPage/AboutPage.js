import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import styles from "./AboutPage.module.css";

export const About = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div className={styles.aboutContainer}>
      <Button handler={goBack} className={styles.btn} classtype='primary'>
        Назад
      </Button>
      <p className={styles.aboutInfo}>
        В нашем интернет-магазине одежды и обуви ждут ТЫСЯЧИ моделей модной
        брендовой мужской, женской и детской обуви и одежды разных размеров!
      </p>
    </div>
  );
};
