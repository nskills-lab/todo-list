/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/scripts/UI.js":
/*!***************************!*\
  !*** ./src/scripts/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _app_taskForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/taskForm.js */ "./src/scripts/app/taskForm.js");
/* harmony import */ var _app_todoList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/todoList.js */ "./src/scripts/app/todoList.js");
/* harmony import */ var _app_today_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/today.js */ "./src/scripts/app/today.js");
/* harmony import */ var _app_projects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/projects.js */ "./src/scripts/app/projects.js");
/* harmony import */ var _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/DOMselectors.js */ "./src/scripts/data/DOMselectors.js");
/* harmony import */ var _app_localStorage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/localStorage.js */ "./src/scripts/app/localStorage.js");
/* harmony import */ var _app_task_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app/task.js */ "./src/scripts/app/task.js");








class UI {
  static handleTaskTitleInput() {
    const taskTitle = _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.nameElement.value;
    if (taskTitle) {
      _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.taskSaveButton.disabled = false;
    } else {
      _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.taskSaveButton.disabled = true;
    }
  }

  static openNewTaskForm() {
    _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.formContainer.classList.toggle("active");
    _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.overlay.classList.toggle("active");
    _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.taskSaveButton.disabled = true;
    const titles = (0,_app_projects_js__WEBPACK_IMPORTED_MODULE_3__.getProjectTitles)();
    (0,_app_taskForm_js__WEBPACK_IMPORTED_MODULE_0__.updateProjectMenu)(titles);
    (0,_app_taskForm_js__WEBPACK_IMPORTED_MODULE_0__.resetForm)();
  }

  static closeTaskForm() {
    _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.formContainer.classList.toggle("active");
    _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.overlay.classList.toggle("active");
    (0,_app_taskForm_js__WEBPACK_IMPORTED_MODULE_0__.resetForm)();
  }

  static openNewProjectPopUp() {
    _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.createProject.classList.toggle("inactive");
    _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.newProjectPopup.classList.toggle("active");
    _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.overlay.classList.toggle("active");
  }

  static updateToDoList(event) {
    event.preventDefault();
    _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.formContainer.classList.toggle("active");
    _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.overlay.classList.toggle("active");
    const existingTaskId = event.target.dataset.taskId;
    const task = (0,_app_taskForm_js__WEBPACK_IMPORTED_MODULE_0__.createTask)(existingTaskId);
    const taskNode = (0,_app_todoList_js__WEBPACK_IMPORTED_MODULE_1__.createTaskNode)(task);

    if (!existingTaskId) {
      _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.todoListContainer.appendChild(taskNode);
    }
    (0,_app_todoList_js__WEBPACK_IMPORTED_MODULE_1__.loadCurrentProjectTasks)(_data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.currentProject.innerText);
    const titles = (0,_app_projects_js__WEBPACK_IMPORTED_MODULE_3__.getProjectTitles)();
    (0,_app_taskForm_js__WEBPACK_IMPORTED_MODULE_0__.updateProjectMenu)(titles);
    (0,_app_taskForm_js__WEBPACK_IMPORTED_MODULE_0__.resetForm)();
    const todoLists = JSON.stringify((0,_app_todoList_js__WEBPACK_IMPORTED_MODULE_1__.getTodoLists)());
    (0,_app_localStorage_js__WEBPACK_IMPORTED_MODULE_5__.saveToLocalStorage)(todoLists);
  }

  static updateTask(event) {
    const element = event.target;
    if (element.matches("#todo-list-container")) return;

    if (element.matches("#task-checkbox")) {
      const task = element.closest("div[data-task-id]");
      const title = element
        .closest("div[data-task-id]")
        .querySelector("[data-title]");

      if (title.style.textDecoration === "line-through") {
        title.style.textDecoration = "";
        task.style.opacity = 1;
        return;
      }
      title.style.textDecoration = "line-through";
      task.style.opacity = 0.5;
      return;
    }

    if (element.closest("button").matches("[data-task-delete]")) {
      const taskToDelete = element.closest(".task-card");
      _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.todoListContainer.removeChild(taskToDelete);
      const todoLists = JSON.stringify((0,_app_todoList_js__WEBPACK_IMPORTED_MODULE_1__.getTodoLists)());
      (0,_app_localStorage_js__WEBPACK_IMPORTED_MODULE_5__.saveToLocalStorage)(todoLists);
      return;
    }

    if (element.closest("button").matches("[data-task-edit]")) {
      const id = element.closest("div[data-task-id]").dataset.taskId;
      (0,_app_taskForm_js__WEBPACK_IMPORTED_MODULE_0__.autofill)(id);
      _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.formContainer.classList.toggle("active");
      _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.overlay.classList.toggle("active");
    }
  }

  static handleNewProjectPopUpActions(event) {
    if (event.target.matches("#project-save")) {
      const newProjectTitle = _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.newProjectInput.value.trim();
      if (!newProjectTitle) return;

      const reservedNames = (0,_app_projects_js__WEBPACK_IMPORTED_MODULE_3__.getProjectTitles)().map((title) =>
        title.toLowerCase()
      );
      reservedNames.push("inbox", "today");
      if (reservedNames.includes(newProjectTitle.toLowerCase())) {
        alert("Project already exists with this name!");
        return;
      }
      const project = (0,_app_projects_js__WEBPACK_IMPORTED_MODULE_3__.createProjectNode)(newProjectTitle);
      _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.projectContainer.appendChild(project);
    }

    _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.newProjectInput.value = "";
    _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.createProject.classList.toggle("inactive");
    _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.newProjectPopup.classList.toggle("active");
    _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.overlay.classList.toggle("active");
    const todoLists = JSON.stringify((0,_app_todoList_js__WEBPACK_IMPORTED_MODULE_1__.getTodoLists)());
    (0,_app_localStorage_js__WEBPACK_IMPORTED_MODULE_5__.saveToLocalStorage)(todoLists);
  }

  static displayLeftMenuContent(event) {
    const element = event.target;
    if (element.matches("li#inbox")) {
      _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.currentProject.innerText = element.innerText;
      (0,_app_todoList_js__WEBPACK_IMPORTED_MODULE_1__.loadCurrentProjectTasks)(_data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.currentProject.innerText);
      return;
    }

    if (element.matches("li#today")) {
      _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.currentProject.innerText = element.innerText;
      (0,_app_today_js__WEBPACK_IMPORTED_MODULE_2__.displayTodayTasks)();
    }
  }

  static handleProjectContentActions(event) {
    const element = event.target;

    if (element.matches("#projects-container")) return;

    if (element.matches("[data-project-delete]")) {
      const projectContent = element.closest("div[data-project-id]");
      const projectTitle = projectContent.querySelector(
        "[data-project-title]"
      ).innerText;

      projectContent.remove();
      (0,_app_todoList_js__WEBPACK_IMPORTED_MODULE_1__.deleteProjectTasks)(projectTitle);

      _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.currentProject.innerText = "Inbox";
      (0,_app_todoList_js__WEBPACK_IMPORTED_MODULE_1__.loadCurrentProjectTasks)(_data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.currentProject.innerText);
      const todoLists = JSON.stringify((0,_app_todoList_js__WEBPACK_IMPORTED_MODULE_1__.getTodoLists)());
      (0,_app_localStorage_js__WEBPACK_IMPORTED_MODULE_5__.saveToLocalStorage)(todoLists);
      return;
    }

    if (element.matches(".project-card")) {
      _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.currentProject.innerText = element.querySelector(
        "div[data-project-title]"
      ).innerText;
    }

    if (element.matches("[data-project-title]")) {
      _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.currentProject.innerText = element.innerText;
    }

    (0,_app_todoList_js__WEBPACK_IMPORTED_MODULE_1__.loadCurrentProjectTasks)(_data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.currentProject.innerText);
  }

