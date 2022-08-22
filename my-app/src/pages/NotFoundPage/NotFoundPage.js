import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      Что-то пошло не так. Данной страницы не существует!
      <Link to='/'>Перейти на главную страницу.</Link>
    </div>
  );
};
