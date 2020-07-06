'use strict'
const button  = document.querySelector('.js-button');
const resetButton  = document.querySelector('.js-reset-button');
const userNumber = document.querySelector('.js-userNumber');
const attempShow = document.querySelector('.attemps');
const clues = document.querySelectorAll('.clue');
const clue1 = document.querySelector('.clue1');
const clue2 = document.querySelector('.clue2');
const clue3 = document.querySelector('.clue3');
const clue4 = document.querySelector('.clue4');
const clue5 = document.querySelector('.clue5');
const clue6 = document.querySelector('.clue6');

let attemps = 0;
let random = getRandomNumber();
console.log(random);

//Generates a random number for each game
function getRandomNumber() {
  const numberRandom = Math.ceil(Math.random() * 100);
  return numberRandom;
}

//Distributes game, if it is the first attemp generates a new random number, if it's another attemp check the number
function handlerGame(ev) {
  ev.preventDefault();
  hideClues();
  if(userNumber.value.length <= 0) {
    clue6.classList.remove('hidden');
  } else if(attemps === 0) {
    checkNumber(random);
    increaseAttemp();
  } else {
    checkNumber(random);
    increaseAttemp();
  }
}

// check the number and shows the hints
function checkNumber(num) {
  const userValue = parseInt(userNumber.value);
  if(userValue < 0 || userValue > 100) {
    clue4.classList.remove('hidden');
  } else if(userValue < num) {
    clue3.classList.remove('hidden');
  } else if(userValue > num) {
    clue2.classList.remove('hidden');
  } else if (userValue === num){
    clue5.classList.remove('hidden');
  } else {

  }
}

function increaseAttemp() {
  attemps++;
  attempShow.innerHTML = attemps;
}

function hideClues() {
  for(const clue of clues) {
    clue.classList.add('hidden');
  }
}

function resetGame() {
  attemps = 0;
  attempShow.innerHTML = attemps;
  random = getRandomNumber();
  hideClues();
  clue1.classList.remove('hidden');
}

button.addEventListener('click', handlerGame);
resetButton.addEventListener('click', resetGame);