  static loadAppFromLocalStorage() {
    const todoLists = JSON.parse((0,_app_localStorage_js__WEBPACK_IMPORTED_MODULE_5__.getFromLocalStorage)());
    const projectLists = Object.keys(todoLists);

    projectLists.forEach((project) => {
      if (project.toLowerCase() !== "inbox") {
        const projectNode = (0,_app_projects_js__WEBPACK_IMPORTED_MODULE_3__.createProjectNode)(project);
        _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.projectContainer.appendChild(projectNode);
      }

      const tasks = todoLists[project];

      tasks.forEach((task) => {
        const newTask = new _app_task_js__WEBPACK_IMPORTED_MODULE_6__["default"](
          task.id,
          task.title,
          task.details,
          task.dueDate,
          task.priority,
          task.project
        );
        const taskNode = (0,_app_todoList_js__WEBPACK_IMPORTED_MODULE_1__.createTaskNode)(newTask);
        if (task.project.toLowerCase() !== "inbox") {
          taskNode.classList.toggle("inactive");
        }
        _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_4__.todoListContainer.appendChild(taskNode);
      });
    });
  }
}


/***/ }),

/***/ "./src/scripts/app/localStorage.js":
/*!*****************************************!*\
  !*** ./src/scripts/app/localStorage.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFromLocalStorage: () => (/* binding */ getFromLocalStorage),
/* harmony export */   saveToLocalStorage: () => (/* binding */ saveToLocalStorage)
/* harmony export */ });
function saveToLocalStorage(item) {
  localStorage.setItem("todoListApp", item);
}
function getFromLocalStorage() {
  return localStorage.getItem("todoListApp");
}


/***/ }),

/***/ "./src/scripts/app/projects.js":
/*!*************************************!*\
  !*** ./src/scripts/app/projects.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProjectNode: () => (/* binding */ createProjectNode),
/* harmony export */   getProjectTitles: () => (/* binding */ getProjectTitles)
/* harmony export */ });
/* harmony import */ var _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/DOMselectors.js */ "./src/scripts/data/DOMselectors.js");
/* harmony import */ var _utility_utility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/utility.js */ "./src/scripts/utility/utility.js");


const generator = (0,_utility_utility_js__WEBPACK_IMPORTED_MODULE_1__.idGenerator)();

function createProjectNode(title) {
  const project = projectFactory(title);
  const projectElement = _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_0__.projectTemplate.content.cloneNode(true);
  const id = projectElement.querySelector("[data-project-id]");
  id.dataset.projectId = project.id;
  const projectTitle = projectElement.querySelector("[data-project-title]");
  projectTitle.innerText = project.title;
  return projectElement;
}

function getProjectTitles() {
  const projects = [
    ..._data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_0__.projectContainer.querySelectorAll("div[data-project-title]"),
  ];
  return projects.map((element) => element.innerText);
}

const projectFactory = (title) => {
  return { id: generator.next().value.toString(), title };
};


/***/ }),

/***/ "./src/scripts/app/task.js":
/*!*********************************!*\
  !*** ./src/scripts/app/task.js ***!
  \*********************************/
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
    this._project = project || "inbox";
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

/***/ "./src/scripts/app/taskForm.js":
/*!*************************************!*\
  !*** ./src/scripts/app/taskForm.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   autofill: () => (/* binding */ autofill),
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   resetForm: () => (/* binding */ resetForm),
/* harmony export */   updateProjectMenu: () => (/* binding */ updateProjectMenu)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/scripts/app/task.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ "./src/scripts/app/projects.js");
/* harmony import */ var _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/DOMselectors.js */ "./src/scripts/data/DOMselectors.js");
/* harmony import */ var _data_priority_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/priority.js */ "./src/scripts/data/priority.js");
/* harmony import */ var _utility_utility_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility/utility.js */ "./src/scripts/utility/utility.js");





const generator = (0,_utility_utility_js__WEBPACK_IMPORTED_MODULE_4__.idGenerator)();

function createTask(id) {
  const name = _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.nameElement.value.trim();
  const description = _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.descriptionElement.value.trim();
  const date = _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.dateElement.value.trim();
  const priority = _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.priorityElement.value.trim() || "low";
  const project = _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.projectElement.value.trim();
  const taskId = id ?? generator.next().value.toString();
  const newTask = new _task_js__WEBPACK_IMPORTED_MODULE_0__["default"](taskId, name, description, date, priority, project);
  return newTask;
}

function resetForm() {
  if (_data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.taskForm.dataset.taskId) {
    delete _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.taskForm.dataset.taskId;
  }
  _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.nameElement.value = "";
  _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.descriptionElement.value = "";
  _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.dateElement.value = "";
  _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.priorityElement.value = "";
  _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.projectElement.value = "";
  _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.taskSaveButton.disabled = true;
}

function autofill(taskId) {
  const task = _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.todoListContainer.querySelector(
    `[data-task-id='${taskId}']`
  );
  _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.taskForm.dataset.taskId = taskId;
  _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.nameElement.value = task
    .querySelector("[data-title]")
    .innerText.trim();
  _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.descriptionElement.value = task
    .querySelector("[data-details]")
    .innerText.trim();

  _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.dateElement.value = task
    .querySelector("[data-due-date]")
    .innerText.trim();
  const priorityColor = task.querySelector("[data-priority-color]").style
    .backgroundColor;
  _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.priorityElement.value = _data_priority_js__WEBPACK_IMPORTED_MODULE_3__.COLOR_PRIORITY_MAP.get(priorityColor);
  _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.projectElement.value = task.dataset.project;
  const titles = (0,_projects_js__WEBPACK_IMPORTED_MODULE_1__.getProjectTitles)();
  updateProjectMenu(titles);
  _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.taskSaveButton.disabled = false;
}

function updateProjectMenu(titles) {
  const reservedOptions = ["Inbox", "Project"];
  const optionsToDel = [
    ..._data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.projectElement.querySelectorAll("option"),
  ].filter((element) => {
    return !reservedOptions.includes(element.innerText);
  });

  optionsToDel.forEach((option) => option.remove());

  titles.forEach((title) => {
    let option = document.createElement("option");
    option.text = title;
    option.value = title;
    _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.projectElement.add(option);
  });
}


/***/ }),

/***/ "./src/scripts/app/today.js":
/*!**********************************!*\
  !*** ./src/scripts/app/today.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayTodayTasks: () => (/* binding */ displayTodayTasks)
/* harmony export */ });
/* harmony import */ var date_fns_isToday__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/isToday */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/DOMselectors.js */ "./src/scripts/data/DOMselectors.js");



function displayTodayTasks() {
  const tasks = [..._data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_0__.todoListContainer.querySelectorAll(".task-card")];

  tasks.forEach((task) => {
    const dueDate = task.querySelector("[data-due-date]").innerText;
    const classes = [...task.classList];

    if (dueDate) {
      const [year, month, day] = dueDate.split("-");
      // month is 0 based
      const date = new Date(year, parseInt(month) - 1, day);
      let today = (0,date_fns_isToday__WEBPACK_IMPORTED_MODULE_1__["default"])(date);

      if (today) {
        if (classes.includes("inactive")) {
          task.classList.remove("inactive");
        }
      } else {
        if (!classes.includes("inactive")) {
          task.classList.toggle("inactive");
        }
      }
    } else {
      if (!classes.includes("inactive")) {
        task.classList.toggle("inactive");
      }
    }
  });
}


/***/ }),

/***/ "./src/scripts/app/todoList.js":
/*!*************************************!*\
  !*** ./src/scripts/app/todoList.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTaskNode: () => (/* binding */ createTaskNode),
/* harmony export */   deleteProjectTasks: () => (/* binding */ deleteProjectTasks),
/* harmony export */   getTodoLists: () => (/* binding */ getTodoLists),
/* harmony export */   loadCurrentProjectTasks: () => (/* binding */ loadCurrentProjectTasks)
/* harmony export */ });
/* harmony import */ var _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/DOMselectors.js */ "./src/scripts/data/DOMselectors.js");
/* harmony import */ var _data_priority_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/priority.js */ "./src/scripts/data/priority.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.js */ "./src/scripts/app/projects.js");




function createTaskNode(task) {
  const elementExists = _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_0__.todoListContainer.querySelector(
    `[data-task-id='${task.id}']`
  );
  let taskToRender;
  if (elementExists) {
    taskToRender = elementExists;
  } else {
    taskToRender = _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_0__.template.content.cloneNode(true);
    const taskEl = taskToRender.querySelector("[data-task-id]");

    taskEl.dataset.taskId = task.id;
    taskToRender = taskEl;
  }

  setTaskNodeValues(taskToRender, task);
  return taskToRender;
}

