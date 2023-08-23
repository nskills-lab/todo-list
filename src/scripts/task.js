export class Task {
  constructor(id, name, description, dueDate, priority, project) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
  }
}
