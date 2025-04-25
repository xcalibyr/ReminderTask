import {createElement} from "../framework/render.js";
import {AbstractComponent} from "../framework/view/abstract-component.js";

function createTaskComponentTemplate(task) {
    return (
        `<li>${task}</li>`
    );
}

export default class TaskComponent extends AbstractComponent {
    constructor(tasks) {
        super();
        this.tasks = tasks;
    }

    get template() {
        return createTaskComponentTemplate(this.tasks);
    }
}
