import { createTask, clearForm, prefillForm } from "./scripts/form.js";
import { createTaskNode } from "./scripts/todoList.js";
const taskFormContainer = document.querySelector("#task-container");
const newTaskButton = document.querySelector("#add-task-button");
const taskForm = document.querySelector("#task-form");
const overlay = document.querySelector("#overlay");
const todoListContainer = document.querySelector("#todo-list-container");
const cancelButton = document.querySelector("#form-btn-cancel");

newTaskButton.addEventListener("click", () => {
  taskFormContainer.classList.toggle("active");
  overlay.classList.toggle("active");
  clearForm();
});

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  taskFormContainer.classList.toggle("active");
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
  taskFormContainer.classList.toggle("active");
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
    taskFormContainer.classList.toggle("active");
    overlay.classList.toggle("active");
  }
});
