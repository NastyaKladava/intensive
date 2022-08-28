import React from "react";
import ReactDOM from "react-dom";
import Button from "../Button/Button";
import Form from "../Form/Form";
import styles from "./Modal.module.css";

const Template = ({ closeModal }) => {
  // const navigate = useNavigate();
  // const goBack = () => navigate("/");

  return (
    <div className={styles.modalBox}>
      <div className={styles.modal}>
        <Button type='button' handler={closeModal} classtype='close'></Button>
        <Form />
      </div>
    </div>
  );
};

const Modal = ({ isShowModal, setIsShow }) => {
  const closeModal = () => setIsShow(false);
  const domNode = document.getElementById("modal");
  if (domNode && isShowModal) {
    return ReactDOM.createPortal(<Template closeModal={closeModal} />, domNode);
  }
};

export default Modal;
