'use strict';

//Get the users name so we can greet them greet the user
let username = prompt('What is your name?');
alert('Nice to meet you '+ username+ ' , I\'m Jae and this is a site About Me!');

let score = 0;

// Question 1

function questionOne(){
  let answerOne = prompt('I live in New York City. Have you ever visited? Answer \'yes\' or \'no\'').toLowerCase();

  while (answerOne !== 'yes' || answerOne !== 'y' || answerOne !=='no' || answerOne !=='n'){
    if (answerOne === 'yes' || answerOne === 'y'){
      alert ('That\'s great! Maybe we were here at the same time!');
      score = score+1;
      break;
    } else if (answerOne ==='no' || answerOne ==='n'){
      alert ('It\'s really one of a kind. If you get a chance you should check it out!');
      break;
    }
    answerOne = prompt ('Please answer using yes or no. I live in New York City. Have you ever visited? Answer \'yes\' or \'no\'').toLowerCase();
  }
}

questionOne();

// Question Two

function questionTwo() {
  let answerTwo = prompt('Do you think I am a vegetarian? Answer \'yes\' or \'no\'').toLowerCase();

  while (answerTwo !== 'yes' || answerTwo !== 'y' || answerTwo !=='no' || answerTwo !=='n'){
    if (answerTwo === 'yes' || answerTwo === 'y'){
      alert ('You are correct! Well, mostly, I am a pescatarian which means I only eat seafood');
      score = score+1;
      break;
    } else if (answerTwo ==='no' || answerTwo ==='n'){
      alert ('I guess you\'re technically correct. I am a pescatarian which means I only eat seafood');
      break;
    }
    answerTwo = prompt ('Please answer using yes or no. Do you think I am a vegetarian? Answer \'yes\' or \'no\'').toLowerCase();
  }
}

questionTwo();

// Question Three

function questionThree() {
  let answerThree = prompt('Do you think I like learning languages? Answer \'yes\' or \'no\'').toLowerCase();

  while (answerThree !== 'yes' || answerThree !== 'y' || answerThree !=='no' || answerThree !=='n'){
    if (answerThree === 'yes' || answerThree === 'y'){
      alert ('You\'re right, I love learning languages! I speak some Spanish and French and even a bit of Sign Language!');
      score = score+1;
      break;
    } else if (answerThree ==='no' || answerThree ==='n'){
      alert ('Actually I love learning languages, it\'s really fun!');
      break;
    }
    answerThree = prompt ('Please answer using yes or no. Do you think I like learning languages? Answer \'yes\' or \'no\'').toLowerCase();
  }
}

questionThree();

// Question Four

function questionFour() {
  let answerFour = prompt('Do you think I have been skydiving? Answer \'yes\' or \'no\'').toLowerCase();

  while (answerFour !== 'yes' || answerFour !== 'y' || answerFour !=='no' || answerFour !=='n'){
    if (answerFour === 'yes' || answerFour === 'y'){
      alert ('You are correct! I have been skydiving.');
      score = score+1;
      break;
    } else if (answerFour ==='no' || answerFour ==='n'){
      alert ('Whelp, that\'s not quite right - I have been skydiving!');
      break;
    }
    answerFour = prompt ('Please answer using yes or no. Do you think I have been skydiving? Answer \'yes\' or \'no\'').toLowerCase();
  }
}

questionFour();

// Question Five

function questionFive() {
  let answerFive = prompt('Do you think I would like to connect with you on LinkedIn? Answer \'yes\' or \'no\'').toLowerCase();

  while (answerFive !== 'yes' || answerFive !== 'y' || answerFive !=='no' || answerFive !=='n'){
    if (answerFive === 'yes' || answerFive === 'y'){
      alert ('Correct - I absolutely would! If you would like to connect with me too the link will be at the bottom of the page.');
      score = score+1;
      break;
    } else if (answerFive ==='no' || answerFive ==='n'){
      alert ('I would love to connect with you! If you would like to connect with me too the link will be at the bottom of the page.');
      break;
    }
    answerFive = prompt ('Please answer using yes or no. Do you think I would like to connect with you on LinkedIn?').toLowerCase();
  }
}

questionFive();

// Question 6

function questionSix() {
  let randomNumber = (Math.floor(Math.random() * 101));
  let attemptSix = 4;
  console.log (randomNumber);

  for (let i=0; i<4; i++){
    let answerSixString = prompt('Guess a number between 0-100');
    let answerSix = parseInt(answerSixString);

    if (answerSix===randomNumber){
      alert('You got it!');
      score = score+1;
      break;
    } else if (attemptSix-i-1>0){
      if (answerSix<randomNumber){
        if (i<4){
          alert('Too Low, Guess again. You have ' + (attemptSix-i-1) +' attempts remaining');
        }
      } else if (answerSix>randomNumber){
        if (i<4){
          alert('Too High, Guess again. You have ' + (attemptSix-i-1) +' attempts remaining');
        }
      }
    }
  }
  alert('The answer was ' +randomNumber +'!');
}

questionSix();


// Question 7

function questionSeven() {
  let placesIveVisited = ['washington dc', 'new york', 'ecuador', 'costa rica', 'trinidad and tobago', 'mexico', 'italy', 'belgium', 'france', 'dominican republic'];
  let answerSeven = prompt('Guess a place I have visited').toLowerCase();
  let correctAnswer = false;

  for (let i = 0; i < 6; i++) {

    for (let j = 0; j < placesIveVisited.length; j++) {

      if (answerSeven === placesIveVisited[j]) {
        alert('You are correct!');
        correctAnswer = true;
        score = score+1;
        break;
      }
    }

    if (correctAnswer === true){
      break;
    } else {
      alert (`Guess again! You have ${7 - i - 1} attempts remaining.`);
      answerSeven = prompt ('Guess a place I have visited').toLowerCase();
    }
  }

  let placesList = '';
  for (let i=0; i<1; i++){
    placesList += `${placesIveVisited}`;
  }

  alert(`I've been to ${placesList} !`);
}

questionSeven();

// // Question 8

function questionEight() {
  alert ('You got '+ score +' questions right!');
}

questionEight();

alert('That was fun '+ username+ '! Here is some more information about me.');



