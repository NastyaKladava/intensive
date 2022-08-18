const formFields = {
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
};

const inputsData = [
  {
    labelText: "Имя",
    id: "name",
    type: "text",
    name: "name",
    placeholder: "Иван",
    maxLength: null,
  },
  {
    labelText: "Фамилия",
    id: "surname",
    type: "text",
    name: "surname",
    placeholder: "Иванов",
    maxLength: null,
  },
  {
    labelText: "Дата рождения",
    id: "birthDate",
    type: "date",
    name: "birthDate",
    maxLength: null,
  },
  {
    labelText: "Телефон",
    id: "tel",
    type: "tel",
    name: "tel",
    placeholder: "7-7777-77-77",
    maxLength: null,
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

const textareasData = [
  { rows: "7", maxLength: "600", name: "about", placeholder: "О себе..." },
  {
    rows: "7",
    maxLength: "600",
    name: "technologies",
    placeholder: "Стек технологий...",
  },
  {
    rows: "7",
    maxLength: "600",
    name: "lastProject",
    placeholder: "Описание последнего проекта...",
  },
];

export { formFields, inputsData, textareasData };
