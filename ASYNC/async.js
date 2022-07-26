// async & await

// 1. async
async function fetchUser() {
  return 'jj';
}

const user = fetchUser();
user.then(console.log); // Promise {<fulfilled>: 'jj'}
console.log(user); // jj

// 2. await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  // throw 'error';
  return '🍎';
}

async function getWatermelon() {
  await delay(1000);
  return '🍉';
}

// error 처리
// async function pickFruits() {
//   try {
//     const apple = await getApple();
//     const watermelon = await getWatermelon();
//   } catch (error) {
//     return '😵';
//   }
//   return `${apple} + ${watermelon}`;
// }
// pickFruits().then(console.log); // 🍎 + 🍉

// 병렬구조! 콘솔에 출력되기까지 6초 걸렸던 것을 3초로 단축!
async function pickFruits() {
  const applePromise = getApple();
  const watermelonPromise = getWatermelon();
  const apple = await applePromise;
  const watermelon = await watermelonPromise;
  return `${apple} + ${watermelon}`;
}
// pickFruits().then(console.log);

// 3. useful Promise APIs
// pickAllFruits 병렬구조, 한꺼번에 다 받아오는 모양.
function pickAllFruits() {
  return Promise.all([getApple(), getWatermelon()]).then((fruits) => fruits.join(' + '));
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getWatermelon()]);
}
pickOnlyOne().then(console.log); // 🍉

/* Promise 
function getWatermelon() {
  return delay(3000).then(() => '🍉');
} 
function pickFruits() {
  return getApple().then((apple) => {
    return getWatermelon().then((watermelon) => `${apple} + ${watermelon}`);
  });
}
pickFruits().then(console.log); // 🍎 + 🍉
*/
