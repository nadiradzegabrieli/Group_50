let todos = [];
let currentPage = 1;
let itemsPerPage = 5;

const list = document.getElementById("todoList");
const pagination = document.getElementById("pagination");
const filter = document.getElementById("completedFilter");
const limitSelect = document.getElementById("limitSelect");

fetch("https://jsonplaceholder.typicode.com/todos")
  .then(res => res.json())
  .then(data => {
    todos = data;
    render();
  });

function render() {
  const filtered = todos.filter(todo => {
    if (filter.value === "true") return todo.completed;
    if (filter.value === "false") return !todo.completed;
    return true;
  });

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = filtered.slice(start, end);

  list.innerHTML = currentItems
    .map(todo => <li>${todo.title} - ${todo.completed ? "✔" : "❌"}</li>)
    .join("");

  renderPagination(filtered.length);
}

function renderPagination(total) {
  const pages = Math.ceil(total / itemsPerPage);
  pagination.innerHTML = "";
  for (let i = 1; i <= pages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.onclick = () => {
      currentPage = i;
      render();
    };
    pagination.appendChild(btn);
  }
}

filter.addEventListener("change", () => {
  currentPage = 1;
  render();
});

limitSelect.addEventListener("change", () => {
  itemsPerPage = +limitSelect.value;
  currentPage = 1;
  render();
});