/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/form.js":
/*!*****************************!*\
  !*** ./src/scripts/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearForm: () => (/* binding */ clearForm),
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   prefillForm: () => (/* binding */ prefillForm)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/scripts/task.js");

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

function createTask(id) {
  const name = nameElement.value.trim();
  const description = descriptionElement.value.trim();
  const date = dateElement.value.trim();
  const priority = priorityElement.value.trim() || "low";
  const project = projectElement.value.trim();
  const taskId = id ?? generator.next().value.toString();
  const newTask = new _task_js__WEBPACK_IMPORTED_MODULE_0__["default"](taskId, name, description, date, priority, project);
  return newTask;
}

function clearForm() {
  if (taskForm.dataset.taskId) {
    delete taskForm.dataset.taskId;
  }
  nameElement.value = "";
  descriptionElement.value = "";
  dateElement.value = "";
  priorityElement.value = "";
  projectElement.value = "inbox";
}

function prefillForm(taskId) {
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
  projectElement.value = task
    .querySelector("[data-project]")
    .dataset.dataProject.trim();
}

function* idGenerator() {
  let count = 1;
  while (true) {
    yield count++;
  }
}


/***/ }),

/***/ "./src/scripts/projects.js":
/*!*********************************!*\
  !*** ./src/scripts/projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProjectNode: () => (/* binding */ createProjectNode)
/* harmony export */ });
const projectTemplate = document.querySelector("#project-template");
const generator = idGenerator();

function createProjectNode(title) {
  const project = projectFactory(title);
  const projectElement = projectTemplate.content.cloneNode(true);
  projectElement;
  const id = projectElement.querySelector("[data-project-id]");
  id.dataset.projectId = project.id;
  const projectTitle = projectElement.querySelector("[data-project-title]");
  projectTitle.innerText = project.title;
  return projectElement;
}

const projectFactory = (title) => {
  return { id: generator.next().value.toString(), title };
};
function* idGenerator() {
  let count = 1;
  while (true) {
    yield count++;
  }
}


/***/ }),

/***/ "./src/scripts/task.js":
/*!*****************************!*\
  !*** ./src/scripts/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
  constructor(id, name, description, dueDate, priority, project) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._dueDate = dueDate;
    this._priority = priority;
    this._project = project;
  }

  get id() {
    return this._id;
  }

  set name(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set description(description) {
    this._description = description;
  }

  get description() {
    return this._description;
  }

  set dueDate(date) {
    this._dueDate = date;
  }

  get dueDate() {
    return this._dueDate;
  }

  set priority(priority) {
    this._priority = priority;
  }

  get priority() {
    return this._priority;
  }

  set project(project) {
    this._project = project;
  }

  get project() {
    return this._project;
  }
}


/***/ }),

/***/ "./src/scripts/todoList.js":
/*!*********************************!*\
  !*** ./src/scripts/todoList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTaskNode: () => (/* binding */ createTaskNode)
/* harmony export */ });
const template = document.querySelector("#task-template");
const todoListContainer = document.querySelector("#todo-list-container");
const PRIORITY_MAP = new Map([
  ["high", "red"],
  ["medium", "yellow"],
  ["low", "green"],
]);

function createTaskNode(task) {
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

function addOrUpdateTaskToRender(taskToRender, task) {
  const color = PRIORITY_MAP.get(task.priority) ?? "green";
  const priority = taskToRender.querySelector("[data-priority-color]");
  priority.style.backgroundColor = color;

  const project = taskToRender.querySelector("[data-project]");
  project.dataset.dataProject = task.project;

  const title = taskToRender.querySelector("[data-title]");
  title.innerText = task.name;

  const details = taskToRender.querySelector("[data-details]");
  details.innerText = task.description;

  const date = taskToRender.querySelector("[data-due-date]");
  date.innerText = task.dueDate;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/form.js */ "./src/scripts/form.js");
/* harmony import */ var _scripts_todoList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/todoList.js */ "./src/scripts/todoList.js");
/* harmony import */ var _scripts_projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/projects.js */ "./src/scripts/projects.js");



