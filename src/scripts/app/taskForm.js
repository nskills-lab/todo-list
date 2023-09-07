import Task from './task.js';
import { getProjectTitles } from './projects.js';
import * as selectors from '../data/DOMselectors.js';
import { COLOR_PRIORITY_MAP } from '../data/priority.js';
import { generateID } from '../utility/utility.js';

export function createTask(id) {
  const name = selectors.nameElement.value.trim();
  const description = selectors.descriptionElement.value.trim();
  const date = selectors.dateElement.value.trim();
  const priority = selectors.priorityElement.value.trim() || 'low';
  const project = selectors.projectElement.value.trim();
  const taskId = id ?? generateID();
  const newTask = new Task(taskId, name, description, date, priority, project);
  return newTask;
}

export function resetForm() {
  if (selectors.taskForm.dataset.taskId) {
    delete selectors.taskForm.dataset.taskId;
  }
  selectors.nameElement.value = '';
  selectors.descriptionElement.value = '';
  selectors.dateElement.value = '';
  selectors.priorityElement.value = '';
  selectors.projectElement.value = '';
  selectors.taskSaveButton.disabled = true;
}

export function autofill(taskId) {
  const task = selectors.todoListContainer.querySelector(
    `[data-task-id='${taskId}']`
  );
  selectors.taskForm.dataset.taskId = taskId;
  selectors.nameElement.value = task
    .querySelector('[data-title]')
    .innerText.trim();
  selectors.descriptionElement.value = task
    .querySelector('[data-details]')
    .innerText.trim();

  selectors.dateElement.value = task
    .querySelector('[data-due-date]')
    .innerText.trim();
  const priorityColor = task.querySelector('[data-priority-color]').style
    .backgroundColor;
  selectors.priorityElement.value = COLOR_PRIORITY_MAP.get(priorityColor);
  selectors.projectElement.value = task.dataset.project;
  const titles = getProjectTitles();
  updateProjectMenu(titles);
  selectors.taskSaveButton.disabled = false;
}

export function updateProjectMenu(titles) {
  const reservedOptions = ['Inbox', 'Project'];
  const optionsToDel = [
    ...selectors.projectElement.querySelectorAll('option'),
  ].filter((element) => {
    return !reservedOptions.includes(element.innerText);
  });

  optionsToDel.forEach((option) => option.remove());

  titles.forEach((title) => {
    const option = document.createElement('option');
    option.text = title;
    option.value = title;
    selectors.projectElement.add(option);
  });
}
