'use strict'
const button  = document.querySelector('.js-button');
const userNumber = document.querySelector('.js-userNumber');
const attempShow = document.querySelector('.attemps');
const clues = document.querySelectorAll('.clue');
const clue1 = document.querySelector('.clue1');
const clue2 = document.querySelector('.clue2');
const clue3 = document.querySelector('.clue3');
const clue4 = document.querySelector('.clue4');
const clue5 = document.querySelector('.clue5');

let attemps = 0;
let random = 0;

//Generates a random number for each game
function getRandomNumber() {
  random = Math.ceil(Math.random() * 100);
  console.log(random);
  return random;
}

//Distributes game, if it is the first attemp generates a new random number, if it's another attemp check the number
function handlerGame(ev) {
  ev.preventDefault();
  hideClues();
  if(attemps === 0) {
    random = getRandomNumber();
    console.log(userNumber.value);
    checkNumber(random);
    attemps++;
    increaseAttemp();
  } else {
    attemps++;
    checkNumber(random);
    increaseAttemp();

  }
}

// check the number and shows the hints
function checkNumber(num) {
  if(userNumber.value < 0 || userNumber.value > 100) {
    clue4.classList.remove('hidden');
  } else if(userNumber.value < random) {
    clue3.classList.remove('hidden');
  } else if(userNumber.value > random) {
    clue2.classList.remove('hidden');
  } else if (userNumber.value == random){
    clue5.classList.remove('hidden');
  }
}

function increaseAttemp() {
  console.log(attemps); 
  attempShow.innerHTML = attemps;
}

function hideClues() {
  for(const clue of clues) {
    clue.classList.add('hidden');
  }
}

button.addEventListener('click', handlerGame);