const formContainer = document.querySelector("#form-container");
const newTaskButton = document.querySelector("#add-task-button");
const taskForm = document.querySelector("#task-form");
const overlay = document.querySelector("#overlay");
const todoListContainer = document.querySelector("#todo-list-container");
const cancelButton = document.querySelector("#form-btn-cancel");
const newProject = document.querySelector("#new-project-div");
const newProjectPopup = document.querySelector("#new-project-popup");
const newProjectButtons = document.querySelector("#project-buttons-wrapper");
const newProjectInput = document.querySelector("#project-name-input");
const projectContainer = document.querySelector("#projects-container");

newTaskButton.addEventListener("click", () => {
  formContainer.classList.toggle("active");
  overlay.classList.toggle("active");
  (0,_scripts_form_js__WEBPACK_IMPORTED_MODULE_0__.clearForm)();
});

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formContainer.classList.toggle("active");
  overlay.classList.toggle("active");
  const existingTaskId = e.target.dataset.taskId;

  const task = (0,_scripts_form_js__WEBPACK_IMPORTED_MODULE_0__.createTask)(existingTaskId);
  const taskNode = (0,_scripts_todoList_js__WEBPACK_IMPORTED_MODULE_1__.createTaskNode)(task);
  if (!existingTaskId) {
    todoListContainer.appendChild(taskNode);
  }

  (0,_scripts_form_js__WEBPACK_IMPORTED_MODULE_0__.clearForm)();
});

cancelButton.addEventListener("click", (e) => {
  formContainer.classList.toggle("active");
  overlay.classList.toggle("active");
  (0,_scripts_form_js__WEBPACK_IMPORTED_MODULE_0__.clearForm)();
});

todoListContainer.addEventListener("click", (e) => {
  if (e.target.closest("button").matches("[data-task-delete]")) {
    const taskToDelete = e.target.closest(".task-card");
    todoListContainer.removeChild(taskToDelete);
  } else if (e.target.closest("button").matches("[data-task-edit]")) {
    const id = e.target.closest("div[data-task-id]").dataset.taskId;
    (0,_scripts_form_js__WEBPACK_IMPORTED_MODULE_0__.prefillForm)(id);
    formContainer.classList.toggle("active");
    overlay.classList.toggle("active");
  }
});

document.addEventListener("change", (e) => {
  if (e.target.closest("input").matches("#task-checkbox")) {
    const task = e.target.closest("div[data-task-id]");
    const title = e.target
      .closest("div[data-task-id]")
      .querySelector("[data-title]");

    if (title.style.textDecoration === "line-through") {
      title.style.textDecoration = "";
      task.style.opacity = 1;
      return;
    }
    title.style.textDecoration = "line-through";
    task.style.opacity = 0.5;
  }
});

newProject.addEventListener("click", (e) => {
  newProject.classList.toggle("inactive");
  newProjectPopup.classList.toggle("active");
});

newProjectButtons.addEventListener("click", (e) => {
  if (e.target.matches("#project-save")) {
    const newProjectTitle = newProjectInput.value.trim();
    if (!newProjectTitle) return;
    const project = (0,_scripts_projects_js__WEBPACK_IMPORTED_MODULE_2__.createProjectNode)(newProjectTitle);
    projectContainer.appendChild(project);
  }
  if (e.target.matches("#project-cancel")) {
  }

  newProjectInput.value = "";
  newProject.classList.toggle("inactive");
  newProjectPopup.classList.toggle("active");
});

