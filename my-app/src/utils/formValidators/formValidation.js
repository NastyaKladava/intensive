export function validate(name, value) {
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
      } else if (value.trim().length > 13) {
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
}
