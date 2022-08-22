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
