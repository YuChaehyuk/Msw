const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("items");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  let li = event.target.parentElement;
  if (li.className.includes("btn_boxes")) {
    li = li.lastChild;
  }
  const clickedBtnBox = li.parentElement;
  const clickeditemRow = clickedBtnBox.parentElement;
  clickeditemRow.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(clickeditemRow.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const itemRow = document.createElement("li");
  itemRow.id = newTodo.id;
  itemRow.setAttribute("class", "item_row");

  const itemText = document.createElement("span");
  itemText.innerText = newTodo.text;

  const btnBox = document.createElement("div");
  btnBox.setAttribute("class", "btn_boxes");

  const checkBtn = document.createElement("button");
  checkBtn.setAttribute("class", "iconcircle check");
  checkBtn.innerHTML = '<i class="fas fa-check "></i>';

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "iconcircle trash");
  deleteBtn.innerHTML = `<i class="fas fa-trash" ></i>`;
  deleteBtn.addEventListener("click", deleteToDo);

  btnBox.appendChild(checkBtn);
  btnBox.appendChild(deleteBtn);
  itemRow.appendChild(itemText);
  itemRow.appendChild(btnBox);

  toDoList.appendChild(itemRow);

  checkBtn.addEventListener("click", () => {
    itemRow.classList.toggle("item_Done");
    checkBtn.classList.toggle("iconcircle_Done");
    itemText.classList.toggle("item__name_Done");

    let checkClass = checkBtn.classList.contains("iconcircle_Done");
    if (checkClass == true) {
      checkBtn.innerHTML = '<i class="fas fa-check checkIcon_Done"></i>';
    } else {
      checkBtn.innerHTML = '<i class="fas fa-check "></i>';
    }
  });
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}