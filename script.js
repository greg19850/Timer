const endTime = new Date('2023.07.17 00:00').getTime();

const day = document.querySelector('.day');
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

const showTime = () => {
  const currentTime = new Date().getTime();

  const daysLeft = Math.floor(
    endTime / (1000 * 60 * 60 * 24) - currentTime / (1000 * 60 * 60 * 24)
  );
  const hoursLeft =
    Math.floor(endTime / (1000 * 60 * 60) - currentTime / (1000 * 60 * 60)) %
    24;
  const minutesLeft =
    Math.floor(endTime / (1000 * 60) - currentTime / (1000 * 60)) % 60;
  const secondsLeft = Math.floor(endTime / 1000 - currentTime / 1000) % 60;

  day.textContent = daysLeft < 10 ? `0${daysLeft}` : daysLeft;
  hour.textContent = hoursLeft < 10 ? `0${hoursLeft}` : hoursLeft;
  minute.textContent = minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft;
  second.textContent = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft;
};

setInterval(showTime, 1000);
