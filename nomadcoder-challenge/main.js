const clockTitle = document.querySelector('.js-clock');

function getTime() {
  const xmasDay = new Date(`${new Date().getFullYear()}-12-25:00:00:00+0900`);
  // console.log(xmasDay); // Sun Dec 25 2022 00:00:00 GMT+0900 (한국 표준시)
  const now = new Date();
  // console.log(now); // 현재 시간 생성

  // This is in milisecondsx 1초는 1000미리 초
  const difference = new Date(xmasDay - now);
  // console.log(difference);
  // Math.floor()은 나누기 후 생기는 소수점을 없애기 위해 사용합니다.
  const secondsInMs = Math.floor(difference / 1000);
  const minutesInMs = Math.floor(secondsInMs / 60);
  const hoursInMs = Math.floor(minutesInMs / 60);
  const days = Math.floor(hoursInMs / 24);

  // 출력되는 값들은 크리스마스까지 남은 일수, 남은 시간, 남은 분, 남은 초이므로
  // 나머지 값을 얻을 수 있는 모듈러(%)연산을 사용해야 합니다.
  const seconds = secondsInMs % 60;
  const minutes = minutesInMs % 60;
  const hours = hoursInMs % 24;

  const daysStr = `${days < 10 ? `0${days}` : days}d`;
  const hoursStr = `${hours < 10 ? `0${hours}` : hours}h`;
  const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}m `;
  const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}s`;
  clockTitle.innerHTML = `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
}

// 하지만 이렇게 되면 브라우저가 시작하고 1초간은 시간이 화면에 나타나지 않습니다.
// 그러므로 setInterval()전에 getTime()을 먼저 한번 실행시켜 줍니다.
getTime();
setInterval(getTime, 1000);
