import { createElement } from "../render.js";


export class AbstractComponent {
    #element = null;
    constructor() {
        if (new.target === AbstractComponent) {
            throw new Error('Cannot instantiate AbstractComponent, only concrete one.');
        }
    }

    get element() {
        if (!this.#element) {
            this.#element = createElement(this.template);
        }

        return this.#element;
    }

    get template() {
        throw new Error('Abstract method not implemented');
    }

    removeElement() {
        this.#element = null;
    }
}
