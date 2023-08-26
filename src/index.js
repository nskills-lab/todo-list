import { createTask, clearForm } from "./scripts/form.js";
import { createTaskNode } from "./scripts/todoList.js";
const taskFormContainer = document.querySelector("#task-container");
const newTaskButton = document.querySelector("#add-task-button");
const taskForm = document.querySelector("#task-form");
const overlay = document.querySelector("#overlay");
const todoListContainer = document.querySelector("#todo-list-container");

newTaskButton.addEventListener("click", () => {
  taskFormContainer.classList.toggle("active");
  overlay.classList.toggle("active");
  clearForm();
});

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  taskFormContainer.classList.toggle("active");
  overlay.classList.toggle("active");
  const task = createTask();
  const taskNode = createTaskNode(task);
  todoListContainer.appendChild(taskNode);
});

todoListContainer.addEventListener("click", (e) => {
  if (e.target.closest("button").matches("[data-task-delete]")) {
    const taskToDelete = e.target.closest(".task-card");
    todoListContainer.removeChild(taskToDelete);
  }
});
