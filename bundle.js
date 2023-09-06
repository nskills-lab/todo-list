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

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

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
  return { id: (0,_utility_utility_js__WEBPACK_IMPORTED_MODULE_1__.generateID)(), title };
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






function createTask(id) {
  const name = _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.nameElement.value.trim();
  const description = _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.descriptionElement.value.trim();
  const date = _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.dateElement.value.trim();
  const priority = _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.priorityElement.value.trim() || "low";
  const project = _data_DOMselectors_js__WEBPACK_IMPORTED_MODULE_2__.projectElement.value.trim();
  const taskId = id ?? (0,_utility_utility_js__WEBPACK_IMPORTED_MODULE_4__.generateID)();
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
/* harmony export */   generateID: () => (/* binding */ generateID)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");

function generateID() {
  return (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])().split("-").at(-1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUU7QUFDaEQsdUVBQXNCLDJCQUEyQixzREFBRTtBQUNuRCw0RUFBMkIsMkJBQTJCLHNEQUFFO0FBQ3hELHdFQUF1QiwyQkFBMkIsc0RBQUU7QUFDcEQsNEVBQTJCO0FBQzNCO0FBQ0EsRUFBRSxzREFBRTtBQUNKO0FBQ0EsbUVBQWtCLDJCQUEyQixzREFBRTtBQUMvQywyRUFBMEI7QUFDMUI7QUFDQSxFQUFFLHNEQUFFO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvYXBwL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9hcHAvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvYXBwL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvYXBwL3Rhc2tGb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL2FwcC90b2RheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9hcHAvdG9kb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvZGF0YS9ET01zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvZGF0YS9wcmlvcml0eS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy91dGlsaXR5L3V0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b2RheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvZGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIERhdGUubm93KCkpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmFuZG9tVVVJRFxufTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG5sZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHJldHVybiAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgY29uc3QgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmF0aXZlLnJhbmRvbVVVSUQoKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiaW1wb3J0IHtcbiAgY3JlYXRlVGFzayxcbiAgcmVzZXRGb3JtLFxuICBhdXRvZmlsbCxcbiAgdXBkYXRlUHJvamVjdE1lbnUsXG59IGZyb20gXCIuL2FwcC90YXNrRm9ybS5qc1wiO1xuaW1wb3J0IHtcbiAgY3JlYXRlVGFza05vZGUsXG4gIGxvYWRDdXJyZW50UHJvamVjdFRhc2tzLFxuICBkZWxldGVQcm9qZWN0VGFza3MsXG4gIGdldFRvZG9MaXN0cyxcbn0gZnJvbSBcIi4vYXBwL3RvZG9MaXN0LmpzXCI7XG5pbXBvcnQgeyBkaXNwbGF5VG9kYXlUYXNrcyB9IGZyb20gXCIuL2FwcC90b2RheS5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdE5vZGUsIGdldFByb2plY3RUaXRsZXMgfSBmcm9tIFwiLi9hcHAvcHJvamVjdHMuanNcIjtcbmltcG9ydCAqIGFzIHNlbGVjdG9ycyBmcm9tIFwiLi9kYXRhL0RPTXNlbGVjdG9ycy5qc1wiO1xuaW1wb3J0IHsgc2F2ZVRvTG9jYWxTdG9yYWdlLCBnZXRGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vYXBwL2xvY2FsU3RvcmFnZS5qc1wiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vYXBwL3Rhc2suanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xuICBzdGF0aWMgaGFuZGxlVGFza1RpdGxlSW5wdXQoKSB7XG4gICAgY29uc3QgdGFza1RpdGxlID0gc2VsZWN0b3JzLm5hbWVFbGVtZW50LnZhbHVlO1xuICAgIGlmICh0YXNrVGl0bGUpIHtcbiAgICAgIHNlbGVjdG9ycy50YXNrU2F2ZUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxlY3RvcnMudGFza1NhdmVCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBvcGVuTmV3VGFza0Zvcm0oKSB7XG4gICAgc2VsZWN0b3JzLmZvcm1Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICBzZWxlY3RvcnMub3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIHNlbGVjdG9ycy50YXNrU2F2ZUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgY29uc3QgdGl0bGVzID0gZ2V0UHJvamVjdFRpdGxlcygpO1xuICAgIHVwZGF0ZVByb2plY3RNZW51KHRpdGxlcyk7XG4gICAgcmVzZXRGb3JtKCk7XG4gIH1cblxuICBzdGF0aWMgY2xvc2VUYXNrRm9ybSgpIHtcbiAgICBzZWxlY3RvcnMuZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIHNlbGVjdG9ycy5vdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgcmVzZXRGb3JtKCk7XG4gIH1cblxuICBzdGF0aWMgb3Blbk5ld1Byb2plY3RQb3BVcCgpIHtcbiAgICBzZWxlY3RvcnMuY3JlYXRlUHJvamVjdC5jbGFzc0xpc3QudG9nZ2xlKFwiaW5hY3RpdmVcIik7XG4gICAgc2VsZWN0b3JzLm5ld1Byb2plY3RQb3B1cC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIHNlbGVjdG9ycy5vdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlVG9Eb0xpc3QoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNlbGVjdG9ycy5mb3JtQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgc2VsZWN0b3JzLm92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICBjb25zdCBleGlzdGluZ1Rhc2tJZCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LnRhc2tJZDtcbiAgICBjb25zdCB0YXNrID0gY3JlYXRlVGFzayhleGlzdGluZ1Rhc2tJZCk7XG4gICAgY29uc3QgdGFza05vZGUgPSBjcmVhdGVUYXNrTm9kZSh0YXNrKTtcblxuICAgIGlmICghZXhpc3RpbmdUYXNrSWQpIHtcbiAgICAgIHNlbGVjdG9ycy50b2RvTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrTm9kZSk7XG4gICAgfVxuICAgIGxvYWRDdXJyZW50UHJvamVjdFRhc2tzKHNlbGVjdG9ycy5jdXJyZW50UHJvamVjdC5pbm5lclRleHQpO1xuICAgIGNvbnN0IHRpdGxlcyA9IGdldFByb2plY3RUaXRsZXMoKTtcbiAgICB1cGRhdGVQcm9qZWN0TWVudSh0aXRsZXMpO1xuICAgIHJlc2V0Rm9ybSgpO1xuICAgIGNvbnN0IHRvZG9MaXN0cyA9IEpTT04uc3RyaW5naWZ5KGdldFRvZG9MaXN0cygpKTtcbiAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UodG9kb0xpc3RzKTtcbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVUYXNrKGV2ZW50KSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAoZWxlbWVudC5tYXRjaGVzKFwiI3RvZG8tbGlzdC1jb250YWluZXJcIikpIHJldHVybjtcblxuICAgIGlmIChlbGVtZW50Lm1hdGNoZXMoXCIjdGFzay1jaGVja2JveFwiKSkge1xuICAgICAgY29uc3QgdGFzayA9IGVsZW1lbnQuY2xvc2VzdChcImRpdltkYXRhLXRhc2staWRdXCIpO1xuICAgICAgY29uc3QgdGl0bGUgPSBlbGVtZW50XG4gICAgICAgIC5jbG9zZXN0KFwiZGl2W2RhdGEtdGFzay1pZF1cIilcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10aXRsZV1cIik7XG5cbiAgICAgIGlmICh0aXRsZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9PT0gXCJsaW5lLXRocm91Z2hcIikge1xuICAgICAgICB0aXRsZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwiXCI7XG4gICAgICAgIHRhc2suc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRpdGxlLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJsaW5lLXRocm91Z2hcIjtcbiAgICAgIHRhc2suc3R5bGUub3BhY2l0eSA9IDAuNTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudC5jbG9zZXN0KFwiYnV0dG9uXCIpLm1hdGNoZXMoXCJbZGF0YS10YXNrLWRlbGV0ZV1cIikpIHtcbiAgICAgIGNvbnN0IHRhc2tUb0RlbGV0ZSA9IGVsZW1lbnQuY2xvc2VzdChcIi50YXNrLWNhcmRcIik7XG4gICAgICBzZWxlY3RvcnMudG9kb0xpc3RDb250YWluZXIucmVtb3ZlQ2hpbGQodGFza1RvRGVsZXRlKTtcbiAgICAgIGNvbnN0IHRvZG9MaXN0cyA9IEpTT04uc3RyaW5naWZ5KGdldFRvZG9MaXN0cygpKTtcbiAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSh0b2RvTGlzdHMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50LmNsb3Nlc3QoXCJidXR0b25cIikubWF0Y2hlcyhcIltkYXRhLXRhc2stZWRpdF1cIikpIHtcbiAgICAgIGNvbnN0IGlkID0gZWxlbWVudC5jbG9zZXN0KFwiZGl2W2RhdGEtdGFzay1pZF1cIikuZGF0YXNldC50YXNrSWQ7XG4gICAgICBhdXRvZmlsbChpZCk7XG4gICAgICBzZWxlY3RvcnMuZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgc2VsZWN0b3JzLm92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgaGFuZGxlTmV3UHJvamVjdFBvcFVwQWN0aW9ucyhldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQubWF0Y2hlcyhcIiNwcm9qZWN0LXNhdmVcIikpIHtcbiAgICAgIGNvbnN0IG5ld1Byb2plY3RUaXRsZSA9IHNlbGVjdG9ycy5uZXdQcm9qZWN0SW5wdXQudmFsdWUudHJpbSgpO1xuICAgICAgaWYgKCFuZXdQcm9qZWN0VGl0bGUpIHJldHVybjtcblxuICAgICAgY29uc3QgcmVzZXJ2ZWROYW1lcyA9IGdldFByb2plY3RUaXRsZXMoKS5tYXAoKHRpdGxlKSA9PlxuICAgICAgICB0aXRsZS50b0xvd2VyQ2FzZSgpXG4gICAgICApO1xuICAgICAgcmVzZXJ2ZWROYW1lcy5wdXNoKFwiaW5ib3hcIiwgXCJ0b2RheVwiKTtcbiAgICAgIGlmIChyZXNlcnZlZE5hbWVzLmluY2x1ZGVzKG5ld1Byb2plY3RUaXRsZS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICBhbGVydChcIlByb2plY3QgYWxyZWFkeSBleGlzdHMgd2l0aCB0aGlzIG5hbWUhXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBwcm9qZWN0ID0gY3JlYXRlUHJvamVjdE5vZGUobmV3UHJvamVjdFRpdGxlKTtcbiAgICAgIHNlbGVjdG9ycy5wcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3QpO1xuICAgIH1cblxuICAgIHNlbGVjdG9ycy5uZXdQcm9qZWN0SW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIHNlbGVjdG9ycy5jcmVhdGVQcm9qZWN0LmNsYXNzTGlzdC50b2dnbGUoXCJpbmFjdGl2ZVwiKTtcbiAgICBzZWxlY3RvcnMubmV3UHJvamVjdFBvcHVwLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgc2VsZWN0b3JzLm92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICBjb25zdCB0b2RvTGlzdHMgPSBKU09OLnN0cmluZ2lmeShnZXRUb2RvTGlzdHMoKSk7XG4gICAgc2F2ZVRvTG9jYWxTdG9yYWdlKHRvZG9MaXN0cyk7XG4gIH1cblxuICBzdGF0aWMgZGlzcGxheUxlZnRNZW51Q29udGVudChldmVudCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKGVsZW1lbnQubWF0Y2hlcyhcImxpI2luYm94XCIpKSB7XG4gICAgICBzZWxlY3RvcnMuY3VycmVudFByb2plY3QuaW5uZXJUZXh0ID0gZWxlbWVudC5pbm5lclRleHQ7XG4gICAgICBsb2FkQ3VycmVudFByb2plY3RUYXNrcyhzZWxlY3RvcnMuY3VycmVudFByb2plY3QuaW5uZXJUZXh0KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudC5tYXRjaGVzKFwibGkjdG9kYXlcIikpIHtcbiAgICAgIHNlbGVjdG9ycy5jdXJyZW50UHJvamVjdC5pbm5lclRleHQgPSBlbGVtZW50LmlubmVyVGV4dDtcbiAgICAgIGRpc3BsYXlUb2RheVRhc2tzKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGhhbmRsZVByb2plY3RDb250ZW50QWN0aW9ucyhldmVudCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG5cbiAgICBpZiAoZWxlbWVudC5tYXRjaGVzKFwiI3Byb2plY3RzLWNvbnRhaW5lclwiKSkgcmV0dXJuO1xuXG4gICAgaWYgKGVsZW1lbnQubWF0Y2hlcyhcIltkYXRhLXByb2plY3QtZGVsZXRlXVwiKSkge1xuICAgICAgY29uc3QgcHJvamVjdENvbnRlbnQgPSBlbGVtZW50LmNsb3Nlc3QoXCJkaXZbZGF0YS1wcm9qZWN0LWlkXVwiKTtcbiAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IHByb2plY3RDb250ZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiW2RhdGEtcHJvamVjdC10aXRsZV1cIlxuICAgICAgKS5pbm5lclRleHQ7XG5cbiAgICAgIHByb2plY3RDb250ZW50LnJlbW92ZSgpO1xuICAgICAgZGVsZXRlUHJvamVjdFRhc2tzKHByb2plY3RUaXRsZSk7XG5cbiAgICAgIHNlbGVjdG9ycy5jdXJyZW50UHJvamVjdC5pbm5lclRleHQgPSBcIkluYm94XCI7XG4gICAgICBsb2FkQ3VycmVudFByb2plY3RUYXNrcyhzZWxlY3RvcnMuY3VycmVudFByb2plY3QuaW5uZXJUZXh0KTtcbiAgICAgIGNvbnN0IHRvZG9MaXN0cyA9IEpTT04uc3RyaW5naWZ5KGdldFRvZG9MaXN0cygpKTtcbiAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSh0b2RvTGlzdHMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50Lm1hdGNoZXMoXCIucHJvamVjdC1jYXJkXCIpKSB7XG4gICAgICBzZWxlY3RvcnMuY3VycmVudFByb2plY3QuaW5uZXJUZXh0ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcImRpdltkYXRhLXByb2plY3QtdGl0bGVdXCJcbiAgICAgICkuaW5uZXJUZXh0O1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50Lm1hdGNoZXMoXCJbZGF0YS1wcm9qZWN0LXRpdGxlXVwiKSkge1xuICAgICAgc2VsZWN0b3JzLmN1cnJlbnRQcm9qZWN0LmlubmVyVGV4dCA9IGVsZW1lbnQuaW5uZXJUZXh0O1xuICAgIH1cblxuICAgIGxvYWRDdXJyZW50UHJvamVjdFRhc2tzKHNlbGVjdG9ycy5jdXJyZW50UHJvamVjdC5pbm5lclRleHQpO1xuICB9XG5cbiAgc3RhdGljIGxvYWRBcHBGcm9tTG9jYWxTdG9yYWdlKCkge1xuICAgIGNvbnN0IHRvZG9MaXN0cyA9IEpTT04ucGFyc2UoZ2V0RnJvbUxvY2FsU3RvcmFnZSgpKTtcbiAgICBjb25zdCBwcm9qZWN0TGlzdHMgPSBPYmplY3Qua2V5cyh0b2RvTGlzdHMpO1xuXG4gICAgcHJvamVjdExpc3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGlmIChwcm9qZWN0LnRvTG93ZXJDYXNlKCkgIT09IFwiaW5ib3hcIikge1xuICAgICAgICBjb25zdCBwcm9qZWN0Tm9kZSA9IGNyZWF0ZVByb2plY3ROb2RlKHByb2plY3QpO1xuICAgICAgICBzZWxlY3RvcnMucHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Tm9kZSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRhc2tzID0gdG9kb0xpc3RzW3Byb2plY3RdO1xuXG4gICAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayhcbiAgICAgICAgICB0YXNrLmlkLFxuICAgICAgICAgIHRhc2sudGl0bGUsXG4gICAgICAgICAgdGFzay5kZXRhaWxzLFxuICAgICAgICAgIHRhc2suZHVlRGF0ZSxcbiAgICAgICAgICB0YXNrLnByaW9yaXR5LFxuICAgICAgICAgIHRhc2sucHJvamVjdFxuICAgICAgICApO1xuICAgICAgICBjb25zdCB0YXNrTm9kZSA9IGNyZWF0ZVRhc2tOb2RlKG5ld1Rhc2spO1xuICAgICAgICBpZiAodGFzay5wcm9qZWN0LnRvTG93ZXJDYXNlKCkgIT09IFwiaW5ib3hcIikge1xuICAgICAgICAgIHRhc2tOb2RlLmNsYXNzTGlzdC50b2dnbGUoXCJpbmFjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBzZWxlY3RvcnMudG9kb0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza05vZGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzYXZlVG9Mb2NhbFN0b3JhZ2UoaXRlbSkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9MaXN0QXBwXCIsIGl0ZW0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEZyb21Mb2NhbFN0b3JhZ2UoKSB7XG4gIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9MaXN0QXBwXCIpO1xufVxuIiwiaW1wb3J0IHsgcHJvamVjdFRlbXBsYXRlLCBwcm9qZWN0Q29udGFpbmVyIH0gZnJvbSBcIi4uL2RhdGEvRE9Nc2VsZWN0b3JzLmpzXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZUlEIH0gZnJvbSBcIi4uL3V0aWxpdHkvdXRpbGl0eS5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdE5vZGUodGl0bGUpIHtcbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RGYWN0b3J5KHRpdGxlKTtcbiAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBwcm9qZWN0VGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gIGNvbnN0IGlkID0gcHJvamVjdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXByb2plY3QtaWRdXCIpO1xuICBpZC5kYXRhc2V0LnByb2plY3RJZCA9IHByb2plY3QuaWQ7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IHByb2plY3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcm9qZWN0LXRpdGxlXVwiKTtcbiAgcHJvamVjdFRpdGxlLmlubmVyVGV4dCA9IHByb2plY3QudGl0bGU7XG4gIHJldHVybiBwcm9qZWN0RWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2plY3RUaXRsZXMoKSB7XG4gIGNvbnN0IHByb2plY3RzID0gW1xuICAgIC4uLnByb2plY3RDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcImRpdltkYXRhLXByb2plY3QtdGl0bGVdXCIpLFxuICBdO1xuICByZXR1cm4gcHJvamVjdHMubWFwKChlbGVtZW50KSA9PiBlbGVtZW50LmlubmVyVGV4dCk7XG59XG5cbmNvbnN0IHByb2plY3RGYWN0b3J5ID0gKHRpdGxlKSA9PiB7XG4gIHJldHVybiB7IGlkOiBnZW5lcmF0ZUlEKCksIHRpdGxlIH07XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKGlkLCBuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICB0aGlzLl9pZCA9IGlkO1xuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5fZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5fcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLl9wcm9qZWN0ID0gcHJvamVjdCB8fCBcImluYm94XCI7XG4gIH1cblxuICBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgc2V0IG5hbWUobmFtZSkge1xuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICBzZXQgZGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG5cbiAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIHNldCBkdWVEYXRlKGRhdGUpIHtcbiAgICB0aGlzLl9kdWVEYXRlID0gZGF0ZTtcbiAgfVxuXG4gIGdldCBkdWVEYXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9kdWVEYXRlO1xuICB9XG5cbiAgc2V0IHByaW9yaXR5KHByaW9yaXR5KSB7XG4gICAgdGhpcy5fcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxuXG4gIGdldCBwcmlvcml0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJpb3JpdHk7XG4gIH1cblxuICBzZXQgcHJvamVjdChwcm9qZWN0KSB7XG4gICAgdGhpcy5fcHJvamVjdCA9IHByb2plY3Q7XG4gIH1cblxuICBnZXQgcHJvamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvamVjdDtcbiAgfVxufVxuIiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFzay5qc1wiO1xuaW1wb3J0IHsgZ2V0UHJvamVjdFRpdGxlcyB9IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5pbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSBcIi4uL2RhdGEvRE9Nc2VsZWN0b3JzLmpzXCI7XG5pbXBvcnQgeyBDT0xPUl9QUklPUklUWV9NQVAgfSBmcm9tIFwiLi4vZGF0YS9wcmlvcml0eS5qc1wiO1xuaW1wb3J0IHsgZ2VuZXJhdGVJRCB9IGZyb20gXCIuLi91dGlsaXR5L3V0aWxpdHkuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2soaWQpIHtcbiAgY29uc3QgbmFtZSA9IHNlbGVjdG9ycy5uYW1lRWxlbWVudC52YWx1ZS50cmltKCk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gc2VsZWN0b3JzLmRlc2NyaXB0aW9uRWxlbWVudC52YWx1ZS50cmltKCk7XG4gIGNvbnN0IGRhdGUgPSBzZWxlY3RvcnMuZGF0ZUVsZW1lbnQudmFsdWUudHJpbSgpO1xuICBjb25zdCBwcmlvcml0eSA9IHNlbGVjdG9ycy5wcmlvcml0eUVsZW1lbnQudmFsdWUudHJpbSgpIHx8IFwibG93XCI7XG4gIGNvbnN0IHByb2plY3QgPSBzZWxlY3RvcnMucHJvamVjdEVsZW1lbnQudmFsdWUudHJpbSgpO1xuICBjb25zdCB0YXNrSWQgPSBpZCA/PyBnZW5lcmF0ZUlEKCk7XG4gIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayh0YXNrSWQsIG5hbWUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSwgcHJvamVjdCk7XG4gIHJldHVybiBuZXdUYXNrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xuICBpZiAoc2VsZWN0b3JzLnRhc2tGb3JtLmRhdGFzZXQudGFza0lkKSB7XG4gICAgZGVsZXRlIHNlbGVjdG9ycy50YXNrRm9ybS5kYXRhc2V0LnRhc2tJZDtcbiAgfVxuICBzZWxlY3RvcnMubmFtZUVsZW1lbnQudmFsdWUgPSBcIlwiO1xuICBzZWxlY3RvcnMuZGVzY3JpcHRpb25FbGVtZW50LnZhbHVlID0gXCJcIjtcbiAgc2VsZWN0b3JzLmRhdGVFbGVtZW50LnZhbHVlID0gXCJcIjtcbiAgc2VsZWN0b3JzLnByaW9yaXR5RWxlbWVudC52YWx1ZSA9IFwiXCI7XG4gIHNlbGVjdG9ycy5wcm9qZWN0RWxlbWVudC52YWx1ZSA9IFwiXCI7XG4gIHNlbGVjdG9ycy50YXNrU2F2ZUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRvZmlsbCh0YXNrSWQpIHtcbiAgY29uc3QgdGFzayA9IHNlbGVjdG9ycy50b2RvTGlzdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgIGBbZGF0YS10YXNrLWlkPScke3Rhc2tJZH0nXWBcbiAgKTtcbiAgc2VsZWN0b3JzLnRhc2tGb3JtLmRhdGFzZXQudGFza0lkID0gdGFza0lkO1xuICBzZWxlY3RvcnMubmFtZUVsZW1lbnQudmFsdWUgPSB0YXNrXG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10aXRsZV1cIilcbiAgICAuaW5uZXJUZXh0LnRyaW0oKTtcbiAgc2VsZWN0b3JzLmRlc2NyaXB0aW9uRWxlbWVudC52YWx1ZSA9IHRhc2tcbiAgICAucXVlcnlTZWxlY3RvcihcIltkYXRhLWRldGFpbHNdXCIpXG4gICAgLmlubmVyVGV4dC50cmltKCk7XG5cbiAgc2VsZWN0b3JzLmRhdGVFbGVtZW50LnZhbHVlID0gdGFza1xuICAgIC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZHVlLWRhdGVdXCIpXG4gICAgLmlubmVyVGV4dC50cmltKCk7XG4gIGNvbnN0IHByaW9yaXR5Q29sb3IgPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcmlvcml0eS1jb2xvcl1cIikuc3R5bGVcbiAgICAuYmFja2dyb3VuZENvbG9yO1xuICBzZWxlY3RvcnMucHJpb3JpdHlFbGVtZW50LnZhbHVlID0gQ09MT1JfUFJJT1JJVFlfTUFQLmdldChwcmlvcml0eUNvbG9yKTtcbiAgc2VsZWN0b3JzLnByb2plY3RFbGVtZW50LnZhbHVlID0gdGFzay5kYXRhc2V0LnByb2plY3Q7XG4gIGNvbnN0IHRpdGxlcyA9IGdldFByb2plY3RUaXRsZXMoKTtcbiAgdXBkYXRlUHJvamVjdE1lbnUodGl0bGVzKTtcbiAgc2VsZWN0b3JzLnRhc2tTYXZlQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVQcm9qZWN0TWVudSh0aXRsZXMpIHtcbiAgY29uc3QgcmVzZXJ2ZWRPcHRpb25zID0gW1wiSW5ib3hcIiwgXCJQcm9qZWN0XCJdO1xuICBjb25zdCBvcHRpb25zVG9EZWwgPSBbXG4gICAgLi4uc2VsZWN0b3JzLnByb2plY3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJvcHRpb25cIiksXG4gIF0uZmlsdGVyKChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuICFyZXNlcnZlZE9wdGlvbnMuaW5jbHVkZXMoZWxlbWVudC5pbm5lclRleHQpO1xuICB9KTtcblxuICBvcHRpb25zVG9EZWwuZm9yRWFjaCgob3B0aW9uKSA9PiBvcHRpb24ucmVtb3ZlKCkpO1xuXG4gIHRpdGxlcy5mb3JFYWNoKCh0aXRsZSkgPT4ge1xuICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbi50ZXh0ID0gdGl0bGU7XG4gICAgb3B0aW9uLnZhbHVlID0gdGl0bGU7XG4gICAgc2VsZWN0b3JzLnByb2plY3RFbGVtZW50LmFkZChvcHRpb24pO1xuICB9KTtcbn1cbiIsImltcG9ydCBpc1RvZGF5IGZyb20gXCJkYXRlLWZucy9pc1RvZGF5XCI7XG5pbXBvcnQgeyB0b2RvTGlzdENvbnRhaW5lciB9IGZyb20gXCIuLi9kYXRhL0RPTXNlbGVjdG9ycy5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVRvZGF5VGFza3MoKSB7XG4gIGNvbnN0IHRhc2tzID0gWy4uLnRvZG9MaXN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1jYXJkXCIpXTtcblxuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgY29uc3QgZHVlRGF0ZSA9IHRhc2sucXVlcnlTZWxlY3RvcihcIltkYXRhLWR1ZS1kYXRlXVwiKS5pbm5lclRleHQ7XG4gICAgY29uc3QgY2xhc3NlcyA9IFsuLi50YXNrLmNsYXNzTGlzdF07XG5cbiAgICBpZiAoZHVlRGF0ZSkge1xuICAgICAgY29uc3QgW3llYXIsIG1vbnRoLCBkYXldID0gZHVlRGF0ZS5zcGxpdChcIi1cIik7XG4gICAgICAvLyBtb250aCBpcyAwIGJhc2VkXG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoeWVhciwgcGFyc2VJbnQobW9udGgpIC0gMSwgZGF5KTtcbiAgICAgIGxldCB0b2RheSA9IGlzVG9kYXkoZGF0ZSk7XG5cbiAgICAgIGlmICh0b2RheSkge1xuICAgICAgICBpZiAoY2xhc3Nlcy5pbmNsdWRlcyhcImluYWN0aXZlXCIpKSB7XG4gICAgICAgICAgdGFzay5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghY2xhc3Nlcy5pbmNsdWRlcyhcImluYWN0aXZlXCIpKSB7XG4gICAgICAgICAgdGFzay5jbGFzc0xpc3QudG9nZ2xlKFwiaW5hY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFjbGFzc2VzLmluY2x1ZGVzKFwiaW5hY3RpdmVcIikpIHtcbiAgICAgICAgdGFzay5jbGFzc0xpc3QudG9nZ2xlKFwiaW5hY3RpdmVcIik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiIsImltcG9ydCB7IHRvZG9MaXN0Q29udGFpbmVyLCB0ZW1wbGF0ZSB9IGZyb20gXCIuLi9kYXRhL0RPTXNlbGVjdG9ycy5qc1wiO1xuaW1wb3J0IHsgUFJJT1JJVFlfQ09MT1JfTUFQLCBDT0xPUl9QUklPUklUWV9NQVAgfSBmcm9tIFwiLi4vZGF0YS9wcmlvcml0eS5qc1wiO1xuaW1wb3J0IHsgZ2V0UHJvamVjdFRpdGxlcyB9IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrTm9kZSh0YXNrKSB7XG4gIGNvbnN0IGVsZW1lbnRFeGlzdHMgPSB0b2RvTGlzdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgIGBbZGF0YS10YXNrLWlkPScke3Rhc2suaWR9J11gXG4gICk7XG4gIGxldCB0YXNrVG9SZW5kZXI7XG4gIGlmIChlbGVtZW50RXhpc3RzKSB7XG4gICAgdGFza1RvUmVuZGVyID0gZWxlbWVudEV4aXN0cztcbiAgfSBlbHNlIHtcbiAgICB0YXNrVG9SZW5kZXIgPSB0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICBjb25zdCB0YXNrRWwgPSB0YXNrVG9SZW5kZXIucXVlcnlTZWxlY3RvcihcIltkYXRhLXRhc2staWRdXCIpO1xuXG4gICAgdGFza0VsLmRhdGFzZXQudGFza0lkID0gdGFzay5pZDtcbiAgICB0YXNrVG9SZW5kZXIgPSB0YXNrRWw7XG4gIH1cblxuICBzZXRUYXNrTm9kZVZhbHVlcyh0YXNrVG9SZW5kZXIsIHRhc2spO1xuICByZXR1cm4gdGFza1RvUmVuZGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZEN1cnJlbnRQcm9qZWN0VGFza3MoY3VycmVudFByb2plY3RUaXRsZSkge1xuICBjb25zdCB0YXNrcyA9IFsuLi50b2RvTGlzdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2stY2FyZFwiKV07XG5cbiAgdGFza3MuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBbLi4uZWxlbWVudC5jbGFzc0xpc3RdO1xuICAgIGlmIChcbiAgICAgIGVsZW1lbnQuZGF0YXNldC5wcm9qZWN0LnRvTG93ZXJDYXNlKCkgPT09XG4gICAgICBjdXJyZW50UHJvamVjdFRpdGxlLnRvTG93ZXJDYXNlKClcbiAgICApIHtcbiAgICAgIGlmIChjbGFzc2VzLmluY2x1ZGVzKFwiaW5hY3RpdmVcIikpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghY2xhc3Nlcy5pbmNsdWRlcyhcImluYWN0aXZlXCIpKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImluYWN0aXZlXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVQcm9qZWN0VGFza3MocHJvamVjdFRpdGxlKSB7XG4gIGNvbnN0IHRhc2tzVG9EZWxldGUgPSBnZXRQcm9qZWN0VGFza3MocHJvamVjdFRpdGxlKTtcbiAgdGFza3NUb0RlbGV0ZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5yZW1vdmUoKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb2RvTGlzdHMoKSB7XG4gIGNvbnN0IGFsbFByb2plY3RzID0gZ2V0UHJvamVjdFRpdGxlcygpO1xuICBhbGxQcm9qZWN0cy5wdXNoKFwiaW5ib3hcIik7XG4gIGNvbnN0IHRvZG9MaXN0cyA9IHt9O1xuICBhbGxQcm9qZWN0cy5mb3JFYWNoKCh0aXRsZSkgPT4ge1xuICAgIGNvbnN0IHRhc2tzID0gZ2V0UHJvamVjdFRhc2tzKHRpdGxlKTtcbiAgICB0b2RvTGlzdHNbdGl0bGVdID0gW107XG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgY29uc3QgdGFza0pTT04gPSBnZXRUYXNrTm9kZVZhbHVlcyh0YXNrKTtcbiAgICAgIHRvZG9MaXN0c1t0aXRsZV0ucHVzaCh0YXNrSlNPTik7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiB0b2RvTGlzdHM7XG59XG5cbmZ1bmN0aW9uIGdldFByb2plY3RUYXNrcyhwcm9qZWN0VGl0bGUpIHtcbiAgY29uc3QgdGFza3MgPSBbLi4udG9kb0xpc3RDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLWNhcmRcIildO1xuICByZXR1cm4gdGFza3MuZmlsdGVyKChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIGVsZW1lbnQuZGF0YXNldC5wcm9qZWN0LnRvTG93ZXJDYXNlKCkgPT09IHByb2plY3RUaXRsZS50b0xvd2VyQ2FzZSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0VGFza05vZGVWYWx1ZXModGFza1RvUmVuZGVyLCB0YXNrKSB7XG4gIGNvbnN0IGNvbG9yID0gUFJJT1JJVFlfQ09MT1JfTUFQLmdldCh0YXNrLnByaW9yaXR5KSA/PyBcImdyZWVuXCI7XG4gIGNvbnN0IHByaW9yaXR5ID0gdGFza1RvUmVuZGVyLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcmlvcml0eS1jb2xvcl1cIik7XG4gIHByaW9yaXR5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICB0YXNrVG9SZW5kZXIuZGF0YXNldC5wcm9qZWN0ID0gdGFzay5wcm9qZWN0O1xuXG4gIGNvbnN0IHRpdGxlID0gdGFza1RvUmVuZGVyLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10aXRsZV1cIik7XG4gIHRpdGxlLmlubmVyVGV4dCA9IHRhc2submFtZTtcblxuICBjb25zdCBkZXRhaWxzID0gdGFza1RvUmVuZGVyLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1kZXRhaWxzXVwiKTtcbiAgZGV0YWlscy5pbm5lclRleHQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuXG4gIGNvbnN0IGRhdGUgPSB0YXNrVG9SZW5kZXIucXVlcnlTZWxlY3RvcihcIltkYXRhLWR1ZS1kYXRlXVwiKTtcbiAgZGF0ZS5pbm5lclRleHQgPSB0YXNrLmR1ZURhdGU7XG59XG5cbmZ1bmN0aW9uIGdldFRhc2tOb2RlVmFsdWVzKHRhc2spIHtcbiAgbGV0IGNvbG9yID0gdGFzay5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcHJpb3JpdHktY29sb3JdXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvcjtcbiAgbGV0IHRhc2tKU09OID0ge1xuICAgIGlkOiB0YXNrLmRhdGFzZXQudGFza0lkLFxuICAgIHByb2plY3Q6IHRhc2suZGF0YXNldC5wcm9qZWN0LFxuICAgIHByaW9yaXR5OiBDT0xPUl9QUklPUklUWV9NQVAuZ2V0KGNvbG9yKSxcbiAgICB0aXRsZTogdGFzay5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGl0bGVdXCIpLmlubmVyVGV4dCxcbiAgICBkZXRhaWxzOiB0YXNrLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1kZXRhaWxzXVwiKS5pbm5lclRleHQsXG4gICAgZHVlRGF0ZTogdGFzay5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZHVlLWRhdGVdXCIpLmlubmVyVGV4dCxcbiAgfTtcbiAgcmV0dXJuIHRhc2tKU09OO1xufVxuIiwiZXhwb3J0IGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm0tY29udGFpbmVyXCIpO1xuZXhwb3J0IGNvbnN0IG5ld1Rhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLWJ1dHRvblwiKTtcbmV4cG9ydCBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1mb3JtXCIpO1xuZXhwb3J0IGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI292ZXJsYXlcIik7XG5leHBvcnQgY29uc3QgdG9kb0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tbGlzdC1jb250YWluZXJcIik7XG5leHBvcnQgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtLWJ0bi1jYW5jZWxcIik7XG5leHBvcnQgY29uc3QgY3JlYXRlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3JlYXRlLXByb2plY3QtZGl2XCIpO1xuZXhwb3J0IGNvbnN0IG5ld1Byb2plY3RQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXByb2plY3QtcG9wdXBcIik7XG5leHBvcnQgY29uc3QgbmV3UHJvamVjdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIiNwcm9qZWN0LWJ1dHRvbnMtd3JhcHBlclwiXG4pO1xuZXhwb3J0IGNvbnN0IG5ld1Byb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1uYW1lLWlucHV0XCIpO1xuZXhwb3J0IGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzLWNvbnRhaW5lclwiKTtcbmV4cG9ydCBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1uYW1lXCIpO1xuZXhwb3J0IGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpZGViYXJcIik7XG5leHBvcnQgY29uc3QgbmFtZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stbmFtZVwiKTtcbmV4cG9ydCBjb25zdCBkZXNjcmlwdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGVzY3JpcHRpb25cIik7XG5leHBvcnQgY29uc3QgZGF0ZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZHVlLWRhdGVcIik7XG5leHBvcnQgY29uc3QgcHJpb3JpdHlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXByaW9yaXR5XCIpO1xuZXhwb3J0IGNvbnN0IHByb2plY3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXByb2plY3RcIik7XG5leHBvcnQgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stdGVtcGxhdGVcIik7XG5leHBvcnQgY29uc3QgcHJvamVjdFRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRlbXBsYXRlXCIpO1xuZXhwb3J0IGNvbnN0IHRhc2tTYXZlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtLWJ0bi1zYXZlXCIpO1xuZXhwb3J0IGNvbnN0IGxlZnRNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsZWZ0LW1lbnVcIik7XG4iLCJleHBvcnQgY29uc3QgUFJJT1JJVFlfQ09MT1JfTUFQID0gbmV3IE1hcChbXG4gIFtcImhpZ2hcIiwgXCJyZWRcIl0sXG4gIFtcIm1lZGl1bVwiLCBcInllbGxvd1wiXSxcbiAgW1wibG93XCIsIFwiZ3JlZW5cIl0sXG5dKTtcblxuZXhwb3J0IGNvbnN0IENPTE9SX1BSSU9SSVRZX01BUCA9IG5ldyBNYXAoW1xuICBbXCJyZWRcIiwgXCJoaWdoXCJdLFxuICBbXCJ5ZWxsb3dcIiwgXCJtZWRpdW1cIl0sXG4gIFtcImdyZWVuXCIsIFwibG93XCJdLFxuXSk7XG4iLCJpbXBvcnQgeyB2NCB9IGZyb20gXCJ1dWlkXCI7XG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVJRCgpIHtcbiAgcmV0dXJuIHY0KCkuc3BsaXQoXCItXCIpLmF0KC0xKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yobykge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiB0eXBlb2YgbztcbiAgfSA6IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87XG4gIH0sIF90eXBlb2Yobyk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSBcIi4vc2NyaXB0cy9kYXRhL0RPTXNlbGVjdG9ycy5qc1wiO1xuaW1wb3J0IFVJIGZyb20gXCIuL3NjcmlwdHMvVUkuanNcIjtcblxud2luZG93Lm9ubG9hZCA9IFVJLmxvYWRBcHBGcm9tTG9jYWxTdG9yYWdlO1xuc2VsZWN0b3JzLm5hbWVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBVSS5oYW5kbGVUYXNrVGl0bGVJbnB1dCk7XG5zZWxlY3RvcnMubmV3VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgVUkub3Blbk5ld1Rhc2tGb3JtKTtcbnNlbGVjdG9ycy50YXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIFVJLnVwZGF0ZVRvRG9MaXN0KTtcbnNlbGVjdG9ycy5jYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFVJLmNsb3NlVGFza0Zvcm0pO1xuc2VsZWN0b3JzLnRvZG9MaXN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBVSS51cGRhdGVUYXNrKTtcbnNlbGVjdG9ycy5jcmVhdGVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBVSS5vcGVuTmV3UHJvamVjdFBvcFVwKTtcbnNlbGVjdG9ycy5uZXdQcm9qZWN0QnV0dG9ucy5hZGRFdmVudExpc3RlbmVyKFxuICBcImNsaWNrXCIsXG4gIFVJLmhhbmRsZU5ld1Byb2plY3RQb3BVcEFjdGlvbnNcbik7XG5zZWxlY3RvcnMubGVmdE1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFVJLmRpc3BsYXlMZWZ0TWVudUNvbnRlbnQpO1xuc2VsZWN0b3JzLnByb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcbiAgXCJjbGlja1wiLFxuICBVSS5oYW5kbGVQcm9qZWN0Q29udGVudEFjdGlvbnNcbik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=