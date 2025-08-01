import { AbstractComponent } from "../framework/view/abstract-component.js";

function createNoTaskTemplate() {
  return `
    <p class="board__no-tasks">
      Loading...
    </p>
  `;
}

export default class LoadingViewComponent extends AbstractComponent {

  constructor(){
    super();
  }

  get template() {
    return createNoTaskTemplate();
  }
}