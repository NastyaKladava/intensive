import React from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../../toolkitStore/actions";
import { isShowModalSelector } from "../../toolkitStore/selectors";
import Button from "../Button/Button";
import Form from "../Form/Form";
import styles from "./Modal.module.css";

const Template = ({ closeModal }) => {
  return (
    <div className={styles.modalBox}>
      <div className={styles.modal}>
        <Button type="button" handler={closeModal} classtype="close" />
        <Form />
      </div>
    </div>
  );
};

const Modal = () => {
  const isShow = useSelector(isShowModalSelector);
  const dispatch = useDispatch();
  const closeModal = () => dispatch(showModal(false));
  const domNode = document.getElementById("modal");
  if (domNode && isShow) {
    return ReactDOM.createPortal(<Template closeModal={closeModal} />, domNode);
  }
};

export default Modal;
