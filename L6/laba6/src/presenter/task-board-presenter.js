import { render } from "../framework/render.js";
import TaskComponent from "../view/task-component.js";
import DeskComponent from "../view/task-board-component.js";
import TasksListComponent from "../view/task-list-component.js";
import ClearButtonComponent from "../view/clear-button-component.js";
import PlugComponent from "../view/plug-component.js";

export default class TasksBoardPresenter {
    #taskDeskComponent = new DeskComponent();
    #clearButtonComponent = null;
    #boardContainer = null;
    #boardtasks = [];
    #tasksModel = null;

    constructor({boardContainer, tasksModel, clearButtonComponent}) {
        this.#boardContainer = boardContainer;
        this.#tasksModel = tasksModel;

        this.#clearButtonComponent = clearButtonComponent;
        this.#tasksModel.addObserver(this.#handleModelChange.bind(this));
    }

    init() {
        this.#renderBoard();
    }

    createTask() {
        const taskTitle = document.querySelector('.add-new').value.trim();
        if (!taskTitle) {
            return;
        }

        this.#tasksModel.addTask(taskTitle);

        document.querySelector('.add-new').value = '';
    }

    clearBasket() {
        this.#tasksModel.removeBasketTask();
    }

    #renderBoard() {
        if (this.#tasksModel.tasks.length !== this.#boardtasks.length) {
            this.#boardtasks = [...this.#tasksModel.tasks];
        }

        render(this.#taskDeskComponent, this.#boardContainer);

        this.#boardtasks.forEach((taskList) => {
            this.#renderTaskList(taskList.status, taskList.tasks);
        });

        this.#renderClearButton();
    }

    #renderTask(task, container) {
        render(new TaskComponent(task), container.element.querySelector('ul'));
    }

    #renderTaskList(status, tasks) {
        const list = new TasksListComponent(status, this.#handleTaskDrop.bind(this));

        render(list, this.#taskDeskComponent.element);

        console.log(tasks.length)

        tasks.length === 0 ? this.#renderPlugComponent(list) : tasks.forEach((task) => {
            this.#renderTask(task, list);
        });
    }

    #renderClearButton() {
        const basketContainer = document.querySelector('.basket');

        const basketTasks = basketContainer?.querySelector('li');

        if (basketContainer && basketTasks) {
            render(this.#clearButtonComponent, basketContainer);
        }
    }

    #renderPlugComponent(container) {
        render(new PlugComponent(), container.element);
    }

    #clearBoard() {
        this.#taskDeskComponent.element.innerHTML = '';
    }

    #handleModelChange() {
        this.#clearBoard();
        this.#renderBoard();
    }

    #handleTaskDrop(newStatus, taskId, droppedTask) {
        this.#tasksModel.updateTaskStatus(newStatus, taskId, droppedTask);
    }
}