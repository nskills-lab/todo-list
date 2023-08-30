import { createTask, clearForm, prefillForm } from "./scripts/form.js";
import { createTaskNode } from "./scripts/todoList.js";
import { createProjectNode } from "./scripts/projects.js";
const formContainer = document.querySelector("#form-container");
const newTaskButton = document.querySelector("#add-task-button");
const taskForm = document.querySelector("#task-form");
const overlay = document.querySelector("#overlay");
const todoListContainer = document.querySelector("#todo-list-container");
const cancelButton = document.querySelector("#form-btn-cancel");
const newProject = document.querySelector("#new-project-div");
const newProjectPopup = document.querySelector("#new-project-popup");
const newProjectButtons = document.querySelector("#project-buttons-wrapper");
const newProjectInput = document.querySelector("#project-name-input");
const projectContainer = document.querySelector("#projects-container");

newTaskButton.addEventListener("click", () => {
  formContainer.classList.toggle("active");
  overlay.classList.toggle("active");
  clearForm();
});

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formContainer.classList.toggle("active");
  overlay.classList.toggle("active");
  const existingTaskId = e.target.dataset.taskId;

  const task = createTask(existingTaskId);
  const taskNode = createTaskNode(task);
  if (!existingTaskId) {
    todoListContainer.appendChild(taskNode);
  }

  clearForm();
});

cancelButton.addEventListener("click", (e) => {
  formContainer.classList.toggle("active");
  overlay.classList.toggle("active");
  clearForm();
});

todoListContainer.addEventListener("click", (e) => {
  if (e.target.closest("button").matches("[data-task-delete]")) {
    const taskToDelete = e.target.closest(".task-card");
    todoListContainer.removeChild(taskToDelete);
  } else if (e.target.closest("button").matches("[data-task-edit]")) {
    const id = e.target.closest("div[data-task-id]").dataset.taskId;
    prefillForm(id);
    formContainer.classList.toggle("active");
    overlay.classList.toggle("active");
  }
});

document.addEventListener("change", (e) => {
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

newProject.addEventListener("click", (e) => {
  newProject.classList.toggle("inactive");
  newProjectPopup.classList.toggle("active");
});

newProjectButtons.addEventListener("click", (e) => {
  if (e.target.matches("#project-save")) {
    const newProjectTitle = newProjectInput.value.trim();
    if (!newProjectTitle) return;
    const project = createProjectNode(newProjectTitle);
    projectContainer.appendChild(project);
  }
  if (e.target.matches("#project-cancel")) {
  }

  newProjectInput.value = "";
  newProject.classList.toggle("inactive");
  newProjectPopup.classList.toggle("active");
});

projectContainer.addEventListener("click", (e) => {
  if (e.target.matches("[data-project-delete]")) {
    const projectToDelete = e.target.closest("div[data-project-id]");
    projectToDelete.remove();
  }
});
