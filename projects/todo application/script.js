let buttonAdd = document.querySelector("#add");
let box = document.querySelector(".box");
let input = document.querySelector(".input");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

// Render existing todos on page load
todos.forEach(todo => createTodoElement(todo));

function createTodoElement(todoText) {
    let itemContainer = document.createElement("div");
    itemContainer.classList.add("item");

    let text = document.createElement("p");
    text.innerText = todoText;

    let btn = document.createElement("button");
    btn.innerText = "delete";
    btn.classList.add("remove");

    // Delete functionality
    btn.addEventListener("click", () => {
        itemContainer.remove();
        // Remove from array and update Local Storage
        todos = todos.filter(t => t !== todoText);
        localStorage.setItem("todos", JSON.stringify(todos));
    });

    itemContainer.appendChild(text);
    itemContainer.appendChild(btn);
    box.appendChild(itemContainer);
}

buttonAdd.addEventListener("click", (e) => {
    e.preventDefault();
    const todoText = input.value.trim();
    if (todoText === "") return;

    createTodoElement(todoText);
    todos.push(todoText);
    localStorage.setItem("todos", JSON.stringify(todos));
    input.value = "";
});