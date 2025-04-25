import {createElement} from "../framework/render.js";

function createTaskComponentTemplate(task) {
    return (
        `<li>${task}</li>`
    );
}

export default class TaskComponent {
    constructor(tasks) {
        this.tasks = tasks;
    }

    getTemplate() {
        return createTaskComponentTemplate(this.tasks);
    }

    getElement() {
        if (!this.element) {
            this.element = createElement(this.getTemplate());
        }


        return this.element;
    }


    removeElement() {
        this.element = null;
    }
}