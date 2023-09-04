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
/* harmony import */ var _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/DOMSelectors.js */ "./src/scripts/data/DOMSelectors.js");






class UI {
  static handleTaskTitleInput() {
    const taskTitle = _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_4__.nameElement.value;
    if (taskTitle) {
      _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_4__.taskSaveButton.disabled = false;
    } else {
      _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_4__.taskSaveButton.disabled = true;
    }
  }

  static openNewTaskForm() {
    _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_4__.formContainer.classList.toggle("active");
    _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_4__.overlay.classList.toggle("active");
    _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_4__.taskSaveButton.disabled = true;
    const titles = (0,_app_projects_js__WEBPACK_IMPORTED_MODULE_3__.getProjectTitles)();
    (0,_app_taskForm_js__WEBPACK_IMPORTED_MODULE_0__.updateProjectMenu)(titles);
    (0,_app_taskForm_js__WEBPACK_IMPORTED_MODULE_0__.resetForm)();
  }

  static updateToDoList(event) {
    event.preventDefault();
    _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_4__.formContainer.classList.toggle("active");
    _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_4__.overlay.classList.toggle("active");
    const existingTaskId = event.target.dataset.taskId;
    const task = (0,_app_taskForm_js__WEBPACK_IMPORTED_MODULE_0__.createTask)(existingTaskId);
    const taskNode = (0,_app_todoList_js__WEBPACK_IMPORTED_MODULE_1__.createTaskNode)(task);

    if (!existingTaskId) {
      _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_4__.todoListContainer.appendChild(taskNode);
    }
    (0,_app_todoList_js__WEBPACK_IMPORTED_MODULE_1__.loadCurrentProjectTasks)(_data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_4__.currentProject.innerText);
    const titles = (0,_app_projects_js__WEBPACK_IMPORTED_MODULE_3__.getProjectTitles)();
    (0,_app_taskForm_js__WEBPACK_IMPORTED_MODULE_0__.updateProjectMenu)(titles);
    (0,_app_taskForm_js__WEBPACK_IMPORTED_MODULE_0__.resetForm)();
  }

  static closeTaskForm() {
    _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_4__.formContainer.classList.toggle("active");
    _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_4__.overlay.classList.toggle("active");
    (0,_app_taskForm_js__WEBPACK_IMPORTED_MODULE_0__.resetForm)();
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
      _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_4__.todoListContainer.removeChild(taskToDelete);
      return;
    }

    if (element.closest("button").matches("[data-task-edit]")) {
      const id = element.closest("div[data-task-id]").dataset.taskId;
      (0,_app_taskForm_js__WEBPACK_IMPORTED_MODULE_0__.autofill)(id);
      _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_4__.formContainer.classList.toggle("active");
      _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_4__.overlay.classList.toggle("active");
    }
  }

  static openNewProjectPopUp() {
    _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_4__.createProject.classList.toggle("inactive");
    _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_4__.newProjectPopup.classList.toggle("active");
    _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_4__.overlay.classList.toggle("active");
  }

  static handleNewProjectPopUpActions(event) {
    if (event.target.matches("#project-save")) {
      const newProjectTitle = _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_4__.newProjectInput.value.trim();
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
      _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_4__.projectContainer.appendChild(project);
    }

    _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_4__.newProjectInput.value = "";
    _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_4__.createProject.classList.toggle("inactive");
    _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_4__.newProjectPopup.classList.toggle("active");
    _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_4__.overlay.classList.toggle("active");
  }

  static displayLeftMenuContent(event) {
    const element = event.target;
    if (element.matches("li#inbox")) {
      _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_4__.currentProject.innerText = element.innerText;
      (0,_app_todoList_js__WEBPACK_IMPORTED_MODULE_1__.loadCurrentProjectTasks)(_data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_4__.currentProject.innerText);
      return;
    }

    if (element.matches("li#today")) {
      _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_4__.currentProject.innerText = element.innerText;
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

      _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_4__.currentProject.innerText = "Inbox";
      (0,_app_todoList_js__WEBPACK_IMPORTED_MODULE_1__.loadCurrentProjectTasks)(_data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_4__.currentProject.innerText);
      return;
    }

    if (element.matches(".project-card")) {
      _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_4__.currentProject.innerText = element.querySelector(
        "div[data-project-title]"
      ).innerText;
    }

    if (element.matches("[data-project-title]")) {
      _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_4__.currentProject.innerText = element.innerText;
    }

    (0,_app_todoList_js__WEBPACK_IMPORTED_MODULE_1__.loadCurrentProjectTasks)(_data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_4__.currentProject.innerText);
  }
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
/* harmony import */ var _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/DOMSelectors.js */ "./src/scripts/data/DOMSelectors.js");
/* harmony import */ var _utility_utility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/utility.js */ "./src/scripts/utility/utility.js");


const generator = (0,_utility_utility_js__WEBPACK_IMPORTED_MODULE_1__.idGenerator)();

function createProjectNode(title) {
  const project = projectFactory(title);
  const projectElement = _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_0__.projectTemplate.content.cloneNode(true);
  const id = projectElement.querySelector("[data-project-id]");
  id.dataset.projectId = project.id;
  const projectTitle = projectElement.querySelector("[data-project-title]");
  projectTitle.innerText = project.title;
  return projectElement;
}

function getProjectTitles() {
  const projects = [
    ..._data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_0__.projectContainer.querySelectorAll("div[data-project-title]"),
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
/* harmony import */ var _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/DOMSelectors.js */ "./src/scripts/data/DOMSelectors.js");
/* harmony import */ var _data_priority_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/priority.js */ "./src/scripts/data/priority.js");
/* harmony import */ var _utility_utility_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility/utility.js */ "./src/scripts/utility/utility.js");





const generator = (0,_utility_utility_js__WEBPACK_IMPORTED_MODULE_4__.idGenerator)();

