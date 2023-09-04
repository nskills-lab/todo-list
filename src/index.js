import {
  createTask,
  resetForm,
  autofill,
  updateProjectMenu,
} from "./scripts/app/taskForm.js";
import {
  createTaskNode,
  loadCurrentProjectTasks,
  deleteProjectTasks,
} from "./scripts/app/todoList.js";
import { displayTodayTasks } from "./scripts/app/today.js";
import { createProjectNode, getProjectTitles } from "./scripts/app/projects.js";
import * as selectors from "./scripts/data/DOMSelectors.js";

selectors.nameElement.addEventListener("keyup", () => {
  const taskTitle = selectors.nameElement.value;
  if (taskTitle) {
    selectors.taskSaveButton.disabled = false;
  } else {
    selectors.taskSaveButton.disabled = true;
  }
});

/**
 * Opens up new task form
 */
selectors.newTaskButton.addEventListener("click", () => {
  selectors.formContainer.classList.toggle("active");
  selectors.overlay.classList.toggle("active");
  selectors.taskSaveButton.disabled = true;
  const titles = getProjectTitles();
  updateProjectMenu(titles);
  resetForm();
});

/**
 * 1. Gathers inputs from submitted task form.
 * 2. Creates task node and updates todo list.
 */
selectors.taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  selectors.formContainer.classList.toggle("active");
  selectors.overlay.classList.toggle("active");
  const existingTaskId = e.target.dataset.taskId;
  const task = createTask(existingTaskId);
  const taskNode = createTaskNode(task);

  if (!existingTaskId) {
    selectors.todoListContainer.appendChild(taskNode);
  }
  loadCurrentProjectTasks(selectors.currentProject.innerText);
  const titles = getProjectTitles();
  updateProjectMenu(titles);
  resetForm();
});

/**
 * Closes task form.
 */
selectors.cancelButton.addEventListener("click", (e) => {
  selectors.formContainer.classList.toggle("active");
  selectors.overlay.classList.toggle("active");
  resetForm();
});

/**
 * Actions related to editing and deleting existing task on the todo list.
 */
selectors.todoListContainer.addEventListener("click", (e) => {
  const element = e.target;
  if (element.closest("button").matches("[data-task-delete]")) {
    const taskToDelete = element.closest(".task-card");
    selectors.todoListContainer.removeChild(taskToDelete);
  } else if (element.closest("button").matches("[data-task-edit]")) {
    const id = element.closest("div[data-task-id]").dataset.taskId;
    autofill(id);
    selectors.formContainer.classList.toggle("active");
    selectors.overlay.classList.toggle("active");
  }
});

/**
 * Actions related to marking a task as complete and undoing it.
 */
selectors.todoListContainer.addEventListener("change", (e) => {
  if (e.target.closest("input").matches("#task-checkbox")) {
    const task = e.target.closest("div[data-task-id]");
    const title = e.target
      .closest("div[data-task-id]")
      .querySelector("[data-title]");

    if (title.style.textDecoration === "line-through") {
      title.style.textDecoration = "";
      task.style.opacity = 1;
      return;
    }
    title.style.textDecoration = "line-through";
    task.style.opacity = 0.5;
  }
});

/**
 * Brings up a pop up for creating a new project.
 */
selectors.createProject.addEventListener("click", (e) => {
  selectors.createProject.classList.toggle("inactive");
  selectors.newProjectPopup.classList.toggle("active");
});

/**
 * Actions related to creating a new project.
 */
selectors.newProjectButtons.addEventListener("click", (e) => {
  if (e.target.matches("#project-save")) {
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
});

/**
 * Actions related to sidebar menu links.
 */
selectors.sidebar.addEventListener("click", (e) => {
  const element = e.target;

  if (element.matches("#projects-container")) return;
  if (element.matches("[data-project-delete]")) {
    const projectToDelete = element.closest("div[data-project-id]");
    const title = projectToDelete.querySelector(
      "[data-project-title]"
    ).innerText;
    projectToDelete.remove();

    deleteProjectTasks(title);
    selectors.currentProject.innerText = "Inbox";
    loadCurrentProjectTasks(selectors.currentProject.innerText);
    return;
  }

  if (element.matches(".project-card")) {
    selectors.currentProject.innerText = element.querySelector(
      "div[data-project-title]"
    ).innerText;
    loadCurrentProjectTasks(selectors.currentProject.innerText);
    return;
  }

  if (element.matches("[data-project-title]") || element.matches("li#inbox")) {
    selectors.currentProject.innerText = element.innerText;
    loadCurrentProjectTasks(selectors.currentProject.innerText);
    return;
  }

  if (element.matches("li#today")) {
    selectors.currentProject.innerText = element.innerText;
    displayTodayTasks();
  }
});
