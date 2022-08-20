import React from "react";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";
import Button from "../Button/Button";
import {
  formFields,
  inputsData,
  textareasData,
} from "../../constants/constants";
import { validate } from "../../utils/formValidators/formValidation";
import { formatPhoneNumber } from "../Input/Input";
import styles from "./Form.module.css";

const Form = ({
  handlefieldValueChange,
  fieldValue,
  handleisSubmittedChange,
}) => {
  const handleInputChanges = (e) => {
    let formattedPhoneNumber;
    if (e.target.name === "tel")
      formattedPhoneNumber = formatPhoneNumber(e.target.value);

    handlefieldValueChange((prevState) => ({
      fields: {
        ...prevState.fields,
        [e.target.name]: e.target.value,
        tel: formattedPhoneNumber || prevState.fields.tel,
      },
      errors: {
        ...prevState.errors,
        [e.target.name]: validate(e.target.name, e.target.value),
        tel: validate("tel", formattedPhoneNumber || prevState.fields.tel),
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fields } = fieldValue;
    let validationErrors = {};

    Object.keys(fields).forEach((el) => {
      const error = validate(el, fields[el]);
      if (error && error.length > 0) validationErrors[el] = error;
    });

    if (Object.keys(validationErrors).length > 0) {
      handlefieldValueChange((prevState) => ({
        ...prevState,
        errors: validationErrors,
      }));
    }

    if (Object.keys(validationErrors).length === 0) {
      handleisSubmittedChange(true);
    }
  };
  const resetForm = () => {
    handlefieldValueChange(formFields);
  };

  const { fields, errors } = fieldValue;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formfields}>
        {inputsData.map((el) => (
          <Input
            key={el.id}
            htmlFor={el.name}
            labelText={el.labelText}
            id={el.id}
            className={styles.inputValue}
            type={el.type}
            name={el.name}
            placeholder={el.placeholder}
            maxLength={el.maxLength}
            notice={errors[el.name]}
            value={fields[el.name]}
            handleInputChanges={handleInputChanges}
          />
        ))}
      </div>
      <div className={styles.formTextareas}>
        {textareasData.map((el, index) => (
          <Textarea
            key={index}
            rows={el.rows}
            maxLength={el.maxLength}
            name={el.name}
            placeholder={el.placeholder}
            notice={errors[el.name]}
            value={fields[el.name]}
            handleInputChanges={handleInputChanges}
          />
        ))}
      </div>
      <div className={styles.formBtns}>
        <Button type='button' text='Отмена' handler={resetForm} />
        <Button type='submit' text='Сохранить' />
      </div>
    </form>
  );
};

export default Form;
