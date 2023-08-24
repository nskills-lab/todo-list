import { createTask } from "./scripts/taskForm.js";
const taskFormContainer = document.querySelector("#task-container");
const newTaskButton = document.querySelector("#add-task-button");
const taskForm = document.querySelector("#task-form");
const overlay = document.querySelector("#overlay");

newTaskButton.addEventListener("click", () => {
  if (taskFormContainer.className === "") {
    taskFormContainer.classList.toggle("active");
    overlay.classList.toggle("active");
    return;
  }
  taskFormContainer.classList.toggle("active");
  overlay.classList.toggle("active");
});

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  taskFormContainer.classList.toggle("active");
  overlay.classList.toggle("active");
  const task = createTask();
});
