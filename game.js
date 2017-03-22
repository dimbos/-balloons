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
  const bubble  = getRandomBubble();
  showBubble(bubble);
  setTimeout(() => {
    hideBubble(bubble);
    nextBubble();
  }, 2000);
}



// обработка клика по шарику
function handleBubbleClick () {
     const bubble = this.parentElement;
     killBubble(bubble);
}

const lines = document.getElementsByClassName('hole');
const bubbles = document.getElementsByClassName('bubble');
const startButton = document.querySelector('.startButton');

for(let bubble of bubbles){
  bubble.addEventListener('click', handleBubbleClick);
}

startButton.addEventListener('click', () => { 
  hideButton();
  nextBubble();
});
