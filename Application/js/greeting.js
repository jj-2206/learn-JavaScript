const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

// string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용한다.
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

// form을 submit하는 것에 주의! 기본 동작 -> refresh 새로고침
function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;

  // localStorage(.setItem(key, value), .getItem, .removeItem)
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}
// addEventListener의 인자로 받는 함수는 브라우저가 자동으로 실행시켜준다.
loginForm.addEventListener('submit', onLoginSubmit);

function paintGreeting(username) {
  // greeting.innerText = 'Hello ' + username;
  // string과 변수를 합치는 방법: 백틱으로 감싸서 한 덩어리로 만들기, 변수는 ${}로 감싸기
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  // form 표시
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  // addEventListener의 인자로 받는 함수는 브라우저가 자동으로 실행시켜준다.
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  // greeting 표시
  paintGreeting(savedUsername);
}
