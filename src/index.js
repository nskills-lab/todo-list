import {
  createTask,
  resetForm,
  autofill,
  updateProjectMenu,
} from "./scripts/app/taskForm.js";
import {
  createTaskNode,
  loadCurrentProjectTasks,
  deleteProjectTasks,
} from "./scripts/app/todoList.js";
import { displayTodayTasks } from "./scripts/app/today.js";
import { createProjectNode, getProjectTitles } from "./scripts/app/projects.js";
import * as selectors from "./scripts/data/DOMSelectors.js";
import UI from "./scripts/UI.js";

selectors.nameElement.addEventListener("keyup", UI.handleTaskTitleInput);
selectors.newTaskButton.addEventListener("click", UI.openNewTaskForm);
selectors.taskForm.addEventListener("submit", UI.updateToDoList);
selectors.cancelButton.addEventListener("click", UI.closeTaskForm);
selectors.todoListContainer.addEventListener("click", UI.updateTask);

/**
 * Brings up a pop up for creating a new project.
 */
selectors.createProject.addEventListener("click", (e) => {
  selectors.createProject.classList.toggle("inactive");
  selectors.newProjectPopup.classList.toggle("active");
});

/**
 * Actions related to creating a new project.
 */
selectors.newProjectButtons.addEventListener("click", (e) => {
  if (e.target.matches("#project-save")) {
    const newProjectTitle = selectors.newProjectInput.value.trim();
    if (!newProjectTitle) return;
    const reservedNames = getProjectTitles().map((title) =>
      title.toLowerCase()
    );

    reservedNames.push("inbox", "today");
    if (reservedNames.includes(newProjectTitle.toLowerCase())) {
      alert("Project already exists with this name!");
      return;
    }
    const project = createProjectNode(newProjectTitle);
    selectors.projectContainer.appendChild(project);
  }

  selectors.newProjectInput.value = "";
  selectors.createProject.classList.toggle("inactive");
  selectors.newProjectPopup.classList.toggle("active");
});

/**
 * Actions related to sidebar menu links.
 */
selectors.sidebar.addEventListener("click", (e) => {
  const element = e.target;

  if (element.matches("#projects-container")) return;
  if (element.matches("[data-project-delete]")) {
    const projectToDelete = element.closest("div[data-project-id]");
    const title = projectToDelete.querySelector(
      "[data-project-title]"
    ).innerText;
    projectToDelete.remove();

    deleteProjectTasks(title);
    selectors.currentProject.innerText = "Inbox";
    loadCurrentProjectTasks(selectors.currentProject.innerText);
    return;
  }

  if (element.matches(".project-card")) {
    selectors.currentProject.innerText = element.querySelector(
      "div[data-project-title]"
    ).innerText;
    loadCurrentProjectTasks(selectors.currentProject.innerText);
    return;
  }

  if (element.matches("[data-project-title]") || element.matches("li#inbox")) {
    selectors.currentProject.innerText = element.innerText;
    loadCurrentProjectTasks(selectors.currentProject.innerText);
    return;
  }

  if (element.matches("li#today")) {
    selectors.currentProject.innerText = element.innerText;
    displayTodayTasks();
  }
});