function loadCurrentProjectTasks(currentProjectTitle) {
  const tasks = [..._data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_0__.todoListContainer.querySelectorAll(".task-card")];

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

function deleteProjectTasks(projectTitle) {
  const tasksToDelete = getProjectTasks(projectTitle);
  tasksToDelete.forEach((element) => {
    element.remove();
  });
}

function getTodoLists() {
  const allProjects = (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.getProjectTitles)();
  allProjects.push("inbox");
  const todoLists = {};
  allProjects.forEach((title) => {
    const tasks = getProjectTasks(title);
    todoLists[title] = [];
    tasks.forEach((task) => {
      const taskJSON = getTaskNodeValues(task);
      todoLists[title].push(taskJSON);
    });
  });

  return todoLists;
}

function getProjectTasks(projectTitle) {
  const tasks = [..._data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_0__.todoListContainer.querySelectorAll(".task-card")];
  return tasks.filter((element) => {
    return element.dataset.project.toLowerCase() === projectTitle.toLowerCase();
  });
}

function setTaskNodeValues(taskToRender, task) {
  const color = _data_priority_js__WEBPACK_IMPORTED_MODULE_1__.PRIORITY_COLOR_MAP.get(task.priority) ?? "green";
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

function getTaskNodeValues(task) {
  let color = task.querySelector("[data-priority-color]").style.backgroundColor;
  let taskJSON = {
    id: task.dataset.taskId,
    project: task.dataset.project,
    priority: _data_priority_js__WEBPACK_IMPORTED_MODULE_1__.COLOR_PRIORITY_MAP.get(color),
    title: task.querySelector("[data-title]").innerText,
    details: task.querySelector("[data-details]").innerText,
    dueDate: task.querySelector("[data-due-date]").innerText,
  };
  return taskJSON;
}


/***/ }),

/***/ "./src/scripts/data/DOMselectors.js":
/*!******************************************!*\
  !*** ./src/scripts/data/DOMselectors.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cancelButton: () => (/* binding */ cancelButton),
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   currentProject: () => (/* binding */ currentProject),
/* harmony export */   dateElement: () => (/* binding */ dateElement),
/* harmony export */   descriptionElement: () => (/* binding */ descriptionElement),
/* harmony export */   formContainer: () => (/* binding */ formContainer),
/* harmony export */   leftMenu: () => (/* binding */ leftMenu),
/* harmony export */   nameElement: () => (/* binding */ nameElement),
/* harmony export */   newProjectButtons: () => (/* binding */ newProjectButtons),
/* harmony export */   newProjectInput: () => (/* binding */ newProjectInput),
/* harmony export */   newProjectPopup: () => (/* binding */ newProjectPopup),
/* harmony export */   newTaskButton: () => (/* binding */ newTaskButton),
/* harmony export */   overlay: () => (/* binding */ overlay),
/* harmony export */   priorityElement: () => (/* binding */ priorityElement),
/* harmony export */   projectContainer: () => (/* binding */ projectContainer),
/* harmony export */   projectElement: () => (/* binding */ projectElement),
/* harmony export */   projectTemplate: () => (/* binding */ projectTemplate),
/* harmony export */   sidebar: () => (/* binding */ sidebar),
/* harmony export */   taskForm: () => (/* binding */ taskForm),
/* harmony export */   taskSaveButton: () => (/* binding */ taskSaveButton),
/* harmony export */   template: () => (/* binding */ template),
/* harmony export */   todoListContainer: () => (/* binding */ todoListContainer)
/* harmony export */ });
const formContainer = document.querySelector("#form-container");
const newTaskButton = document.querySelector("#add-task-button");
const taskForm = document.querySelector("#task-form");
const overlay = document.querySelector("#overlay");
const todoListContainer = document.querySelector("#todo-list-container");
const cancelButton = document.querySelector("#form-btn-cancel");
const createProject = document.querySelector("#create-project-div");
const newProjectPopup = document.querySelector("#new-project-popup");
const newProjectButtons = document.querySelector(
  "#project-buttons-wrapper"
);
const newProjectInput = document.querySelector("#project-name-input");
const projectContainer = document.querySelector("#projects-container");
const currentProject = document.querySelector("#project-name");
const sidebar = document.querySelector("#sidebar");
const nameElement = document.querySelector("#task-name");
const descriptionElement = document.querySelector("#task-description");
const dateElement = document.querySelector("#task-due-date");
const priorityElement = document.querySelector("#task-priority");
const projectElement = document.querySelector("#task-project");
const template = document.querySelector("#task-template");
const projectTemplate = document.querySelector("#project-template");
const taskSaveButton = document.querySelector("#form-btn-save");
const leftMenu = document.querySelector("#left-menu");


/***/ }),

/***/ "./src/scripts/data/priority.js":
/*!**************************************!*\
  !*** ./src/scripts/data/priority.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COLOR_PRIORITY_MAP: () => (/* binding */ COLOR_PRIORITY_MAP),
/* harmony export */   PRIORITY_COLOR_MAP: () => (/* binding */ PRIORITY_COLOR_MAP)
/* harmony export */ });
const PRIORITY_COLOR_MAP = new Map([
  ["high", "red"],
  ["medium", "yellow"],
  ["low", "green"],
]);

const COLOR_PRIORITY_MAP = new Map([
  ["red", "high"],
  ["yellow", "medium"],
  ["green", "low"],
]);


/***/ }),

/***/ "./src/scripts/utility/utility.js":
/*!****************************************!*\
  !*** ./src/scripts/utility/utility.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   idGenerator: () => (/* binding */ idGenerator)
/* harmony export */ });
function* idGenerator() {
  let count = 1;
  while (true) {
    yield count++;
  }
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
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
/* harmony import */ var _scripts_data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/data/DOMselectors.js */ "./src/scripts/data/DOMselectors.js");
/* harmony import */ var _scripts_UI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/UI.js */ "./src/scripts/UI.js");



