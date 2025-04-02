let inpTitle = document.querySelector(".inp-title");
let inpDescription = document.querySelector(".inp-description");
const form = document.querySelector(".form");
const todoContainer = document.querySelector(".todo-container");

const todoArr = [];

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

  todoArr.map((todo) =>
    todoContainer.insertAdjacentHTML(
      "beforeend",
      `
    <div>
      <p>Title: ${todo.title}</p>
      <p>Description: ${todo.description}</p>
    </div>
  `
    )
  );

  inpTitle.value = "";
  inpDescription.value = "";
};

form.addEventListener("submit", addTodo);
