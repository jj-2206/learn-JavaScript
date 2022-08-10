const clock = document.querySelector('.js-clock');

function calculateChristmasCountdown() {
  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentDay = now.getDate();
  let nextChristmasYear = now.getFullYear();
  if (currentMonth == 12 && currentDay > 25) {
    nextChristmasYear = nextChristmasYear + 1;
  }
  const nextChristmasDate = nextChristmasYear + '-12-25T00:00:00.000Z';
  const christmasDay = new Date(nextChristmasDate);

  let diffSeconds = Math.floor((christmasDay.getTime() - now.getTime()) / 1000);
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  if (currentMonth != 12 || (currentMonth == 12 && currentDay != 25)) {
    days = Math.floor(diffSeconds / (3600 * 24));
    diffSeconds -= days * 3600 * 24;
    hours = Math.floor(diffSeconds / 3600);
    diffSeconds -= hours * 3600;
    minutes = Math.floor(diffSeconds / 60);
    diffSeconds -= minutes * 60;
    seconds = diffSeconds;
  }

  clock.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  setTimeout(calculateChristmasCountdown, 1000);
}

calculateChristmasCountdown();
