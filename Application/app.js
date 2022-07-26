const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const link = document.querySelector('a');

// form을 submit하는 것에 주의! - html확인 form안의 input!
function onLoginSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);
}
loginForm.addEventListener('submit', onLoginSubmit);

// addEventListener에 들어간 함수는 브라우저가 실행시켜주는 함수!
function handleLinkClick(event) {
  event.preventDefault();
  console.log(event);
  alert('click');
}
link.addEventListener('click', handleLinkClick);
