// 배열 선언
const animals = [
  { name: 'lion', size: 'big', isAggressive: true, weight: 200 },
  { name: 'monkey', size: 'medium', isAggressive: true, weight: 30 },
  { name: 'cat', size: 'small', isAggressive: false, weight: 10 },
  { name: 'rat', size: 'small', isAggressive: false, weight: 2 },
];

// 반복문
// for문
for (let i = 0; i < animals.length; i += 1) {
  console.log(animals[i].name);
  // lion
  // monkey
  // cat
  // rat
}

// 배열 안의 아이템 (animals 배열안의 animal 아이템)
for (let animal of animals) {
  console.log(animal.weight);
  // 200
  // 30
  // 10
  // 2
}

// while문
let i = 0;
while (i <= 10) {
  console.log(`${i}: while문`);
  //  0: while문
  //  1: while문
  //  2: while문
  //  3: while문
  //  4: while문
  //  5: while문
  //  6: while문
  //  7: while문
  //  8: while문
  //  9: while문
  //  10: while문
  i += 1;
}

animals.forEach(function (animal, index) {
  return console.log(animal.name, index + 1);
  //  lion 1
  //  monkey 2
  //  cat 3
  //  rat 4
});

// map
const animalsNames = animals.map(
  (animal, index) =>
    `number ${index + 1} Animal's name is ${animal.name} and size is ${animal.size}`
);

console.log(animalsNames);
// ["number 1 Animal's name is lion and size is big", "number 2 Animal's name is monkey and size is medium", "number 3 Animal's name is cat and size is small", "number 4 Animal's name is rat and size is small"]
console.log(animalsNames[0]);
// number 1 Animal's name is lion and size is big

// filter
const smallAnimals = animals.filter((item) => item.size === 'small');
console.log(smallAnimals);
// [{…}, {…}]
// 0: {name: 'cat', size: 'small', isAggressive: false, weight: 10}
// 1: {name: 'rat', size: 'small', isAggressive: false, weight: 2}
console.log(smallAnimals[0].name);
// cat

// reduce
const numbers = [1, 10, 11, 23, 444];
const total = numbers.reduce(function (acc, cur) {
  console.log(acc, cur);
  // 1 10
  // 11 11
  // 22 23
  // 45 444
  return acc + cur;
});
console.log(total);
// 489

const totalWeight = animals.reduce(function (acc, cur) {
  return acc + cur.weight;
}, 0);
console.log(totalWeight); // 242
// , 0) 초기값을 설정하지 않으면 [object Object]30102
// 첫 acc에 { name: 'lion', size: 'big', isAggressive: true, weight: 200 } 가 들어가게 된다.
// 0 + 200 ... 순으로 진행되게 된다.

// 삼항 연산자, 참일 경우 거짓일 경우

const animal = 'lion';
const food = animal === 'lion' ? 'meat' : 'apple';
console.log(food); // meat

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
// hippo case는 없으므로, animal is unknown

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
console.log(add(10, 20)); // 30
