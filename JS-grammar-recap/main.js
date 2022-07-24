const list = ['tomato', 'chocolate'];
console.log(list[0]);
list[1] = 'apple';
console.log(list);
list.push('cherry');
console.log(list);

function plus(a, b) {
  console.log(a + b);
}
plus(1, 2);

const player = {
  name: 'jj',
  sayHello: function (otherPersonName) {
    console.log('Hello ' + otherPersonName + ' nice to meet you');
  },
};
// console도 object!
console.log(player.name);
player.sayHello('jh');

const calculator = {
  plus: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  divide: function (a, b) {
    console.log(a / b);
  },
  times: function (a, b) {
    console.log(a * b);
  },
};
calculator.divide(9, 3);
calculator.times(9, 3);
calculator.plus(9, 3);
calculator.minus(9, 3);

const age = 88;
function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}
const KrAge = calculateKrAge(age);
console.log(KrAge);

const calculator2 = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  times: function (a, b) {
    return a * b;
  },
};
// 상호 의존적! return 값을 사용할 수 있게 된다!
const resultDivide = calculator2.divide(9, 3);
console.log('return', resultDivide);
const resultPlus = calculator2.plus(resultDivide, 3);
console.log('return', resultPlus);
const resultTimes = calculator2.times(resultDivide, resultPlus);
console.log('return', resultTimes);

// string -> number parseInt();
// isNaN(); return boolean
const howOld = parseInt(prompt('How old are you?'));
console.log(isNaN(howOld));

if (isNaN(howOld) || howOld < 0) {
  console.log('please write a real positive number');
} else if (howOld < 19) {
  console.log('you are too young');
} else if (howOld >= 19 && howOld <= 70) {
  console.log('you can drink');
} else if (howOld === 100) {
  console.log('WOW');
} else if (howOld >= 80) {
  console.log('You can do whatever you want');
}
