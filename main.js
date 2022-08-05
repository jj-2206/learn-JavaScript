// <⚠️ DONT DELETE THIS ⚠️>
const colors = ['#1abc9c', '#3498db', '#9b59b6', '#f39c12', '#e74c3c'];
// <⚠️ /DONT DELETE THIS ⚠️>

const h2 = document.querySelector('h2');
const superEventHandler = {
  handleEnter: function () {
    h2.innerText = 'The mouse is here!';
    h2.style.color = colors[0];
  },
  handleLeave: function () {
    h2.innerText = 'The mouse is gone!';
    h2.style.color = colors[1];
  },
  handleResize: function () {
    h2.innerText = 'You just resized!';
    h2.style.color = colors[2];
  },
  handleClick: function () {
    h2.innerText = 'That was a right click!';
    h2.style.color = colors[4];
  },
};

h2.addEventListener('mouseenter', superEventHandler.handleEnter);
h2.addEventListener('mouseleave', superEventHandler.handleLeave);
window.addEventListener('resize', superEventHandler.handleResize);
window.addEventListener('contextmenu', superEventHandler.handleClick);

// 여러 개의 이벤트를 하나로 작성하는 방법 (객체 내부에 함수를 선언할 때 사용하는 문법)
// css 작성 형식과 같다. {}obect로 담아서 key를 꺼내기
// superEventHandler.handleEnter
