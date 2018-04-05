export const REGISTARY_INPUTS = [
    {
        text: "Имя",
        reference: "firstname"
    },
    {
        text: "Фамилия",
        reference: "lastname"
    },
    {
        text: "Email",
        reference: "email"
    },
    {
        text: "Пароль",
        reference: "password"
    },
    {
        text: "Повторите пароль",
        reference: "confirm_password"
    }
];

export const ERROR_CODES = {
    OK: 0,
    UNKNOWN: -1,
    DUPLICATE_LOGIN: 1,
    DUPLICATE_EMAIL: 2
};