window.onload = _scripts_UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].loadAppFromLocalStorage;
_scripts_data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_0__.nameElement.addEventListener("keyup", _scripts_UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].handleTaskTitleInput);
_scripts_data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_0__.newTaskButton.addEventListener("click", _scripts_UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].openNewTaskForm);
_scripts_data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_0__.taskForm.addEventListener("submit", _scripts_UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateToDoList);
_scripts_data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_0__.cancelButton.addEventListener("click", _scripts_UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].closeTaskForm);
_scripts_data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_0__.todoListContainer.addEventListener("click", _scripts_UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateTask);
_scripts_data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_0__.createProject.addEventListener("click", _scripts_UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].openNewProjectPopUp);
_scripts_data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_0__.newProjectButtons.addEventListener(
  "click",
  _scripts_UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].handleNewProjectPopUpActions
);
_scripts_data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_0__.leftMenu.addEventListener("click", _scripts_UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].displayLeftMenuContent);
_scripts_data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_0__.projectContainer.addEventListener(
  "click",
  _scripts_UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].handleProjectContentActions
);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ040RDtBQUMzQjs7QUFFakMsZ0JBQWdCLHNEQUFFO0FBQ2xCLHNFQUFxQiwyQkFBMkIsc0RBQUU7QUFDbEQsd0VBQXVCLDJCQUEyQixzREFBRTtBQUNwRCxtRUFBa0IsNEJBQTRCLHNEQUFFO0FBQ2hELHVFQUFzQiwyQkFBMkIsc0RBQUU7QUFDbkQsNEVBQTJCLDJCQUEyQixzREFBRTtBQUN4RCx3RUFBdUIsMkJBQTJCLHNEQUFFO0FBQ3BELDRFQUEyQjtBQUMzQjtBQUNBLEVBQUUsc0RBQUU7QUFDSjtBQUNBLG1FQUFrQiwyQkFBMkIsc0RBQUU7QUFDL0MsMkVBQTBCO0FBQzFCO0FBQ0EsRUFBRSxzREFBRTtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL1VJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2FwcC9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvYXBwL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2FwcC90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2FwcC90YXNrRm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9hcHAvdG9kYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvYXBwL3RvZG9MaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2RhdGEvRE9Nc2VsZWN0b3JzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2RhdGEvcHJpb3JpdHkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvdXRpbGl0eS91dGlsaXR5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lRGF5KGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xufSIsImltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb2RheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBEYXRlLm5vdygpKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImltcG9ydCB7XG4gIGNyZWF0ZVRhc2ssXG4gIHJlc2V0Rm9ybSxcbiAgYXV0b2ZpbGwsXG4gIHVwZGF0ZVByb2plY3RNZW51LFxufSBmcm9tIFwiLi9hcHAvdGFza0Zvcm0uanNcIjtcbmltcG9ydCB7XG4gIGNyZWF0ZVRhc2tOb2RlLFxuICBsb2FkQ3VycmVudFByb2plY3RUYXNrcyxcbiAgZGVsZXRlUHJvamVjdFRhc2tzLFxuICBnZXRUb2RvTGlzdHMsXG59IGZyb20gXCIuL2FwcC90b2RvTGlzdC5qc1wiO1xuaW1wb3J0IHsgZGlzcGxheVRvZGF5VGFza3MgfSBmcm9tIFwiLi9hcHAvdG9kYXkuanNcIjtcbmltcG9ydCB7IGNyZWF0ZVByb2plY3ROb2RlLCBnZXRQcm9qZWN0VGl0bGVzIH0gZnJvbSBcIi4vYXBwL3Byb2plY3RzLmpzXCI7XG5pbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSBcIi4vZGF0YS9ET01zZWxlY3RvcnMuanNcIjtcbmltcG9ydCB7IHNhdmVUb0xvY2FsU3RvcmFnZSwgZ2V0RnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2FwcC9sb2NhbFN0b3JhZ2UuanNcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL2FwcC90YXNrLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIHtcbiAgc3RhdGljIGhhbmRsZVRhc2tUaXRsZUlucHV0KCkge1xuICAgIGNvbnN0IHRhc2tUaXRsZSA9IHNlbGVjdG9ycy5uYW1lRWxlbWVudC52YWx1ZTtcbiAgICBpZiAodGFza1RpdGxlKSB7XG4gICAgICBzZWxlY3RvcnMudGFza1NhdmVCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZWN0b3JzLnRhc2tTYXZlQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgb3Blbk5ld1Rhc2tGb3JtKCkge1xuICAgIHNlbGVjdG9ycy5mb3JtQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgc2VsZWN0b3JzLm92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICBzZWxlY3RvcnMudGFza1NhdmVCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIGNvbnN0IHRpdGxlcyA9IGdldFByb2plY3RUaXRsZXMoKTtcbiAgICB1cGRhdGVQcm9qZWN0TWVudSh0aXRsZXMpO1xuICAgIHJlc2V0Rm9ybSgpO1xuICB9XG5cbiAgc3RhdGljIGNsb3NlVGFza0Zvcm0oKSB7XG4gICAgc2VsZWN0b3JzLmZvcm1Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICBzZWxlY3RvcnMub3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIHJlc2V0Rm9ybSgpO1xuICB9XG5cbiAgc3RhdGljIG9wZW5OZXdQcm9qZWN0UG9wVXAoKSB7XG4gICAgc2VsZWN0b3JzLmNyZWF0ZVByb2plY3QuY2xhc3NMaXN0LnRvZ2dsZShcImluYWN0aXZlXCIpO1xuICAgIHNlbGVjdG9ycy5uZXdQcm9qZWN0UG9wdXAuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICBzZWxlY3RvcnMub3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICB9XG5cbiAgc3RhdGljIHVwZGF0ZVRvRG9MaXN0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBzZWxlY3RvcnMuZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIHNlbGVjdG9ycy5vdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgY29uc3QgZXhpc3RpbmdUYXNrSWQgPSBldmVudC50YXJnZXQuZGF0YXNldC50YXNrSWQ7XG4gICAgY29uc3QgdGFzayA9IGNyZWF0ZVRhc2soZXhpc3RpbmdUYXNrSWQpO1xuICAgIGNvbnN0IHRhc2tOb2RlID0gY3JlYXRlVGFza05vZGUodGFzayk7XG5cbiAgICBpZiAoIWV4aXN0aW5nVGFza0lkKSB7XG4gICAgICBzZWxlY3RvcnMudG9kb0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza05vZGUpO1xuICAgIH1cbiAgICBsb2FkQ3VycmVudFByb2plY3RUYXNrcyhzZWxlY3RvcnMuY3VycmVudFByb2plY3QuaW5uZXJUZXh0KTtcbiAgICBjb25zdCB0aXRsZXMgPSBnZXRQcm9qZWN0VGl0bGVzKCk7XG4gICAgdXBkYXRlUHJvamVjdE1lbnUodGl0bGVzKTtcbiAgICByZXNldEZvcm0oKTtcbiAgICBjb25zdCB0b2RvTGlzdHMgPSBKU09OLnN0cmluZ2lmeShnZXRUb2RvTGlzdHMoKSk7XG4gICAgc2F2ZVRvTG9jYWxTdG9yYWdlKHRvZG9MaXN0cyk7XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlVGFzayhldmVudCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKGVsZW1lbnQubWF0Y2hlcyhcIiN0b2RvLWxpc3QtY29udGFpbmVyXCIpKSByZXR1cm47XG5cbiAgICBpZiAoZWxlbWVudC5tYXRjaGVzKFwiI3Rhc2stY2hlY2tib3hcIikpIHtcbiAgICAgIGNvbnN0IHRhc2sgPSBlbGVtZW50LmNsb3Nlc3QoXCJkaXZbZGF0YS10YXNrLWlkXVwiKTtcbiAgICAgIGNvbnN0IHRpdGxlID0gZWxlbWVudFxuICAgICAgICAuY2xvc2VzdChcImRpdltkYXRhLXRhc2staWRdXCIpXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGl0bGVdXCIpO1xuXG4gICAgICBpZiAodGl0bGUuc3R5bGUudGV4dERlY29yYXRpb24gPT09IFwibGluZS10aHJvdWdoXCIpIHtcbiAgICAgICAgdGl0bGUuc3R5bGUudGV4dERlY29yYXRpb24gPSBcIlwiO1xuICAgICAgICB0YXNrLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aXRsZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibGluZS10aHJvdWdoXCI7XG4gICAgICB0YXNrLnN0eWxlLm9wYWNpdHkgPSAwLjU7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQuY2xvc2VzdChcImJ1dHRvblwiKS5tYXRjaGVzKFwiW2RhdGEtdGFzay1kZWxldGVdXCIpKSB7XG4gICAgICBjb25zdCB0YXNrVG9EZWxldGUgPSBlbGVtZW50LmNsb3Nlc3QoXCIudGFzay1jYXJkXCIpO1xuICAgICAgc2VsZWN0b3JzLnRvZG9MaXN0Q29udGFpbmVyLnJlbW92ZUNoaWxkKHRhc2tUb0RlbGV0ZSk7XG4gICAgICBjb25zdCB0b2RvTGlzdHMgPSBKU09OLnN0cmluZ2lmeShnZXRUb2RvTGlzdHMoKSk7XG4gICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UodG9kb0xpc3RzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudC5jbG9zZXN0KFwiYnV0dG9uXCIpLm1hdGNoZXMoXCJbZGF0YS10YXNrLWVkaXRdXCIpKSB7XG4gICAgICBjb25zdCBpZCA9IGVsZW1lbnQuY2xvc2VzdChcImRpdltkYXRhLXRhc2staWRdXCIpLmRhdGFzZXQudGFza0lkO1xuICAgICAgYXV0b2ZpbGwoaWQpO1xuICAgICAgc2VsZWN0b3JzLmZvcm1Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgIHNlbGVjdG9ycy5vdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGhhbmRsZU5ld1Byb2plY3RQb3BVcEFjdGlvbnMoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoXCIjcHJvamVjdC1zYXZlXCIpKSB7XG4gICAgICBjb25zdCBuZXdQcm9qZWN0VGl0bGUgPSBzZWxlY3RvcnMubmV3UHJvamVjdElucHV0LnZhbHVlLnRyaW0oKTtcbiAgICAgIGlmICghbmV3UHJvamVjdFRpdGxlKSByZXR1cm47XG5cbiAgICAgIGNvbnN0IHJlc2VydmVkTmFtZXMgPSBnZXRQcm9qZWN0VGl0bGVzKCkubWFwKCh0aXRsZSkgPT5cbiAgICAgICAgdGl0bGUudG9Mb3dlckNhc2UoKVxuICAgICAgKTtcbiAgICAgIHJlc2VydmVkTmFtZXMucHVzaChcImluYm94XCIsIFwidG9kYXlcIik7XG4gICAgICBpZiAocmVzZXJ2ZWROYW1lcy5pbmNsdWRlcyhuZXdQcm9qZWN0VGl0bGUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgYWxlcnQoXCJQcm9qZWN0IGFscmVhZHkgZXhpc3RzIHdpdGggdGhpcyBuYW1lIVwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgcHJvamVjdCA9IGNyZWF0ZVByb2plY3ROb2RlKG5ld1Byb2plY3RUaXRsZSk7XG4gICAgICBzZWxlY3RvcnMucHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgICB9XG5cbiAgICBzZWxlY3RvcnMubmV3UHJvamVjdElucHV0LnZhbHVlID0gXCJcIjtcbiAgICBzZWxlY3RvcnMuY3JlYXRlUHJvamVjdC5jbGFzc0xpc3QudG9nZ2xlKFwiaW5hY3RpdmVcIik7XG4gICAgc2VsZWN0b3JzLm5ld1Byb2plY3RQb3B1cC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIHNlbGVjdG9ycy5vdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgY29uc3QgdG9kb0xpc3RzID0gSlNPTi5zdHJpbmdpZnkoZ2V0VG9kb0xpc3RzKCkpO1xuICAgIHNhdmVUb0xvY2FsU3RvcmFnZSh0b2RvTGlzdHMpO1xuICB9XG5cbiAgc3RhdGljIGRpc3BsYXlMZWZ0TWVudUNvbnRlbnQoZXZlbnQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmIChlbGVtZW50Lm1hdGNoZXMoXCJsaSNpbmJveFwiKSkge1xuICAgICAgc2VsZWN0b3JzLmN1cnJlbnRQcm9qZWN0LmlubmVyVGV4dCA9IGVsZW1lbnQuaW5uZXJUZXh0O1xuICAgICAgbG9hZEN1cnJlbnRQcm9qZWN0VGFza3Moc2VsZWN0b3JzLmN1cnJlbnRQcm9qZWN0LmlubmVyVGV4dCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQubWF0Y2hlcyhcImxpI3RvZGF5XCIpKSB7XG4gICAgICBzZWxlY3RvcnMuY3VycmVudFByb2plY3QuaW5uZXJUZXh0ID0gZWxlbWVudC5pbm5lclRleHQ7XG4gICAgICBkaXNwbGF5VG9kYXlUYXNrcygpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBoYW5kbGVQcm9qZWN0Q29udGVudEFjdGlvbnMoZXZlbnQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgaWYgKGVsZW1lbnQubWF0Y2hlcyhcIiNwcm9qZWN0cy1jb250YWluZXJcIikpIHJldHVybjtcblxuICAgIGlmIChlbGVtZW50Lm1hdGNoZXMoXCJbZGF0YS1wcm9qZWN0LWRlbGV0ZV1cIikpIHtcbiAgICAgIGNvbnN0IHByb2plY3RDb250ZW50ID0gZWxlbWVudC5jbG9zZXN0KFwiZGl2W2RhdGEtcHJvamVjdC1pZF1cIik7XG4gICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBwcm9qZWN0Q29udGVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIltkYXRhLXByb2plY3QtdGl0bGVdXCJcbiAgICAgICkuaW5uZXJUZXh0O1xuXG4gICAgICBwcm9qZWN0Q29udGVudC5yZW1vdmUoKTtcbiAgICAgIGRlbGV0ZVByb2plY3RUYXNrcyhwcm9qZWN0VGl0bGUpO1xuXG4gICAgICBzZWxlY3RvcnMuY3VycmVudFByb2plY3QuaW5uZXJUZXh0ID0gXCJJbmJveFwiO1xuICAgICAgbG9hZEN1cnJlbnRQcm9qZWN0VGFza3Moc2VsZWN0b3JzLmN1cnJlbnRQcm9qZWN0LmlubmVyVGV4dCk7XG4gICAgICBjb25zdCB0b2RvTGlzdHMgPSBKU09OLnN0cmluZ2lmeShnZXRUb2RvTGlzdHMoKSk7XG4gICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UodG9kb0xpc3RzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudC5tYXRjaGVzKFwiLnByb2plY3QtY2FyZFwiKSkge1xuICAgICAgc2VsZWN0b3JzLmN1cnJlbnRQcm9qZWN0LmlubmVyVGV4dCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCJkaXZbZGF0YS1wcm9qZWN0LXRpdGxlXVwiXG4gICAgICApLmlubmVyVGV4dDtcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudC5tYXRjaGVzKFwiW2RhdGEtcHJvamVjdC10aXRsZV1cIikpIHtcbiAgICAgIHNlbGVjdG9ycy5jdXJyZW50UHJvamVjdC5pbm5lclRleHQgPSBlbGVtZW50LmlubmVyVGV4dDtcbiAgICB9XG5cbiAgICBsb2FkQ3VycmVudFByb2plY3RUYXNrcyhzZWxlY3RvcnMuY3VycmVudFByb2plY3QuaW5uZXJUZXh0KTtcbiAgfVxuXG4gIHN0YXRpYyBsb2FkQXBwRnJvbUxvY2FsU3RvcmFnZSgpIHtcbiAgICBjb25zdCB0b2RvTGlzdHMgPSBKU09OLnBhcnNlKGdldEZyb21Mb2NhbFN0b3JhZ2UoKSk7XG4gICAgY29uc3QgcHJvamVjdExpc3RzID0gT2JqZWN0LmtleXModG9kb0xpc3RzKTtcblxuICAgIHByb2plY3RMaXN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBpZiAocHJvamVjdC50b0xvd2VyQ2FzZSgpICE9PSBcImluYm94XCIpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdE5vZGUgPSBjcmVhdGVQcm9qZWN0Tm9kZShwcm9qZWN0KTtcbiAgICAgICAgc2VsZWN0b3JzLnByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5vZGUpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB0YXNrcyA9IHRvZG9MaXN0c1twcm9qZWN0XTtcblxuICAgICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2soXG4gICAgICAgICAgdGFzay5pZCxcbiAgICAgICAgICB0YXNrLnRpdGxlLFxuICAgICAgICAgIHRhc2suZGV0YWlscyxcbiAgICAgICAgICB0YXNrLmR1ZURhdGUsXG4gICAgICAgICAgdGFzay5wcmlvcml0eSxcbiAgICAgICAgICB0YXNrLnByb2plY3RcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgdGFza05vZGUgPSBjcmVhdGVUYXNrTm9kZShuZXdUYXNrKTtcbiAgICAgICAgaWYgKHRhc2sucHJvamVjdC50b0xvd2VyQ2FzZSgpICE9PSBcImluYm94XCIpIHtcbiAgICAgICAgICB0YXNrTm9kZS5jbGFzc0xpc3QudG9nZ2xlKFwiaW5hY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZWN0b3JzLnRvZG9MaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tOb2RlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc2F2ZVRvTG9jYWxTdG9yYWdlKGl0ZW0pIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvTGlzdEFwcFwiLCBpdGVtKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRGcm9tTG9jYWxTdG9yYWdlKCkge1xuICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvTGlzdEFwcFwiKTtcbn1cbiIsImltcG9ydCB7IHByb2plY3RUZW1wbGF0ZSwgcHJvamVjdENvbnRhaW5lciB9IGZyb20gXCIuLi9kYXRhL0RPTXNlbGVjdG9ycy5qc1wiO1xuaW1wb3J0IHsgaWRHZW5lcmF0b3IgfSBmcm9tIFwiLi4vdXRpbGl0eS91dGlsaXR5LmpzXCI7XG5jb25zdCBnZW5lcmF0b3IgPSBpZEdlbmVyYXRvcigpO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdE5vZGUodGl0bGUpIHtcbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RGYWN0b3J5KHRpdGxlKTtcbiAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBwcm9qZWN0VGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gIGNvbnN0IGlkID0gcHJvamVjdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXByb2plY3QtaWRdXCIpO1xuICBpZC5kYXRhc2V0LnByb2plY3RJZCA9IHByb2plY3QuaWQ7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IHByb2plY3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcm9qZWN0LXRpdGxlXVwiKTtcbiAgcHJvamVjdFRpdGxlLmlubmVyVGV4dCA9IHByb2plY3QudGl0bGU7XG4gIHJldHVybiBwcm9qZWN0RWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2plY3RUaXRsZXMoKSB7XG4gIGNvbnN0IHByb2plY3RzID0gW1xuICAgIC4uLnByb2plY3RDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcImRpdltkYXRhLXByb2plY3QtdGl0bGVdXCIpLFxuICBdO1xuICByZXR1cm4gcHJvamVjdHMubWFwKChlbGVtZW50KSA9PiBlbGVtZW50LmlubmVyVGV4dCk7XG59XG5cbmNvbnN0IHByb2plY3RGYWN0b3J5ID0gKHRpdGxlKSA9PiB7XG4gIHJldHVybiB7IGlkOiBnZW5lcmF0b3IubmV4dCgpLnZhbHVlLnRvU3RyaW5nKCksIHRpdGxlIH07XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKGlkLCBuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICB0aGlzLl9pZCA9IGlkO1xuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5fZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5fcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLl9wcm9qZWN0ID0gcHJvamVjdCB8fCBcImluYm94XCI7XG4gIH1cblxuICBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgc2V0IG5hbWUobmFtZSkge1xuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICBzZXQgZGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG5cbiAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIHNldCBkdWVEYXRlKGRhdGUpIHtcbiAgICB0aGlzLl9kdWVEYXRlID0gZGF0ZTtcbiAgfVxuXG4gIGdldCBkdWVEYXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9kdWVEYXRlO1xuICB9XG5cbiAgc2V0IHByaW9yaXR5KHByaW9yaXR5KSB7XG4gICAgdGhpcy5fcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxuXG4gIGdldCBwcmlvcml0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJpb3JpdHk7XG4gIH1cblxuICBzZXQgcHJvamVjdChwcm9qZWN0KSB7XG4gICAgdGhpcy5fcHJvamVjdCA9IHByb2plY3Q7XG4gIH1cblxuICBnZXQgcHJvamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvamVjdDtcbiAgfVxufVxuIiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFzay5qc1wiO1xuaW1wb3J0IHsgZ2V0UHJvamVjdFRpdGxlcyB9IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5pbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSBcIi4uL2RhdGEvRE9Nc2VsZWN0b3JzLmpzXCI7XG5pbXBvcnQgeyBDT0xPUl9QUklPUklUWV9NQVAgfSBmcm9tIFwiLi4vZGF0YS9wcmlvcml0eS5qc1wiO1xuaW1wb3J0IHsgaWRHZW5lcmF0b3IgfSBmcm9tIFwiLi4vdXRpbGl0eS91dGlsaXR5LmpzXCI7XG5jb25zdCBnZW5lcmF0b3IgPSBpZEdlbmVyYXRvcigpO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFzayhpZCkge1xuICBjb25zdCBuYW1lID0gc2VsZWN0b3JzLm5hbWVFbGVtZW50LnZhbHVlLnRyaW0oKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBzZWxlY3RvcnMuZGVzY3JpcHRpb25FbGVtZW50LnZhbHVlLnRyaW0oKTtcbiAgY29uc3QgZGF0ZSA9IHNlbGVjdG9ycy5kYXRlRWxlbWVudC52YWx1ZS50cmltKCk7XG4gIGNvbnN0IHByaW9yaXR5ID0gc2VsZWN0b3JzLnByaW9yaXR5RWxlbWVudC52YWx1ZS50cmltKCkgfHwgXCJsb3dcIjtcbiAgY29uc3QgcHJvamVjdCA9IHNlbGVjdG9ycy5wcm9qZWN0RWxlbWVudC52YWx1ZS50cmltKCk7XG4gIGNvbnN0IHRhc2tJZCA9IGlkID8/IGdlbmVyYXRvci5uZXh0KCkudmFsdWUudG9TdHJpbmcoKTtcbiAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKHRhc2tJZCwgbmFtZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBwcm9qZWN0KTtcbiAgcmV0dXJuIG5ld1Rhc2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldEZvcm0oKSB7XG4gIGlmIChzZWxlY3RvcnMudGFza0Zvcm0uZGF0YXNldC50YXNrSWQpIHtcbiAgICBkZWxldGUgc2VsZWN0b3JzLnRhc2tGb3JtLmRhdGFzZXQudGFza0lkO1xuICB9XG4gIHNlbGVjdG9ycy5uYW1lRWxlbWVudC52YWx1ZSA9IFwiXCI7XG4gIHNlbGVjdG9ycy5kZXNjcmlwdGlvbkVsZW1lbnQudmFsdWUgPSBcIlwiO1xuICBzZWxlY3RvcnMuZGF0ZUVsZW1lbnQudmFsdWUgPSBcIlwiO1xuICBzZWxlY3RvcnMucHJpb3JpdHlFbGVtZW50LnZhbHVlID0gXCJcIjtcbiAgc2VsZWN0b3JzLnByb2plY3RFbGVtZW50LnZhbHVlID0gXCJcIjtcbiAgc2VsZWN0b3JzLnRhc2tTYXZlQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9maWxsKHRhc2tJZCkge1xuICBjb25zdCB0YXNrID0gc2VsZWN0b3JzLnRvZG9MaXN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgYFtkYXRhLXRhc2staWQ9JyR7dGFza0lkfSddYFxuICApO1xuICBzZWxlY3RvcnMudGFza0Zvcm0uZGF0YXNldC50YXNrSWQgPSB0YXNrSWQ7XG4gIHNlbGVjdG9ycy5uYW1lRWxlbWVudC52YWx1ZSA9IHRhc2tcbiAgICAucXVlcnlTZWxlY3RvcihcIltkYXRhLXRpdGxlXVwiKVxuICAgIC5pbm5lclRleHQudHJpbSgpO1xuICBzZWxlY3RvcnMuZGVzY3JpcHRpb25FbGVtZW50LnZhbHVlID0gdGFza1xuICAgIC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZGV0YWlsc11cIilcbiAgICAuaW5uZXJUZXh0LnRyaW0oKTtcblxuICBzZWxlY3RvcnMuZGF0ZUVsZW1lbnQudmFsdWUgPSB0YXNrXG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1kdWUtZGF0ZV1cIilcbiAgICAuaW5uZXJUZXh0LnRyaW0oKTtcbiAgY29uc3QgcHJpb3JpdHlDb2xvciA9IHRhc2sucXVlcnlTZWxlY3RvcihcIltkYXRhLXByaW9yaXR5LWNvbG9yXVwiKS5zdHlsZVxuICAgIC5iYWNrZ3JvdW5kQ29sb3I7XG4gIHNlbGVjdG9ycy5wcmlvcml0eUVsZW1lbnQudmFsdWUgPSBDT0xPUl9QUklPUklUWV9NQVAuZ2V0KHByaW9yaXR5Q29sb3IpO1xuICBzZWxlY3RvcnMucHJvamVjdEVsZW1lbnQudmFsdWUgPSB0YXNrLmRhdGFzZXQucHJvamVjdDtcbiAgY29uc3QgdGl0bGVzID0gZ2V0UHJvamVjdFRpdGxlcygpO1xuICB1cGRhdGVQcm9qZWN0TWVudSh0aXRsZXMpO1xuICBzZWxlY3RvcnMudGFza1NhdmVCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVByb2plY3RNZW51KHRpdGxlcykge1xuICBjb25zdCByZXNlcnZlZE9wdGlvbnMgPSBbXCJJbmJveFwiLCBcIlByb2plY3RcIl07XG4gIGNvbnN0IG9wdGlvbnNUb0RlbCA9IFtcbiAgICAuLi5zZWxlY3RvcnMucHJvamVjdEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIm9wdGlvblwiKSxcbiAgXS5maWx0ZXIoKGVsZW1lbnQpID0+IHtcbiAgICByZXR1cm4gIXJlc2VydmVkT3B0aW9ucy5pbmNsdWRlcyhlbGVtZW50LmlubmVyVGV4dCk7XG4gIH0pO1xuXG4gIG9wdGlvbnNUb0RlbC5mb3JFYWNoKChvcHRpb24pID0+IG9wdGlvbi5yZW1vdmUoKSk7XG5cbiAgdGl0bGVzLmZvckVhY2goKHRpdGxlKSA9PiB7XG4gICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uLnRleHQgPSB0aXRsZTtcbiAgICBvcHRpb24udmFsdWUgPSB0aXRsZTtcbiAgICBzZWxlY3RvcnMucHJvamVjdEVsZW1lbnQuYWRkKG9wdGlvbik7XG4gIH0pO1xufVxuIiwiaW1wb3J0IGlzVG9kYXkgZnJvbSBcImRhdGUtZm5zL2lzVG9kYXlcIjtcbmltcG9ydCB7IHRvZG9MaXN0Q29udGFpbmVyIH0gZnJvbSBcIi4uL2RhdGEvRE9Nc2VsZWN0b3JzLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5VG9kYXlUYXNrcygpIHtcbiAgY29uc3QgdGFza3MgPSBbLi4udG9kb0xpc3RDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLWNhcmRcIildO1xuXG4gIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBjb25zdCBkdWVEYXRlID0gdGFzay5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZHVlLWRhdGVdXCIpLmlubmVyVGV4dDtcbiAgICBjb25zdCBjbGFzc2VzID0gWy4uLnRhc2suY2xhc3NMaXN0XTtcblxuICAgIGlmIChkdWVEYXRlKSB7XG4gICAgICBjb25zdCBbeWVhciwgbW9udGgsIGRheV0gPSBkdWVEYXRlLnNwbGl0KFwiLVwiKTtcbiAgICAgIC8vIG1vbnRoIGlzIDAgYmFzZWRcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBwYXJzZUludChtb250aCkgLSAxLCBkYXkpO1xuICAgICAgbGV0IHRvZGF5ID0gaXNUb2RheShkYXRlKTtcblxuICAgICAgaWYgKHRvZGF5KSB7XG4gICAgICAgIGlmIChjbGFzc2VzLmluY2x1ZGVzKFwiaW5hY3RpdmVcIikpIHtcbiAgICAgICAgICB0YXNrLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFjbGFzc2VzLmluY2x1ZGVzKFwiaW5hY3RpdmVcIikpIHtcbiAgICAgICAgICB0YXNrLmNsYXNzTGlzdC50b2dnbGUoXCJpbmFjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWNsYXNzZXMuaW5jbHVkZXMoXCJpbmFjdGl2ZVwiKSkge1xuICAgICAgICB0YXNrLmNsYXNzTGlzdC50b2dnbGUoXCJpbmFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgdG9kb0xpc3RDb250YWluZXIsIHRlbXBsYXRlIH0gZnJvbSBcIi4uL2RhdGEvRE9Nc2VsZWN0b3JzLmpzXCI7XG5pbXBvcnQgeyBQUklPUklUWV9DT0xPUl9NQVAsIENPTE9SX1BSSU9SSVRZX01BUCB9IGZyb20gXCIuLi9kYXRhL3ByaW9yaXR5LmpzXCI7XG5pbXBvcnQgeyBnZXRQcm9qZWN0VGl0bGVzIH0gZnJvbSBcIi4vcHJvamVjdHMuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2tOb2RlKHRhc2spIHtcbiAgY29uc3QgZWxlbWVudEV4aXN0cyA9IHRvZG9MaXN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgYFtkYXRhLXRhc2staWQ9JyR7dGFzay5pZH0nXWBcbiAgKTtcbiAgbGV0IHRhc2tUb1JlbmRlcjtcbiAgaWYgKGVsZW1lbnRFeGlzdHMpIHtcbiAgICB0YXNrVG9SZW5kZXIgPSBlbGVtZW50RXhpc3RzO1xuICB9IGVsc2Uge1xuICAgIHRhc2tUb1JlbmRlciA9IHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgIGNvbnN0IHRhc2tFbCA9IHRhc2tUb1JlbmRlci5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGFzay1pZF1cIik7XG5cbiAgICB0YXNrRWwuZGF0YXNldC50YXNrSWQgPSB0YXNrLmlkO1xuICAgIHRhc2tUb1JlbmRlciA9IHRhc2tFbDtcbiAgfVxuXG4gIHNldFRhc2tOb2RlVmFsdWVzKHRhc2tUb1JlbmRlciwgdGFzayk7XG4gIHJldHVybiB0YXNrVG9SZW5kZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkQ3VycmVudFByb2plY3RUYXNrcyhjdXJyZW50UHJvamVjdFRpdGxlKSB7XG4gIGNvbnN0IHRhc2tzID0gWy4uLnRvZG9MaXN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1jYXJkXCIpXTtcblxuICB0YXNrcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgY2xhc3NlcyA9IFsuLi5lbGVtZW50LmNsYXNzTGlzdF07XG4gICAgaWYgKFxuICAgICAgZWxlbWVudC5kYXRhc2V0LnByb2plY3QudG9Mb3dlckNhc2UoKSA9PT1cbiAgICAgIGN1cnJlbnRQcm9qZWN0VGl0bGUudG9Mb3dlckNhc2UoKVxuICAgICkge1xuICAgICAgaWYgKGNsYXNzZXMuaW5jbHVkZXMoXCJpbmFjdGl2ZVwiKSkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFjbGFzc2VzLmluY2x1ZGVzKFwiaW5hY3RpdmVcIikpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiaW5hY3RpdmVcIik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3RUYXNrcyhwcm9qZWN0VGl0bGUpIHtcbiAgY29uc3QgdGFza3NUb0RlbGV0ZSA9IGdldFByb2plY3RUYXNrcyhwcm9qZWN0VGl0bGUpO1xuICB0YXNrc1RvRGVsZXRlLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LnJlbW92ZSgpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvZG9MaXN0cygpIHtcbiAgY29uc3QgYWxsUHJvamVjdHMgPSBnZXRQcm9qZWN0VGl0bGVzKCk7XG4gIGFsbFByb2plY3RzLnB1c2goXCJpbmJveFwiKTtcbiAgY29uc3QgdG9kb0xpc3RzID0ge307XG4gIGFsbFByb2plY3RzLmZvckVhY2goKHRpdGxlKSA9PiB7XG4gICAgY29uc3QgdGFza3MgPSBnZXRQcm9qZWN0VGFza3ModGl0bGUpO1xuICAgIHRvZG9MaXN0c1t0aXRsZV0gPSBbXTtcbiAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCB0YXNrSlNPTiA9IGdldFRhc2tOb2RlVmFsdWVzKHRhc2spO1xuICAgICAgdG9kb0xpc3RzW3RpdGxlXS5wdXNoKHRhc2tKU09OKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRvZG9MaXN0cztcbn1cblxuZnVuY3Rpb24gZ2V0UHJvamVjdFRhc2tzKHByb2plY3RUaXRsZSkge1xuICBjb25zdCB0YXNrcyA9IFsuLi50b2RvTGlzdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2stY2FyZFwiKV07XG4gIHJldHVybiB0YXNrcy5maWx0ZXIoKGVsZW1lbnQpID0+IHtcbiAgICByZXR1cm4gZWxlbWVudC5kYXRhc2V0LnByb2plY3QudG9Mb3dlckNhc2UoKSA9PT0gcHJvamVjdFRpdGxlLnRvTG93ZXJDYXNlKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXRUYXNrTm9kZVZhbHVlcyh0YXNrVG9SZW5kZXIsIHRhc2spIHtcbiAgY29uc3QgY29sb3IgPSBQUklPUklUWV9DT0xPUl9NQVAuZ2V0KHRhc2sucHJpb3JpdHkpID8/IFwiZ3JlZW5cIjtcbiAgY29uc3QgcHJpb3JpdHkgPSB0YXNrVG9SZW5kZXIucXVlcnlTZWxlY3RvcihcIltkYXRhLXByaW9yaXR5LWNvbG9yXVwiKTtcbiAgcHJpb3JpdHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gIHRhc2tUb1JlbmRlci5kYXRhc2V0LnByb2plY3QgPSB0YXNrLnByb2plY3Q7XG5cbiAgY29uc3QgdGl0bGUgPSB0YXNrVG9SZW5kZXIucXVlcnlTZWxlY3RvcihcIltkYXRhLXRpdGxlXVwiKTtcbiAgdGl0bGUuaW5uZXJUZXh0ID0gdGFzay5uYW1lO1xuXG4gIGNvbnN0IGRldGFpbHMgPSB0YXNrVG9SZW5kZXIucXVlcnlTZWxlY3RvcihcIltkYXRhLWRldGFpbHNdXCIpO1xuICBkZXRhaWxzLmlubmVyVGV4dCA9IHRhc2suZGVzY3JpcHRpb247XG5cbiAgY29uc3QgZGF0ZSA9IHRhc2tUb1JlbmRlci5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZHVlLWRhdGVdXCIpO1xuICBkYXRlLmlubmVyVGV4dCA9IHRhc2suZHVlRGF0ZTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFza05vZGVWYWx1ZXModGFzaykge1xuICBsZXQgY29sb3IgPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcmlvcml0eS1jb2xvcl1cIikuc3R5bGUuYmFja2dyb3VuZENvbG9yO1xuICBsZXQgdGFza0pTT04gPSB7XG4gICAgaWQ6IHRhc2suZGF0YXNldC50YXNrSWQsXG4gICAgcHJvamVjdDogdGFzay5kYXRhc2V0LnByb2plY3QsXG4gICAgcHJpb3JpdHk6IENPTE9SX1BSSU9SSVRZX01BUC5nZXQoY29sb3IpLFxuICAgIHRpdGxlOiB0YXNrLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10aXRsZV1cIikuaW5uZXJUZXh0LFxuICAgIGRldGFpbHM6IHRhc2sucXVlcnlTZWxlY3RvcihcIltkYXRhLWRldGFpbHNdXCIpLmlubmVyVGV4dCxcbiAgICBkdWVEYXRlOiB0YXNrLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1kdWUtZGF0ZV1cIikuaW5uZXJUZXh0LFxuICB9O1xuICByZXR1cm4gdGFza0pTT047XG59XG4iLCJleHBvcnQgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybS1jb250YWluZXJcIik7XG5leHBvcnQgY29uc3QgbmV3VGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stYnV0dG9uXCIpO1xuZXhwb3J0IGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWZvcm1cIik7XG5leHBvcnQgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3ZlcmxheVwiKTtcbmV4cG9ydCBjb25zdCB0b2RvTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1saXN0LWNvbnRhaW5lclwiKTtcbmV4cG9ydCBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm0tYnRuLWNhbmNlbFwiKTtcbmV4cG9ydCBjb25zdCBjcmVhdGVQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjcmVhdGUtcHJvamVjdC1kaXZcIik7XG5leHBvcnQgY29uc3QgbmV3UHJvamVjdFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctcHJvamVjdC1wb3B1cFwiKTtcbmV4cG9ydCBjb25zdCBuZXdQcm9qZWN0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiI3Byb2plY3QtYnV0dG9ucy13cmFwcGVyXCJcbik7XG5leHBvcnQgY29uc3QgbmV3UHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LW5hbWUtaW5wdXRcIik7XG5leHBvcnQgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHMtY29udGFpbmVyXCIpO1xuZXhwb3J0IGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LW5hbWVcIik7XG5leHBvcnQgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2lkZWJhclwiKTtcbmV4cG9ydCBjb25zdCBuYW1lRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1uYW1lXCIpO1xuZXhwb3J0IGNvbnN0IGRlc2NyaXB0aW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kZXNjcmlwdGlvblwiKTtcbmV4cG9ydCBjb25zdCBkYXRlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kdWUtZGF0ZVwiKTtcbmV4cG9ydCBjb25zdCBwcmlvcml0eUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stcHJpb3JpdHlcIik7XG5leHBvcnQgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stcHJvamVjdFwiKTtcbmV4cG9ydCBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay10ZW1wbGF0ZVwiKTtcbmV4cG9ydCBjb25zdCBwcm9qZWN0VGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtdGVtcGxhdGVcIik7XG5leHBvcnQgY29uc3QgdGFza1NhdmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm0tYnRuLXNhdmVcIik7XG5leHBvcnQgY29uc3QgbGVmdE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xlZnQtbWVudVwiKTtcbiIsImV4cG9ydCBjb25zdCBQUklPUklUWV9DT0xPUl9NQVAgPSBuZXcgTWFwKFtcbiAgW1wiaGlnaFwiLCBcInJlZFwiXSxcbiAgW1wibWVkaXVtXCIsIFwieWVsbG93XCJdLFxuICBbXCJsb3dcIiwgXCJncmVlblwiXSxcbl0pO1xuXG5leHBvcnQgY29uc3QgQ09MT1JfUFJJT1JJVFlfTUFQID0gbmV3IE1hcChbXG4gIFtcInJlZFwiLCBcImhpZ2hcIl0sXG4gIFtcInllbGxvd1wiLCBcIm1lZGl1bVwiXSxcbiAgW1wiZ3JlZW5cIiwgXCJsb3dcIl0sXG5dKTtcbiIsImV4cG9ydCBmdW5jdGlvbiogaWRHZW5lcmF0b3IoKSB7XG4gIGxldCBjb3VudCA9IDE7XG4gIHdoaWxlICh0cnVlKSB7XG4gICAgeWllbGQgY291bnQrKztcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvO1xuICB9IDogZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbztcbiAgfSwgX3R5cGVvZihvKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIHNlbGVjdG9ycyBmcm9tIFwiLi9zY3JpcHRzL2RhdGEvRE9Nc2VsZWN0b3JzLmpzXCI7XG5pbXBvcnQgVUkgZnJvbSBcIi4vc2NyaXB0cy9VSS5qc1wiO1xuXG53aW5kb3cub25sb2FkID0gVUkubG9hZEFwcEZyb21Mb2NhbFN0b3JhZ2U7XG5zZWxlY3RvcnMubmFtZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIFVJLmhhbmRsZVRhc2tUaXRsZUlucHV0KTtcbnNlbGVjdG9ycy5uZXdUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBVSS5vcGVuTmV3VGFza0Zvcm0pO1xuc2VsZWN0b3JzLnRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgVUkudXBkYXRlVG9Eb0xpc3QpO1xuc2VsZWN0b3JzLmNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgVUkuY2xvc2VUYXNrRm9ybSk7XG5zZWxlY3RvcnMudG9kb0xpc3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFVJLnVwZGF0ZVRhc2spO1xuc2VsZWN0b3JzLmNyZWF0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFVJLm9wZW5OZXdQcm9qZWN0UG9wVXApO1xuc2VsZWN0b3JzLm5ld1Byb2plY3RCdXR0b25zLmFkZEV2ZW50TGlzdGVuZXIoXG4gIFwiY2xpY2tcIixcbiAgVUkuaGFuZGxlTmV3UHJvamVjdFBvcFVwQWN0aW9uc1xuKTtcbnNlbGVjdG9ycy5sZWZ0TWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgVUkuZGlzcGxheUxlZnRNZW51Q29udGVudCk7XG5zZWxlY3RvcnMucHJvamVjdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFxuICBcImNsaWNrXCIsXG4gIFVJLmhhbmRsZVByb2plY3RDb250ZW50QWN0aW9uc1xuKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==