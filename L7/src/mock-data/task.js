import { Status } from "../../const.js";
import { generateID } from "../utils.js";

export const tasks = [
    {
        status: Status.BACKLOG,
        tasks: [
            {
                id: generateID(),
                name: "сделать дз"
            },
            {
                id: generateID(),
                name: "приготовить кофэ"
            },
            {
                id: generateID(),
                name: "выпить кофэ"
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
                name: "сделать сальто"
            },
            {
                id: generateID(),
                name: "сделать двойное сальто вертушку"
            }
        ]
    },
    {
        status: Status.BASKET,
        tasks: [
            {
                id: generateID(),
                name: "петь песню"
            },
            {
                id: generateID(),
                name: "еще песню петь"
            },
            {
                id: generateID(),
                name: "допеть песню"
            },
            {
                id: generateID(),
                name: "дописать сервис чата используя сервлеты и редис на спринг"
            }
        ]
    }
]