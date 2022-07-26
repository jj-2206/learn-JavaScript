// state: pending -> fullfilled or reject
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executer(resolve, reject) runs automatically.
const promise = new Promise((resolve, reject) => {
  console.log('doing something');
  setTimeout(() => {
    resolve('jj');
    // reject(new Error('no network'));
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise
  .then((value) => {
    console.log(value, 'resolve의 인수');
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });

// 3. promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});
fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));
// then 값을 바로 전달할 수도 있다!

// 4. Error Handling
const tiger = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐯'), 1000);
  });
const baseBall = (tigers) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${tigers} => ⚾`), 1000);
  });
const ksWin = (baseballteam) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${baseballteam} => 1️⃣`)), 1000);
  });

// tiger()
//   .then((tigers) => baseBall(tigers))
//   .then((baseballteam) => ksWin(baseballteam))
//   .then((winner) => console.log(winner)); 🐯 => ⚾ => 1️⃣
tiger() //
  .then(baseBall)
  .then(ksWin)
  .catch((error) => {
    return '🐯 => 🍂⚾';
  })
  .then(console.log);
