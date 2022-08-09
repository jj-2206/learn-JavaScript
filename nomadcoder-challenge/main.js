const setNumberForm = document.querySelector('#setNumber');
const setNumberInput = document.querySelector('#setNumber input');
const userNumberForm = document.querySelector('#userNumber');
const userNumberInput = document.querySelector('#userNumber input');
const userNumberBtn = document.querySelector('#userNumber button');
const displayResult = document.querySelector('#displayResult');

function numberSubmit(event) {
  event.preventDefault();
  const setNum = Number(setNumberInput.value);
  // console.log(setNum, typeof setNum);
}
setNumberForm.addEventListener('submit', numberSubmit);

function userNumberSubmit(event) {
  event.preventDefault();
  const userNum = Number(userNumberInput.value);
  display(userNum);
  // console.log(userNum, typeof userNum);
}
userNumberForm.addEventListener('submit', userNumberSubmit);

function display() {
  const userNum = Number(userNumberInput.value);
  const setNum = Number(setNumberInput.value);
  const randomNum = Math.floor(Math.random() * setNum + 1);
  if (userNum === randomNum) {
    displayResult.innerText = `you chose: ${userNum}, the machine chose: ${randomNum}.
    \n You won!`;
  } else
    displayResult.innerText = `you chose: ${userNum}, the machine chose: ${randomNum}.
  \n You lost!`;
}

// function makeRandom() {
//   const setNum = Number(setNumberInput.value);
//   const randomNum = Math.floor(Math.random() * setNum + 1);
//   // console.log(randomNum, typeof randomNum);
// }
// userNumberBtn.addEventListener('click', makeRandom);
