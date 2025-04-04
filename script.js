// Query Selectors
let inpTitle = document.querySelector(".inp-title");
let inpDescription = document.querySelector(".inp-description");
const form = document.querySelector(".form");
const todoContainer = document.querySelector(".todo-container");

let todoArr = [];

// Add Todo's to todoArr
const addTodo = (e) => {
  e.preventDefault();
  const title = inpTitle.value.trim();
  const description = inpDescription.value.trim();

  const todoObj = {
    id: crypto.randomUUID(),
    title,
    description,
    completed: false,
  };

  if (!title || !description) {
    alert("Please enter a title and a description");
    return;
  }

  todoArr = [...todoArr, todoObj];

  renderTodos();

  form.reset();
};

// Render Todos
const renderTodos = () => {
  todoContainer.innerHTML = "";

  todoArr.forEach((todo) =>
    todoContainer.insertAdjacentHTML(
      "beforeend",
      `
    <div class="todo-item" data-id="${todo.id}">
      <input type="checkbox" class="check" ${
        todo.completed === true ? "checked" : ""
      } />
      <p style="${
        todo.completed === true ? "text-decoration: line-through" : ""
      }">Title: ${todo.title}</p>
      <p style="${
        todo.completed === true ? "text-decoration: line-through" : ""
      }">Description: ${todo.description}</p>
      <p>Status: ${todo.completed === true ? "Completed" : "Pending"}</p>
      <button class="delete-btn">Delete</button>

    </div>
  `
    )
  );
};

// Delete Todos
const deleteTodo = (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const todoItem = e.target.closest(".todo-item");
    const todoId = todoItem.dataset.id;

    todoArr = todoArr.filter((todo) => todo.id !== todoId);

    renderTodos();
  }
};

// Check status of Todos either completed or pending
const completedTodos = (e) => {
  if (e.target.classList.contains("check")) {
    const todoItem = e.target.closest(".todo-item");
    const todoId = todoItem.dataset.id;

    todoArr = todoArr.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );

    renderTodos();
  }
};

// Event Listeners
todoContainer.addEventListener("click", completedTodos);
todoContainer.addEventListener("click", deleteTodo);
form.addEventListener("submit", addTodo);
