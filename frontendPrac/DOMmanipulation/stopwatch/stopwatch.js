let timerID;
let lastTimerStartTime = 0;
let millisElapsedBeforeStart = 0;

const timer = document.getElementById('timer');
const startBtn = document.getElementById('start-button')
const stopBtn = document.getElementById('stop-button')
const resetBtn = document.getElementById('reset-button')

startBtn.addEventListener('click', startTimer)
stopBtn.addEventListener('click', stopTimer)
resetBtn.addEventListener('click', resetTimer)

function startTimer() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  resetBtn.disabled = true;

  lastTimerStartTime = Date.now();

  timerID = requestAnimationFrame(updateTimer)
}

function stopTimer() {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = false;

  millisElapsedBeforeStart += Date.now() - lastTimerStartTime;

  cancelAnimationFrame(timerID);
}

function resetTimer() {
  resetBtn.disabled = true;
  timer.textContent = '00:00:000';

  millisElapsedBeforeStart = 0;
}

function updateTimer() {
  const millisElapsed = Date.now() - lastTimerStartTime + millisElapsedBeforeStart;
  const secondsElapsed = millisElapsed / 1000;
  const minutesElapsed = secondsElapsed / 60;

  const millisText = formatNumber(millisElapsed % 1000, 3);
  const secondsText = formatNumber(Math.floor(secondsElapsed) % 60, 2);
  const minutesText = formatNumber(Math.floor(minutesElapsed), 2);

  timer.textContent = `${minutesText}:${secondsText}:${millisText}`;

  timerID = requestAnimationFrame(updateTimer);
}

function formatNumber(number, desiredLength) {
  const stringNumber = String(number);
  return stringNumber.padStart(desiredLength, '0');
}