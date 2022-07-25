const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');

// form을 submit하는 것에 주의! - html확인 form안의 input!
function onLoginSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);
}
loginForm.addEventListener('submit', onLoginSubmit);

// -> Events part Two
