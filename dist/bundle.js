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


const taskFormContainer = document.querySelector("#task-container");
const newTaskButton = document.querySelector("#add-task-button");
const taskForm = document.querySelector("#task-form");
const overlay = document.querySelector("#overlay");
const todoListContainer = document.querySelector("#todo-list-container");
const cancelButton = document.querySelector("#form-btn-cancel");

newTaskButton.addEventListener("click", () => {
  taskFormContainer.classList.toggle("active");
  overlay.classList.toggle("active");
  (0,_scripts_form_js__WEBPACK_IMPORTED_MODULE_0__.clearForm)();
});

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  taskFormContainer.classList.toggle("active");
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
  taskFormContainer.classList.toggle("active");
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
    taskFormContainer.classList.toggle("active");
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnREFBSTtBQUMxQjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1AsaUVBQWlFLE9BQU87QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDNURlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0Esc0JBQXNCLFFBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztVQ3pDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ051RTtBQUNoQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSwyREFBUztBQUNYLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLDREQUFVO0FBQ3pCLG1CQUFtQixvRUFBYztBQUNqQztBQUNBO0FBQ0E7O0FBRUEsRUFBRSwyREFBUztBQUNYLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsRUFBRSwyREFBUztBQUNYLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJLDZEQUFXO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9mb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvdG9kb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2suanNcIjtcbmNvbnN0IGdlbmVyYXRvciA9IGlkR2VuZXJhdG9yKCk7XG5jb25zdCBuYW1lRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1uYW1lXCIpO1xuY29uc3QgZGVzY3JpcHRpb25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRlc2NyaXB0aW9uXCIpO1xuY29uc3QgZGF0ZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZHVlLWRhdGVcIik7XG5jb25zdCBwcmlvcml0eUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stcHJpb3JpdHlcIik7XG5jb25zdCBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1wcm9qZWN0XCIpO1xuY29uc3QgdG9kb0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tbGlzdC1jb250YWluZXJcIik7XG5jb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1mb3JtXCIpO1xuXG5jb25zdCBQUklPUklUWV9NQVAgPSBuZXcgTWFwKFtcbiAgW1wicmVkXCIsIFwiaGlnaFwiXSxcbiAgW1wieWVsbG93XCIsIFwibWVkaXVtXCJdLFxuICBbXCJncmVlblwiLCBcImxvd1wiXSxcbl0pO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFzayhpZCkge1xuICBjb25zdCBuYW1lID0gbmFtZUVsZW1lbnQudmFsdWUudHJpbSgpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uRWxlbWVudC52YWx1ZS50cmltKCk7XG4gIGNvbnN0IGRhdGUgPSBkYXRlRWxlbWVudC52YWx1ZS50cmltKCk7XG4gIGNvbnN0IHByaW9yaXR5ID0gcHJpb3JpdHlFbGVtZW50LnZhbHVlLnRyaW0oKSB8fCBcImxvd1wiO1xuICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdEVsZW1lbnQudmFsdWUudHJpbSgpO1xuICBjb25zdCB0YXNrSWQgPSBpZCA/PyBnZW5lcmF0b3IubmV4dCgpLnZhbHVlLnRvU3RyaW5nKCk7XG4gIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayh0YXNrSWQsIG5hbWUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSwgcHJvamVjdCk7XG4gIHJldHVybiBuZXdUYXNrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJGb3JtKCkge1xuICBpZiAodGFza0Zvcm0uZGF0YXNldC50YXNrSWQpIHtcbiAgICBkZWxldGUgdGFza0Zvcm0uZGF0YXNldC50YXNrSWQ7XG4gIH1cbiAgbmFtZUVsZW1lbnQudmFsdWUgPSBcIlwiO1xuICBkZXNjcmlwdGlvbkVsZW1lbnQudmFsdWUgPSBcIlwiO1xuICBkYXRlRWxlbWVudC52YWx1ZSA9IFwiXCI7XG4gIHByaW9yaXR5RWxlbWVudC52YWx1ZSA9IFwiXCI7XG4gIHByb2plY3RFbGVtZW50LnZhbHVlID0gXCJpbmJveFwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlZmlsbEZvcm0odGFza0lkKSB7XG4gIGNvbnN0IHRhc2sgPSB0b2RvTGlzdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YXNrLWlkPScke3Rhc2tJZH0nXWApO1xuICB0YXNrRm9ybS5kYXRhc2V0LnRhc2tJZCA9IHRhc2tJZDtcbiAgbmFtZUVsZW1lbnQudmFsdWUgPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10aXRsZV1cIikuaW5uZXJUZXh0LnRyaW0oKTtcbiAgZGVzY3JpcHRpb25FbGVtZW50LnZhbHVlID0gdGFza1xuICAgIC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZGV0YWlsc11cIilcbiAgICAuaW5uZXJUZXh0LnRyaW0oKTtcblxuICBkYXRlRWxlbWVudC52YWx1ZSA9IHRhc2sucXVlcnlTZWxlY3RvcihcIltkYXRhLWR1ZS1kYXRlXVwiKS5pbm5lclRleHQudHJpbSgpO1xuICBjb25zdCBwcmlvcml0eUNvbG9yID0gdGFzay5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcHJpb3JpdHktY29sb3JdXCIpLnN0eWxlXG4gICAgLmJhY2tncm91bmRDb2xvcjtcbiAgcHJpb3JpdHlFbGVtZW50LnZhbHVlID0gUFJJT1JJVFlfTUFQLmdldChwcmlvcml0eUNvbG9yKTtcbiAgcHJvamVjdEVsZW1lbnQudmFsdWUgPSB0YXNrXG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcm9qZWN0XVwiKVxuICAgIC5kYXRhc2V0LmRhdGFQcm9qZWN0LnRyaW0oKTtcbn1cblxuZnVuY3Rpb24qIGlkR2VuZXJhdG9yKCkge1xuICBsZXQgY291bnQgPSAxO1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIHlpZWxkIGNvdW50Kys7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3RvcihpZCwgbmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gICAgdGhpcy5faWQgPSBpZDtcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuX2R1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMuX3ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5fcHJvamVjdCA9IHByb2plY3Q7XG4gIH1cblxuICBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgc2V0IG5hbWUobmFtZSkge1xuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICBzZXQgZGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG5cbiAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIHNldCBkdWVEYXRlKGRhdGUpIHtcbiAgICB0aGlzLl9kdWVEYXRlID0gZGF0ZTtcbiAgfVxuXG4gIGdldCBkdWVEYXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9kdWVEYXRlO1xuICB9XG5cbiAgc2V0IHByaW9yaXR5KHByaW9yaXR5KSB7XG4gICAgdGhpcy5fcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxuXG4gIGdldCBwcmlvcml0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJpb3JpdHk7XG4gIH1cblxuICBzZXQgcHJvamVjdChwcm9qZWN0KSB7XG4gICAgdGhpcy5fcHJvamVjdCA9IHByb2plY3Q7XG4gIH1cblxuICBnZXQgcHJvamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvamVjdDtcbiAgfVxufVxuIiwiY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stdGVtcGxhdGVcIik7XG5jb25zdCB0b2RvTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1saXN0LWNvbnRhaW5lclwiKTtcbmNvbnN0IFBSSU9SSVRZX01BUCA9IG5ldyBNYXAoW1xuICBbXCJoaWdoXCIsIFwicmVkXCJdLFxuICBbXCJtZWRpdW1cIiwgXCJ5ZWxsb3dcIl0sXG4gIFtcImxvd1wiLCBcImdyZWVuXCJdLFxuXSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrTm9kZSh0YXNrKSB7XG4gIGNvbnN0IGVsZW1lbnRFeGlzdHMgPSB0b2RvTGlzdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgIGBbZGF0YS10YXNrLWlkPScke3Rhc2suaWR9J11gXG4gICk7XG4gIGxldCB0YXNrVG9SZW5kZXI7XG4gIGlmIChlbGVtZW50RXhpc3RzKSB7XG4gICAgdGFza1RvUmVuZGVyID0gZWxlbWVudEV4aXN0cztcbiAgfSBlbHNlIHtcbiAgICB0YXNrVG9SZW5kZXIgPSB0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICBjb25zdCBpZCA9IHRhc2tUb1JlbmRlci5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGFzay1pZF1cIik7XG4gICAgaWQuZGF0YXNldC50YXNrSWQgPSB0YXNrLmlkO1xuICB9XG5cbiAgYWRkT3JVcGRhdGVUYXNrVG9SZW5kZXIodGFza1RvUmVuZGVyLCB0YXNrKTtcbiAgcmV0dXJuIHRhc2tUb1JlbmRlcjtcbn1cblxuZnVuY3Rpb24gYWRkT3JVcGRhdGVUYXNrVG9SZW5kZXIodGFza1RvUmVuZGVyLCB0YXNrKSB7XG4gIGNvbnN0IGNvbG9yID0gUFJJT1JJVFlfTUFQLmdldCh0YXNrLnByaW9yaXR5KSA/PyBcImdyZWVuXCI7XG4gIGNvbnN0IHByaW9yaXR5ID0gdGFza1RvUmVuZGVyLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcmlvcml0eS1jb2xvcl1cIik7XG4gIHByaW9yaXR5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuXG4gIGNvbnN0IHByb2plY3QgPSB0YXNrVG9SZW5kZXIucXVlcnlTZWxlY3RvcihcIltkYXRhLXByb2plY3RdXCIpO1xuICBwcm9qZWN0LmRhdGFzZXQuZGF0YVByb2plY3QgPSB0YXNrLnByb2plY3Q7XG5cbiAgY29uc3QgdGl0bGUgPSB0YXNrVG9SZW5kZXIucXVlcnlTZWxlY3RvcihcIltkYXRhLXRpdGxlXVwiKTtcbiAgdGl0bGUuaW5uZXJUZXh0ID0gdGFzay5uYW1lO1xuXG4gIGNvbnN0IGRldGFpbHMgPSB0YXNrVG9SZW5kZXIucXVlcnlTZWxlY3RvcihcIltkYXRhLWRldGFpbHNdXCIpO1xuICBkZXRhaWxzLmlubmVyVGV4dCA9IHRhc2suZGVzY3JpcHRpb247XG5cbiAgY29uc3QgZGF0ZSA9IHRhc2tUb1JlbmRlci5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZHVlLWRhdGVdXCIpO1xuICBkYXRlLmlubmVyVGV4dCA9IHRhc2suZHVlRGF0ZTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlVGFzaywgY2xlYXJGb3JtLCBwcmVmaWxsRm9ybSB9IGZyb20gXCIuL3NjcmlwdHMvZm9ybS5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlVGFza05vZGUgfSBmcm9tIFwiLi9zY3JpcHRzL3RvZG9MaXN0LmpzXCI7XG5jb25zdCB0YXNrRm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1jb250YWluZXJcIik7XG5jb25zdCBuZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtdGFzay1idXR0b25cIik7XG5jb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1mb3JtXCIpO1xuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3ZlcmxheVwiKTtcbmNvbnN0IHRvZG9MaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLWxpc3QtY29udGFpbmVyXCIpO1xuY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtLWJ0bi1jYW5jZWxcIik7XG5cbm5ld1Rhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgdGFza0Zvcm1Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgb3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICBjbGVhckZvcm0oKTtcbn0pO1xuXG50YXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgdGFza0Zvcm1Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgb3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICBjb25zdCBleGlzdGluZ1Rhc2tJZCA9IGUudGFyZ2V0LmRhdGFzZXQudGFza0lkO1xuXG4gIGNvbnN0IHRhc2sgPSBjcmVhdGVUYXNrKGV4aXN0aW5nVGFza0lkKTtcbiAgY29uc3QgdGFza05vZGUgPSBjcmVhdGVUYXNrTm9kZSh0YXNrKTtcbiAgaWYgKCFleGlzdGluZ1Rhc2tJZCkge1xuICAgIHRvZG9MaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tOb2RlKTtcbiAgfVxuXG4gIGNsZWFyRm9ybSgpO1xufSk7XG5cbmNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgdGFza0Zvcm1Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgb3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICBjbGVhckZvcm0oKTtcbn0pO1xuXG50b2RvTGlzdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoXCJidXR0b25cIikubWF0Y2hlcyhcIltkYXRhLXRhc2stZGVsZXRlXVwiKSkge1xuICAgIGNvbnN0IHRhc2tUb0RlbGV0ZSA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFzay1jYXJkXCIpO1xuICAgIHRvZG9MaXN0Q29udGFpbmVyLnJlbW92ZUNoaWxkKHRhc2tUb0RlbGV0ZSk7XG4gIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xvc2VzdChcImJ1dHRvblwiKS5tYXRjaGVzKFwiW2RhdGEtdGFzay1lZGl0XVwiKSkge1xuICAgIGNvbnN0IGlkID0gZS50YXJnZXQuY2xvc2VzdChcImRpdltkYXRhLXRhc2staWRdXCIpLmRhdGFzZXQudGFza0lkO1xuICAgIHByZWZpbGxGb3JtKGlkKTtcbiAgICB0YXNrRm9ybUNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgfVxufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoXCJpbnB1dFwiKS5tYXRjaGVzKFwiI3Rhc2stY2hlY2tib3hcIikpIHtcbiAgICBjb25zdCB0YXNrID0gZS50YXJnZXQuY2xvc2VzdChcImRpdltkYXRhLXRhc2staWRdXCIpO1xuICAgIGNvbnN0IHRpdGxlID0gZS50YXJnZXRcbiAgICAgIC5jbG9zZXN0KFwiZGl2W2RhdGEtdGFzay1pZF1cIilcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGl0bGVdXCIpO1xuXG4gICAgaWYgKHRpdGxlLnN0eWxlLnRleHREZWNvcmF0aW9uID09PSBcImxpbmUtdGhyb3VnaFwiKSB7XG4gICAgICB0aXRsZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwiXCI7XG4gICAgICB0YXNrLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aXRsZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibGluZS10aHJvdWdoXCI7XG4gICAgdGFzay5zdHlsZS5vcGFjaXR5ID0gMC41O1xuICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==