const taskFormContainer = document.querySelector("#task-container");
const newTaskButton = document.querySelector("#add-task-button");
const taskForm = document.querySelector("#task-form");

newTaskButton.addEventListener("click", () => {
  if (taskFormContainer.className === "") {
    taskFormContainer.classList.toggle("open");
    console.log("opening a new task form");
    return;
  }
  taskFormContainer.classList.toggle("open");
});

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
