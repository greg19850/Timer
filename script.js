const currentTime = new Date().getTime();
const endTime = new Date('2022.12.31 23:59').getTime();

const day = document.querySelector('.day');
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

const showTime = () => {
  const daysLeft = Math.floor(
    endTime / (1000 * 60 * 60 * 24) - currentTime / (1000 * 60 * 60 * 24)
  );
  day.textContent = daysLeft;
};

setInterval(showTime, 1000);
