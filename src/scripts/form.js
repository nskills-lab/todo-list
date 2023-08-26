import Task from "./task.js";
const generator = idGenerator();
const nameElement = document.querySelector("#task-name");
const descriptionElement = document.querySelector("#task-description");
const dateElement = document.querySelector("#task-due-date");
const priorityElement = document.querySelector("#task-priority");
const projectElement = document.querySelector("#task-project");

export function createTask() {
  const name = nameElement.value.trim();
  const description = descriptionElement.value.trim();
  const date = dateElement.value.trim();
  const priority = priorityElement.value.trim() || "low";
  const project = projectElement.value.trim();
  const id = generator.next().value.toString();
  const newTask = new Task(id, name, description, date, priority, project);
  return newTask;
}

export function clearForm() {
  nameElement.value = "";
  descriptionElement.value = "";
  dateElement.value = "";
  priorityElement.value = "";
  projectElement.value = "inbox";
}

function* idGenerator() {
  let count = 1;
  while (true) {
    yield count++;
  }
}
