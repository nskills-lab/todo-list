import isToday from "date-fns/isToday";
import { todoListContainer, mainContent } from "../data/DOMselectors.js";
import { handleTodoListBackground } from "./todoList.js";

export function displayTodayTasks() {
  const tasks = [...todoListContainer.querySelectorAll(".task-card")];
  handleTodoListBackground(tasks);

  tasks.forEach((task) => {
    const dueDate = task.querySelector("[data-due-date]").innerText;
    const classes = [...task.classList];

    if (dueDate) {
      const [year, month, day] = dueDate.split("-");
      // month is 0 based
      const date = new Date(year, parseInt(month) - 1, day);
      let today = isToday(date);

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
