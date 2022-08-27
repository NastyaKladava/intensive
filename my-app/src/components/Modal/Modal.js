import React from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import Form from "../Form/Form";
import styles from "./Modal.module.css";

export const Modal = ({ closeModal }) => {
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

export const Notification = ({ isShowModal, setIsShowModal }) => {
  const closeModal = () => setIsShowModal(false);
  const domNode = document.getElementById("modal");
  if (domNode && isShowModal) {
    return ReactDOM.createPortal(<Modal closeModal={closeModal} />, domNode);
  }
};
