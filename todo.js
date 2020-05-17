const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

// Local Storage
const TODOS_LS = "toDos";

let toDos = [];

// Class Name
// const SHOWING_CN = "showing";

function deleteToDo() {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  //   filter foreach run
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  console.log(cleanToDos);
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  // JSON.stringify JS object to String
  // localStorage saves String
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const lis = document.createElement("li");
  const delBtn = document.createElement("btn");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerHTML = "🔳";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;

  //   Append child to List
  lis.appendChild(delBtn);
  lis.appendChild(span);
  lis.id = newId;
  toDoList.appendChild(lis);

  // Obj Initialized
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  //   Initialized
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    // JSON(JavaScriptObjectNotation)
    const parsedToDos = JSON.parse(loadedToDos);
    // After JSON.parse makes parsedToDos Understand JavaScript
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
