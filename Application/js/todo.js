const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');

// input 입력값을 배열로 만들기 toDos는 빈배열
const toDos = [];

// localStorage에 저장
function saveToDos() {
  // JSON.stringify() 배열[]이나 객체{}를 string으로 만들어준다.
  // localStorage.setItem('todos', toDos); 1,2,3
  localStorage.setItem('todos', JSON.stringify(toDos));
}

// target 이벤트 특정하기 -> 부모 요소 찾기
function deleteToDo(event) {
  // console.log(event.target.parentElement.innerText);
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerText = newTodo;
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
  // Array.prototype.push()
  toDos.push(newTodo);
  // console.log(toDos);
  paintToDo(newTodo);
  saveToDos();
}
toDoForm.addEventListener('submit', handleTodoSubmit);
