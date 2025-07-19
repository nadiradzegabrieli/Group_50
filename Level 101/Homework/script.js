const addBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', () => {
  const task = todoInput.value.trim();
  if (task !== "") {
    const li = document.createElement('li');
    li.innerHTML = `${task} <button class="delete-btn">Delete</button>`;
    todoList.appendChild(li);
    todoInput.value = "";
    
    li.querySelector('.delete-btn').addEventListener('click', () => {
      todoList.removeChild(li);
    });
  }
});

