const clock = document.querySelector('#clock');

function getClock() {
  // JavaScript Date 객체
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// 시계 표시 즉시 실행 후, 1초 마다 실행
getClock();
setInterval(getClock, 1000);

// setTimeout(Function, Number) ms후에 한 번 실행
// setInterval(Function, Number) ms마다 실행

/* String.prototype.padStart()
const padStart = '1'.padStart(3, '0');
console.log(padStart); // 001
*/
