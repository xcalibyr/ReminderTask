import { Status } from "../../const.js";

export const tasks = [
    {
        status: Status.BACKLOG,
        tasks: ["Записаться в спортзал", "Купить новый ноутбук", "Спланировать отпуск"]
    },
    {
        status: Status.PROCESSING,
        tasks: []
    },
    {
        status: Status.DONE,
        tasks: ["Создать API на Spring Boot", "Настроить CI/CD для проекта"]
    },
    {
        status: Status.BASKET,
        tasks: ["Переписать код с jQuery на чистый JavaScript", "Удалить старые зависимости", "Перенести проект на новую версию Node.js"]
    }
];
