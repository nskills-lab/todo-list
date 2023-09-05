import * as selectors from "./scripts/data/DOMselectors.js";
import UI from "./scripts/UI.js";

window.onload = UI.loadAppFromLocalStorage;
selectors.nameElement.addEventListener("keyup", UI.handleTaskTitleInput);
selectors.newTaskButton.addEventListener("click", UI.openNewTaskForm);
selectors.taskForm.addEventListener("submit", UI.updateToDoList);
selectors.cancelButton.addEventListener("click", UI.closeTaskForm);
selectors.todoListContainer.addEventListener("click", UI.updateTask);
selectors.createProject.addEventListener("click", UI.openNewProjectPopUp);
selectors.newProjectButtons.addEventListener(
  "click",
  UI.handleNewProjectPopUpActions
);
selectors.leftMenu.addEventListener("click", UI.displayLeftMenuContent);
selectors.projectContainer.addEventListener(
  "click",
  UI.handleProjectContentActions
);
