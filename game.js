'use strict';

function rand(from, to){
  return Math.floor(Math.random() * (to - from + 1)) + from;

}

 // показываем кнопку
function showBubble(bubble){
  bubble.classList.add('up');
}

function hideBubble(bubble){
  bubble.classList.remove('up');
}

//скрывем кнопку
function  hideButton(){
  startButton.style.display = 'none';
}

//показываем кнопку
function showButton () {
  startButton.style.display = 'block';
}
const lines = document.getElementsByClassName('hole');
const startButton = document.querySelector('.startButton');
startButton.addEventListener('click', () => { 
  hideButton();
    const bubble = lines[rand(0, lines.length -1)];
    showBubble(bubble);
    setTimeout(() => {
      hideBubble(bubble);
      showButton();
    }, 2000)
});
