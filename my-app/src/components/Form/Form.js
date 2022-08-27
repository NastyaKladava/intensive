import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "..//Input/Input";
import Button from "../Button/Button";
import { AppContext } from "../../hoc/AppProvider";
import { formAuthFields } from "../../constants/constants";
import { validate } from "../../utils/modalFormValidation";
import styles from "./Form.module.css";

const Form = () => {
  const [inputsValue, setInputsValue] = useState(formAuthFields);
  const { setisLogin, setIsSubmitted, setIsShow } = useContext(AppContext);

  const navigate = useNavigate();
  const goBack = () => navigate("/");

  const handleLogin = () => {
    setisLogin(true);
    navigate("/");
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
      setIsSubmitted(true);
      handleLogin();
      setIsShow(false);
    }
  };

  const resetForm = () => {
    setInputsValue(formAuthFields);
  };

  const { fields, errors } = inputsValue;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formfields}>
        <Input
          id="login"
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
        <Button type="submit">Войти</Button>
        <Button type="button" handler={resetForm}>
          Отмена
        </Button>
      </div>
    </form>
  );
};

export default Form;
