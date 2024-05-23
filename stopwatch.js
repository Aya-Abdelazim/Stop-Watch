const second = document.querySelector(".js-sec");
const minute = document.querySelector(".js-min");
const hour = document.querySelector(".js-hour");

const startButton = document.querySelector(".js-start-button");
const stopButton = document.querySelector(".js-stop-button");
const resetButton = document.querySelector(".js-reset-button");

let [seconds, hours, minutes] = [0, 0, 0];
let intervalId;
let isRunning = false;

function timer() {
  if (!isRunning) {
    intervalId = setInterval(() => {
      seconds++;
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }
      const paddedSeconds = seconds.toString().padStart(2, "0");
      const paddedMinutes = minutes.toString().padStart(2, "0");
      const paddedHours = hours.toString().padStart(2, "0");

      second.innerHTML = paddedSeconds;
      minute.innerHTML = `${paddedMinutes}:`;
      hour.innerHTML = `${paddedHours}:`;
    }, 1000);
    isRunning = true;
  } else {
    clearInterval(intervalId);
    isRunning = false;
  }
}
startButton.addEventListener("click", () => {
  timer();
});

stopButton.addEventListener("click", () => {
  timer();
  document.querySelector(
    ".js-lab-time"
  ).innerHTML = `Lab Time: ${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
});

resetButton.addEventListener("click", () => {
  resetTimer();
  updateResetButton();
});

function resetTimer() {
  [seconds, hours, minutes] = [0, 0, 0];
  clearInterval(intervalId);
  isRunning = false;
}

function updateResetButton() {
  second.innerHTML = "00";
  minute.innerHTML = "00:";
  hour.innerHTML = "00:";
}
