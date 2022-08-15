import React from "react";
import styles from "./Input.module.css";

export function formatPhoneNumber(value) {
  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;

  if (phoneNumberLength < 1) return phoneNumber;
  if (phoneNumberLength < 6) {
    return `${phoneNumber.slice(0, 1)}-${phoneNumber.slice(1)}`;
  }
  return `${phoneNumber.slice(0, 1)}-${phoneNumber.slice(
    1,
    5
  )}-${phoneNumber.slice(5, 10)}`;
}

const inputData = [
  {
    htmlFor: "name",
    labelText: "Имя",
    id: "name",
    type: "text",
    name: "name",
    placeholder: "Иван",
    maxLength: null,
  },
  {
    htmlFor: "surname",
    labelText: "Фамилия",
    id: "surname",
    type: "text",
    name: "surname",
    placeholder: "Иванов",
    maxLength: null,
  },
  {
    htmlFor: "birthDate",
    labelText: "Дата рождения",
    id: "birthDate",
    type: "date",
    name: "birthDate",
    maxLength: null,
  },
  {
    htmlFor: "tel",
    labelText: "Телефон",
    id: "tel",
    type: "tel",
    name: "tel",
    placeholder: "7-7777-77-77",
    maxLength: "13",
  },
  {
    htmlFor: "site",
    labelText: "Сайт",
    id: "site",
    type: "text",
    name: "site",
    placeholder: "www.ivanov.by",
  },
];

class Input extends React.Component {
  render() {
    const { fields, errors } = this.props.state;

    return inputData.map((el) => (
      <div className={styles.inputBox} key={el.id}>
        <label className={styles.inputLabel} htmlFor={el.name}>
          {el.labelText}
        </label>
        <input
          id={el.id}
          className={styles.inputValue}
          type={el.type}
          name={el.name}
          placeholder={el.placeholder}
          maxLength={el.maxLength}
          // notice={errors[el.name]}
          value={fields[el.name]}
          onChange={this.props.handleInputChanges}
        />
        <span className={styles.inputNotice}>{errors[el.name]}</span>
      </div>
    ));
  }
}

export default Input;
