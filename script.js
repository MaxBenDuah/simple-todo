let inpTitle = document.querySelector(".inp-title");
let inpDescription = document.querySelector(".inp-description");
const form = document.querySelector(".form");
const todoContainer = document.querySelector(".todo-container");

let todoArr = [];

const addTodo = (e) => {
  e.preventDefault();
  const title = inpTitle.value.trim();
  const description = inpDescription.value.trim();

  const todoObj = {
    id: crypto.randomUUID(),
    title,
    description,
  };

  if (!title || !description) return;

  todoArr.push(todoObj);

  renderTodos();

  inpTitle.value = "";
  inpDescription.value = "";
};

const renderTodos = () => {
  todoContainer.innerHTML = "";

  todoArr.forEach((todo) =>
    todoContainer.insertAdjacentHTML(
      "beforeend",
      `
    <div class="todo-item" data-id="${todo.id}">
      <p>Title: ${todo.title}</p>
      <p>Description: ${todo.description}</p>
      <button class="delete-btn">Delete</button>
    </div>
  `
    )
  );
};

const deleteTodo = (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const todoItem = e.target.closest(".todo-item");
    const todoId = todoItem.dataset.id;

    todoArr = todoArr.filter((todo) => todo.id !== todoId);

    renderTodos();
  }
};

todoContainer.addEventListener("click", deleteTodo);

form.addEventListener("submit", addTodo);
