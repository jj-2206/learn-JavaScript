// 배열 선언
const animals = [
  { name: 'lion', size: 'big', isAggressive: true, weight: 200 },
  { name: 'monkey', size: 'medium', isAggressive: true, weight: 30 },
  { name: 'cat', size: 'small', isAggressive: false, weight: 10 },
  { name: 'rat', size: 'small', isAggressive: false, weight: 2 },
];

// 반복문
// for문
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i].name);
}

// 배열 안의 아이템 (animals 배열안의 animal 아이템)
for (let animal of animals) {
  console.log(animal.weight);
}

// while문
let i = 0;
while (i <= 10) {
  console.log(`${i}: while문`);
  i++;
}

animals.forEach(function (animal, index) {
  return console.log(animal.name, index + 1);
});

// map
const animalsNames = animals.map(
  (animal, index) =>
    `number ${index + 1} Animal's name is ${animal.name} and size is ${animal.size}`
);

console.log(animalsNames[0]);

// filter
const smallAnimals = animals.filter((item) => item.size === 'small');
console.log(smallAnimals[0].name, smallAnimals[1].name);

// reduce
const numbers = [1, 10, 11, 23, 444];
const total = numbers.reduce(function (acc, cur) {
  console.log(acc, cur);
  return acc + cur;
});
console.log(total);

const totalWeight = animals.reduce(function (acc, cur) {
  return acc + cur.weight;
}, 0);
console.log(totalWeight);
// , 0) 초기값을 설정하지 않으면 [object Object]30102
// 첫 acc에 { name: 'lion', size: 'big', isAggressive: true, weight: 200 } 가 들어가게 된다.
// 0 + 200 ... 순으로 진행되게 된다.

// 삼항 연산자, 참일 경우 거짓일 경우

const animal = 'lion';
const food = animal === 'lion' ? 'meat' : 'apple';
console.log(food);

// switch case문
const scAnimal = 'hippo';
switch (scAnimal) {
  case 'lion':
    console.log('a animal is lion');
    break;
  case 'monkey':
    console.log('a animal is monkey');
    break;
  default:
    console.log('animal is unknown');
}

// 함수
// ES6 부터 함수 매개변수에 기본값을 줄 수 있다.
// NaN -> a = 1, b = 1 초기값을 설정할 수 있게 되었다!
function add(a = 1, b = 1) {
  return a + b;
}
const sum = add(10, 20);
console.log(sum); // 30

// 화살표 함수
const add2 = (a = 1, b = 1) => a + b;
console.log(add(10, 20));
