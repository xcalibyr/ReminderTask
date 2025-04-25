import { tasks } from "../mock-data/task.js";
import {generateID} from "../utils.js";
import {Status} from "../../const.js";

export default class TasksModel {
    #boardtasks = tasks;
    #observers = [];

    get tasks() {
        return this.#boardtasks;
    }

    getTasksByStatus(status) {
        return this.#boardtasks.filter(f => f.status === status)[0];
    }

    addTask(title) {
        const newTask = {
            id: generateID(),
            name: title
        };

        const backlogTask = this.getTasksByStatus(Status.BACKLOG);

        if (!backlogTask) {
            this.#boardtasks.unshift({
                status: Status.BACKLOG,
                tasks: [newTask]
            });
        }
        else
        {
            backlogTask.tasks.push(newTask);
        }

        this._notifyObservers();
    }

    removeBasketTask() {
        const basketTasks = this.getTasksByStatus(Status.BASKET);

        basketTasks.tasks.length = 0;

        this._notifyObservers();
    }


    addObserver(observer) {
        this.#observers.push(observer);
    }

    removeObserver(observer) {
        this.#observers = this.#observers.filter(o => o !== observer);
    }

    _notifyObservers() {
        this.#observers.forEach(observer => observer());
    }
}