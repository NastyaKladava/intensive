import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Input from "..//Input/Input";
import Button from "../Button/Button";
import { LoginContext } from "../../hoc/LoginProvider";
import { formAuthFields } from "../../constants/constants";
import { validate } from "../../utils/modalFormValidation";
import styles from "./Form.module.css";

const Form = () => {
  const [inputsValue, setInputsValue] = useState(formAuthFields);
  const { isLoggedIn, setisLogin, isSubmitted, setIsSubmitted } =
    useContext(LoginContext);

  const navigate = useNavigate();
  const goBack = () => navigate("/");
  const location = useLocation();

  const handleLogin = () => {
    setisLogin(true);

    location.state?.from?.pathName
      ? navigate(location.state?.from?.pathName, { replace: true })
      : navigate("/");
  };

  const handleLogOut = () => {
    setisLogin(false);
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
          htmlFor="login"
          labelText="Login"
          id="login"
          type="text"
          name="login"
          placeholder="Enter login"
          notice={errors.login}
          value={fields.login}
          handleInputChanges={handleInputChanges}
        />
        <Input
          htmlFor="password"
          labelText="Password"
          id="password"
          type="password"
          name="password"
          placeholder="Enter password"
          notice={errors.password}
          value={fields.password}
          handleInputChanges={handleInputChanges}
        />
      </div>
      <div className={styles.formBtns}>
        {isLoggedIn ? (
          <Button handler={handleLogOut}>Выйти</Button>
        ) : (
          <Button type="submit">Войти</Button>
        )}
        {/* <Button type="submit">{isLoggedIn ? "Выйти" : "Войти"}</Button> */}
        <Button type="button" handler={goBack}>
          Отмена
        </Button>
      </div>
    </form>
  );
};

export default Form;
