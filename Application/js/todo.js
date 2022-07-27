const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');

const TODOS_KEY = 'todos';

// input 입력값을 배열로 만들기
// toDos는 빈배열 -> refresh 할 때마다 로컬스토리지에 "비워내고 다시 담고" 있는 결과를 만듦
// 업데이트 할 수 있게 const 에서 let 으로 키워드 변경
let toDos = [];

// localStorage에 저장
function saveToDos() {
  // JSON.stringify() 배열[]이나 객체{}를 string으로 만들어준다.
  // 객체를 JSON 포맷의 문자열로 변환합니다.
  // localStorage.setItem('todos', toDos); // 1,2,3
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// target 이벤트 특정하기 -> 부모 요소 찾기
function deleteToDo(event) {
  // console.log(event.target.parentElement.innerText);
  const li = event.target.parentElement;
  li.remove();
  // filter 지우고 싶은 item을 제외하고 새 array를 반환, 원형 보존
  // console.log(typeof li.id); string
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement('li');
  li.id = newTodo.id;
  const span = document.createElement('span');
  span.innerText = newTodo.text;
  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', deleteToDo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = '';
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}
toDoForm.addEventListener('submit', handleTodoSubmit);

// forEach()
// function sayHello(item) {
// console.log('This is the trun of', item);
// This is the trun of 1
// This is the trun of 2
// This is the trun of 3
// This is the trun of 4
// This is the trun of 5
// This is the trun of 6
// This is the trun of 7
// This is the trun of 8
// }

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos); // ["1","2","3","4","5","6","7","8"]
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  console.log(parsedToDos); // (8) ['1', '2', '3', '4', '5', '6', '7', '8']
  // parsedToDos.forEach(sayHello);
  // parsedToDos.forEach((item) => console.log('This is the trun of', item));
  parsedToDos.forEach(paintToDo);
}
