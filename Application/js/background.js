const images = ['0.png', '1.jpg', '2.jpg', '3.jpg'];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// html 요소 만들기 createElement
const bgImage = document.createElement('img');

bgImage.src = `./img/${chosenImage}`;
// console.log(bgImage); // <img src="./img/2.png">

// 만든 요소를 추가하기 appendChild
document.body.appendChild(bgImage);
