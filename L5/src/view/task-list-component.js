import { StatusLabel, Status } from "../../const.js";
import {AbstractComponent} from "../framework/view/abstract-component.js";


function createTaskListComponentTemplate(label, status) {
    return (
        `<div class="display-tasks ${status}">
          <h3>${label}</h3>
          <ul class="task-container">
          </ul>
        </div>`
    );
}

export default class TaskListComponent extends AbstractComponent {
    constructor(status) {
        super();
        this.status = status;
    }

    get template() {
        const label = StatusLabel[this.status];
        return createTaskListComponentTemplate(label, this.status);
    }
}
