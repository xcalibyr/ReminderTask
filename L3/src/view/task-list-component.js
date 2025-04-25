import {createElement} from "../framework/render.js";
import { StatusLabel, Status } from "../../const.js";


function createTaskListComponentTemplate(label, status) {
    return (
        `<div class="display-tasks ${status}">
          <h3>${label}</h3>
          <ul class="task-container">
          </ul>
        </div>`
    );
}

export default class TasksListComponent {
    constructor(status) {
        this.status = status;
    }

    getTemplate() {
        const label = StatusLabel[this.status];
        return createTaskListComponentTemplate(label, this.status);
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