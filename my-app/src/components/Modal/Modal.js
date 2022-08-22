import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import Form from "../Form/Form";
import { LoginContext } from "../../hoc/LoginProvider";
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
        <Button type='button' handler={goBack}>
          Закрыть
        </Button>
        <Form />
        {/* <Button type='button'>Login</Button> */}
      </div>
    </div>
  );
};