function createTask(id) {
  const name = _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_2__.nameElement.value.trim();
  const description = _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_2__.descriptionElement.value.trim();
  const date = _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_2__.dateElement.value.trim();
  const priority = _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_2__.priorityElement.value.trim() || "low";
  const project = _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_2__.projectElement.value.trim();
  const taskId = id ?? generator.next().value.toString();
  const newTask = new _task_js__WEBPACK_IMPORTED_MODULE_0__["default"](taskId, name, description, date, priority, project);
  return newTask;
}

function resetForm() {
  if (_data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_2__.taskForm.dataset.taskId) {
    delete _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_2__.taskForm.dataset.taskId;
  }
  _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_2__.nameElement.value = "";
  _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_2__.descriptionElement.value = "";
  _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_2__.dateElement.value = "";
  _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_2__.priorityElement.value = "";
  _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_2__.projectElement.value = "";
  _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_2__.taskSaveButton.disabled = true;
}

function autofill(taskId) {
  const task = _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_2__.todoListContainer.querySelector(
    `[data-task-id='${taskId}']`
  );
  _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_2__.taskForm.dataset.taskId = taskId;
  _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_2__.nameElement.value = task
    .querySelector("[data-title]")
    .innerText.trim();
  _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_2__.descriptionElement.value = task
    .querySelector("[data-details]")
    .innerText.trim();

  _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_2__.dateElement.value = task
    .querySelector("[data-due-date]")
    .innerText.trim();
  const priorityColor = task.querySelector("[data-priority-color]").style
    .backgroundColor;
  _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_2__.priorityElement.value = _data_priority_js__WEBPACK_IMPORTED_MODULE_3__.COLOR_PRIORITY_MAP.get(priorityColor);
  console.log(_data_priority_js__WEBPACK_IMPORTED_MODULE_3__.COLOR_PRIORITY_MAP.get(priorityColor));
  _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_2__.projectElement.value = task.dataset.project;
  const titles = (0,_projects_js__WEBPACK_IMPORTED_MODULE_1__.getProjectTitles)();
  updateProjectMenu(titles);
  _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_2__.taskSaveButton.disabled = false;
}

function updateProjectMenu(titles) {
  const options = [..._data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_2__.projectElement.querySelectorAll("option")].map(
    (element) => element.value.toLowerCase()
  );

  const uniqueTitles = titles.filter((title) => {
    return !options.includes(title.toLowerCase());
  });

  uniqueTitles.forEach((title) => {
    let option = document.createElement("option");
    option.text = title;
    option.value = title;
    _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_2__.projectElement.add(option);
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
/* harmony import */ var _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/DOMSelectors.js */ "./src/scripts/data/DOMSelectors.js");



function displayTodayTasks() {
  const tasks = [..._data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_0__.todoListContainer.querySelectorAll(".task-card")];

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
/* harmony export */   loadCurrentProjectTasks: () => (/* binding */ loadCurrentProjectTasks)
/* harmony export */ });
/* harmony import */ var _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/DOMSelectors.js */ "./src/scripts/data/DOMSelectors.js");
/* harmony import */ var _data_priority_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/priority.js */ "./src/scripts/data/priority.js");



function createTaskNode(task) {
  const elementExists = _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_0__.todoListContainer.querySelector(
    `[data-task-id='${task.id}']`
  );
  let taskToRender;
  if (elementExists) {
    taskToRender = elementExists;
  } else {
    taskToRender = _data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_0__.template.content.cloneNode(true);
    const taskEl = taskToRender.querySelector("[data-task-id]");

    taskEl.dataset.taskId = task.id;
    taskToRender = taskEl;
  }

  setTaskNodeValues(taskToRender, task);
  return taskToRender;
}

function loadCurrentProjectTasks(currentProjectTitle) {
  const tasks = [..._data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_0__.todoListContainer.querySelectorAll(".task-card")];

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

function getProjectTasks(projectTitle) {
  const tasks = [..._data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_0__.todoListContainer.querySelectorAll(".task-card")];
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


/***/ }),

/***/ "./src/scripts/data/DOMSelectors.js":
/*!******************************************!*\
  !*** ./src/scripts/data/DOMSelectors.js ***!
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
/* harmony import */ var _scripts_data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/data/DOMSelectors.js */ "./src/scripts/data/DOMSelectors.js");
/* harmony import */ var _scripts_UI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/UI.js */ "./src/scripts/UI.js");



