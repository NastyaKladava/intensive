import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "../Form/Form";
import styles from "./Modal.module.css";

export const Modal = () => {
  const navigate = useNavigate();
  const goBack = () => navigate("/");

  return (
    <div className={styles.modalBox}>
      <div className={styles.modal}>
        <button
          type='button'
          onClick={goBack}
          className={styles.modalBtn}
        ></button>
        <Form />
      </div>
    </div>
  );
};
