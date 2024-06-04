const display = document.querySelector('.display');
const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const resetBtn = document.querySelector('.reset');
const lapBtn = document.querySelector('.lap');
const lapsList = document.querySelector('.laps');

let startTime;
let elapsedTime = 0;
let timerInterval;
let lapNumber = 1;

function displayTime(time) {
    const hours = Math.floor(time / (60 * 60 * 1000));
    const minutes = Math.floor((time % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((time % (60 * 1000)) / 1000);
    const milliseconds = Math.floor(time % 1000);

    display.textContent = 
        `${hours < 10 ? '0' : ''}${hours} : ${minutes < 10 ? '0' : ''}${minutes} : ${seconds < 10 ? '0' : ''}${seconds} : ${milliseconds < 100 ? '0' : ''}${milliseconds}`;
}


function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function() {
        elapsedTime = Date.now() - startTime;
        displayTime(elapsedTime);
    }, 120); // Update every 100 milliseconds
}

function pauseTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    displayTime(elapsedTime);
    lapNumber = 1;
    lapsList.innerHTML = '';
}

function lapTimer() {
    const lapTime = elapsedTime;
    const li = document.createElement('li');
    li.textContent = `Lap ${lapNumber}: ${display.textContent}`;
    lapsList.appendChild(li);
    lapNumber++;
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
lapBtn.addEventListener('click', lapTimer);
