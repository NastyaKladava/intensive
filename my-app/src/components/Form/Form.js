import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Input from "..//Input/Input";
import Button from "../Button/Button";
import { formAuthFields } from "../../constants/constants";
import { validate } from "../../utils/validation";
import styles from "./Form.module.css";
import {
  logIn,
  setUserData,
  showModal,
  submit,
} from "../../toolkitStore/actions";

const Form = () => {
  const [inputsValue, setInputsValue] = useState(formAuthFields);
  const { fields, errors } = inputsValue;
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(logIn(true));
    if (location.state?.from?.pathname) {
      navigate(location?.state?.from?.pathname, { replace: true });
    } else navigate("/");
  };

  const handleInputChanges = (e) => {
    setInputsValue((prevState) => ({
      fields: {
        ...prevState.fields,
        [e.target.name]: e.target.value,
      },
      errors: {
        ...prevState.errors,
        [e.target.name]: validate(e.target.name, e.target.value),
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fields } = inputsValue;
    let validationErrors = {};

    Object.keys(fields).forEach((el) => {
      const error = validate(el, fields[el]);
      if (error && error.length > 0) validationErrors[el] = error;
    });

    if (Object.keys(validationErrors).length > 0) {
      setInputsValue((prevState) => ({
        ...prevState,
        errors: validationErrors,
      }));
    }

    if (Object.keys(validationErrors).length === 0) {
      dispatch(submit(true));
      handleLogin();
      dispatch(showModal(false));
      dispatch(
        setUserData({
          login: fields.login,
          password: fields.password,
        })
      );
    }
  };

  const resetForm = () => {
    setInputsValue(formAuthFields);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formfields}>
        <Input
          id="login"
          classtype="primary"
          type="text"
          name="login"
          placeholder="Enter login"
          value={fields.login}
          handleInputChanges={handleInputChanges}
          labelEl={
            <label className={styles.inputLabel} htmlFor="login">
              Login
            </label>
          }
          noticeEl={<span className={styles.inputNotice}>{errors.login}</span>}
        />
        <Input
          id="password"
          classtype="primary"
          type="password"
          name="password"
          placeholder="Enter password"
          value={fields.password}
          handleInputChanges={handleInputChanges}
          labelEl={
            <label className={styles.inputLabel} htmlFor="password">
              Password
            </label>
          }
          noticeEl={
            <span className={styles.inputNotice}>{errors.password}</span>
          }
        />
      </div>
      <div className={styles.formBtns}>
        <Button type="submit" classtype="primary">
          Войти
        </Button>
        <Button type="button" handler={resetForm} classtype="primary">
          Отмена
        </Button>
      </div>
    </form>
  );
};

export default Form;
