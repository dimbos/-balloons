'use strict';

//рандомная функция
function rand(from, to){
  return Math.floor(Math.random() * (to - from + 1)) + from;
}

//функция получения шарика
function getRandomBubble(){
  const next = rand(0, lines.length - 1);
  if(getRandomBubble.prev && getRandomBubble.prev === next)
  {
    return getRandomBubble();
  }
  getRandomBubble.prev = next;
  return lines[next];
}

 // показываем шарик
function showBubble(bubble){
  bubble.classList.remove('boom');
  bubble.classList.add('up');
}

//скрываем шарик
function hideBubble(bubble){
  bubble.classList.remove('up');
}

//уничтожение шарика
function killBubble(bubble){
  bubble.classList.add('boom');
}

//скрывем кнопку
function  hideButton(){
  startButton.style.display = 'none';
}

//показываем кнопку
function showButton () {
  startButton.style.display = 'block';
}

//следующий шарик
function nextBubble(){
  if(!isGameStarted)
  {
    return resetGame();
  }
  const bubble  = getRandomBubble();
  showBubble(bubble);
  bubble.timeout = setTimeout(() => {
    hideBubble(bubble);
    if(isGameStarted){
      nextBubble();
    }
    else{
      resetGame();
    }
  }, 2000);
}

// обработка клика по шарику
function handleBubbleClick () {
     const bubble = this.parentElement;
     clearTimeout(bubble.timeout);
     killBubble(bubble);
     hideBubble(bubble);
     nextBubble();
     incPoints();
}

//счет очков
function incPoints(){
  ++currentPoints;
  showPoints();
}

//отображение очков
function showPoints(){
  scoreView.dataset.points = currentPoints;
}

//
function resetPoints(){
  currentPoints = 0;
  updateScoreboard();
}

//
function updateScoreboard(){
  scoreView.dataset.points = currentPoints;
}

//начало игры
function startGame(){
  resetPoints();
  isGameStarted = true;
  hideButton();
  nextBubble();
  setTimeout(stopGame, GAME_TIMEOUT);
}

//конец игры
function stopGame(){
  isGameStarted = false;
  resetGame();
}

function resetGame(){
  showButton();
}

let currentPoints = 0;
let isGameStarted = false;
const GAME_TIMEOUT = 15000;
const lines = document.getElementsByClassName('hole');
const bubbles = document.getElementsByClassName('bubble');
const startButton = document.querySelector('.startButton');

for(let bubble of bubbles){
  bubble.addEventListener('click', handleBubbleClick);
}

const scoreView = document.getElementById('currentScoreView'); 

startButton.addEventListener('click', () => { 
  startGame()
});
