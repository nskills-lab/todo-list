/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const taskFormContainer = document.querySelector("#task-container");
const newTaskButton = document.querySelector("#add-task-button");
const taskForm = document.querySelector("#task-form");

newTaskButton.addEventListener("click", () => {
  if (taskFormContainer.className === "") {
    taskFormContainer.classList.toggle("open");
    console.log("opening a new task form");
    return;
  }
  taskFormContainer.classList.toggle("open");
});

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0YXNrRm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1jb250YWluZXJcIik7XG5jb25zdCBuZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtdGFzay1idXR0b25cIik7XG5jb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1mb3JtXCIpO1xuXG5uZXdUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGlmICh0YXNrRm9ybUNvbnRhaW5lci5jbGFzc05hbWUgPT09IFwiXCIpIHtcbiAgICB0YXNrRm9ybUNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcbiAgICBjb25zb2xlLmxvZyhcIm9wZW5pbmcgYSBuZXcgdGFzayBmb3JtXCIpO1xuICAgIHJldHVybjtcbiAgfVxuICB0YXNrRm9ybUNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcbn0pO1xuXG50YXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9