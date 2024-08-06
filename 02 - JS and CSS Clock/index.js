let time;

const SECOND_DEGREE = 360 / 60;
const MINUTE_DEGREE = 360 / 60;
const HOUR_DEGREE = 360 / 12;

const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

let dayCount = 0;
let hourCount = 0;
let minuteCount = 0;

const domHands = {
  hourHand,
  minHand,
  secondHand,
};

function updateHands(
  { hour, minute, second },
  { hourHand, minHand, secondHand }
) {
  const hourDeg = (hour + dayCount * 24) * HOUR_DEGREE;
  const minDeg = (minute + hourCount * 60) * MINUTE_DEGREE;
  const secondDeg = (second + minuteCount * 60) * SECOND_DEGREE;

  if (hour === 23) {
    dayCount += 1;
  }
  if (minute === 59) {
    hourCount += 1;
  }
  if (second === 59) {
    minuteCount += 1;
  }

  // The +90 accounts for the offset of the hands
  hourHand.style.transform = `rotate(${hourDeg + 90}deg)`;
  minHand.style.transform = `rotate(${minDeg + 90}deg)`;
  secondHand.style.transform = `rotate(${secondDeg + 90}deg)`;
}

setInterval(() => {
  const date = new Date();
  time = {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  };

  updateHands(time, domHands);
}, 1000);
