const projectTemplate = document.querySelector("#project-template");
const generator = idGenerator();

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

const projectFactory = (title) => {
  return { id: generator.next().value.toString(), title };
};
function* idGenerator() {
  let count = 1;
  while (true) {
    yield count++;
  }
}
