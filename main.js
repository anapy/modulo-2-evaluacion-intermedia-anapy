'use strict'
const button  = document.querySelector('.js-button');
const resetButton  = document.querySelector('.js-reset-button');
const userNumber = document.querySelector('.js-userNumber');
const attempShow = document.querySelector('.attemps');
const clues = document.querySelectorAll('.clue');
const clue = document.querySelector('.clue');

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
  if(userNumber.value.length <= 0) {
    clue.innerHTML = 'El número no puede estar vacío';
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
    clue.innerHTML = 'Pista: El número debe estar entre 1 y 100';
  } else if(userValue < num) {
    clue.innerHTML = 'Pista: Demasiado bajo';
  } else if(userValue > num) {
    clue.innerHTML = 'Pista: Demasiado alto';
  } else if (userValue === num){
    clue.innerHTML = 'Pista: Has ganado campeona!!!';
    clue.classList.add('win');
    button.setAttribute('disabled', '');
    resetButton.classList.remove('hidden');
  } else {
    clue.innerHTML = 'Pista: El valor no es válido';
  }
}

function increaseAttemp() {
  attemps++;
  attempShow.innerHTML = attemps;
}

function resetGame() {
  attemps = 0;
  attempShow.innerHTML = attemps;
  random = getRandomNumber();
  resetButton.classList.add('hidden');    
  clue.classList.remove('win');
  clue.innerHTML = 'Pista: Escribe el número y dale a Prueba';
  console.log(random);
  button.removeAttribute('disabled', '');

}



button.addEventListener('click', handlerGame);
resetButton.addEventListener('click', resetGame);
