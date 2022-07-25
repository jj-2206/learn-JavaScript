// document -> JavaScript에서 HTML에 접근할 수 있는 방법
document.title = 'JS-DOM-API';
document.body;

// Grab me!
const title = document.getElementById('title');
console.log(title); // <h1 class="hello" id="title">Grab me!</h1>
title.innerText = 'Got you!';
console.log(title.id); // title
console.log(title.className); // hello

// querySelector CSS 선택자와 일치하는 첫 번째 요소 반환
// querySelectorAll CSS 선택자와 일치하는 모든 요소 배열로 반환
const hellos = document.getElementsByClassName('hello');
console.log(hellos[1]); // <h1 class="hello">className hello index 1</h1>
const className = document.getElementsByClassName('bye');
console.log(className); // HTMLCollection(3) [div.bye, div.bye, div.bye]

const querySelector = document.querySelector('.bye h1');
console.log(querySelector); // <h1>bye bye 1</h1>
querySelector.innerText = 'good bye';
const querySelectorAll = document.querySelectorAll('.bye h1');
console.log(querySelectorAll); // NodeList(3) [h1, h1, h1]

// = document.getElementById('title');
const queryTitle = document.querySelector('#title');
console.log(queryTitle); // <h1 class="hello" id="title">Got you!</h1>
queryTitle.innerText = 'Click me';

// event 찾기: property 이름 앞에 on이 있다면 event listener!
console.dir(queryTitle);

// style & event
function handleMouseEnter() {
  querySelector.innerText = 'Mouse is here!';
}
function handleMouseLeave() {
  querySelector.innerText = 'Mouse is gone!';
}
querySelector.onmouseenter = handleMouseEnter;
querySelector.addEventListener('mouseleave', handleMouseLeave);

function handleWindowResize() {
  document.body.style.backgroundColor = 'navy';
  document.body.style.color = 'pink';
}
function handleWindowCopy() {
  alert('copier!');
}
function handleWindowOffline() {
  alert('SOS NO WIFI!!!');
}
function handleWindowOnline() {
  alert('ALL GOOOOOOOD!');
}
window.addEventListener('resize', handleWindowResize);
window.addEventListener('copy', handleWindowCopy);
window.addEventListener('offline', handleWindowOffline);
window.addEventListener('online', handleWindowOnline);

function handleTitleClick() {
  const currentColor = queryTitle.style.color;
  let newColor;
  if (currentColor === 'yellow') {
    newColor = 'lightpink';
  } else {
    newColor = 'yellow';
  }
  queryTitle.style.color = newColor;
}
queryTitle.addEventListener('click', handleTitleClick);

// 본래의 class를 유지하는 방법 .classList
/*
const h2 = document.getElementById('h2');

function handleH2Click() {
  const clickedClass = 'clicked';
  if (h2.classList.contains(clickedClass)) {
    h2.classList.remove(clickedClass);
  } else {
    h2.classList.add(clickedClass);
  }
}
h2.addEventListener('click', handleH2Click);
*/

//toggle
const h2 = document.getElementById('h2');
function handleH2Click() {
  h2.classList.toggle('clicked');
}
h2.addEventListener('click', handleH2Click);
