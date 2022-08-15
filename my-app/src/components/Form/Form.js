import React from "react";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";
import Button from "../Button/Button";
import Questionary from "../Questionary/Questionary";
import { formatPhoneNumber } from "../Input/Input";
import styles from "./Form.module.css";

export const userData = {};

class Form extends React.Component {
  state = {
    fields: {
      name: "",
      surname: "",
      tel: "",
      birthDate: "",
      site: "",
      about: "",
      technologies: "",
      lastProject: "",
    },
    errors: {
      name: "",
      surname: "",
      tel: "",
      birthDate: "",
      site: "",
      about: "",
      technologies: "",
      lastProject: "",
    },
    texareaCounters: {
      about: 0,
      technologies: 0,
      lastProject: 0,
    },
    submitted: false,
  };

  baseState = this.state;

  validate = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) {
          return "Поле пустое. Заполните, пожалуйста.";
        } else if (
          value.trim().charAt(0) !== value.trim().charAt(0).toUpperCase()
        ) {
          return "Имя должно начинаться с большой буквы.";
        } else {
          return "";
        }
      case "surname":
        if (!value.trim()) {
          return "Поле пустое. Заполните, пожалуйста.";
        } else if (
          value.trim().charAt(0) !== value.trim().charAt(0).toUpperCase()
        ) {
          return "Фамилия должна начинаться с большой буквы.";
        } else {
          return "";
        }
      case "birthDate":
        if (!value.trim()) {
          return "Поле пустое. Заполните, пожалуйста.";
        } else {
          return "";
        }
      case "tel":
        if (!value.trim()) {
          return "Поле пустое. Заполните, пожалуйста.";
        } else if (value.trim().length >= 12) {
          return "Номер телефона должен содержать 12 символов.";
        } else {
          return "";
        }
      case "site":
        if (!value.trim()) {
          return "Поле пустое. Заполните, пожалуйста.";
        } else if (!value.trim().startsWith("https://")) {
          return "Адрес сайта должен начинаться с https://";
        } else {
          return "";
        }
      case "technologies":
      case "lastProject":
      case "about":
        if (!value.trim()) {
          return "Поле пустое. Заполните, пожалуйста.";
        } else if (value.trim().length >= 600) {
          return "Превышен лимит символов в поле";
        } else {
          return "";
        }
      default:
        return "";
    }
  };

  handleInputChanges = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);

    this.setState({
      fields: {
        ...this.state.fields,
        [e.target.name]: e.target.value,
        tel: formattedPhoneNumber || e.target.value,
      },
      errors: {
        ...this.state.errors,
        [e.target.name]: this.validate(e.target.name, e.target.value),
      },
    });
  };

  handleTextareaChanges = (e) => {
    this.setState({
      fields: {
        ...this.state.fields,
        [e.target.name]: e.target.value,
      },
      errors: {
        ...this.state.errors,
        [e.target.name]: this.validate(e.target.name, e.target.value),
      },
      texareaCounters: {
        ...this.state.texareaCounters,
        [e.target.name]: e.target.value.length,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { fields } = this.state;
    let validationErrors = {};

    Object.keys(fields).forEach((el) => {
      const error = this.validate(el, fields[el]);
      if (error && error.length > 0) validationErrors[el] = error;
    });

    if (Object.keys(validationErrors).length > 0) {
      this.setState({ errors: validationErrors });
    }

    if (Object.keys(validationErrors).length === 0) {
      this.setState({ submitted: true });
      for (let el in fields) {
        userData[el] = fields[el];
      }
    }
  };

  resetForm = () => {
    this.setState(this.baseState);
  };

  renderUserInfo() {
    return <Questionary name={userData.name} />;
  }

  render() {
    const { fields, errors, texareaCounters } = this.state;

    return this.state.submitted ? (
      this.renderUserInfo()
    ) : (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <div className={styles.formfields}>
          <Input
            htmlFor='name'
            labelText='Имя'
            id='name'
            type='text'
            name='name'
            placeholder='Иван'
            notice={errors.name}
            value={fields.name}
            handleInputChanges={this.handleInputChanges}
          />
          <Input
            htmlFor='surname'
            labelText='Фамилия'
            id='surname'
            type='text'
            name='surname'
            placeholder='Иванов'
            notice={errors.surname}
            value={fields.surname}
            handleInputChanges={this.handleInputChanges}
          />

          <Input
            htmlFor='birthDate'
            labelText='Дата рождения'
            id='birthDate'
            type='date'
            name='birthDate'
            notice={errors.birthDate}
            value={fields.birthDate}
            handleInputChanges={this.handleInputChanges}
          />
          <Input
            htmlFor='tel'
            labelText='Телефон'
            id='tel'
            type='tel'
            name='tel'
            placeholder='7-7777-77-77'
            maxLength='12'
            notice={errors.tel}
            value={fields.tel}
            handleInputChanges={this.handleInputChanges}
          />

          <Input
            htmlFor='site'
            labelText='Сайт'
            id='site'
            type='text'
            name='site'
            placeholder='www.ivanov.by'
            notice={errors.site}
            value={fields.site}
            handleInputChanges={this.handleInputChanges}
          />
        </div>
        <div className={styles.formTextareas}>
          <Textarea
            rows='7'
            maxLength='600'
            name='about'
            placeholder='О себе...'
            notice={errors.about}
            counter={texareaCounters.about}
            value={fields.about}
            handleInputChanges={this.handleTextareaChanges}
          />
          <Textarea
            rows='7'
            maxLength='600'
            name='technologies'
            placeholder='Стек технологий...'
            notice={errors.technologies}
            counter={texareaCounters.technologies}
            value={fields.technologies}
            handleInputChanges={this.handleTextareaChanges}
          />
          <Textarea
            rows='7'
            maxLength='600'
            name='lastProject'
            placeholder='Описание последнего проекта...'
            notice={errors.lastProject}
            counter={texareaCounters.lastProject}
            value={fields.lastProject}
            handleInputChanges={this.handleTextareaChanges}
          />
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
