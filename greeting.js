// QuerySelector All
// QuerySelector는 처음 나오는 하나의 이름만 매칭

// Find Tag, Class name and  HTML-JS Link, make Object
const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

// Local Storage Name
const USER_LS = "currentUser";

// Class name
const SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  // Enter not working(event prevented)
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  // Remove Form
  form.classList.remove(SHOWING_CN);
  // Add Greeting String
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  // USER_LS Key를 가진 Value를 가져와서 variable currentUser에 저장
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    //  She is not
    askForName();
  } else {
    //  She is
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
