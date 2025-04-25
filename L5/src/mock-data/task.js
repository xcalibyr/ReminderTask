import { Status } from "../../const.js";
import { generateID } from "../utils.js";

export const tasks = [
    {
        status: Status.BACKLOG,
        tasks: [
            {
                id: generateID(),
                name: "Завтрак"
            },
            {
                id: generateID(),
                name: "Дада"
            },
            {
                id: generateID(),
                name: "Занятия"
            }
        ]
    },
    {
        status: Status.PROCESSING,
        tasks: [
            {
                id: generateID(),
                name: "Чай"
            },
            {
                id: generateID(),
                name: "Сухарики"
            },
            {
                id: generateID(),
                name: "Лимон"
            }
        ]
    },
    {
        status: Status.DONE,
        tasks: [
        ]
    },
    {
        status: Status.BASKET,
        tasks: [
            {
                id: generateID(),
                name: "Помочь маме"
            },
            {
                id: generateID(),
                name: "Сделать домашку"
            }
        ]
    }
];
