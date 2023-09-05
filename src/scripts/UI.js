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
  getTodoLists,
} from "./app/todoList.js";
import { displayTodayTasks } from "./app/today.js";
import { createProjectNode, getProjectTitles } from "./app/projects.js";
import * as selectors from "./data/DOMselectors.js";
import { saveToLocalStorage, getFromLocalStorage } from "./app/localStorage.js";

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

  static closeTaskForm() {
    selectors.formContainer.classList.toggle("active");
    selectors.overlay.classList.toggle("active");
    resetForm();
  }

  static openNewProjectPopUp() {
    selectors.createProject.classList.toggle("inactive");
    selectors.newProjectPopup.classList.toggle("active");
    selectors.overlay.classList.toggle("active");
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
    const todoLists = JSON.stringify(getTodoLists());
    saveToLocalStorage(todoLists);
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
      const todoLists = JSON.stringify(getTodoLists());
      saveToLocalStorage(todoLists);
      return;
    }

    if (element.closest("button").matches("[data-task-edit]")) {
      const id = element.closest("div[data-task-id]").dataset.taskId;
      autofill(id);
      selectors.formContainer.classList.toggle("active");
      selectors.overlay.classList.toggle("active");
    }
  }

  static handleNewProjectPopUpActions(event) {
    if (event.target.matches("#project-save")) {
      const newProjectTitle = selectors.newProjectInput.value.trim();
      if (!newProjectTitle) return;

      const reservedNames = getProjectTitles().map((title) =>
        title.toLowerCase()
      );
      reservedNames.push("inbox", "today");
      if (reservedNames.includes(newProjectTitle.toLowerCase())) {
        alert("Project already exists with this name!");
        return;
      }
      const project = createProjectNode(newProjectTitle);
      selectors.projectContainer.appendChild(project);
    }

    selectors.newProjectInput.value = "";
    selectors.createProject.classList.toggle("inactive");
    selectors.newProjectPopup.classList.toggle("active");
    selectors.overlay.classList.toggle("active");
    const todoLists = JSON.stringify(getTodoLists());
    saveToLocalStorage(todoLists);
  }

  static displayLeftMenuContent(event) {
    const element = event.target;
    if (element.matches("li#inbox")) {
      selectors.currentProject.innerText = element.innerText;
      loadCurrentProjectTasks(selectors.currentProject.innerText);
      return;
    }

    if (element.matches("li#today")) {
      selectors.currentProject.innerText = element.innerText;
      displayTodayTasks();
    }
  }

  static handleProjectContentActions(event) {
    const element = event.target;

    if (element.matches("#projects-container")) return;

    if (element.matches("[data-project-delete]")) {
      const projectContent = element.closest("div[data-project-id]");
      const projectTitle = projectContent.querySelector(
        "[data-project-title]"
      ).innerText;

      projectContent.remove();
      deleteProjectTasks(projectTitle);

      selectors.currentProject.innerText = "Inbox";
      loadCurrentProjectTasks(selectors.currentProject.innerText);
      const todoLists = JSON.stringify(getTodoLists());
      saveToLocalStorage(todoLists);
      return;
    }

    if (element.matches(".project-card")) {
      selectors.currentProject.innerText = element.querySelector(
        "div[data-project-title]"
      ).innerText;
    }

    if (element.matches("[data-project-title]")) {
      selectors.currentProject.innerText = element.innerText;
    }

    loadCurrentProjectTasks(selectors.currentProject.innerText);
  }

  // add a way to retrieve and display data from localStorage when the app is first loaded
}
