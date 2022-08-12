const colors = [
  '#ef5777',
  '#575fcf',
  '#4bcffa',
  '#34e7e4',
  '#0be881',
  '#f53b57',
  '#3c40c6',
  '#0fbcf9',
  '#00d8d6',
  '#05c46b',
  '#ffc048',
  '#ffdd59',
  '#ff5e57',
  '#d2dae2',
  '#485460',
  '#ffa801',
  '#ffd32a',
  '#ff3f34',
];

const button = document.querySelector('button');

const handleClick = () => {
  const firstColor = colors[Math.floor(Math.random() * colors.length)];
  const secondColor = colors[Math.floor(Math.random() * colors.length)];
  // 선택된 두 가지 색상이 겹치는 것을 방지하기 위한 코드입니다.
  // 변수 firstColor와 secondColor가 동일할 경우 handleClick함수를 다시 실행합니다.
  // 이렇게 함수 내부에 자기 자신을 호출하는 함수를 재귀 함수라 합니다
  if (firstColor === secondColor) {
    return handleClick();
  }
  document.body.style.background = `linear-gradient(to left, ${firstColor}, ${secondColor})`;
};
button.addEventListener('click', handleClick);
