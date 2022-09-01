export function validate(name, value) {
  switch (name) {
    case "login":
      if (!value.trim()) {
        return "Поле пустое. Заполните, пожалуйста.";
      } else {
        return "";
      }
    case "password":
      if (!value.trim()) {
        return "Поле пустое. Заполните, пожалуйста.";
      } else {
        return "";
      }
    default:
      return "";
  }
}

export function inputNumberValidate(value) {
  const valueNum = parseInt(value);
  let validated;
  if (valueNum < 0) {
    validated = value = 0;
  } else if (valueNum > 20) {
    validated = value = 20;
  } else {
    validated = value;
  }
  return validated;
}
