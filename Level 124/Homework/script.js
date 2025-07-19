    const taskList = document.getElementById("taskList");

    function loadLimitedTasks() {
      const limit = document.getElementById("limitInput").value || 5;
      const xhr = new XMLHttpRequest();
      xhr.open("GET", `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
      xhr.onload = function() {
        const tasks = JSON.parse(xhr.responseText);
        renderTasks(tasks);
      };
      xhr.send();
    }

    function filterCompleted() {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", "https://jsonplaceholder.typicode.com/todos?completed=true");
      xhr.onload = function() {
        const tasks = JSON.parse(xhr.responseText);
        renderTasks(tasks);
      };
      xhr.send();
    }

    function filterUncompleted() {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", "https://jsonplaceholder.typicode.com/todos?completed=false");
      xhr.onload = function() {
        const tasks = JSON.parse(xhr.responseText);
        renderTasks(tasks);
      };
      xhr.send();
    }

    function loadTaskById() {
      const id = document.getElementById("idInput").value;
      if (!id) return;
      const xhr = new XMLHttpRequest();
      xhr.open("GET", `https://jsonplaceholder.typicode.com/todos/${id}`);
      xhr.onload = function() {
        const task = JSON.parse(xhr.responseText);
        renderTasks([task]);
      };
      xhr.send();
    }

    function renderTasks(tasks) {
      taskList.innerHTML = "";
      tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = `${task.id}. ${task.title}`;
        if (task.completed) {
          li.classList.add("completed");
        }
        taskList.appendChild(li);
      });
    }