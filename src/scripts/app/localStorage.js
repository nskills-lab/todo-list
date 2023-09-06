export function saveToLocalStorage(item) {
  localStorage.setItem("todoListApp", item);
}
export function getFromLocalStorage() {
  return localStorage.getItem("todoListApp") ?? {};
}
