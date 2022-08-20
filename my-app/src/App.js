import React, { useState } from "react";
import "./App.css";
import { formFields } from "./constants/constants";
import Form from "./components/Form/Form";
import Questionary from "./components/Questionary/Questionary";
import Notification from "./components/Notification/Notification";

const App = () => {
  const [fieldValue, setFieldValue] = useState(formFields);
  const [isSubmitted, setSubmitted] = useState(false);

  const handlefieldValueChange = (value) => setFieldValue(value);
  const handleisSubmittedChange = (value) => setSubmitted(value);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-header-title'>Создание анкеты</h1>
      </header>
      {isSubmitted ? (
        <>
          <Questionary state={fieldValue} />
          <Notification />
        </>
      ) : (
        <Form
          handlefieldValueChange={handlefieldValueChange}
          fieldValue={fieldValue}
          handleisSubmittedChange={handleisSubmittedChange}
        />
      )}
    </div>
  );
};

export default App;
