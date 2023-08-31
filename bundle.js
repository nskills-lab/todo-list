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
/* harmony export */   addFormProjects: () => (/* binding */ addFormProjects),
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

function addFormProjects(titles) {
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


/***/ }),

/***/ "./src/scripts/projects.js":
/*!*********************************!*\
  !*** ./src/scripts/projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProjectNode: () => (/* binding */ createProjectNode),
/* harmony export */   getProjectTitles: () => (/* binding */ getProjectTitles)
/* harmony export */ });
const projectTemplate = document.querySelector("#project-template");
const generator = idGenerator();
const projectContainer = document.querySelector("#projects-container");

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

function getProjectTitles() {
  const projects = [
    ...projectContainer.querySelectorAll("div[data-project-title]"),
  ];
  return projects.map((element) => element.innerText);
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
/* harmony export */   createTaskNode: () => (/* binding */ createTaskNode),
/* harmony export */   deleteProjectTasks: () => (/* binding */ deleteProjectTasks),
/* harmony export */   loadCurrentProjectTasks: () => (/* binding */ loadCurrentProjectTasks)
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

function loadCurrentProjectTasks(currentProjectTitle) {
  const tasks = [...todoListContainer.querySelectorAll(".task-card")];

  tasks.forEach((element) => {
    const classes = [...element.classList];
    console.log(classes);
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

function deleteProjectTasks(projectTitle) {
  const tasksToDelete = getProjectTasks(projectTitle);
  tasksToDelete.forEach((element) => {
    element.remove();
  });
}

function getProjectTasks(projectTitle) {
  const tasks = [...todoListContainer.querySelectorAll(".task-card")];

  return tasks.filter((element) => {
    element.dataset.project.toLowerCase() === projectTitle.toLowerCase();
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
const currentProject = document.querySelector("#project-name");
const sidebar = document.querySelector("#sidebar");

newTaskButton.addEventListener("click", () => {
  formContainer.classList.toggle("active");
  overlay.classList.toggle("active");
  const titles = (0,_scripts_projects_js__WEBPACK_IMPORTED_MODULE_2__.getProjectTitles)();
  (0,_scripts_form_js__WEBPACK_IMPORTED_MODULE_0__.addFormProjects)(titles);
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
  (0,_scripts_todoList_js__WEBPACK_IMPORTED_MODULE_1__.loadCurrentProjectTasks)(currentProject.innerText);
  (0,_scripts_form_js__WEBPACK_IMPORTED_MODULE_0__.clearForm)();
});

cancelButton.addEventListener("click", (e) => {
  formContainer.classList.toggle("active");
  overlay.classList.toggle("active");
  (0,_scripts_form_js__WEBPACK_IMPORTED_MODULE_0__.clearForm)();
});

todoListContainer.addEventListener("click", (e) => {
  const element = e.target;
  if (element.closest("button").matches("[data-task-delete]")) {
    const taskToDelete = element.closest(".task-card");
    todoListContainer.removeChild(taskToDelete);
  } else if (element.closest("button").matches("[data-task-edit]")) {
    const id = element.closest("div[data-task-id]").dataset.taskId;
    (0,_scripts_form_js__WEBPACK_IMPORTED_MODULE_0__.prefillForm)(id);
    formContainer.classList.toggle("active");
    overlay.classList.toggle("active");
  }
});

todoListContainer.addEventListener("change", (e) => {
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
    const reservedNames = (0,_scripts_projects_js__WEBPACK_IMPORTED_MODULE_2__.getProjectTitles)().map((title) =>
      title.toLowerCase()
    );

    reservedNames.push("inbox", "today");
    if (reservedNames.includes(newProjectTitle.toLowerCase())) {
      alert("Project already exists with this name!");
      return;
    }
    const project = (0,_scripts_projects_js__WEBPACK_IMPORTED_MODULE_2__.createProjectNode)(newProjectTitle);
    projectContainer.appendChild(project);
  }

  newProjectInput.value = "";
  newProject.classList.toggle("inactive");
  newProjectPopup.classList.toggle("active");
});

sidebar.addEventListener("click", (e) => {
  const element = e.target;

  if (element.matches("#projects-container")) return;
  if (element.matches("[data-project-delete]")) {
    const projectToDelete = element.closest("div[data-project-id]");
    const title = projectToDelete.querySelector(
      "[data-project-title]"
    ).innerText;
    projectToDelete.remove();

    (0,_scripts_todoList_js__WEBPACK_IMPORTED_MODULE_1__.deleteProjectTasks)(title);
    currentProject.innerText = "Inbox";
    (0,_scripts_todoList_js__WEBPACK_IMPORTED_MODULE_1__.loadCurrentProjectTasks)(currentProject.innerText);
    return;
  }

  if (element.matches(".project-card")) {
    currentProject.innerText = element.querySelector(
      "div[data-project-title]"
    ).innerText;
    (0,_scripts_todoList_js__WEBPACK_IMPORTED_MODULE_1__.loadCurrentProjectTasks)(element.innerText);
    return;
  }

  if (element.matches("[data-project-title]") || element.matches("li")) {
    currentProject.innerText = element.innerText;
    (0,_scripts_todoList_js__WEBPACK_IMPORTED_MODULE_1__.loadCurrentProjectTasks)(currentProject.innerText);
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsRUFBRSwyREFBUztBQUNYLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUksNkRBQVc7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHNFQUFnQjtBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdUVBQWlCO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksd0VBQWtCO0FBQ3RCO0FBQ0EsSUFBSSw2RUFBdUI7QUFDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNkVBQXVCO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksNkVBQXVCO0FBQzNCO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy90b2RvTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFzay5qc1wiO1xuY29uc3QgZ2VuZXJhdG9yID0gaWRHZW5lcmF0b3IoKTtcbmNvbnN0IG5hbWVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLW5hbWVcIik7XG5jb25zdCBkZXNjcmlwdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGVzY3JpcHRpb25cIik7XG5jb25zdCBkYXRlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kdWUtZGF0ZVwiKTtcbmNvbnN0IHByaW9yaXR5RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1wcmlvcml0eVwiKTtcbmNvbnN0IHByb2plY3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXByb2plY3RcIik7XG5jb25zdCB0b2RvTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1saXN0LWNvbnRhaW5lclwiKTtcbmNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWZvcm1cIik7XG5cbmNvbnN0IFBSSU9SSVRZX01BUCA9IG5ldyBNYXAoW1xuICBbXCJyZWRcIiwgXCJoaWdoXCJdLFxuICBbXCJ5ZWxsb3dcIiwgXCJtZWRpdW1cIl0sXG4gIFtcImdyZWVuXCIsIFwibG93XCJdLFxuXSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrKGlkKSB7XG4gIGNvbnN0IG5hbWUgPSBuYW1lRWxlbWVudC52YWx1ZS50cmltKCk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25FbGVtZW50LnZhbHVlLnRyaW0oKTtcbiAgY29uc3QgZGF0ZSA9IGRhdGVFbGVtZW50LnZhbHVlLnRyaW0oKTtcbiAgY29uc3QgcHJpb3JpdHkgPSBwcmlvcml0eUVsZW1lbnQudmFsdWUudHJpbSgpIHx8IFwibG93XCI7XG4gIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0RWxlbWVudC52YWx1ZS50cmltKCk7XG4gIGNvbnN0IHRhc2tJZCA9IGlkID8/IGdlbmVyYXRvci5uZXh0KCkudmFsdWUudG9TdHJpbmcoKTtcbiAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKHRhc2tJZCwgbmFtZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBwcm9qZWN0KTtcbiAgcmV0dXJuIG5ld1Rhc2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckZvcm0oKSB7XG4gIGlmICh0YXNrRm9ybS5kYXRhc2V0LnRhc2tJZCkge1xuICAgIGRlbGV0ZSB0YXNrRm9ybS5kYXRhc2V0LnRhc2tJZDtcbiAgfVxuICBuYW1lRWxlbWVudC52YWx1ZSA9IFwiXCI7XG4gIGRlc2NyaXB0aW9uRWxlbWVudC52YWx1ZSA9IFwiXCI7XG4gIGRhdGVFbGVtZW50LnZhbHVlID0gXCJcIjtcbiAgcHJpb3JpdHlFbGVtZW50LnZhbHVlID0gXCJcIjtcbiAgcHJvamVjdEVsZW1lbnQudmFsdWUgPSBcImluYm94XCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVmaWxsRm9ybSh0YXNrSWQpIHtcbiAgY29uc3QgdGFzayA9IHRvZG9MaXN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhc2staWQ9JyR7dGFza0lkfSddYCk7XG4gIHRhc2tGb3JtLmRhdGFzZXQudGFza0lkID0gdGFza0lkO1xuICBuYW1lRWxlbWVudC52YWx1ZSA9IHRhc2sucXVlcnlTZWxlY3RvcihcIltkYXRhLXRpdGxlXVwiKS5pbm5lclRleHQudHJpbSgpO1xuICBkZXNjcmlwdGlvbkVsZW1lbnQudmFsdWUgPSB0YXNrXG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1kZXRhaWxzXVwiKVxuICAgIC5pbm5lclRleHQudHJpbSgpO1xuXG4gIGRhdGVFbGVtZW50LnZhbHVlID0gdGFzay5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZHVlLWRhdGVdXCIpLmlubmVyVGV4dC50cmltKCk7XG4gIGNvbnN0IHByaW9yaXR5Q29sb3IgPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcmlvcml0eS1jb2xvcl1cIikuc3R5bGVcbiAgICAuYmFja2dyb3VuZENvbG9yO1xuICBwcmlvcml0eUVsZW1lbnQudmFsdWUgPSBQUklPUklUWV9NQVAuZ2V0KHByaW9yaXR5Q29sb3IpO1xuICBwcm9qZWN0RWxlbWVudC52YWx1ZSA9IHRhc2tcbiAgICAucXVlcnlTZWxlY3RvcihcIltkYXRhLXByb2plY3RdXCIpXG4gICAgLmRhdGFzZXQuZGF0YVByb2plY3QudHJpbSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkRm9ybVByb2plY3RzKHRpdGxlcykge1xuICBjb25zdCBvcHRpb25zID0gWy4uLnByb2plY3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJvcHRpb25cIildLm1hcChcbiAgICAoZWxlbWVudCkgPT4gZWxlbWVudC52YWx1ZS50b0xvd2VyQ2FzZSgpXG4gICk7XG5cbiAgY29uc3QgdW5pcXVlVGl0bGVzID0gdGl0bGVzLmZpbHRlcigodGl0bGUpID0+IHtcbiAgICByZXR1cm4gIW9wdGlvbnMuaW5jbHVkZXModGl0bGUudG9Mb3dlckNhc2UoKSk7XG4gIH0pO1xuXG4gIHVuaXF1ZVRpdGxlcy5mb3JFYWNoKCh0aXRsZSkgPT4ge1xuICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbi50ZXh0ID0gdGl0bGU7XG4gICAgb3B0aW9uLnZhbHVlID0gdGl0bGU7XG4gICAgcHJvamVjdEVsZW1lbnQuYWRkKG9wdGlvbik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiogaWRHZW5lcmF0b3IoKSB7XG4gIGxldCBjb3VudCA9IDE7XG4gIHdoaWxlICh0cnVlKSB7XG4gICAgeWllbGQgY291bnQrKztcbiAgfVxufVxuIiwiY29uc3QgcHJvamVjdFRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRlbXBsYXRlXCIpO1xuY29uc3QgZ2VuZXJhdG9yID0gaWRHZW5lcmF0b3IoKTtcbmNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzLWNvbnRhaW5lclwiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3ROb2RlKHRpdGxlKSB7XG4gIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0RmFjdG9yeSh0aXRsZSk7XG4gIGNvbnN0IHByb2plY3RFbGVtZW50ID0gcHJvamVjdFRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuICBwcm9qZWN0RWxlbWVudDtcbiAgY29uc3QgaWQgPSBwcm9qZWN0RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcHJvamVjdC1pZF1cIik7XG4gIGlkLmRhdGFzZXQucHJvamVjdElkID0gcHJvamVjdC5pZDtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gcHJvamVjdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXByb2plY3QtdGl0bGVdXCIpO1xuICBwcm9qZWN0VGl0bGUuaW5uZXJUZXh0ID0gcHJvamVjdC50aXRsZTtcbiAgcmV0dXJuIHByb2plY3RFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvamVjdFRpdGxlcygpIHtcbiAgY29uc3QgcHJvamVjdHMgPSBbXG4gICAgLi4ucHJvamVjdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2W2RhdGEtcHJvamVjdC10aXRsZV1cIiksXG4gIF07XG4gIHJldHVybiBwcm9qZWN0cy5tYXAoKGVsZW1lbnQpID0+IGVsZW1lbnQuaW5uZXJUZXh0KTtcbn1cblxuY29uc3QgcHJvamVjdEZhY3RvcnkgPSAodGl0bGUpID0+IHtcbiAgcmV0dXJuIHsgaWQ6IGdlbmVyYXRvci5uZXh0KCkudmFsdWUudG9TdHJpbmcoKSwgdGl0bGUgfTtcbn07XG5mdW5jdGlvbiogaWRHZW5lcmF0b3IoKSB7XG4gIGxldCBjb3VudCA9IDE7XG4gIHdoaWxlICh0cnVlKSB7XG4gICAgeWllbGQgY291bnQrKztcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKGlkLCBuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICB0aGlzLl9pZCA9IGlkO1xuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5fZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5fcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLl9wcm9qZWN0ID0gcHJvamVjdDtcbiAgfVxuXG4gIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cblxuICBzZXQgbmFtZShuYW1lKSB7XG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gIH1cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIHNldCBkZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIH1cblxuICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICB9XG5cbiAgc2V0IGR1ZURhdGUoZGF0ZSkge1xuICAgIHRoaXMuX2R1ZURhdGUgPSBkYXRlO1xuICB9XG5cbiAgZ2V0IGR1ZURhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2R1ZURhdGU7XG4gIH1cblxuICBzZXQgcHJpb3JpdHkocHJpb3JpdHkpIHtcbiAgICB0aGlzLl9wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG5cbiAgZ2V0IHByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmlvcml0eTtcbiAgfVxuXG4gIHNldCBwcm9qZWN0KHByb2plY3QpIHtcbiAgICB0aGlzLl9wcm9qZWN0ID0gcHJvamVjdDtcbiAgfVxuXG4gIGdldCBwcm9qZWN0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9qZWN0O1xuICB9XG59XG4iLCJjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay10ZW1wbGF0ZVwiKTtcbmNvbnN0IHRvZG9MaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLWxpc3QtY29udGFpbmVyXCIpO1xuY29uc3QgUFJJT1JJVFlfTUFQID0gbmV3IE1hcChbXG4gIFtcImhpZ2hcIiwgXCJyZWRcIl0sXG4gIFtcIm1lZGl1bVwiLCBcInllbGxvd1wiXSxcbiAgW1wibG93XCIsIFwiZ3JlZW5cIl0sXG5dKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2tOb2RlKHRhc2spIHtcbiAgY29uc3QgZWxlbWVudEV4aXN0cyA9IHRvZG9MaXN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgYFtkYXRhLXRhc2staWQ9JyR7dGFzay5pZH0nXWBcbiAgKTtcbiAgbGV0IHRhc2tUb1JlbmRlcjtcbiAgaWYgKGVsZW1lbnRFeGlzdHMpIHtcbiAgICB0YXNrVG9SZW5kZXIgPSBlbGVtZW50RXhpc3RzO1xuICB9IGVsc2Uge1xuICAgIHRhc2tUb1JlbmRlciA9IHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgIGNvbnN0IGlkID0gdGFza1RvUmVuZGVyLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10YXNrLWlkXVwiKTtcbiAgICBpZC5kYXRhc2V0LnRhc2tJZCA9IHRhc2suaWQ7XG4gIH1cblxuICBhZGRPclVwZGF0ZVRhc2tUb1JlbmRlcih0YXNrVG9SZW5kZXIsIHRhc2spO1xuICByZXR1cm4gdGFza1RvUmVuZGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZEN1cnJlbnRQcm9qZWN0VGFza3MoY3VycmVudFByb2plY3RUaXRsZSkge1xuICBjb25zdCB0YXNrcyA9IFsuLi50b2RvTGlzdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2stY2FyZFwiKV07XG5cbiAgdGFza3MuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBbLi4uZWxlbWVudC5jbGFzc0xpc3RdO1xuICAgIGNvbnNvbGUubG9nKGNsYXNzZXMpO1xuICAgIGlmIChcbiAgICAgIGVsZW1lbnQuZGF0YXNldC5wcm9qZWN0LnRvTG93ZXJDYXNlKCkgPT09XG4gICAgICBjdXJyZW50UHJvamVjdFRpdGxlLnRvTG93ZXJDYXNlKClcbiAgICApIHtcbiAgICAgIGlmIChjbGFzc2VzLmluY2x1ZGVzKFwiaW5hY3RpdmVcIikpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghY2xhc3Nlcy5pbmNsdWRlcyhcImluYWN0aXZlXCIpKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImluYWN0aXZlXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVQcm9qZWN0VGFza3MocHJvamVjdFRpdGxlKSB7XG4gIGNvbnN0IHRhc2tzVG9EZWxldGUgPSBnZXRQcm9qZWN0VGFza3MocHJvamVjdFRpdGxlKTtcbiAgdGFza3NUb0RlbGV0ZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5yZW1vdmUoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFByb2plY3RUYXNrcyhwcm9qZWN0VGl0bGUpIHtcbiAgY29uc3QgdGFza3MgPSBbLi4udG9kb0xpc3RDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLWNhcmRcIildO1xuXG4gIHJldHVybiB0YXNrcy5maWx0ZXIoKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmRhdGFzZXQucHJvamVjdC50b0xvd2VyQ2FzZSgpID09PSBwcm9qZWN0VGl0bGUudG9Mb3dlckNhc2UoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZE9yVXBkYXRlVGFza1RvUmVuZGVyKHRhc2tUb1JlbmRlciwgdGFzaykge1xuICBjb25zdCBjb2xvciA9IFBSSU9SSVRZX01BUC5nZXQodGFzay5wcmlvcml0eSkgPz8gXCJncmVlblwiO1xuICBjb25zdCBwcmlvcml0eSA9IHRhc2tUb1JlbmRlci5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcHJpb3JpdHktY29sb3JdXCIpO1xuICBwcmlvcml0eS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcblxuICBjb25zdCBwcm9qZWN0ID0gdGFza1RvUmVuZGVyLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10YXNrLWlkXVwiKTtcbiAgcHJvamVjdC5kYXRhc2V0LnByb2plY3QgPSB0YXNrLnByb2plY3Q7XG5cbiAgY29uc3QgdGl0bGUgPSB0YXNrVG9SZW5kZXIucXVlcnlTZWxlY3RvcihcIltkYXRhLXRpdGxlXVwiKTtcbiAgdGl0bGUuaW5uZXJUZXh0ID0gdGFzay5uYW1lO1xuXG4gIGNvbnN0IGRldGFpbHMgPSB0YXNrVG9SZW5kZXIucXVlcnlTZWxlY3RvcihcIltkYXRhLWRldGFpbHNdXCIpO1xuICBkZXRhaWxzLmlubmVyVGV4dCA9IHRhc2suZGVzY3JpcHRpb247XG5cbiAgY29uc3QgZGF0ZSA9IHRhc2tUb1JlbmRlci5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZHVlLWRhdGVdXCIpO1xuICBkYXRlLmlubmVyVGV4dCA9IHRhc2suZHVlRGF0ZTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtcbiAgY3JlYXRlVGFzayxcbiAgY2xlYXJGb3JtLFxuICBwcmVmaWxsRm9ybSxcbiAgYWRkRm9ybVByb2plY3RzLFxufSBmcm9tIFwiLi9zY3JpcHRzL2Zvcm0uanNcIjtcbmltcG9ydCB7XG4gIGNyZWF0ZVRhc2tOb2RlLFxuICBsb2FkQ3VycmVudFByb2plY3RUYXNrcyxcbiAgZGVsZXRlUHJvamVjdFRhc2tzLFxufSBmcm9tIFwiLi9zY3JpcHRzL3RvZG9MaXN0LmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0Tm9kZSwgZ2V0UHJvamVjdFRpdGxlcyB9IGZyb20gXCIuL3NjcmlwdHMvcHJvamVjdHMuanNcIjtcbmNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm0tY29udGFpbmVyXCIpO1xuY29uc3QgbmV3VGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stYnV0dG9uXCIpO1xuY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZm9ybVwiKTtcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI292ZXJsYXlcIik7XG5jb25zdCB0b2RvTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1saXN0LWNvbnRhaW5lclwiKTtcbmNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybS1idG4tY2FuY2VsXCIpO1xuY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXByb2plY3QtZGl2XCIpO1xuY29uc3QgbmV3UHJvamVjdFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctcHJvamVjdC1wb3B1cFwiKTtcbmNvbnN0IG5ld1Byb2plY3RCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWJ1dHRvbnMtd3JhcHBlclwiKTtcbmNvbnN0IG5ld1Byb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1uYW1lLWlucHV0XCIpO1xuY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHMtY29udGFpbmVyXCIpO1xuY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbmFtZVwiKTtcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpZGViYXJcIik7XG5cbm5ld1Rhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gIGNvbnN0IHRpdGxlcyA9IGdldFByb2plY3RUaXRsZXMoKTtcbiAgYWRkRm9ybVByb2plY3RzKHRpdGxlcyk7XG4gIGNsZWFyRm9ybSgpO1xufSk7XG5cbnRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gIG92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgY29uc3QgZXhpc3RpbmdUYXNrSWQgPSBlLnRhcmdldC5kYXRhc2V0LnRhc2tJZDtcblxuICBjb25zdCB0YXNrID0gY3JlYXRlVGFzayhleGlzdGluZ1Rhc2tJZCk7XG4gIGNvbnN0IHRhc2tOb2RlID0gY3JlYXRlVGFza05vZGUodGFzayk7XG4gIGlmICghZXhpc3RpbmdUYXNrSWQpIHtcbiAgICB0b2RvTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrTm9kZSk7XG4gIH1cbiAgbG9hZEN1cnJlbnRQcm9qZWN0VGFza3MoY3VycmVudFByb2plY3QuaW5uZXJUZXh0KTtcbiAgY2xlYXJGb3JtKCk7XG59KTtcblxuY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gIG92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgY2xlYXJGb3JtKCk7XG59KTtcblxudG9kb0xpc3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlLnRhcmdldDtcbiAgaWYgKGVsZW1lbnQuY2xvc2VzdChcImJ1dHRvblwiKS5tYXRjaGVzKFwiW2RhdGEtdGFzay1kZWxldGVdXCIpKSB7XG4gICAgY29uc3QgdGFza1RvRGVsZXRlID0gZWxlbWVudC5jbG9zZXN0KFwiLnRhc2stY2FyZFwiKTtcbiAgICB0b2RvTGlzdENvbnRhaW5lci5yZW1vdmVDaGlsZCh0YXNrVG9EZWxldGUpO1xuICB9IGVsc2UgaWYgKGVsZW1lbnQuY2xvc2VzdChcImJ1dHRvblwiKS5tYXRjaGVzKFwiW2RhdGEtdGFzay1lZGl0XVwiKSkge1xuICAgIGNvbnN0IGlkID0gZWxlbWVudC5jbG9zZXN0KFwiZGl2W2RhdGEtdGFzay1pZF1cIikuZGF0YXNldC50YXNrSWQ7XG4gICAgcHJlZmlsbEZvcm0oaWQpO1xuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gIH1cbn0pO1xuXG50b2RvTGlzdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XG4gIGlmIChlLnRhcmdldC5jbG9zZXN0KFwiaW5wdXRcIikubWF0Y2hlcyhcIiN0YXNrLWNoZWNrYm94XCIpKSB7XG4gICAgY29uc3QgdGFzayA9IGUudGFyZ2V0LmNsb3Nlc3QoXCJkaXZbZGF0YS10YXNrLWlkXVwiKTtcbiAgICBjb25zdCB0aXRsZSA9IGUudGFyZ2V0XG4gICAgICAuY2xvc2VzdChcImRpdltkYXRhLXRhc2staWRdXCIpXG4gICAgICAucXVlcnlTZWxlY3RvcihcIltkYXRhLXRpdGxlXVwiKTtcblxuICAgIGlmICh0aXRsZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9PT0gXCJsaW5lLXRocm91Z2hcIikge1xuICAgICAgdGl0bGUuc3R5bGUudGV4dERlY29yYXRpb24gPSBcIlwiO1xuICAgICAgdGFzay5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGl0bGUuc3R5bGUudGV4dERlY29yYXRpb24gPSBcImxpbmUtdGhyb3VnaFwiO1xuICAgIHRhc2suc3R5bGUub3BhY2l0eSA9IDAuNTtcbiAgfVxufSk7XG5cbm5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIG5ld1Byb2plY3QuY2xhc3NMaXN0LnRvZ2dsZShcImluYWN0aXZlXCIpO1xuICBuZXdQcm9qZWN0UG9wdXAuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbn0pO1xuXG5uZXdQcm9qZWN0QnV0dG9ucy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCIjcHJvamVjdC1zYXZlXCIpKSB7XG4gICAgY29uc3QgbmV3UHJvamVjdFRpdGxlID0gbmV3UHJvamVjdElucHV0LnZhbHVlLnRyaW0oKTtcbiAgICBpZiAoIW5ld1Byb2plY3RUaXRsZSkgcmV0dXJuO1xuICAgIGNvbnN0IHJlc2VydmVkTmFtZXMgPSBnZXRQcm9qZWN0VGl0bGVzKCkubWFwKCh0aXRsZSkgPT5cbiAgICAgIHRpdGxlLnRvTG93ZXJDYXNlKClcbiAgICApO1xuXG4gICAgcmVzZXJ2ZWROYW1lcy5wdXNoKFwiaW5ib3hcIiwgXCJ0b2RheVwiKTtcbiAgICBpZiAocmVzZXJ2ZWROYW1lcy5pbmNsdWRlcyhuZXdQcm9qZWN0VGl0bGUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgIGFsZXJ0KFwiUHJvamVjdCBhbHJlYWR5IGV4aXN0cyB3aXRoIHRoaXMgbmFtZSFcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHByb2plY3QgPSBjcmVhdGVQcm9qZWN0Tm9kZShuZXdQcm9qZWN0VGl0bGUpO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gIH1cblxuICBuZXdQcm9qZWN0SW5wdXQudmFsdWUgPSBcIlwiO1xuICBuZXdQcm9qZWN0LmNsYXNzTGlzdC50b2dnbGUoXCJpbmFjdGl2ZVwiKTtcbiAgbmV3UHJvamVjdFBvcHVwLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG59KTtcblxuc2lkZWJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGUudGFyZ2V0O1xuXG4gIGlmIChlbGVtZW50Lm1hdGNoZXMoXCIjcHJvamVjdHMtY29udGFpbmVyXCIpKSByZXR1cm47XG4gIGlmIChlbGVtZW50Lm1hdGNoZXMoXCJbZGF0YS1wcm9qZWN0LWRlbGV0ZV1cIikpIHtcbiAgICBjb25zdCBwcm9qZWN0VG9EZWxldGUgPSBlbGVtZW50LmNsb3Nlc3QoXCJkaXZbZGF0YS1wcm9qZWN0LWlkXVwiKTtcbiAgICBjb25zdCB0aXRsZSA9IHByb2plY3RUb0RlbGV0ZS5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCJbZGF0YS1wcm9qZWN0LXRpdGxlXVwiXG4gICAgKS5pbm5lclRleHQ7XG4gICAgcHJvamVjdFRvRGVsZXRlLnJlbW92ZSgpO1xuXG4gICAgZGVsZXRlUHJvamVjdFRhc2tzKHRpdGxlKTtcbiAgICBjdXJyZW50UHJvamVjdC5pbm5lclRleHQgPSBcIkluYm94XCI7XG4gICAgbG9hZEN1cnJlbnRQcm9qZWN0VGFza3MoY3VycmVudFByb2plY3QuaW5uZXJUZXh0KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZWxlbWVudC5tYXRjaGVzKFwiLnByb2plY3QtY2FyZFwiKSkge1xuICAgIGN1cnJlbnRQcm9qZWN0LmlubmVyVGV4dCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiZGl2W2RhdGEtcHJvamVjdC10aXRsZV1cIlxuICAgICkuaW5uZXJUZXh0O1xuICAgIGxvYWRDdXJyZW50UHJvamVjdFRhc2tzKGVsZW1lbnQuaW5uZXJUZXh0KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZWxlbWVudC5tYXRjaGVzKFwiW2RhdGEtcHJvamVjdC10aXRsZV1cIikgfHwgZWxlbWVudC5tYXRjaGVzKFwibGlcIikpIHtcbiAgICBjdXJyZW50UHJvamVjdC5pbm5lclRleHQgPSBlbGVtZW50LmlubmVyVGV4dDtcbiAgICBsb2FkQ3VycmVudFByb2plY3RUYXNrcyhjdXJyZW50UHJvamVjdC5pbm5lclRleHQpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==