projectContainer.addEventListener("click", (e) => {
  if (e.target.matches("[data-project-delete]")) {
    const projectToDelete = e.target.closest("div[data-project-id]");
    projectToDelete.remove();
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL3RvZG9MaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrLmpzXCI7XG5jb25zdCBnZW5lcmF0b3IgPSBpZEdlbmVyYXRvcigpO1xuY29uc3QgbmFtZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stbmFtZVwiKTtcbmNvbnN0IGRlc2NyaXB0aW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kZXNjcmlwdGlvblwiKTtcbmNvbnN0IGRhdGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWR1ZS1kYXRlXCIpO1xuY29uc3QgcHJpb3JpdHlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXByaW9yaXR5XCIpO1xuY29uc3QgcHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stcHJvamVjdFwiKTtcbmNvbnN0IHRvZG9MaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLWxpc3QtY29udGFpbmVyXCIpO1xuY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZm9ybVwiKTtcblxuY29uc3QgUFJJT1JJVFlfTUFQID0gbmV3IE1hcChbXG4gIFtcInJlZFwiLCBcImhpZ2hcIl0sXG4gIFtcInllbGxvd1wiLCBcIm1lZGl1bVwiXSxcbiAgW1wiZ3JlZW5cIiwgXCJsb3dcIl0sXG5dKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2soaWQpIHtcbiAgY29uc3QgbmFtZSA9IG5hbWVFbGVtZW50LnZhbHVlLnRyaW0oKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbkVsZW1lbnQudmFsdWUudHJpbSgpO1xuICBjb25zdCBkYXRlID0gZGF0ZUVsZW1lbnQudmFsdWUudHJpbSgpO1xuICBjb25zdCBwcmlvcml0eSA9IHByaW9yaXR5RWxlbWVudC52YWx1ZS50cmltKCkgfHwgXCJsb3dcIjtcbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RFbGVtZW50LnZhbHVlLnRyaW0oKTtcbiAgY29uc3QgdGFza0lkID0gaWQgPz8gZ2VuZXJhdG9yLm5leHQoKS52YWx1ZS50b1N0cmluZygpO1xuICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2sodGFza0lkLCBuYW1lLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHksIHByb2plY3QpO1xuICByZXR1cm4gbmV3VGFzaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyRm9ybSgpIHtcbiAgaWYgKHRhc2tGb3JtLmRhdGFzZXQudGFza0lkKSB7XG4gICAgZGVsZXRlIHRhc2tGb3JtLmRhdGFzZXQudGFza0lkO1xuICB9XG4gIG5hbWVFbGVtZW50LnZhbHVlID0gXCJcIjtcbiAgZGVzY3JpcHRpb25FbGVtZW50LnZhbHVlID0gXCJcIjtcbiAgZGF0ZUVsZW1lbnQudmFsdWUgPSBcIlwiO1xuICBwcmlvcml0eUVsZW1lbnQudmFsdWUgPSBcIlwiO1xuICBwcm9qZWN0RWxlbWVudC52YWx1ZSA9IFwiaW5ib3hcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZWZpbGxGb3JtKHRhc2tJZCkge1xuICBjb25zdCB0YXNrID0gdG9kb0xpc3RDb250YWluZXIucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFzay1pZD0nJHt0YXNrSWR9J11gKTtcbiAgdGFza0Zvcm0uZGF0YXNldC50YXNrSWQgPSB0YXNrSWQ7XG4gIG5hbWVFbGVtZW50LnZhbHVlID0gdGFzay5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGl0bGVdXCIpLmlubmVyVGV4dC50cmltKCk7XG4gIGRlc2NyaXB0aW9uRWxlbWVudC52YWx1ZSA9IHRhc2tcbiAgICAucXVlcnlTZWxlY3RvcihcIltkYXRhLWRldGFpbHNdXCIpXG4gICAgLmlubmVyVGV4dC50cmltKCk7XG5cbiAgZGF0ZUVsZW1lbnQudmFsdWUgPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1kdWUtZGF0ZV1cIikuaW5uZXJUZXh0LnRyaW0oKTtcbiAgY29uc3QgcHJpb3JpdHlDb2xvciA9IHRhc2sucXVlcnlTZWxlY3RvcihcIltkYXRhLXByaW9yaXR5LWNvbG9yXVwiKS5zdHlsZVxuICAgIC5iYWNrZ3JvdW5kQ29sb3I7XG4gIHByaW9yaXR5RWxlbWVudC52YWx1ZSA9IFBSSU9SSVRZX01BUC5nZXQocHJpb3JpdHlDb2xvcik7XG4gIHByb2plY3RFbGVtZW50LnZhbHVlID0gdGFza1xuICAgIC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcHJvamVjdF1cIilcbiAgICAuZGF0YXNldC5kYXRhUHJvamVjdC50cmltKCk7XG59XG5cbmZ1bmN0aW9uKiBpZEdlbmVyYXRvcigpIHtcbiAgbGV0IGNvdW50ID0gMTtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICB5aWVsZCBjb3VudCsrO1xuICB9XG59XG4iLCJjb25zdCBwcm9qZWN0VGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtdGVtcGxhdGVcIik7XG5jb25zdCBnZW5lcmF0b3IgPSBpZEdlbmVyYXRvcigpO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdE5vZGUodGl0bGUpIHtcbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RGYWN0b3J5KHRpdGxlKTtcbiAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBwcm9qZWN0VGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gIHByb2plY3RFbGVtZW50O1xuICBjb25zdCBpZCA9IHByb2plY3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcm9qZWN0LWlkXVwiKTtcbiAgaWQuZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0LmlkO1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBwcm9qZWN0RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcHJvamVjdC10aXRsZV1cIik7XG4gIHByb2plY3RUaXRsZS5pbm5lclRleHQgPSBwcm9qZWN0LnRpdGxlO1xuICByZXR1cm4gcHJvamVjdEVsZW1lbnQ7XG59XG5cbmNvbnN0IHByb2plY3RGYWN0b3J5ID0gKHRpdGxlKSA9PiB7XG4gIHJldHVybiB7IGlkOiBnZW5lcmF0b3IubmV4dCgpLnZhbHVlLnRvU3RyaW5nKCksIHRpdGxlIH07XG59O1xuZnVuY3Rpb24qIGlkR2VuZXJhdG9yKCkge1xuICBsZXQgY291bnQgPSAxO1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIHlpZWxkIGNvdW50Kys7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3RvcihpZCwgbmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gICAgdGhpcy5faWQgPSBpZDtcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuX2R1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMuX3ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5fcHJvamVjdCA9IHByb2plY3Q7XG4gIH1cblxuICBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgc2V0IG5hbWUobmFtZSkge1xuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICBzZXQgZGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG5cbiAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIHNldCBkdWVEYXRlKGRhdGUpIHtcbiAgICB0aGlzLl9kdWVEYXRlID0gZGF0ZTtcbiAgfVxuXG4gIGdldCBkdWVEYXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9kdWVEYXRlO1xuICB9XG5cbiAgc2V0IHByaW9yaXR5KHByaW9yaXR5KSB7XG4gICAgdGhpcy5fcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxuXG4gIGdldCBwcmlvcml0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJpb3JpdHk7XG4gIH1cblxuICBzZXQgcHJvamVjdChwcm9qZWN0KSB7XG4gICAgdGhpcy5fcHJvamVjdCA9IHByb2plY3Q7XG4gIH1cblxuICBnZXQgcHJvamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvamVjdDtcbiAgfVxufVxuIiwiY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stdGVtcGxhdGVcIik7XG5jb25zdCB0b2RvTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1saXN0LWNvbnRhaW5lclwiKTtcbmNvbnN0IFBSSU9SSVRZX01BUCA9IG5ldyBNYXAoW1xuICBbXCJoaWdoXCIsIFwicmVkXCJdLFxuICBbXCJtZWRpdW1cIiwgXCJ5ZWxsb3dcIl0sXG4gIFtcImxvd1wiLCBcImdyZWVuXCJdLFxuXSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrTm9kZSh0YXNrKSB7XG4gIGNvbnN0IGVsZW1lbnRFeGlzdHMgPSB0b2RvTGlzdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgIGBbZGF0YS10YXNrLWlkPScke3Rhc2suaWR9J11gXG4gICk7XG4gIGxldCB0YXNrVG9SZW5kZXI7XG4gIGlmIChlbGVtZW50RXhpc3RzKSB7XG4gICAgdGFza1RvUmVuZGVyID0gZWxlbWVudEV4aXN0cztcbiAgfSBlbHNlIHtcbiAgICB0YXNrVG9SZW5kZXIgPSB0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICBjb25zdCBpZCA9IHRhc2tUb1JlbmRlci5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGFzay1pZF1cIik7XG4gICAgaWQuZGF0YXNldC50YXNrSWQgPSB0YXNrLmlkO1xuICB9XG5cbiAgYWRkT3JVcGRhdGVUYXNrVG9SZW5kZXIodGFza1RvUmVuZGVyLCB0YXNrKTtcbiAgcmV0dXJuIHRhc2tUb1JlbmRlcjtcbn1cblxuZnVuY3Rpb24gYWRkT3JVcGRhdGVUYXNrVG9SZW5kZXIodGFza1RvUmVuZGVyLCB0YXNrKSB7XG4gIGNvbnN0IGNvbG9yID0gUFJJT1JJVFlfTUFQLmdldCh0YXNrLnByaW9yaXR5KSA/PyBcImdyZWVuXCI7XG4gIGNvbnN0IHByaW9yaXR5ID0gdGFza1RvUmVuZGVyLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcmlvcml0eS1jb2xvcl1cIik7XG4gIHByaW9yaXR5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuXG4gIGNvbnN0IHByb2plY3QgPSB0YXNrVG9SZW5kZXIucXVlcnlTZWxlY3RvcihcIltkYXRhLXByb2plY3RdXCIpO1xuICBwcm9qZWN0LmRhdGFzZXQuZGF0YVByb2plY3QgPSB0YXNrLnByb2plY3Q7XG5cbiAgY29uc3QgdGl0bGUgPSB0YXNrVG9SZW5kZXIucXVlcnlTZWxlY3RvcihcIltkYXRhLXRpdGxlXVwiKTtcbiAgdGl0bGUuaW5uZXJUZXh0ID0gdGFzay5uYW1lO1xuXG4gIGNvbnN0IGRldGFpbHMgPSB0YXNrVG9SZW5kZXIucXVlcnlTZWxlY3RvcihcIltkYXRhLWRldGFpbHNdXCIpO1xuICBkZXRhaWxzLmlubmVyVGV4dCA9IHRhc2suZGVzY3JpcHRpb247XG5cbiAgY29uc3QgZGF0ZSA9IHRhc2tUb1JlbmRlci5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZHVlLWRhdGVdXCIpO1xuICBkYXRlLmlubmVyVGV4dCA9IHRhc2suZHVlRGF0ZTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlVGFzaywgY2xlYXJGb3JtLCBwcmVmaWxsRm9ybSB9IGZyb20gXCIuL3NjcmlwdHMvZm9ybS5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlVGFza05vZGUgfSBmcm9tIFwiLi9zY3JpcHRzL3RvZG9MaXN0LmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0Tm9kZSB9IGZyb20gXCIuL3NjcmlwdHMvcHJvamVjdHMuanNcIjtcbmNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm0tY29udGFpbmVyXCIpO1xuY29uc3QgbmV3VGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stYnV0dG9uXCIpO1xuY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZm9ybVwiKTtcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI292ZXJsYXlcIik7XG5jb25zdCB0b2RvTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1saXN0LWNvbnRhaW5lclwiKTtcbmNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybS1idG4tY2FuY2VsXCIpO1xuY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXByb2plY3QtZGl2XCIpO1xuY29uc3QgbmV3UHJvamVjdFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctcHJvamVjdC1wb3B1cFwiKTtcbmNvbnN0IG5ld1Byb2plY3RCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWJ1dHRvbnMtd3JhcHBlclwiKTtcbmNvbnN0IG5ld1Byb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1uYW1lLWlucHV0XCIpO1xuY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHMtY29udGFpbmVyXCIpO1xuXG5uZXdUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgb3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICBjbGVhckZvcm0oKTtcbn0pO1xuXG50YXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gIGNvbnN0IGV4aXN0aW5nVGFza0lkID0gZS50YXJnZXQuZGF0YXNldC50YXNrSWQ7XG5cbiAgY29uc3QgdGFzayA9IGNyZWF0ZVRhc2soZXhpc3RpbmdUYXNrSWQpO1xuICBjb25zdCB0YXNrTm9kZSA9IGNyZWF0ZVRhc2tOb2RlKHRhc2spO1xuICBpZiAoIWV4aXN0aW5nVGFza0lkKSB7XG4gICAgdG9kb0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza05vZGUpO1xuICB9XG5cbiAgY2xlYXJGb3JtKCk7XG59KTtcblxuY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gIG92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgY2xlYXJGb3JtKCk7XG59KTtcblxudG9kb0xpc3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGlmIChlLnRhcmdldC5jbG9zZXN0KFwiYnV0dG9uXCIpLm1hdGNoZXMoXCJbZGF0YS10YXNrLWRlbGV0ZV1cIikpIHtcbiAgICBjb25zdCB0YXNrVG9EZWxldGUgPSBlLnRhcmdldC5jbG9zZXN0KFwiLnRhc2stY2FyZFwiKTtcbiAgICB0b2RvTGlzdENvbnRhaW5lci5yZW1vdmVDaGlsZCh0YXNrVG9EZWxldGUpO1xuICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoXCJidXR0b25cIikubWF0Y2hlcyhcIltkYXRhLXRhc2stZWRpdF1cIikpIHtcbiAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCJkaXZbZGF0YS10YXNrLWlkXVwiKS5kYXRhc2V0LnRhc2tJZDtcbiAgICBwcmVmaWxsRm9ybShpZCk7XG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgfVxufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoXCJpbnB1dFwiKS5tYXRjaGVzKFwiI3Rhc2stY2hlY2tib3hcIikpIHtcbiAgICBjb25zdCB0YXNrID0gZS50YXJnZXQuY2xvc2VzdChcImRpdltkYXRhLXRhc2staWRdXCIpO1xuICAgIGNvbnN0IHRpdGxlID0gZS50YXJnZXRcbiAgICAgIC5jbG9zZXN0KFwiZGl2W2RhdGEtdGFzay1pZF1cIilcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGl0bGVdXCIpO1xuXG4gICAgaWYgKHRpdGxlLnN0eWxlLnRleHREZWNvcmF0aW9uID09PSBcImxpbmUtdGhyb3VnaFwiKSB7XG4gICAgICB0aXRsZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwiXCI7XG4gICAgICB0YXNrLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aXRsZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibGluZS10aHJvdWdoXCI7XG4gICAgdGFzay5zdHlsZS5vcGFjaXR5ID0gMC41O1xuICB9XG59KTtcblxubmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgbmV3UHJvamVjdC5jbGFzc0xpc3QudG9nZ2xlKFwiaW5hY3RpdmVcIik7XG4gIG5ld1Byb2plY3RQb3B1cC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xufSk7XG5cbm5ld1Byb2plY3RCdXR0b25zLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIiNwcm9qZWN0LXNhdmVcIikpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0VGl0bGUgPSBuZXdQcm9qZWN0SW5wdXQudmFsdWUudHJpbSgpO1xuICAgIGlmICghbmV3UHJvamVjdFRpdGxlKSByZXR1cm47XG4gICAgY29uc3QgcHJvamVjdCA9IGNyZWF0ZVByb2plY3ROb2RlKG5ld1Byb2plY3RUaXRsZSk7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgfVxuICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIiNwcm9qZWN0LWNhbmNlbFwiKSkge1xuICB9XG5cbiAgbmV3UHJvamVjdElucHV0LnZhbHVlID0gXCJcIjtcbiAgbmV3UHJvamVjdC5jbGFzc0xpc3QudG9nZ2xlKFwiaW5hY3RpdmVcIik7XG4gIG5ld1Byb2plY3RQb3B1cC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xufSk7XG5cbnByb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiW2RhdGEtcHJvamVjdC1kZWxldGVdXCIpKSB7XG4gICAgY29uc3QgcHJvamVjdFRvRGVsZXRlID0gZS50YXJnZXQuY2xvc2VzdChcImRpdltkYXRhLXByb2plY3QtaWRdXCIpO1xuICAgIHByb2plY3RUb0RlbGV0ZS5yZW1vdmUoKTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=