import {
  createTask,
  resetForm,
  autofill,
  updateProjectMenu,
} from "./app/taskForm.js";
import {
  createTaskNode,
  loadCurrentProjectTasks,
  deleteProjectTasks,
} from "./app/todoList.js";
import { displayTodayTasks } from "./app/today.js";
import { createProjectNode, getProjectTitles } from "./app/projects.js";
import * as selectors from "./data/DOMSelectors.js";

export default class UI {
  static handleTaskTitleInput() {
    const taskTitle = selectors.nameElement.value;
    if (taskTitle) {
      selectors.taskSaveButton.disabled = false;
    } else {
      selectors.taskSaveButton.disabled = true;
    }
  }

  static openNewTaskForm() {
    selectors.formContainer.classList.toggle("active");
    selectors.overlay.classList.toggle("active");
    selectors.taskSaveButton.disabled = true;
    const titles = getProjectTitles();
    updateProjectMenu(titles);
    resetForm();
  }

  static updateToDoList(event) {
    event.preventDefault();
    selectors.formContainer.classList.toggle("active");
    selectors.overlay.classList.toggle("active");
    const existingTaskId = event.target.dataset.taskId;
    const task = createTask(existingTaskId);
    const taskNode = createTaskNode(task);

    if (!existingTaskId) {
      selectors.todoListContainer.appendChild(taskNode);
    }
    loadCurrentProjectTasks(selectors.currentProject.innerText);
    const titles = getProjectTitles();
    updateProjectMenu(titles);
    resetForm();
  }

  static closeTaskForm() {
    selectors.formContainer.classList.toggle("active");
    selectors.overlay.classList.toggle("active");
    resetForm();
  }

  static updateTask(event) {
    const element = event.target;
    if (element.matches("#todo-list-container")) return;

    if (element.matches("#task-checkbox")) {
      const task = element.closest("div[data-task-id]");
      const title = element
        .closest("div[data-task-id]")
        .querySelector("[data-title]");

      if (title.style.textDecoration === "line-through") {
        title.style.textDecoration = "";
        task.style.opacity = 1;
        return;
      }
      title.style.textDecoration = "line-through";
      task.style.opacity = 0.5;
      return;
    }

    if (element.closest("button").matches("[data-task-delete]")) {
      const taskToDelete = element.closest(".task-card");
      selectors.todoListContainer.removeChild(taskToDelete);
      return;
    }

    if (element.closest("button").matches("[data-task-edit]")) {
      const id = element.closest("div[data-task-id]").dataset.taskId;
      autofill(id);
      selectors.formContainer.classList.toggle("active");
      selectors.overlay.classList.toggle("active");
    }
  }
}
