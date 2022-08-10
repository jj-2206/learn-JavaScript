const guessForm = document.getElementById('js-guess');
const result = document.getElementById('js-result');
const maxNumber = document.getElementById('max-number');

function handleGuessSubmit(e) {
  e.preventDefault();
  // 입력이 제출되며 브라우저가 초기화되는 고유 동작을 막기 위한 코드입니다.
  const guessInput = guessForm.querySelector('input');
  if (guessInput.value === '' && maxNumber === '') {
    return;
  } // guessInput과 maxNumber이 모두 입력이 없어 값이 비었을 땐 handleGuessSubmit함수를 빠져나옵니다.
  const max = maxNumber.value;
  const random = Math.ceil(Math.random() * max);
  // Math.random()함수로 랜덤으로 숫자를 생성합니다. 이때 Math.random()은 0에서 1보다 작은 숫자를 생성하므로 숫자가 생성되는 범위는 max를 넘지 못합니다.
  // 필요한 값은 정수 형태의 숫자이기 때문에 Math.ceil()함수를 통해 값을 올림하고 소수점 이하를 없애 줍니다.
  // 여기서 버림이 아닌 올림을 하는 이유는 올림을 함으로써 max까지의 수를 얻을 수 있기 때문입니다.
  const userGuess = parseInt(guessInput.value, 10);
  // parseInt()함수는 문자열을 정수 형태로 바꿔주는 함수입니다. 맨 마지막의 10은 10진수로 변경하라는 의미입니다.
  const resultSpan = result.querySelector('span');
  resultSpan.innerHTML = `You chose: ${userGuess}, the machine chose: ${random}. <br/>
  <strong>${userGuess === random ? 'You won!' : 'You lost!'}</strong>
  `;
}

guessForm.addEventListener('submit', handleGuessSubmit);
