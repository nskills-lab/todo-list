import { projectTemplate, projectContainer } from "../data/DOMselectors.js";
import { generateID } from "../utility/utility.js";

export function createProjectNode(title) {
  const project = projectFactory(title);
  const projectElement = projectTemplate.content.cloneNode(true);
  const id = projectElement.querySelector("[data-project-id]");
  id.dataset.projectId = project.id;
  const projectTitle = projectElement.querySelector("[data-project-title]");
  projectTitle.innerText = project.title;
  return projectElement;
}

export function getProjectTitles() {
  const projects = [
    ...projectContainer.querySelectorAll("div[data-project-title]"),
  ];
  return projects.map((element) => element.innerText);
}

const projectFactory = (title) => {
  return { id: generateID(), title };
};
