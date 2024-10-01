let startTime;
let elapsedTime = 0;
let interval;

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function startStopwatch() {
    startTime = Date.now() - elapsedTime;
    interval = setInterval(function() {
        elapsedTime = Date.now() - startTime;
        timerDisplay.textContent = formatTime(elapsedTime);
    }, 1000); // Update every second
}

function stopStopwatch() {
    clearInterval(interval);
}

function resetStopwatch() {
    clearInterval(interval);
    elapsedTime = 0;
    timerDisplay.textContent = formatTime(elapsedTime);
}

function formatTime(time) {
    let seconds = Math.floor(time / 1000);
    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

startBtn.addEventListener('click', startStopwatch);
stopBtn.addEventListener('click', stopStopwatch);
resetBtn.addEventListener('click', resetStopwatch);