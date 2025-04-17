import { tasks } from "../mock-data/task.js";

export default class TasksModel {
    #boardtasks = tasks;

    // getTasks() {
    //     return this.#boardtasks;
    // }

    get tasks() {
        return this.#boardtasks;
    }
}