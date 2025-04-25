import HeaderComponent from './view/header-component.js';
import {render, RenderPosition} from './framework/render.js';
import FormAddTaskComponent from "./view/add-task-component.js";
import TaskBoardComponentComponent from "./view/task-board-component.js";
import TaskListComponent from "./view/task-list-component.js";
import TaskComponent from "./view/task-component.js";


const bodyContainer= document.querySelector('.page-body');
const formContainer = document.querySelector('.add-new-task-component');
const taskBoardContainer = document.querySelector('.main-content');


render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new FormAddTaskComponent(), formContainer);
render(new TaskBoardComponentComponent(), taskBoardContainer);

const taskListComponentContainer = document.querySelector('.desk-tasks');

for (let i = 0; i < 4; i++) {
    const list = new TaskListComponent();

    render(list, taskListComponentContainer);

    const taskContainer = list.getElement().querySelector(".task-container");

    for (let j = 0; j < 4; j++) {
        render(new TaskComponent(), taskContainer);
    }
}