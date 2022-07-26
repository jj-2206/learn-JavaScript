const clock = document.querySelector('#clock');

function getClock() {
  // JavaScript Date 객체
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock();
setInterval(getClock, 1000);

// setTimeout(Function, Number) ms후에 한 번 실행
// setInterval(Function, Number) ms마다 실행
