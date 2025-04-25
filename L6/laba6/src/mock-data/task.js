import { Status } from "../../const.js";
import { generateID } from "../utils.js";

export const tasks = [
    {
        status: Status.BACKLOG,
        tasks: [
            {
                id: generateID(),
                name: "Сделать домашку"
            },
            {
                id: generateID(),
                name: "Посидеть"
            },
            {
                id: generateID(),
                name: "Полежать"
            }
        ]
    },
    {
        status: Status.PROCESSING,
        tasks: []
    },
    {
        status: Status.DONE,
        tasks: [
            {
                id: generateID(),
                name: "Прыгнуть"
            },
            {
                id: generateID(),
                name: "Прыгнуть выше головы"
            }
        ]
    },
    {
        status: Status.BASKET,
        tasks: [
            {
                id: generateID(),
                name: "Поднять 50кг"
            },
            {
                id: generateID(),
                name: "Еще поднять 50кг"
            },
            {
                id: generateID(),
                name: "Закончить поднимать"
            },
            {
                id: generateID(),
                name: "Дописать сервис чата используя сервлеты и редис на спринг"
            }
        ]
    }
]