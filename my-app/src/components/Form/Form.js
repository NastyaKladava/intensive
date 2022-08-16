import React from "react";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";
import Button from "../Button/Button";
import Questionary from "../Questionary/Questionary";
import {
  formFields,
  inputsData,
  textareasData,
} from "../../constants/constants";
import { validate } from "../../utils/formValidators/formValidation";
import { formatPhoneNumber } from "../Input/Input";
import styles from "./Form.module.css";

class Form extends React.Component {
  state = formFields;

  handleInputChanges = (e) => {
    let formattedPhoneNumber;
    if (e.target.name === "tel")
      formattedPhoneNumber = formatPhoneNumber(e.target.value);

    this.setState({
      fields: {
        ...this.state.fields,
        [e.target.name]: e.target.value,
        tel: formattedPhoneNumber || this.state.fields.tel,
      },
      errors: {
        ...this.state.errors,
        [e.target.name]: validate(e.target.name, e.target.value),
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { fields } = this.state;
    let validationErrors = {};

    Object.keys(fields).forEach((el) => {
      const error = validate(el, fields[el]);
      if (error && error.length > 0) validationErrors[el] = error;
    });

    if (Object.keys(validationErrors).length > 0) {
      this.setState({ errors: validationErrors });
    }

    if (Object.keys(validationErrors).length === 0)
      this.setState({ submitted: true });
  };

  resetForm = () => {
    this.setState(formFields);
  };

  render() {
    const { fields, errors, submitted } = this.state;

    return submitted ? (
      <Questionary state={this.state} />
    ) : (
      <form className={styles.form} onSubmit={this.handleSubmit}>
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
              handleInputChanges={this.handleInputChanges}
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
              handleInputChanges={this.handleInputChanges}
            />
          ))}
        </div>
        <div className={styles.formBtns}>
          <Button type='button' text='Отмена' handler={this.resetForm} />
          <Button type='submit' text='Сохранить' />
        </div>
      </form>
    );
  }
}

export default Form;
