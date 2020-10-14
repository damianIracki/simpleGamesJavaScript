const sqaures = document.querySelectorAll('.square');
const mole = document.querySelectorAll('mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result = 0;
let currentTime = timeLeft.textContent;

function randomSquare(){
    sqaures.forEach(className => {
        className.classList.remove('mole');
    })
    let randomPosition = sqaures[Math.floor(Math.random() * sqaures.length)];
    randomPosition.classList.add('mole');
    hitPosition = randomPosition.id;
}

sqaures.forEach(id => {
    id.addEventListener('mouseup', () => {
        if(id.id === hitPosition){
            result++;
            score.textContent = result;
            id.classList.remove('mole');
        }
    })
})

function moveMole() {
    let timerId = null;
    timerId = setInterval(randomSquare, 1000);
}

moveMole();

function countDown() {
    currentTime --;
    timeLeft.textContent = currentTime;

    if(currentTime === 0){
        clearInterval(timerId);
        alert('GAME OVER! Your final score is: ' + result);
    }
}

let timerId = setInterval(countDown, 1000);