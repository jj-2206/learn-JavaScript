const quotes = [
  {
    quote: 'The way to get started is to quit talking and begin doing.',
    author: 'Walt Disney',
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: 'John Lennon',
  },
  {
    quote: 'The world is a book and those who do not travel read only one page.',
    author: 'Saint Augustine',
  },
  {
    quote: 'Life is either a daring adventure or nothing at all.',
    author: 'Helen Keller',
  },
  {
    quote: 'To Travel is to Live',
    author: 'Hans Christian Andersen',
  },
  {
    quote: 'Only a life lived for others is a life worthwhile.',
    author: 'Albert Einstein',
  },
  {
    quote: 'You only live once, but if you do it right, once is enough.',
    author: 'Mae West',
  },
  {
    quote: 'Never go on trips with anyone you do ntot love.',
    author: 'Hemmingway',
  },
  {
    quote: 'We wander for distraction, but we travel for fulfilment.',
    author: 'Hilaire Belloc',
  },
  {
    quote: 'Travel expands the mind and fills the gap.',
    author: 'Sheda Savage',
  },
];
const [quote, author] = document.querySelectorAll('span');
// const quote = document.querySelector('#quote span:first-child');
// const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

/*
Math 수학적인 상수와 함수를 위한 속성과 메서드를 가진 내장 객체입니다. 함수 객체가 아닙니다.
.round() 반올림 후 정수 반환
.ceil(숫자) 숫자와 같거나 올림 정수 반환
.floor(숫자) 숫자와 같거나 버림 정수 반환
.random() 0 이상 1 미만의 구간의 난수 반환 0. 00480

Array.length 
Array 인스턴스의 length 속성은 배열의 길이를 반환합니다.
*/
