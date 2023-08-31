const projectTemplate = document.querySelector("#project-template");
const generator = idGenerator();
const projectContainer = document.querySelector("#projects-container");

export function createProjectNode(title) {
  const project = projectFactory(title);
  const projectElement = projectTemplate.content.cloneNode(true);
  projectElement;
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
  return { id: generator.next().value.toString(), title };
};
function* idGenerator() {
  let count = 1;
  while (true) {
    yield count++;
  }
}
