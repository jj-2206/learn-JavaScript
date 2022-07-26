const clock = document.querySelector('#clock');

function sayHello() {
  console.log('Hello');
}

setTimeout(sayHello, 5000);

// setInterval(함수, number(ms)) 5초마다 실행
// setInterval(sayHello, 5000);
