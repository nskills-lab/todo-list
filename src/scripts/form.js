import Task from "./task.js";
import { getProjectTitles } from "./projects.js";
const generator = idGenerator();
const nameElement = document.querySelector("#task-name");
const descriptionElement = document.querySelector("#task-description");
const dateElement = document.querySelector("#task-due-date");
const priorityElement = document.querySelector("#task-priority");
const projectElement = document.querySelector("#task-project");
const todoListContainer = document.querySelector("#todo-list-container");
const taskForm = document.querySelector("#task-form");

const PRIORITY_MAP = new Map([
  ["red", "high"],
  ["yellow", "medium"],
  ["green", "low"],
]);

export function createTask(id) {
  const name = nameElement.value.trim();
  const description = descriptionElement.value.trim();
  const date = dateElement.value.trim();

  const priority = priorityElement.value.trim() || "low";
  const project = projectElement.value.trim();
  const taskId = id ?? generator.next().value.toString();
  const newTask = new Task(taskId, name, description, date, priority, project);
  return newTask;
}

export function clearForm() {
  if (taskForm.dataset.taskId) {
    delete taskForm.dataset.taskId;
  }
  nameElement.value = "";
  descriptionElement.value = "";
  dateElement.value = "";
  priorityElement.value = "";
  projectElement.value = "";
}

export function prefillForm(taskId) {
  const task = todoListContainer.querySelector(`[data-task-id='${taskId}']`);
  taskForm.dataset.taskId = taskId;
  nameElement.value = task.querySelector("[data-title]").innerText.trim();
  descriptionElement.value = task
    .querySelector("[data-details]")
    .innerText.trim();

  dateElement.value = task.querySelector("[data-due-date]").innerText.trim();
  const priorityColor = task.querySelector("[data-priority-color]").style
    .backgroundColor;
  priorityElement.value = PRIORITY_MAP.get(priorityColor);
  const project = task.querySelector("[data-project]").dataset.project.trim();
  projectElement.value = project;
  const titles = getProjectTitles();
  addFormProjects(titles);
}

export function addFormProjects(titles) {
  const options = [...projectElement.querySelectorAll("option")].map(
    (element) => element.value.toLowerCase()
  );

  const uniqueTitles = titles.filter((title) => {
    return !options.includes(title.toLowerCase());
  });

  uniqueTitles.forEach((title) => {
    let option = document.createElement("option");
    option.text = title;
    option.value = title;
    projectElement.add(option);
  });
}

function* idGenerator() {
  let count = 1;
  while (true) {
    yield count++;
  }
}