_scripts_data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_0__.nameElement.addEventListener("keyup", _scripts_UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].handleTaskTitleInput);
_scripts_data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_0__.newTaskButton.addEventListener("click", _scripts_UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].openNewTaskForm);
_scripts_data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_0__.taskForm.addEventListener("submit", _scripts_UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateToDoList);
_scripts_data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_0__.cancelButton.addEventListener("click", _scripts_UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].closeTaskForm);
_scripts_data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_0__.todoListContainer.addEventListener("click", _scripts_UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateTask);
_scripts_data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_0__.createProject.addEventListener("click", _scripts_UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].openNewProjectPopUp);
_scripts_data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_0__.newProjectButtons.addEventListener(
  "click",
  _scripts_UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].handleNewProjectPopUpActions
);
_scripts_data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_0__.leftMenu.addEventListener("click", _scripts_UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].displayLeftMenuContent);
_scripts_data_DOMSelectors_js__WEBPACK_IMPORTED_MODULE_0__.projectContainer.addEventListener(
  "click",
  _scripts_UI_js__WEBPACK_IMPORTED_MODULE_1__["default"].handleProjectContentActions
);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNWTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0xlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUc7QUFDSDs7Ozs7O1VDUkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNONEQ7QUFDM0I7O0FBRWpDLHNFQUFxQiwyQkFBMkIsc0RBQUU7QUFDbEQsd0VBQXVCLDJCQUEyQixzREFBRTtBQUNwRCxtRUFBa0IsNEJBQTRCLHNEQUFFO0FBQ2hELHVFQUFzQiwyQkFBMkIsc0RBQUU7QUFDbkQsNEVBQTJCLDJCQUEyQixzREFBRTtBQUN4RCx3RUFBdUIsMkJBQTJCLHNEQUFFO0FBQ3BELDRFQUEyQjtBQUMzQjtBQUNBLEVBQUUsc0RBQUU7QUFDSjtBQUNBLG1FQUFrQiwyQkFBMkIsc0RBQUU7QUFDL0MsMkVBQTBCO0FBQzFCO0FBQ0EsRUFBRSxzREFBRTtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL1VJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2FwcC9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9hcHAvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9hcHAvdGFza0Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvYXBwL3RvZGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2FwcC90b2RvTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9kYXRhL0RPTVNlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9kYXRhL3ByaW9yaXR5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL3V0aWxpdHkvdXRpbGl0eS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJpbXBvcnQge1xuICBjcmVhdGVUYXNrLFxuICByZXNldEZvcm0sXG4gIGF1dG9maWxsLFxuICB1cGRhdGVQcm9qZWN0TWVudSxcbn0gZnJvbSBcIi4vYXBwL3Rhc2tGb3JtLmpzXCI7XG5pbXBvcnQge1xuICBjcmVhdGVUYXNrTm9kZSxcbiAgbG9hZEN1cnJlbnRQcm9qZWN0VGFza3MsXG4gIGRlbGV0ZVByb2plY3RUYXNrcyxcbn0gZnJvbSBcIi4vYXBwL3RvZG9MaXN0LmpzXCI7XG5pbXBvcnQgeyBkaXNwbGF5VG9kYXlUYXNrcyB9IGZyb20gXCIuL2FwcC90b2RheS5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdE5vZGUsIGdldFByb2plY3RUaXRsZXMgfSBmcm9tIFwiLi9hcHAvcHJvamVjdHMuanNcIjtcbmltcG9ydCAqIGFzIHNlbGVjdG9ycyBmcm9tIFwiLi9kYXRhL0RPTVNlbGVjdG9ycy5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSSB7XG4gIHN0YXRpYyBoYW5kbGVUYXNrVGl0bGVJbnB1dCgpIHtcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBzZWxlY3RvcnMubmFtZUVsZW1lbnQudmFsdWU7XG4gICAgaWYgKHRhc2tUaXRsZSkge1xuICAgICAgc2VsZWN0b3JzLnRhc2tTYXZlQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGVjdG9ycy50YXNrU2F2ZUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG9wZW5OZXdUYXNrRm9ybSgpIHtcbiAgICBzZWxlY3RvcnMuZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIHNlbGVjdG9ycy5vdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgc2VsZWN0b3JzLnRhc2tTYXZlQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBjb25zdCB0aXRsZXMgPSBnZXRQcm9qZWN0VGl0bGVzKCk7XG4gICAgdXBkYXRlUHJvamVjdE1lbnUodGl0bGVzKTtcbiAgICByZXNldEZvcm0oKTtcbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVUb0RvTGlzdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2VsZWN0b3JzLmZvcm1Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICBzZWxlY3RvcnMub3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIGNvbnN0IGV4aXN0aW5nVGFza0lkID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudGFza0lkO1xuICAgIGNvbnN0IHRhc2sgPSBjcmVhdGVUYXNrKGV4aXN0aW5nVGFza0lkKTtcbiAgICBjb25zdCB0YXNrTm9kZSA9IGNyZWF0ZVRhc2tOb2RlKHRhc2spO1xuXG4gICAgaWYgKCFleGlzdGluZ1Rhc2tJZCkge1xuICAgICAgc2VsZWN0b3JzLnRvZG9MaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tOb2RlKTtcbiAgICB9XG4gICAgbG9hZEN1cnJlbnRQcm9qZWN0VGFza3Moc2VsZWN0b3JzLmN1cnJlbnRQcm9qZWN0LmlubmVyVGV4dCk7XG4gICAgY29uc3QgdGl0bGVzID0gZ2V0UHJvamVjdFRpdGxlcygpO1xuICAgIHVwZGF0ZVByb2plY3RNZW51KHRpdGxlcyk7XG4gICAgcmVzZXRGb3JtKCk7XG4gIH1cblxuICBzdGF0aWMgY2xvc2VUYXNrRm9ybSgpIHtcbiAgICBzZWxlY3RvcnMuZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIHNlbGVjdG9ycy5vdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgcmVzZXRGb3JtKCk7XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlVGFzayhldmVudCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKGVsZW1lbnQubWF0Y2hlcyhcIiN0b2RvLWxpc3QtY29udGFpbmVyXCIpKSByZXR1cm47XG5cbiAgICBpZiAoZWxlbWVudC5tYXRjaGVzKFwiI3Rhc2stY2hlY2tib3hcIikpIHtcbiAgICAgIGNvbnN0IHRhc2sgPSBlbGVtZW50LmNsb3Nlc3QoXCJkaXZbZGF0YS10YXNrLWlkXVwiKTtcbiAgICAgIGNvbnN0IHRpdGxlID0gZWxlbWVudFxuICAgICAgICAuY2xvc2VzdChcImRpdltkYXRhLXRhc2staWRdXCIpXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGl0bGVdXCIpO1xuXG4gICAgICBpZiAodGl0bGUuc3R5bGUudGV4dERlY29yYXRpb24gPT09IFwibGluZS10aHJvdWdoXCIpIHtcbiAgICAgICAgdGl0bGUuc3R5bGUudGV4dERlY29yYXRpb24gPSBcIlwiO1xuICAgICAgICB0YXNrLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aXRsZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibGluZS10aHJvdWdoXCI7XG4gICAgICB0YXNrLnN0eWxlLm9wYWNpdHkgPSAwLjU7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQuY2xvc2VzdChcImJ1dHRvblwiKS5tYXRjaGVzKFwiW2RhdGEtdGFzay1kZWxldGVdXCIpKSB7XG4gICAgICBjb25zdCB0YXNrVG9EZWxldGUgPSBlbGVtZW50LmNsb3Nlc3QoXCIudGFzay1jYXJkXCIpO1xuICAgICAgc2VsZWN0b3JzLnRvZG9MaXN0Q29udGFpbmVyLnJlbW92ZUNoaWxkKHRhc2tUb0RlbGV0ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQuY2xvc2VzdChcImJ1dHRvblwiKS5tYXRjaGVzKFwiW2RhdGEtdGFzay1lZGl0XVwiKSkge1xuICAgICAgY29uc3QgaWQgPSBlbGVtZW50LmNsb3Nlc3QoXCJkaXZbZGF0YS10YXNrLWlkXVwiKS5kYXRhc2V0LnRhc2tJZDtcbiAgICAgIGF1dG9maWxsKGlkKTtcbiAgICAgIHNlbGVjdG9ycy5mb3JtQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICBzZWxlY3RvcnMub3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBvcGVuTmV3UHJvamVjdFBvcFVwKCkge1xuICAgIHNlbGVjdG9ycy5jcmVhdGVQcm9qZWN0LmNsYXNzTGlzdC50b2dnbGUoXCJpbmFjdGl2ZVwiKTtcbiAgICBzZWxlY3RvcnMubmV3UHJvamVjdFBvcHVwLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgc2VsZWN0b3JzLm92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgfVxuXG4gIHN0YXRpYyBoYW5kbGVOZXdQcm9qZWN0UG9wVXBBY3Rpb25zKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5tYXRjaGVzKFwiI3Byb2plY3Qtc2F2ZVwiKSkge1xuICAgICAgY29uc3QgbmV3UHJvamVjdFRpdGxlID0gc2VsZWN0b3JzLm5ld1Byb2plY3RJbnB1dC52YWx1ZS50cmltKCk7XG4gICAgICBpZiAoIW5ld1Byb2plY3RUaXRsZSkgcmV0dXJuO1xuICAgICAgY29uc3QgcmVzZXJ2ZWROYW1lcyA9IGdldFByb2plY3RUaXRsZXMoKS5tYXAoKHRpdGxlKSA9PlxuICAgICAgICB0aXRsZS50b0xvd2VyQ2FzZSgpXG4gICAgICApO1xuXG4gICAgICByZXNlcnZlZE5hbWVzLnB1c2goXCJpbmJveFwiLCBcInRvZGF5XCIpO1xuICAgICAgaWYgKHJlc2VydmVkTmFtZXMuaW5jbHVkZXMobmV3UHJvamVjdFRpdGxlLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgIGFsZXJ0KFwiUHJvamVjdCBhbHJlYWR5IGV4aXN0cyB3aXRoIHRoaXMgbmFtZSFcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHByb2plY3QgPSBjcmVhdGVQcm9qZWN0Tm9kZShuZXdQcm9qZWN0VGl0bGUpO1xuICAgICAgc2VsZWN0b3JzLnByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gICAgfVxuXG4gICAgc2VsZWN0b3JzLm5ld1Byb2plY3RJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgc2VsZWN0b3JzLmNyZWF0ZVByb2plY3QuY2xhc3NMaXN0LnRvZ2dsZShcImluYWN0aXZlXCIpO1xuICAgIHNlbGVjdG9ycy5uZXdQcm9qZWN0UG9wdXAuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICBzZWxlY3RvcnMub3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICB9XG5cbiAgc3RhdGljIGRpc3BsYXlMZWZ0TWVudUNvbnRlbnQoZXZlbnQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmIChlbGVtZW50Lm1hdGNoZXMoXCJsaSNpbmJveFwiKSkge1xuICAgICAgc2VsZWN0b3JzLmN1cnJlbnRQcm9qZWN0LmlubmVyVGV4dCA9IGVsZW1lbnQuaW5uZXJUZXh0O1xuICAgICAgbG9hZEN1cnJlbnRQcm9qZWN0VGFza3Moc2VsZWN0b3JzLmN1cnJlbnRQcm9qZWN0LmlubmVyVGV4dCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQubWF0Y2hlcyhcImxpI3RvZGF5XCIpKSB7XG4gICAgICBzZWxlY3RvcnMuY3VycmVudFByb2plY3QuaW5uZXJUZXh0ID0gZWxlbWVudC5pbm5lclRleHQ7XG4gICAgICBkaXNwbGF5VG9kYXlUYXNrcygpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBoYW5kbGVQcm9qZWN0Q29udGVudEFjdGlvbnMoZXZlbnQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgaWYgKGVsZW1lbnQubWF0Y2hlcyhcIiNwcm9qZWN0cy1jb250YWluZXJcIikpIHJldHVybjtcblxuICAgIGlmIChlbGVtZW50Lm1hdGNoZXMoXCJbZGF0YS1wcm9qZWN0LWRlbGV0ZV1cIikpIHtcbiAgICAgIGNvbnN0IHByb2plY3RDb250ZW50ID0gZWxlbWVudC5jbG9zZXN0KFwiZGl2W2RhdGEtcHJvamVjdC1pZF1cIik7XG4gICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBwcm9qZWN0Q29udGVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIltkYXRhLXByb2plY3QtdGl0bGVdXCJcbiAgICAgICkuaW5uZXJUZXh0O1xuXG4gICAgICBwcm9qZWN0Q29udGVudC5yZW1vdmUoKTtcbiAgICAgIGRlbGV0ZVByb2plY3RUYXNrcyhwcm9qZWN0VGl0bGUpO1xuXG4gICAgICBzZWxlY3RvcnMuY3VycmVudFByb2plY3QuaW5uZXJUZXh0ID0gXCJJbmJveFwiO1xuICAgICAgbG9hZEN1cnJlbnRQcm9qZWN0VGFza3Moc2VsZWN0b3JzLmN1cnJlbnRQcm9qZWN0LmlubmVyVGV4dCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQubWF0Y2hlcyhcIi5wcm9qZWN0LWNhcmRcIikpIHtcbiAgICAgIHNlbGVjdG9ycy5jdXJyZW50UHJvamVjdC5pbm5lclRleHQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiZGl2W2RhdGEtcHJvamVjdC10aXRsZV1cIlxuICAgICAgKS5pbm5lclRleHQ7XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQubWF0Y2hlcyhcIltkYXRhLXByb2plY3QtdGl0bGVdXCIpKSB7XG4gICAgICBzZWxlY3RvcnMuY3VycmVudFByb2plY3QuaW5uZXJUZXh0ID0gZWxlbWVudC5pbm5lclRleHQ7XG4gICAgfVxuXG4gICAgbG9hZEN1cnJlbnRQcm9qZWN0VGFza3Moc2VsZWN0b3JzLmN1cnJlbnRQcm9qZWN0LmlubmVyVGV4dCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IHByb2plY3RUZW1wbGF0ZSwgcHJvamVjdENvbnRhaW5lciB9IGZyb20gXCIuLi9kYXRhL0RPTVNlbGVjdG9ycy5qc1wiO1xuaW1wb3J0IHsgaWRHZW5lcmF0b3IgfSBmcm9tIFwiLi4vdXRpbGl0eS91dGlsaXR5LmpzXCI7XG5jb25zdCBnZW5lcmF0b3IgPSBpZEdlbmVyYXRvcigpO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdE5vZGUodGl0bGUpIHtcbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RGYWN0b3J5KHRpdGxlKTtcbiAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBwcm9qZWN0VGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gIGNvbnN0IGlkID0gcHJvamVjdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXByb2plY3QtaWRdXCIpO1xuICBpZC5kYXRhc2V0LnByb2plY3RJZCA9IHByb2plY3QuaWQ7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IHByb2plY3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcm9qZWN0LXRpdGxlXVwiKTtcbiAgcHJvamVjdFRpdGxlLmlubmVyVGV4dCA9IHByb2plY3QudGl0bGU7XG4gIHJldHVybiBwcm9qZWN0RWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2plY3RUaXRsZXMoKSB7XG4gIGNvbnN0IHByb2plY3RzID0gW1xuICAgIC4uLnByb2plY3RDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcImRpdltkYXRhLXByb2plY3QtdGl0bGVdXCIpLFxuICBdO1xuICByZXR1cm4gcHJvamVjdHMubWFwKChlbGVtZW50KSA9PiBlbGVtZW50LmlubmVyVGV4dCk7XG59XG5cbmNvbnN0IHByb2plY3RGYWN0b3J5ID0gKHRpdGxlKSA9PiB7XG4gIHJldHVybiB7IGlkOiBnZW5lcmF0b3IubmV4dCgpLnZhbHVlLnRvU3RyaW5nKCksIHRpdGxlIH07XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKGlkLCBuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICB0aGlzLl9pZCA9IGlkO1xuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5fZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5fcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLl9wcm9qZWN0ID0gcHJvamVjdCB8fCBcImluYm94XCI7XG4gIH1cblxuICBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgc2V0IG5hbWUobmFtZSkge1xuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICBzZXQgZGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG5cbiAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIHNldCBkdWVEYXRlKGRhdGUpIHtcbiAgICB0aGlzLl9kdWVEYXRlID0gZGF0ZTtcbiAgfVxuXG4gIGdldCBkdWVEYXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9kdWVEYXRlO1xuICB9XG5cbiAgc2V0IHByaW9yaXR5KHByaW9yaXR5KSB7XG4gICAgdGhpcy5fcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxuXG4gIGdldCBwcmlvcml0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJpb3JpdHk7XG4gIH1cblxuICBzZXQgcHJvamVjdChwcm9qZWN0KSB7XG4gICAgdGhpcy5fcHJvamVjdCA9IHByb2plY3Q7XG4gIH1cblxuICBnZXQgcHJvamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvamVjdDtcbiAgfVxufVxuIiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFzay5qc1wiO1xuaW1wb3J0IHsgZ2V0UHJvamVjdFRpdGxlcyB9IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5pbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSBcIi4uL2RhdGEvRE9NU2VsZWN0b3JzLmpzXCI7XG5pbXBvcnQgeyBDT0xPUl9QUklPUklUWV9NQVAgfSBmcm9tIFwiLi4vZGF0YS9wcmlvcml0eS5qc1wiO1xuaW1wb3J0IHsgaWRHZW5lcmF0b3IgfSBmcm9tIFwiLi4vdXRpbGl0eS91dGlsaXR5LmpzXCI7XG5jb25zdCBnZW5lcmF0b3IgPSBpZEdlbmVyYXRvcigpO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFzayhpZCkge1xuICBjb25zdCBuYW1lID0gc2VsZWN0b3JzLm5hbWVFbGVtZW50LnZhbHVlLnRyaW0oKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBzZWxlY3RvcnMuZGVzY3JpcHRpb25FbGVtZW50LnZhbHVlLnRyaW0oKTtcbiAgY29uc3QgZGF0ZSA9IHNlbGVjdG9ycy5kYXRlRWxlbWVudC52YWx1ZS50cmltKCk7XG4gIGNvbnN0IHByaW9yaXR5ID0gc2VsZWN0b3JzLnByaW9yaXR5RWxlbWVudC52YWx1ZS50cmltKCkgfHwgXCJsb3dcIjtcbiAgY29uc3QgcHJvamVjdCA9IHNlbGVjdG9ycy5wcm9qZWN0RWxlbWVudC52YWx1ZS50cmltKCk7XG4gIGNvbnN0IHRhc2tJZCA9IGlkID8/IGdlbmVyYXRvci5uZXh0KCkudmFsdWUudG9TdHJpbmcoKTtcbiAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKHRhc2tJZCwgbmFtZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBwcm9qZWN0KTtcbiAgcmV0dXJuIG5ld1Rhc2s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldEZvcm0oKSB7XG4gIGlmIChzZWxlY3RvcnMudGFza0Zvcm0uZGF0YXNldC50YXNrSWQpIHtcbiAgICBkZWxldGUgc2VsZWN0b3JzLnRhc2tGb3JtLmRhdGFzZXQudGFza0lkO1xuICB9XG4gIHNlbGVjdG9ycy5uYW1lRWxlbWVudC52YWx1ZSA9IFwiXCI7XG4gIHNlbGVjdG9ycy5kZXNjcmlwdGlvbkVsZW1lbnQudmFsdWUgPSBcIlwiO1xuICBzZWxlY3RvcnMuZGF0ZUVsZW1lbnQudmFsdWUgPSBcIlwiO1xuICBzZWxlY3RvcnMucHJpb3JpdHlFbGVtZW50LnZhbHVlID0gXCJcIjtcbiAgc2VsZWN0b3JzLnByb2plY3RFbGVtZW50LnZhbHVlID0gXCJcIjtcbiAgc2VsZWN0b3JzLnRhc2tTYXZlQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9maWxsKHRhc2tJZCkge1xuICBjb25zdCB0YXNrID0gc2VsZWN0b3JzLnRvZG9MaXN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgYFtkYXRhLXRhc2staWQ9JyR7dGFza0lkfSddYFxuICApO1xuICBzZWxlY3RvcnMudGFza0Zvcm0uZGF0YXNldC50YXNrSWQgPSB0YXNrSWQ7XG4gIHNlbGVjdG9ycy5uYW1lRWxlbWVudC52YWx1ZSA9IHRhc2tcbiAgICAucXVlcnlTZWxlY3RvcihcIltkYXRhLXRpdGxlXVwiKVxuICAgIC5pbm5lclRleHQudHJpbSgpO1xuICBzZWxlY3RvcnMuZGVzY3JpcHRpb25FbGVtZW50LnZhbHVlID0gdGFza1xuICAgIC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZGV0YWlsc11cIilcbiAgICAuaW5uZXJUZXh0LnRyaW0oKTtcblxuICBzZWxlY3RvcnMuZGF0ZUVsZW1lbnQudmFsdWUgPSB0YXNrXG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1kdWUtZGF0ZV1cIilcbiAgICAuaW5uZXJUZXh0LnRyaW0oKTtcbiAgY29uc3QgcHJpb3JpdHlDb2xvciA9IHRhc2sucXVlcnlTZWxlY3RvcihcIltkYXRhLXByaW9yaXR5LWNvbG9yXVwiKS5zdHlsZVxuICAgIC5iYWNrZ3JvdW5kQ29sb3I7XG4gIHNlbGVjdG9ycy5wcmlvcml0eUVsZW1lbnQudmFsdWUgPSBDT0xPUl9QUklPUklUWV9NQVAuZ2V0KHByaW9yaXR5Q29sb3IpO1xuICBjb25zb2xlLmxvZyhDT0xPUl9QUklPUklUWV9NQVAuZ2V0KHByaW9yaXR5Q29sb3IpKTtcbiAgc2VsZWN0b3JzLnByb2plY3RFbGVtZW50LnZhbHVlID0gdGFzay5kYXRhc2V0LnByb2plY3Q7XG4gIGNvbnN0IHRpdGxlcyA9IGdldFByb2plY3RUaXRsZXMoKTtcbiAgdXBkYXRlUHJvamVjdE1lbnUodGl0bGVzKTtcbiAgc2VsZWN0b3JzLnRhc2tTYXZlQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVQcm9qZWN0TWVudSh0aXRsZXMpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IFsuLi5zZWxlY3RvcnMucHJvamVjdEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIm9wdGlvblwiKV0ubWFwKFxuICAgIChlbGVtZW50KSA9PiBlbGVtZW50LnZhbHVlLnRvTG93ZXJDYXNlKClcbiAgKTtcblxuICBjb25zdCB1bmlxdWVUaXRsZXMgPSB0aXRsZXMuZmlsdGVyKCh0aXRsZSkgPT4ge1xuICAgIHJldHVybiAhb3B0aW9ucy5pbmNsdWRlcyh0aXRsZS50b0xvd2VyQ2FzZSgpKTtcbiAgfSk7XG5cbiAgdW5pcXVlVGl0bGVzLmZvckVhY2goKHRpdGxlKSA9PiB7XG4gICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uLnRleHQgPSB0aXRsZTtcbiAgICBvcHRpb24udmFsdWUgPSB0aXRsZTtcbiAgICBzZWxlY3RvcnMucHJvamVjdEVsZW1lbnQuYWRkKG9wdGlvbik7XG4gIH0pO1xufVxuIiwiaW1wb3J0IGlzVG9kYXkgZnJvbSBcImRhdGUtZm5zL2lzVG9kYXlcIjtcbmltcG9ydCB7IHRvZG9MaXN0Q29udGFpbmVyIH0gZnJvbSBcIi4uL2RhdGEvRE9NU2VsZWN0b3JzLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5VG9kYXlUYXNrcygpIHtcbiAgY29uc3QgdGFza3MgPSBbLi4udG9kb0xpc3RDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLWNhcmRcIildO1xuXG4gIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBjb25zdCBkdWVEYXRlID0gdGFzay5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZHVlLWRhdGVdXCIpLmlubmVyVGV4dDtcbiAgICBjb25zdCBjbGFzc2VzID0gWy4uLnRhc2suY2xhc3NMaXN0XTtcblxuICAgIGlmIChkdWVEYXRlKSB7XG4gICAgICBjb25zdCBbeWVhciwgbW9udGgsIGRheV0gPSBkdWVEYXRlLnNwbGl0KFwiLVwiKTtcbiAgICAgIC8vIG1vbnRoIGlzIDAgYmFzZWRcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBwYXJzZUludChtb250aCkgLSAxLCBkYXkpO1xuICAgICAgbGV0IHRvZGF5ID0gaXNUb2RheShkYXRlKTtcblxuICAgICAgaWYgKHRvZGF5KSB7XG4gICAgICAgIGlmIChjbGFzc2VzLmluY2x1ZGVzKFwiaW5hY3RpdmVcIikpIHtcbiAgICAgICAgICB0YXNrLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFjbGFzc2VzLmluY2x1ZGVzKFwiaW5hY3RpdmVcIikpIHtcbiAgICAgICAgICB0YXNrLmNsYXNzTGlzdC50b2dnbGUoXCJpbmFjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWNsYXNzZXMuaW5jbHVkZXMoXCJpbmFjdGl2ZVwiKSkge1xuICAgICAgICB0YXNrLmNsYXNzTGlzdC50b2dnbGUoXCJpbmFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgdG9kb0xpc3RDb250YWluZXIsIHRlbXBsYXRlIH0gZnJvbSBcIi4uL2RhdGEvRE9NU2VsZWN0b3JzLmpzXCI7XG5pbXBvcnQgeyBQUklPUklUWV9DT0xPUl9NQVAgfSBmcm9tIFwiLi4vZGF0YS9wcmlvcml0eS5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFza05vZGUodGFzaykge1xuICBjb25zdCBlbGVtZW50RXhpc3RzID0gdG9kb0xpc3RDb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICBgW2RhdGEtdGFzay1pZD0nJHt0YXNrLmlkfSddYFxuICApO1xuICBsZXQgdGFza1RvUmVuZGVyO1xuICBpZiAoZWxlbWVudEV4aXN0cykge1xuICAgIHRhc2tUb1JlbmRlciA9IGVsZW1lbnRFeGlzdHM7XG4gIH0gZWxzZSB7XG4gICAgdGFza1RvUmVuZGVyID0gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgY29uc3QgdGFza0VsID0gdGFza1RvUmVuZGVyLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10YXNrLWlkXVwiKTtcblxuICAgIHRhc2tFbC5kYXRhc2V0LnRhc2tJZCA9IHRhc2suaWQ7XG4gICAgdGFza1RvUmVuZGVyID0gdGFza0VsO1xuICB9XG5cbiAgc2V0VGFza05vZGVWYWx1ZXModGFza1RvUmVuZGVyLCB0YXNrKTtcbiAgcmV0dXJuIHRhc2tUb1JlbmRlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRDdXJyZW50UHJvamVjdFRhc2tzKGN1cnJlbnRQcm9qZWN0VGl0bGUpIHtcbiAgY29uc3QgdGFza3MgPSBbLi4udG9kb0xpc3RDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLWNhcmRcIildO1xuXG4gIHRhc2tzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBjbGFzc2VzID0gWy4uLmVsZW1lbnQuY2xhc3NMaXN0XTtcbiAgICBpZiAoXG4gICAgICBlbGVtZW50LmRhdGFzZXQucHJvamVjdC50b0xvd2VyQ2FzZSgpID09PVxuICAgICAgY3VycmVudFByb2plY3RUaXRsZS50b0xvd2VyQ2FzZSgpXG4gICAgKSB7XG4gICAgICBpZiAoY2xhc3Nlcy5pbmNsdWRlcyhcImluYWN0aXZlXCIpKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImluYWN0aXZlXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWNsYXNzZXMuaW5jbHVkZXMoXCJpbmFjdGl2ZVwiKSkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJpbmFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlUHJvamVjdFRhc2tzKHByb2plY3RUaXRsZSkge1xuICBjb25zdCB0YXNrc1RvRGVsZXRlID0gZ2V0UHJvamVjdFRhc2tzKHByb2plY3RUaXRsZSk7XG4gIHRhc2tzVG9EZWxldGUuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0VGFza3MocHJvamVjdFRpdGxlKSB7XG4gIGNvbnN0IHRhc2tzID0gWy4uLnRvZG9MaXN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1jYXJkXCIpXTtcbiAgcmV0dXJuIHRhc2tzLmZpbHRlcigoZWxlbWVudCkgPT4ge1xuICAgIHJldHVybiBlbGVtZW50LmRhdGFzZXQucHJvamVjdC50b0xvd2VyQ2FzZSgpID09PSBwcm9qZWN0VGl0bGUudG9Mb3dlckNhc2UoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldFRhc2tOb2RlVmFsdWVzKHRhc2tUb1JlbmRlciwgdGFzaykge1xuICBjb25zdCBjb2xvciA9IFBSSU9SSVRZX0NPTE9SX01BUC5nZXQodGFzay5wcmlvcml0eSkgPz8gXCJncmVlblwiO1xuICBjb25zdCBwcmlvcml0eSA9IHRhc2tUb1JlbmRlci5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcHJpb3JpdHktY29sb3JdXCIpO1xuICBwcmlvcml0eS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgdGFza1RvUmVuZGVyLmRhdGFzZXQucHJvamVjdCA9IHRhc2sucHJvamVjdDtcblxuICBjb25zdCB0aXRsZSA9IHRhc2tUb1JlbmRlci5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGl0bGVdXCIpO1xuICB0aXRsZS5pbm5lclRleHQgPSB0YXNrLm5hbWU7XG5cbiAgY29uc3QgZGV0YWlscyA9IHRhc2tUb1JlbmRlci5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZGV0YWlsc11cIik7XG4gIGRldGFpbHMuaW5uZXJUZXh0ID0gdGFzay5kZXNjcmlwdGlvbjtcblxuICBjb25zdCBkYXRlID0gdGFza1RvUmVuZGVyLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1kdWUtZGF0ZV1cIik7XG4gIGRhdGUuaW5uZXJUZXh0ID0gdGFzay5kdWVEYXRlO1xufVxuIiwiZXhwb3J0IGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm0tY29udGFpbmVyXCIpO1xuZXhwb3J0IGNvbnN0IG5ld1Rhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLWJ1dHRvblwiKTtcbmV4cG9ydCBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1mb3JtXCIpO1xuZXhwb3J0IGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI292ZXJsYXlcIik7XG5leHBvcnQgY29uc3QgdG9kb0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tbGlzdC1jb250YWluZXJcIik7XG5leHBvcnQgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtLWJ0bi1jYW5jZWxcIik7XG5leHBvcnQgY29uc3QgY3JlYXRlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3JlYXRlLXByb2plY3QtZGl2XCIpO1xuZXhwb3J0IGNvbnN0IG5ld1Byb2plY3RQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXByb2plY3QtcG9wdXBcIik7XG5leHBvcnQgY29uc3QgbmV3UHJvamVjdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIiNwcm9qZWN0LWJ1dHRvbnMtd3JhcHBlclwiXG4pO1xuZXhwb3J0IGNvbnN0IG5ld1Byb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1uYW1lLWlucHV0XCIpO1xuZXhwb3J0IGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzLWNvbnRhaW5lclwiKTtcbmV4cG9ydCBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1uYW1lXCIpO1xuZXhwb3J0IGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpZGViYXJcIik7XG5leHBvcnQgY29uc3QgbmFtZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stbmFtZVwiKTtcbmV4cG9ydCBjb25zdCBkZXNjcmlwdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGVzY3JpcHRpb25cIik7XG5leHBvcnQgY29uc3QgZGF0ZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZHVlLWRhdGVcIik7XG5leHBvcnQgY29uc3QgcHJpb3JpdHlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXByaW9yaXR5XCIpO1xuZXhwb3J0IGNvbnN0IHByb2plY3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXByb2plY3RcIik7XG5leHBvcnQgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stdGVtcGxhdGVcIik7XG5leHBvcnQgY29uc3QgcHJvamVjdFRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRlbXBsYXRlXCIpO1xuZXhwb3J0IGNvbnN0IHRhc2tTYXZlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtLWJ0bi1zYXZlXCIpO1xuZXhwb3J0IGNvbnN0IGxlZnRNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsZWZ0LW1lbnVcIik7XG4iLCJleHBvcnQgY29uc3QgUFJJT1JJVFlfQ09MT1JfTUFQID0gbmV3IE1hcChbXG4gIFtcImhpZ2hcIiwgXCJyZWRcIl0sXG4gIFtcIm1lZGl1bVwiLCBcInllbGxvd1wiXSxcbiAgW1wibG93XCIsIFwiZ3JlZW5cIl0sXG5dKTtcblxuZXhwb3J0IGNvbnN0IENPTE9SX1BSSU9SSVRZX01BUCA9IG5ldyBNYXAoW1xuICBbXCJyZWRcIiwgXCJoaWdoXCJdLFxuICBbXCJ5ZWxsb3dcIiwgXCJtZWRpdW1cIl0sXG4gIFtcImdyZWVuXCIsIFwibG93XCJdLFxuXSk7XG4iLCJleHBvcnQgZnVuY3Rpb24qIGlkR2VuZXJhdG9yKCkge1xuICBsZXQgY291bnQgPSAxO1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIHlpZWxkIGNvdW50Kys7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yobykge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiB0eXBlb2YgbztcbiAgfSA6IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87XG4gIH0sIF90eXBlb2Yobyk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSBcIi4vc2NyaXB0cy9kYXRhL0RPTVNlbGVjdG9ycy5qc1wiO1xuaW1wb3J0IFVJIGZyb20gXCIuL3NjcmlwdHMvVUkuanNcIjtcblxuc2VsZWN0b3JzLm5hbWVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBVSS5oYW5kbGVUYXNrVGl0bGVJbnB1dCk7XG5zZWxlY3RvcnMubmV3VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgVUkub3Blbk5ld1Rhc2tGb3JtKTtcbnNlbGVjdG9ycy50YXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIFVJLnVwZGF0ZVRvRG9MaXN0KTtcbnNlbGVjdG9ycy5jYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFVJLmNsb3NlVGFza0Zvcm0pO1xuc2VsZWN0b3JzLnRvZG9MaXN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBVSS51cGRhdGVUYXNrKTtcbnNlbGVjdG9ycy5jcmVhdGVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBVSS5vcGVuTmV3UHJvamVjdFBvcFVwKTtcbnNlbGVjdG9ycy5uZXdQcm9qZWN0QnV0dG9ucy5hZGRFdmVudExpc3RlbmVyKFxuICBcImNsaWNrXCIsXG4gIFVJLmhhbmRsZU5ld1Byb2plY3RQb3BVcEFjdGlvbnNcbik7XG5zZWxlY3RvcnMubGVmdE1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFVJLmRpc3BsYXlMZWZ0TWVudUNvbnRlbnQpO1xuc2VsZWN0b3JzLnByb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcbiAgXCJjbGlja1wiLFxuICBVSS5oYW5kbGVQcm9qZWN0Q29udGVudEFjdGlvbnNcbik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=