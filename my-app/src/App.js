import React from "react";
import "./App.css";
import Form from "./components/Form/Form";

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-header-title'>Создание анкеты</h1>
      </header>
      <Form />
    </div>
  );
};

export default App;
