'use strict';

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

function showButton () {
  startButton.style.display = 'block';
}
const lines = document.getElementsByClassName('hole');
const startButton = document.querySelector('.startButton');
startButton.addEventListener('click', () => { 
  hideButton()


});

showBubble(lines[2]);
