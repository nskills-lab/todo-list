import Task from "./task.js";
const generator = idGenerator();

export function createTask() {
  const name = document.querySelector("#task-name").value.trim();
  const description = document.querySelector("#task-description").value.trim();
  const date = document.querySelector("#task-due-date").value.trim();
  const priority =
    document.querySelector("#task-priority").value.trim() || "low";
  const project = document.querySelector("#task-project").value.trim();
  const id = generator.next().value.toString();
  const newTask = new Task(id, name, description, date, priority, project);
  console.log(newTask);
  return newTask;
}

function* idGenerator() {
  let count = 1;
  while (true) {
    yield count++;
  }
}
