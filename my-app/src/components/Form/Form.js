import React from "react";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";
import Button from "../Button/Button";
import styles from "./Form.module.css";

class Form extends React.Component {
  render() {
    return (
      <form className={styles.form}>
        <div className={styles.formInputs}>
          <Input
            htmlFor='name'
            labelText='Имя'
            id='name'
            type='text'
            name='name'
            placeholder='Иван'
          />
          <Input
            htmlFor='surname'
            labelText='Фамилия'
            id='surname'
            type='text'
            name='surname'
            placeholder='Иванов'
          />
          <Input
            htmlFor='birthDate'
            labelText='Дата рождения'
            id='birthDate'
            type='date'
            name='birthDate'
          />
          <Input
            htmlFor='tel'
            labelText='Телефон'
            id='tel'
            type='tel'
            name='tel'
            placeholder='+7 (777) 77-77-77'
          />
          <Input
            htmlFor='site'
            labelText='Сайт'
            id='site'
            type='text'
            name='site'
            placeholder='www.ivanov.by'
          />
        </div>
        <div className={styles.formTextareas}>
          <Textarea
            rows='7'
            maxLength='200'
            name='about'
            placeholder='О себе...'
          />
          <Textarea
            rows='7'
            maxLength='200'
            name='technologies'
            placeholder='Стек технологий...'
          />
          <Textarea
            rows='7'
            maxLength='200'
            name='lastProject'
            placeholder='Описание последнего проекта...'
          />
        </div>

        <div className={styles.formBtns}>
          <Button type='button' text='Отмена' />
          <Button type='submit' text='Сохранить' />
        </div>
      </form>
    );
  }
}

export default Form;
