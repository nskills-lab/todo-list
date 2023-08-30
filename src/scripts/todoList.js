const template = document.querySelector("#task-template");
const todoListContainer = document.querySelector("#todo-list-container");
const PRIORITY_MAP = new Map([
  ["high", "red"],
  ["medium", "yellow"],
  ["low", "green"],
]);

export function createTaskNode(task) {
  const elementExists = todoListContainer.querySelector(
    `[data-task-id='${task.id}']`
  );
  let taskToRender;
  if (elementExists) {
    taskToRender = elementExists;
  } else {
    taskToRender = template.content.cloneNode(true);
    const id = taskToRender.querySelector("[data-task-id]");
    id.dataset.taskId = task.id;
  }

  addOrUpdateTaskToRender(taskToRender, task);
  return taskToRender;
}

export function loadCurrentProjectTasks(currentProjectTitle) {
  const tasks = [...todoListContainer.querySelectorAll(".task-card")];
  console.log(currentProjectTitle);
  tasks.forEach((element) => {
    console.log(element.dataset.project.toLowerCase());
    if (
      element.dataset.project.toLowerCase() !==
      currentProjectTitle.toLowerCase()
    ) {
      element.classList.toggle("inactive");
    }
  });
}

function addOrUpdateTaskToRender(taskToRender, task) {
  const color = PRIORITY_MAP.get(task.priority) ?? "green";
  const priority = taskToRender.querySelector("[data-priority-color]");
  priority.style.backgroundColor = color;

  const project = taskToRender.querySelector("[data-task-id]");
  project.dataset.project = task.project;

  const title = taskToRender.querySelector("[data-title]");
  title.innerText = task.name;

  const details = taskToRender.querySelector("[data-details]");
  details.innerText = task.description;

  const date = taskToRender.querySelector("[data-due-date]");
  date.innerText = task.dueDate;
}
