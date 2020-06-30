'use strict'
const button  = document.querySelector('.js-button');
const userNumber = document.querySelector('.js-userNumber');
let attemps = document.querySelector('.attemps');
const clues = document.querySelectorAll('.clue');
attemps = parseInt(attemps.innerHTML);
let random = 0;

//Generates a random number for each game
function getRandomNumber() {
  debugger;
  random = Math.ceil(Math.random() * 100);
  console.log(random);
}

//Distributes game, if it is the first attemp generates a new random number, if it's another attemp check the number
function handlerGame() {
  //hideClues();
  debugger;
  if(attemps === 0) {
    getRandomNumber();
    console.log(userNumber);

    //handlerCheckNumber(number);
  } else {
    console.log(userNumber);
  }

}

function handlerCheckNumber(num) {
  if(userNumber < 0 || userNumber > 100) {

    
  }
}

/*
function hideClues() {
  for(const clue of clues) {
    clue.classList.add('hidden');
  }
}
*/
//window.addEventListener('load', getRandomNumber);
button.addEventListener('click', handlerGame);
