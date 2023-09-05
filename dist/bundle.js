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

  // add a way to retrieve and display data from localStorage when the app is first loaded
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



// add a way to retrieve and display data from localStorage when the app is first loaded
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDJCQUEyQixzREFBRTtBQUN4RCx3RUFBdUIsMkJBQTJCLHNEQUFFO0FBQ3BELDRFQUEyQjtBQUMzQjtBQUNBLEVBQUUsc0RBQUU7QUFDSjtBQUNBLG1FQUFrQiwyQkFBMkIsc0RBQUU7QUFDL0MsMkVBQTBCO0FBQzFCO0FBQ0EsRUFBRSxzREFBRTtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL1VJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2FwcC9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvYXBwL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2FwcC90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2FwcC90YXNrRm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9hcHAvdG9kYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvYXBwL3RvZG9MaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2RhdGEvRE9Nc2VsZWN0b3JzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2RhdGEvcHJpb3JpdHkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvdXRpbGl0eS91dGlsaXR5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lRGF5KGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xufSIsImltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb2RheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBEYXRlLm5vdygpKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImltcG9ydCB7XG4gIGNyZWF0ZVRhc2ssXG4gIHJlc2V0Rm9ybSxcbiAgYXV0b2ZpbGwsXG4gIHVwZGF0ZVByb2plY3RNZW51LFxufSBmcm9tIFwiLi9hcHAvdGFza0Zvcm0uanNcIjtcbmltcG9ydCB7XG4gIGNyZWF0ZVRhc2tOb2RlLFxuICBsb2FkQ3VycmVudFByb2plY3RUYXNrcyxcbiAgZGVsZXRlUHJvamVjdFRhc2tzLFxuICBnZXRUb2RvTGlzdHMsXG59IGZyb20gXCIuL2FwcC90b2RvTGlzdC5qc1wiO1xuaW1wb3J0IHsgZGlzcGxheVRvZGF5VGFza3MgfSBmcm9tIFwiLi9hcHAvdG9kYXkuanNcIjtcbmltcG9ydCB7IGNyZWF0ZVByb2plY3ROb2RlLCBnZXRQcm9qZWN0VGl0bGVzIH0gZnJvbSBcIi4vYXBwL3Byb2plY3RzLmpzXCI7XG5pbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSBcIi4vZGF0YS9ET01zZWxlY3RvcnMuanNcIjtcbmltcG9ydCB7IHNhdmVUb0xvY2FsU3RvcmFnZSwgZ2V0RnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2FwcC9sb2NhbFN0b3JhZ2UuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xuICBzdGF0aWMgaGFuZGxlVGFza1RpdGxlSW5wdXQoKSB7XG4gICAgY29uc3QgdGFza1RpdGxlID0gc2VsZWN0b3JzLm5hbWVFbGVtZW50LnZhbHVlO1xuICAgIGlmICh0YXNrVGl0bGUpIHtcbiAgICAgIHNlbGVjdG9ycy50YXNrU2F2ZUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxlY3RvcnMudGFza1NhdmVCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBvcGVuTmV3VGFza0Zvcm0oKSB7XG4gICAgc2VsZWN0b3JzLmZvcm1Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICBzZWxlY3RvcnMub3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIHNlbGVjdG9ycy50YXNrU2F2ZUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgY29uc3QgdGl0bGVzID0gZ2V0UHJvamVjdFRpdGxlcygpO1xuICAgIHVwZGF0ZVByb2plY3RNZW51KHRpdGxlcyk7XG4gICAgcmVzZXRGb3JtKCk7XG4gIH1cblxuICBzdGF0aWMgY2xvc2VUYXNrRm9ybSgpIHtcbiAgICBzZWxlY3RvcnMuZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIHNlbGVjdG9ycy5vdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgcmVzZXRGb3JtKCk7XG4gIH1cblxuICBzdGF0aWMgb3Blbk5ld1Byb2plY3RQb3BVcCgpIHtcbiAgICBzZWxlY3RvcnMuY3JlYXRlUHJvamVjdC5jbGFzc0xpc3QudG9nZ2xlKFwiaW5hY3RpdmVcIik7XG4gICAgc2VsZWN0b3JzLm5ld1Byb2plY3RQb3B1cC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIHNlbGVjdG9ycy5vdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlVG9Eb0xpc3QoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNlbGVjdG9ycy5mb3JtQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgc2VsZWN0b3JzLm92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICBjb25zdCBleGlzdGluZ1Rhc2tJZCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LnRhc2tJZDtcbiAgICBjb25zdCB0YXNrID0gY3JlYXRlVGFzayhleGlzdGluZ1Rhc2tJZCk7XG4gICAgY29uc3QgdGFza05vZGUgPSBjcmVhdGVUYXNrTm9kZSh0YXNrKTtcblxuICAgIGlmICghZXhpc3RpbmdUYXNrSWQpIHtcbiAgICAgIHNlbGVjdG9ycy50b2RvTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrTm9kZSk7XG4gICAgfVxuICAgIGxvYWRDdXJyZW50UHJvamVjdFRhc2tzKHNlbGVjdG9ycy5jdXJyZW50UHJvamVjdC5pbm5lclRleHQpO1xuICAgIGNvbnN0IHRpdGxlcyA9IGdldFByb2plY3RUaXRsZXMoKTtcbiAgICB1cGRhdGVQcm9qZWN0TWVudSh0aXRsZXMpO1xuICAgIHJlc2V0Rm9ybSgpO1xuICAgIGNvbnN0IHRvZG9MaXN0cyA9IEpTT04uc3RyaW5naWZ5KGdldFRvZG9MaXN0cygpKTtcbiAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UodG9kb0xpc3RzKTtcbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVUYXNrKGV2ZW50KSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAoZWxlbWVudC5tYXRjaGVzKFwiI3RvZG8tbGlzdC1jb250YWluZXJcIikpIHJldHVybjtcblxuICAgIGlmIChlbGVtZW50Lm1hdGNoZXMoXCIjdGFzay1jaGVja2JveFwiKSkge1xuICAgICAgY29uc3QgdGFzayA9IGVsZW1lbnQuY2xvc2VzdChcImRpdltkYXRhLXRhc2staWRdXCIpO1xuICAgICAgY29uc3QgdGl0bGUgPSBlbGVtZW50XG4gICAgICAgIC5jbG9zZXN0KFwiZGl2W2RhdGEtdGFzay1pZF1cIilcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10aXRsZV1cIik7XG5cbiAgICAgIGlmICh0aXRsZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9PT0gXCJsaW5lLXRocm91Z2hcIikge1xuICAgICAgICB0aXRsZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwiXCI7XG4gICAgICAgIHRhc2suc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRpdGxlLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJsaW5lLXRocm91Z2hcIjtcbiAgICAgIHRhc2suc3R5bGUub3BhY2l0eSA9IDAuNTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudC5jbG9zZXN0KFwiYnV0dG9uXCIpLm1hdGNoZXMoXCJbZGF0YS10YXNrLWRlbGV0ZV1cIikpIHtcbiAgICAgIGNvbnN0IHRhc2tUb0RlbGV0ZSA9IGVsZW1lbnQuY2xvc2VzdChcIi50YXNrLWNhcmRcIik7XG4gICAgICBzZWxlY3RvcnMudG9kb0xpc3RDb250YWluZXIucmVtb3ZlQ2hpbGQodGFza1RvRGVsZXRlKTtcbiAgICAgIGNvbnN0IHRvZG9MaXN0cyA9IEpTT04uc3RyaW5naWZ5KGdldFRvZG9MaXN0cygpKTtcbiAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSh0b2RvTGlzdHMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50LmNsb3Nlc3QoXCJidXR0b25cIikubWF0Y2hlcyhcIltkYXRhLXRhc2stZWRpdF1cIikpIHtcbiAgICAgIGNvbnN0IGlkID0gZWxlbWVudC5jbG9zZXN0KFwiZGl2W2RhdGEtdGFzay1pZF1cIikuZGF0YXNldC50YXNrSWQ7XG4gICAgICBhdXRvZmlsbChpZCk7XG4gICAgICBzZWxlY3RvcnMuZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgc2VsZWN0b3JzLm92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgaGFuZGxlTmV3UHJvamVjdFBvcFVwQWN0aW9ucyhldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQubWF0Y2hlcyhcIiNwcm9qZWN0LXNhdmVcIikpIHtcbiAgICAgIGNvbnN0IG5ld1Byb2plY3RUaXRsZSA9IHNlbGVjdG9ycy5uZXdQcm9qZWN0SW5wdXQudmFsdWUudHJpbSgpO1xuICAgICAgaWYgKCFuZXdQcm9qZWN0VGl0bGUpIHJldHVybjtcblxuICAgICAgY29uc3QgcmVzZXJ2ZWROYW1lcyA9IGdldFByb2plY3RUaXRsZXMoKS5tYXAoKHRpdGxlKSA9PlxuICAgICAgICB0aXRsZS50b0xvd2VyQ2FzZSgpXG4gICAgICApO1xuICAgICAgcmVzZXJ2ZWROYW1lcy5wdXNoKFwiaW5ib3hcIiwgXCJ0b2RheVwiKTtcbiAgICAgIGlmIChyZXNlcnZlZE5hbWVzLmluY2x1ZGVzKG5ld1Byb2plY3RUaXRsZS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICBhbGVydChcIlByb2plY3QgYWxyZWFkeSBleGlzdHMgd2l0aCB0aGlzIG5hbWUhXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBwcm9qZWN0ID0gY3JlYXRlUHJvamVjdE5vZGUobmV3UHJvamVjdFRpdGxlKTtcbiAgICAgIHNlbGVjdG9ycy5wcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3QpO1xuICAgIH1cblxuICAgIHNlbGVjdG9ycy5uZXdQcm9qZWN0SW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIHNlbGVjdG9ycy5jcmVhdGVQcm9qZWN0LmNsYXNzTGlzdC50b2dnbGUoXCJpbmFjdGl2ZVwiKTtcbiAgICBzZWxlY3RvcnMubmV3UHJvamVjdFBvcHVwLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgc2VsZWN0b3JzLm92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICBjb25zdCB0b2RvTGlzdHMgPSBKU09OLnN0cmluZ2lmeShnZXRUb2RvTGlzdHMoKSk7XG4gICAgc2F2ZVRvTG9jYWxTdG9yYWdlKHRvZG9MaXN0cyk7XG4gIH1cblxuICBzdGF0aWMgZGlzcGxheUxlZnRNZW51Q29udGVudChldmVudCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKGVsZW1lbnQubWF0Y2hlcyhcImxpI2luYm94XCIpKSB7XG4gICAgICBzZWxlY3RvcnMuY3VycmVudFByb2plY3QuaW5uZXJUZXh0ID0gZWxlbWVudC5pbm5lclRleHQ7XG4gICAgICBsb2FkQ3VycmVudFByb2plY3RUYXNrcyhzZWxlY3RvcnMuY3VycmVudFByb2plY3QuaW5uZXJUZXh0KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudC5tYXRjaGVzKFwibGkjdG9kYXlcIikpIHtcbiAgICAgIHNlbGVjdG9ycy5jdXJyZW50UHJvamVjdC5pbm5lclRleHQgPSBlbGVtZW50LmlubmVyVGV4dDtcbiAgICAgIGRpc3BsYXlUb2RheVRhc2tzKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGhhbmRsZVByb2plY3RDb250ZW50QWN0aW9ucyhldmVudCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG5cbiAgICBpZiAoZWxlbWVudC5tYXRjaGVzKFwiI3Byb2plY3RzLWNvbnRhaW5lclwiKSkgcmV0dXJuO1xuXG4gICAgaWYgKGVsZW1lbnQubWF0Y2hlcyhcIltkYXRhLXByb2plY3QtZGVsZXRlXVwiKSkge1xuICAgICAgY29uc3QgcHJvamVjdENvbnRlbnQgPSBlbGVtZW50LmNsb3Nlc3QoXCJkaXZbZGF0YS1wcm9qZWN0LWlkXVwiKTtcbiAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IHByb2plY3RDb250ZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiW2RhdGEtcHJvamVjdC10aXRsZV1cIlxuICAgICAgKS5pbm5lclRleHQ7XG5cbiAgICAgIHByb2plY3RDb250ZW50LnJlbW92ZSgpO1xuICAgICAgZGVsZXRlUHJvamVjdFRhc2tzKHByb2plY3RUaXRsZSk7XG5cbiAgICAgIHNlbGVjdG9ycy5jdXJyZW50UHJvamVjdC5pbm5lclRleHQgPSBcIkluYm94XCI7XG4gICAgICBsb2FkQ3VycmVudFByb2plY3RUYXNrcyhzZWxlY3RvcnMuY3VycmVudFByb2plY3QuaW5uZXJUZXh0KTtcbiAgICAgIGNvbnN0IHRvZG9MaXN0cyA9IEpTT04uc3RyaW5naWZ5KGdldFRvZG9MaXN0cygpKTtcbiAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSh0b2RvTGlzdHMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50Lm1hdGNoZXMoXCIucHJvamVjdC1jYXJkXCIpKSB7XG4gICAgICBzZWxlY3RvcnMuY3VycmVudFByb2plY3QuaW5uZXJUZXh0ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcImRpdltkYXRhLXByb2plY3QtdGl0bGVdXCJcbiAgICAgICkuaW5uZXJUZXh0O1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50Lm1hdGNoZXMoXCJbZGF0YS1wcm9qZWN0LXRpdGxlXVwiKSkge1xuICAgICAgc2VsZWN0b3JzLmN1cnJlbnRQcm9qZWN0LmlubmVyVGV4dCA9IGVsZW1lbnQuaW5uZXJUZXh0O1xuICAgIH1cblxuICAgIGxvYWRDdXJyZW50UHJvamVjdFRhc2tzKHNlbGVjdG9ycy5jdXJyZW50UHJvamVjdC5pbm5lclRleHQpO1xuICB9XG5cbiAgLy8gYWRkIGEgd2F5IHRvIHJldHJpZXZlIGFuZCBkaXNwbGF5IGRhdGEgZnJvbSBsb2NhbFN0b3JhZ2Ugd2hlbiB0aGUgYXBwIGlzIGZpcnN0IGxvYWRlZFxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNhdmVUb0xvY2FsU3RvcmFnZShpdGVtKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb0xpc3RBcHBcIiwgaXRlbSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0RnJvbUxvY2FsU3RvcmFnZSgpIHtcbiAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0xpc3RBcHBcIik7XG59XG4iLCJpbXBvcnQgeyBwcm9qZWN0VGVtcGxhdGUsIHByb2plY3RDb250YWluZXIgfSBmcm9tIFwiLi4vZGF0YS9ET01zZWxlY3RvcnMuanNcIjtcbmltcG9ydCB7IGlkR2VuZXJhdG9yIH0gZnJvbSBcIi4uL3V0aWxpdHkvdXRpbGl0eS5qc1wiO1xuY29uc3QgZ2VuZXJhdG9yID0gaWRHZW5lcmF0b3IoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3ROb2RlKHRpdGxlKSB7XG4gIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0RmFjdG9yeSh0aXRsZSk7XG4gIGNvbnN0IHByb2plY3RFbGVtZW50ID0gcHJvamVjdFRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuICBjb25zdCBpZCA9IHByb2plY3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcm9qZWN0LWlkXVwiKTtcbiAgaWQuZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0LmlkO1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBwcm9qZWN0RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcHJvamVjdC10aXRsZV1cIik7XG4gIHByb2plY3RUaXRsZS5pbm5lclRleHQgPSBwcm9qZWN0LnRpdGxlO1xuICByZXR1cm4gcHJvamVjdEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0VGl0bGVzKCkge1xuICBjb25zdCBwcm9qZWN0cyA9IFtcbiAgICAuLi5wcm9qZWN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXZbZGF0YS1wcm9qZWN0LXRpdGxlXVwiKSxcbiAgXTtcbiAgcmV0dXJuIHByb2plY3RzLm1hcCgoZWxlbWVudCkgPT4gZWxlbWVudC5pbm5lclRleHQpO1xufVxuXG5jb25zdCBwcm9qZWN0RmFjdG9yeSA9ICh0aXRsZSkgPT4ge1xuICByZXR1cm4geyBpZDogZ2VuZXJhdG9yLm5leHQoKS52YWx1ZS50b1N0cmluZygpLCB0aXRsZSB9O1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3RvcihpZCwgbmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gICAgdGhpcy5faWQgPSBpZDtcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuX2R1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMuX3ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5fcHJvamVjdCA9IHByb2plY3QgfHwgXCJpbmJveFwiO1xuICB9XG5cbiAgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuXG4gIHNldCBuYW1lKG5hbWUpIHtcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgc2V0IGRlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gIH1cblxuICBzZXQgZHVlRGF0ZShkYXRlKSB7XG4gICAgdGhpcy5fZHVlRGF0ZSA9IGRhdGU7XG4gIH1cblxuICBnZXQgZHVlRGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZHVlRGF0ZTtcbiAgfVxuXG4gIHNldCBwcmlvcml0eShwcmlvcml0eSkge1xuICAgIHRoaXMuX3ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cblxuICBnZXQgcHJpb3JpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByaW9yaXR5O1xuICB9XG5cbiAgc2V0IHByb2plY3QocHJvamVjdCkge1xuICAgIHRoaXMuX3Byb2plY3QgPSBwcm9qZWN0O1xuICB9XG5cbiAgZ2V0IHByb2plY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2plY3Q7XG4gIH1cbn1cbiIsImltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2suanNcIjtcbmltcG9ydCB7IGdldFByb2plY3RUaXRsZXMgfSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuaW1wb3J0ICogYXMgc2VsZWN0b3JzIGZyb20gXCIuLi9kYXRhL0RPTXNlbGVjdG9ycy5qc1wiO1xuaW1wb3J0IHsgQ09MT1JfUFJJT1JJVFlfTUFQIH0gZnJvbSBcIi4uL2RhdGEvcHJpb3JpdHkuanNcIjtcbmltcG9ydCB7IGlkR2VuZXJhdG9yIH0gZnJvbSBcIi4uL3V0aWxpdHkvdXRpbGl0eS5qc1wiO1xuY29uc3QgZ2VuZXJhdG9yID0gaWRHZW5lcmF0b3IoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2soaWQpIHtcbiAgY29uc3QgbmFtZSA9IHNlbGVjdG9ycy5uYW1lRWxlbWVudC52YWx1ZS50cmltKCk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gc2VsZWN0b3JzLmRlc2NyaXB0aW9uRWxlbWVudC52YWx1ZS50cmltKCk7XG4gIGNvbnN0IGRhdGUgPSBzZWxlY3RvcnMuZGF0ZUVsZW1lbnQudmFsdWUudHJpbSgpO1xuICBjb25zdCBwcmlvcml0eSA9IHNlbGVjdG9ycy5wcmlvcml0eUVsZW1lbnQudmFsdWUudHJpbSgpIHx8IFwibG93XCI7XG4gIGNvbnN0IHByb2plY3QgPSBzZWxlY3RvcnMucHJvamVjdEVsZW1lbnQudmFsdWUudHJpbSgpO1xuICBjb25zdCB0YXNrSWQgPSBpZCA/PyBnZW5lcmF0b3IubmV4dCgpLnZhbHVlLnRvU3RyaW5nKCk7XG4gIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayh0YXNrSWQsIG5hbWUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSwgcHJvamVjdCk7XG4gIHJldHVybiBuZXdUYXNrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xuICBpZiAoc2VsZWN0b3JzLnRhc2tGb3JtLmRhdGFzZXQudGFza0lkKSB7XG4gICAgZGVsZXRlIHNlbGVjdG9ycy50YXNrRm9ybS5kYXRhc2V0LnRhc2tJZDtcbiAgfVxuICBzZWxlY3RvcnMubmFtZUVsZW1lbnQudmFsdWUgPSBcIlwiO1xuICBzZWxlY3RvcnMuZGVzY3JpcHRpb25FbGVtZW50LnZhbHVlID0gXCJcIjtcbiAgc2VsZWN0b3JzLmRhdGVFbGVtZW50LnZhbHVlID0gXCJcIjtcbiAgc2VsZWN0b3JzLnByaW9yaXR5RWxlbWVudC52YWx1ZSA9IFwiXCI7XG4gIHNlbGVjdG9ycy5wcm9qZWN0RWxlbWVudC52YWx1ZSA9IFwiXCI7XG4gIHNlbGVjdG9ycy50YXNrU2F2ZUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRvZmlsbCh0YXNrSWQpIHtcbiAgY29uc3QgdGFzayA9IHNlbGVjdG9ycy50b2RvTGlzdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgIGBbZGF0YS10YXNrLWlkPScke3Rhc2tJZH0nXWBcbiAgKTtcbiAgc2VsZWN0b3JzLnRhc2tGb3JtLmRhdGFzZXQudGFza0lkID0gdGFza0lkO1xuICBzZWxlY3RvcnMubmFtZUVsZW1lbnQudmFsdWUgPSB0YXNrXG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10aXRsZV1cIilcbiAgICAuaW5uZXJUZXh0LnRyaW0oKTtcbiAgc2VsZWN0b3JzLmRlc2NyaXB0aW9uRWxlbWVudC52YWx1ZSA9IHRhc2tcbiAgICAucXVlcnlTZWxlY3RvcihcIltkYXRhLWRldGFpbHNdXCIpXG4gICAgLmlubmVyVGV4dC50cmltKCk7XG5cbiAgc2VsZWN0b3JzLmRhdGVFbGVtZW50LnZhbHVlID0gdGFza1xuICAgIC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZHVlLWRhdGVdXCIpXG4gICAgLmlubmVyVGV4dC50cmltKCk7XG4gIGNvbnN0IHByaW9yaXR5Q29sb3IgPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcmlvcml0eS1jb2xvcl1cIikuc3R5bGVcbiAgICAuYmFja2dyb3VuZENvbG9yO1xuICBzZWxlY3RvcnMucHJpb3JpdHlFbGVtZW50LnZhbHVlID0gQ09MT1JfUFJJT1JJVFlfTUFQLmdldChwcmlvcml0eUNvbG9yKTtcbiAgc2VsZWN0b3JzLnByb2plY3RFbGVtZW50LnZhbHVlID0gdGFzay5kYXRhc2V0LnByb2plY3Q7XG4gIGNvbnN0IHRpdGxlcyA9IGdldFByb2plY3RUaXRsZXMoKTtcbiAgdXBkYXRlUHJvamVjdE1lbnUodGl0bGVzKTtcbiAgc2VsZWN0b3JzLnRhc2tTYXZlQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVQcm9qZWN0TWVudSh0aXRsZXMpIHtcbiAgY29uc3QgcmVzZXJ2ZWRPcHRpb25zID0gW1wiSW5ib3hcIiwgXCJQcm9qZWN0XCJdO1xuICBjb25zdCBvcHRpb25zVG9EZWwgPSBbXG4gICAgLi4uc2VsZWN0b3JzLnByb2plY3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJvcHRpb25cIiksXG4gIF0uZmlsdGVyKChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuICFyZXNlcnZlZE9wdGlvbnMuaW5jbHVkZXMoZWxlbWVudC5pbm5lclRleHQpO1xuICB9KTtcblxuICBvcHRpb25zVG9EZWwuZm9yRWFjaCgob3B0aW9uKSA9PiBvcHRpb24ucmVtb3ZlKCkpO1xuXG4gIHRpdGxlcy5mb3JFYWNoKCh0aXRsZSkgPT4ge1xuICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbi50ZXh0ID0gdGl0bGU7XG4gICAgb3B0aW9uLnZhbHVlID0gdGl0bGU7XG4gICAgc2VsZWN0b3JzLnByb2plY3RFbGVtZW50LmFkZChvcHRpb24pO1xuICB9KTtcbn1cbiIsImltcG9ydCBpc1RvZGF5IGZyb20gXCJkYXRlLWZucy9pc1RvZGF5XCI7XG5pbXBvcnQgeyB0b2RvTGlzdENvbnRhaW5lciB9IGZyb20gXCIuLi9kYXRhL0RPTXNlbGVjdG9ycy5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVRvZGF5VGFza3MoKSB7XG4gIGNvbnN0IHRhc2tzID0gWy4uLnRvZG9MaXN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1jYXJkXCIpXTtcblxuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgY29uc3QgZHVlRGF0ZSA9IHRhc2sucXVlcnlTZWxlY3RvcihcIltkYXRhLWR1ZS1kYXRlXVwiKS5pbm5lclRleHQ7XG4gICAgY29uc3QgY2xhc3NlcyA9IFsuLi50YXNrLmNsYXNzTGlzdF07XG5cbiAgICBpZiAoZHVlRGF0ZSkge1xuICAgICAgY29uc3QgW3llYXIsIG1vbnRoLCBkYXldID0gZHVlRGF0ZS5zcGxpdChcIi1cIik7XG4gICAgICAvLyBtb250aCBpcyAwIGJhc2VkXG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoeWVhciwgcGFyc2VJbnQobW9udGgpIC0gMSwgZGF5KTtcbiAgICAgIGxldCB0b2RheSA9IGlzVG9kYXkoZGF0ZSk7XG5cbiAgICAgIGlmICh0b2RheSkge1xuICAgICAgICBpZiAoY2xhc3Nlcy5pbmNsdWRlcyhcImluYWN0aXZlXCIpKSB7XG4gICAgICAgICAgdGFzay5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghY2xhc3Nlcy5pbmNsdWRlcyhcImluYWN0aXZlXCIpKSB7XG4gICAgICAgICAgdGFzay5jbGFzc0xpc3QudG9nZ2xlKFwiaW5hY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFjbGFzc2VzLmluY2x1ZGVzKFwiaW5hY3RpdmVcIikpIHtcbiAgICAgICAgdGFzay5jbGFzc0xpc3QudG9nZ2xlKFwiaW5hY3RpdmVcIik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiIsImltcG9ydCB7IHRvZG9MaXN0Q29udGFpbmVyLCB0ZW1wbGF0ZSB9IGZyb20gXCIuLi9kYXRhL0RPTXNlbGVjdG9ycy5qc1wiO1xuaW1wb3J0IHsgUFJJT1JJVFlfQ09MT1JfTUFQLCBDT0xPUl9QUklPUklUWV9NQVAgfSBmcm9tIFwiLi4vZGF0YS9wcmlvcml0eS5qc1wiO1xuaW1wb3J0IHsgZ2V0UHJvamVjdFRpdGxlcyB9IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrTm9kZSh0YXNrKSB7XG4gIGNvbnN0IGVsZW1lbnRFeGlzdHMgPSB0b2RvTGlzdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgIGBbZGF0YS10YXNrLWlkPScke3Rhc2suaWR9J11gXG4gICk7XG4gIGxldCB0YXNrVG9SZW5kZXI7XG4gIGlmIChlbGVtZW50RXhpc3RzKSB7XG4gICAgdGFza1RvUmVuZGVyID0gZWxlbWVudEV4aXN0cztcbiAgfSBlbHNlIHtcbiAgICB0YXNrVG9SZW5kZXIgPSB0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICBjb25zdCB0YXNrRWwgPSB0YXNrVG9SZW5kZXIucXVlcnlTZWxlY3RvcihcIltkYXRhLXRhc2staWRdXCIpO1xuXG4gICAgdGFza0VsLmRhdGFzZXQudGFza0lkID0gdGFzay5pZDtcbiAgICB0YXNrVG9SZW5kZXIgPSB0YXNrRWw7XG4gIH1cblxuICBzZXRUYXNrTm9kZVZhbHVlcyh0YXNrVG9SZW5kZXIsIHRhc2spO1xuICByZXR1cm4gdGFza1RvUmVuZGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZEN1cnJlbnRQcm9qZWN0VGFza3MoY3VycmVudFByb2plY3RUaXRsZSkge1xuICBjb25zdCB0YXNrcyA9IFsuLi50b2RvTGlzdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2stY2FyZFwiKV07XG5cbiAgdGFza3MuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBbLi4uZWxlbWVudC5jbGFzc0xpc3RdO1xuICAgIGlmIChcbiAgICAgIGVsZW1lbnQuZGF0YXNldC5wcm9qZWN0LnRvTG93ZXJDYXNlKCkgPT09XG4gICAgICBjdXJyZW50UHJvamVjdFRpdGxlLnRvTG93ZXJDYXNlKClcbiAgICApIHtcbiAgICAgIGlmIChjbGFzc2VzLmluY2x1ZGVzKFwiaW5hY3RpdmVcIikpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghY2xhc3Nlcy5pbmNsdWRlcyhcImluYWN0aXZlXCIpKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImluYWN0aXZlXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVQcm9qZWN0VGFza3MocHJvamVjdFRpdGxlKSB7XG4gIGNvbnN0IHRhc2tzVG9EZWxldGUgPSBnZXRQcm9qZWN0VGFza3MocHJvamVjdFRpdGxlKTtcbiAgdGFza3NUb0RlbGV0ZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5yZW1vdmUoKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb2RvTGlzdHMoKSB7XG4gIGNvbnN0IGFsbFByb2plY3RzID0gZ2V0UHJvamVjdFRpdGxlcygpO1xuICBhbGxQcm9qZWN0cy5wdXNoKFwiaW5ib3hcIik7XG4gIGNvbnN0IHRvZG9MaXN0cyA9IHt9O1xuICBhbGxQcm9qZWN0cy5mb3JFYWNoKCh0aXRsZSkgPT4ge1xuICAgIGNvbnN0IHRhc2tzID0gZ2V0UHJvamVjdFRhc2tzKHRpdGxlKTtcbiAgICB0b2RvTGlzdHNbdGl0bGVdID0gW107XG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgY29uc3QgdGFza0pTT04gPSBnZXRUYXNrTm9kZVZhbHVlcyh0YXNrKTtcbiAgICAgIHRvZG9MaXN0c1t0aXRsZV0ucHVzaCh0YXNrSlNPTik7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiB0b2RvTGlzdHM7XG59XG5cbmZ1bmN0aW9uIGdldFByb2plY3RUYXNrcyhwcm9qZWN0VGl0bGUpIHtcbiAgY29uc3QgdGFza3MgPSBbLi4udG9kb0xpc3RDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLWNhcmRcIildO1xuICByZXR1cm4gdGFza3MuZmlsdGVyKChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIGVsZW1lbnQuZGF0YXNldC5wcm9qZWN0LnRvTG93ZXJDYXNlKCkgPT09IHByb2plY3RUaXRsZS50b0xvd2VyQ2FzZSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0VGFza05vZGVWYWx1ZXModGFza1RvUmVuZGVyLCB0YXNrKSB7XG4gIGNvbnN0IGNvbG9yID0gUFJJT1JJVFlfQ09MT1JfTUFQLmdldCh0YXNrLnByaW9yaXR5KSA/PyBcImdyZWVuXCI7XG4gIGNvbnN0IHByaW9yaXR5ID0gdGFza1RvUmVuZGVyLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcmlvcml0eS1jb2xvcl1cIik7XG4gIHByaW9yaXR5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICB0YXNrVG9SZW5kZXIuZGF0YXNldC5wcm9qZWN0ID0gdGFzay5wcm9qZWN0O1xuXG4gIGNvbnN0IHRpdGxlID0gdGFza1RvUmVuZGVyLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10aXRsZV1cIik7XG4gIHRpdGxlLmlubmVyVGV4dCA9IHRhc2submFtZTtcblxuICBjb25zdCBkZXRhaWxzID0gdGFza1RvUmVuZGVyLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1kZXRhaWxzXVwiKTtcbiAgZGV0YWlscy5pbm5lclRleHQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuXG4gIGNvbnN0IGRhdGUgPSB0YXNrVG9SZW5kZXIucXVlcnlTZWxlY3RvcihcIltkYXRhLWR1ZS1kYXRlXVwiKTtcbiAgZGF0ZS5pbm5lclRleHQgPSB0YXNrLmR1ZURhdGU7XG59XG5cbmZ1bmN0aW9uIGdldFRhc2tOb2RlVmFsdWVzKHRhc2spIHtcbiAgbGV0IGNvbG9yID0gdGFzay5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcHJpb3JpdHktY29sb3JdXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvcjtcbiAgbGV0IHRhc2tKU09OID0ge1xuICAgIGlkOiB0YXNrLmRhdGFzZXQudGFza0lkLFxuICAgIHByb2plY3Q6IHRhc2suZGF0YXNldC5wcm9qZWN0LFxuICAgIHByaW9yaXR5OiBDT0xPUl9QUklPUklUWV9NQVAuZ2V0KGNvbG9yKSxcbiAgICB0aXRsZTogdGFzay5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGl0bGVdXCIpLmlubmVyVGV4dCxcbiAgICBkZXRhaWxzOiB0YXNrLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1kZXRhaWxzXVwiKS5pbm5lclRleHQsXG4gICAgZHVlRGF0ZTogdGFzay5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZHVlLWRhdGVdXCIpLmlubmVyVGV4dCxcbiAgfTtcbiAgcmV0dXJuIHRhc2tKU09OO1xufVxuIiwiZXhwb3J0IGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm0tY29udGFpbmVyXCIpO1xuZXhwb3J0IGNvbnN0IG5ld1Rhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLWJ1dHRvblwiKTtcbmV4cG9ydCBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1mb3JtXCIpO1xuZXhwb3J0IGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI292ZXJsYXlcIik7XG5leHBvcnQgY29uc3QgdG9kb0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tbGlzdC1jb250YWluZXJcIik7XG5leHBvcnQgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtLWJ0bi1jYW5jZWxcIik7XG5leHBvcnQgY29uc3QgY3JlYXRlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3JlYXRlLXByb2plY3QtZGl2XCIpO1xuZXhwb3J0IGNvbnN0IG5ld1Byb2plY3RQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXByb2plY3QtcG9wdXBcIik7XG5leHBvcnQgY29uc3QgbmV3UHJvamVjdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIiNwcm9qZWN0LWJ1dHRvbnMtd3JhcHBlclwiXG4pO1xuZXhwb3J0IGNvbnN0IG5ld1Byb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1uYW1lLWlucHV0XCIpO1xuZXhwb3J0IGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzLWNvbnRhaW5lclwiKTtcbmV4cG9ydCBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1uYW1lXCIpO1xuZXhwb3J0IGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpZGViYXJcIik7XG5leHBvcnQgY29uc3QgbmFtZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stbmFtZVwiKTtcbmV4cG9ydCBjb25zdCBkZXNjcmlwdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGVzY3JpcHRpb25cIik7XG5leHBvcnQgY29uc3QgZGF0ZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZHVlLWRhdGVcIik7XG5leHBvcnQgY29uc3QgcHJpb3JpdHlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXByaW9yaXR5XCIpO1xuZXhwb3J0IGNvbnN0IHByb2plY3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXByb2plY3RcIik7XG5leHBvcnQgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stdGVtcGxhdGVcIik7XG5leHBvcnQgY29uc3QgcHJvamVjdFRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRlbXBsYXRlXCIpO1xuZXhwb3J0IGNvbnN0IHRhc2tTYXZlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtLWJ0bi1zYXZlXCIpO1xuZXhwb3J0IGNvbnN0IGxlZnRNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsZWZ0LW1lbnVcIik7XG4iLCJleHBvcnQgY29uc3QgUFJJT1JJVFlfQ09MT1JfTUFQID0gbmV3IE1hcChbXG4gIFtcImhpZ2hcIiwgXCJyZWRcIl0sXG4gIFtcIm1lZGl1bVwiLCBcInllbGxvd1wiXSxcbiAgW1wibG93XCIsIFwiZ3JlZW5cIl0sXG5dKTtcblxuZXhwb3J0IGNvbnN0IENPTE9SX1BSSU9SSVRZX01BUCA9IG5ldyBNYXAoW1xuICBbXCJyZWRcIiwgXCJoaWdoXCJdLFxuICBbXCJ5ZWxsb3dcIiwgXCJtZWRpdW1cIl0sXG4gIFtcImdyZWVuXCIsIFwibG93XCJdLFxuXSk7XG4iLCJleHBvcnQgZnVuY3Rpb24qIGlkR2VuZXJhdG9yKCkge1xuICBsZXQgY291bnQgPSAxO1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIHlpZWxkIGNvdW50Kys7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yobykge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiB0eXBlb2YgbztcbiAgfSA6IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87XG4gIH0sIF90eXBlb2Yobyk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSBcIi4vc2NyaXB0cy9kYXRhL0RPTXNlbGVjdG9ycy5qc1wiO1xuaW1wb3J0IFVJIGZyb20gXCIuL3NjcmlwdHMvVUkuanNcIjtcblxuLy8gYWRkIGEgd2F5IHRvIHJldHJpZXZlIGFuZCBkaXNwbGF5IGRhdGEgZnJvbSBsb2NhbFN0b3JhZ2Ugd2hlbiB0aGUgYXBwIGlzIGZpcnN0IGxvYWRlZFxuc2VsZWN0b3JzLm5hbWVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBVSS5oYW5kbGVUYXNrVGl0bGVJbnB1dCk7XG5zZWxlY3RvcnMubmV3VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgVUkub3Blbk5ld1Rhc2tGb3JtKTtcbnNlbGVjdG9ycy50YXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIFVJLnVwZGF0ZVRvRG9MaXN0KTtcbnNlbGVjdG9ycy5jYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFVJLmNsb3NlVGFza0Zvcm0pO1xuc2VsZWN0b3JzLnRvZG9MaXN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBVSS51cGRhdGVUYXNrKTtcbnNlbGVjdG9ycy5jcmVhdGVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBVSS5vcGVuTmV3UHJvamVjdFBvcFVwKTtcbnNlbGVjdG9ycy5uZXdQcm9qZWN0QnV0dG9ucy5hZGRFdmVudExpc3RlbmVyKFxuICBcImNsaWNrXCIsXG4gIFVJLmhhbmRsZU5ld1Byb2plY3RQb3BVcEFjdGlvbnNcbik7XG5zZWxlY3RvcnMubGVmdE1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFVJLmRpc3BsYXlMZWZ0TWVudUNvbnRlbnQpO1xuc2VsZWN0b3JzLnByb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcbiAgXCJjbGlja1wiLFxuICBVSS5oYW5kbGVQcm9qZWN0Q29udGVudEFjdGlvbnNcbik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=