import { todoListContainer, template } from "../data/DOMSelectors.js";
import { PRIORITY_COLOR_MAP } from "../data/priority.js";

export function createTaskNode(task) {
  const elementExists = todoListContainer.querySelector(
    `[data-task-id='${task.id}']`
  );
  let taskToRender;
  if (elementExists) {
    taskToRender = elementExists;
  } else {
    taskToRender = template.content.cloneNode(true);
    const taskEl = taskToRender.querySelector("[data-task-id]");

    taskEl.dataset.taskId = task.id;
    taskToRender = taskEl;
  }

  setTaskNodeValues(taskToRender, task);
  return taskToRender;
}

export function loadCurrentProjectTasks(currentProjectTitle) {
  const tasks = [...todoListContainer.querySelectorAll(".task-card")];

  tasks.forEach((element) => {
    const classes = [...element.classList];
    if (
      element.dataset.project.toLowerCase() ===
      currentProjectTitle.toLowerCase()
    ) {
      if (classes.includes("inactive")) {
        element.classList.remove("inactive");
      }
    } else {
      if (!classes.includes("inactive")) {
        element.classList.toggle("inactive");
      }
    }
  });
}

export function deleteProjectTasks(projectTitle) {
  const tasksToDelete = getProjectTasks(projectTitle);
  tasksToDelete.forEach((element) => {
    element.remove();
  });
}

function getProjectTasks(projectTitle) {
  const tasks = [...todoListContainer.querySelectorAll(".task-card")];
  return tasks.filter((element) => {
    return element.dataset.project.toLowerCase() === projectTitle.toLowerCase();
  });
}

function setTaskNodeValues(taskToRender, task) {
  const color = PRIORITY_COLOR_MAP.get(task.priority) ?? "green";
  const priority = taskToRender.querySelector("[data-priority-color]");
  priority.style.backgroundColor = color;
  taskToRender.dataset.project = task.project;

  const title = taskToRender.querySelector("[data-title]");
  title.innerText = task.name;

  const details = taskToRender.querySelector("[data-details]");
  details.innerText = task.description;

  const date = taskToRender.querySelector("[data-due-date]");
  date.innerText = task.dueDate;
}
