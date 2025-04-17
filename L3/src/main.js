import HeaderComponent from './view/header-component.js';
import {render, RenderPosition} from './framework/render.js';
import FormAddTaskComponent from "./view/add-task-component.js";
import TasksModel from './model/task-model.js';
import TasksBoardPresenter from './presenter/task-board-presenter.js';

const bodyContainer= document.querySelector('.page-body');
const formContainer = document.querySelector('.add-new-task-component');
const taskBoardContainer = document.querySelector('.main-content');

const tasks = new TasksModel();
const tasksBoardPresenter = new TasksBoardPresenter({
    boardContainer: taskBoardContainer, 
    tasksModel: tasks,
})

render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new FormAddTaskComponent(), formContainer);

tasksBoardPresenter.init();