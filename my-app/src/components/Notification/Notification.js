import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./Notification.module.css";

const Template = ({ closePopUp }) => {
  let timerId;

  useEffect(() => {
    timerId = setTimeout(closePopUp, 3000);
    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <div className={styles.notification}>
      <p className={styles.notificationText}> Анкета успешно заполнена!</p>
      <span className={styles.notificationButton} onClick={closePopUp}></span>
    </div>
  );
};

const Notification = ({ isShowPopUp, setIsShowPopUp }) => {
  const closePopUp = () => setIsShowPopUp(false);
  const domNode = document.getElementById("notification");
  if (domNode && isShowPopUp) {
    return ReactDOM.createPortal(<Template closePopUp={closePopUp} />, domNode);
  }
};

export default Notification;
