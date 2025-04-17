import {createElement} from "../framework/render.js";

function createTaskBoardComponentTemplate() {
    return (
        `<section class="desk-tasks">
        </section>`
    );
}

export default class TaskBoardComponentComponent {
    getTemplate() {
        return createTaskBoardComponentTemplate();
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