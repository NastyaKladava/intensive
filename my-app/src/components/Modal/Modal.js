import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import Form from "../Form/Form";
import { LoginContext } from "../../hoc/LoginProvider";
import closeSvg from "../../images/icons/close.svg";
import styles from "./Modal.module.css";

export const Modal = () => {
  const navigate = useNavigate();
  const goBack = () => navigate("/");
  // const location = useLocation();

  // const { isLoggedIn, setisLogin, isSubmitted, setIsSubmitted } =
  //   useContext(LoginContext);

  // const handleLogin = () => {
  //   if (isSubmitted) setisLogin(true);

  //   location.state?.from?.pathName
  //     ? navigate(location.state?.from?.pathName, { replace: true })
  //     : navigate("/");
  // };

  return (
    <div className={styles.modalBox}>
      <div className={styles.modal}>
        <button
          type="button"
          onClick={goBack}
          className={styles.modalBtn}
        ></button>
        <Form />
      </div>
    </div>
  );
};
