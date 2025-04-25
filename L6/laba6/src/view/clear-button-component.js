import {AbstractComponent} from "../framework/view/abstract-component.js";

function createClearButtonTemplate() {
    return (
        `
        <button class="clear-button" type='submit'>Очистить</button>
        `
    )
}

export default class ClearButtonComponent extends AbstractComponent {
    #handleClick = null;

    constructor({onClick}) {
        super();
        this.#handleClick = onClick;
        this.element.addEventListener('click', this.#clearHandler);
    }

    #clearHandler = (evt) => {
        evt.preventDefault();
        this.#handleClick();
    }

    get template() {
        return createClearButtonTemplate();
    }
}