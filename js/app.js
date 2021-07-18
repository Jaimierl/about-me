'use strict';

//Get the users name so we can greet them greet the user
let username = prompt('What is your name?');
alert('Nice to meet you '+ username+ ' , I\'m Jae and this is a site About Me!')

let score = 0;
// console.log ('user answer to question 5: '+answerOne);

// Check the if the answer to question One is correct/valid
let answerOne = prompt('I live in New York City. Have you ever visited? Answer \'yes\' or \'no\'').toLowerCase();

while (answerOne !== 'yes' || answerOne !== 'y' || answerOne !=='no' || answerOne !=='n'){
  if (answerOne === 'yes' || answerOne === 'y'){
    // console.log ('That\'s great! Maybe we were here at the same time!')
    alert ('That\'s great! Maybe we were here at the same time!');
    score = score+1;
    break;
  } else if (answerOne ==='no' || answerOne ==='n'){
    alert ('It\'s really one of a kind. If you get a chance you should check it out!');
    break;
  }
  answerOne = prompt ('Please answer using yes or no. I live in New York City. Have you ever visited? Answer \'yes\' or \'no\'').toLowerCase();
}


let answerTwo = prompt('Do you think I am a vegetarian? Answer \'yes\' or \'no\'').toLowerCase();

// console.log ('user answer to question 2: '+answerTwo);

// Check the if the answer to question Two is correct/valid
while (answerTwo !== 'yes' || answerTwo !== 'y' || answerTwo !=='no' || answerTwo !=='n'){
  if (answerTwo === 'yes' || answerTwo === 'y'){
    // console.log ('You are correct! Well, mostly, I am a pescatarian which means I only eat seafood')
    alert ('You are correct! Well, mostly, I am a pescatarian which means I only eat seafood');
    score = score+1;
    break;
  } else if (answerTwo ==='no' || answerTwo ==='n'){
    alert ('I guess you\'re technically correct. I am a pescatarian which means I only eat seafood');
    break;
  }
  answerTwo = prompt ('Please answer using yes or no. Do you think I am a vegetarian? Answer \'yes\' or \'no\'').toLowerCase();
}

let answerThree = prompt('Do you think I like learning languages? Answer \'yes\' or \'no\'').toLowerCase();

// console.log ('user answer to question 3: '+answerThree);

// Check the if the answer to question Three is correct/valid
while (answerThree !== 'yes' || answerThree !== 'y' || answerThree !=='no' || answerThree !=='n'){
  if (answerThree === 'yes' || answerThree === 'y'){
    // console.log ('You\'re right, I love learning languages! I speak some Spanish and French and even a bit of Sign Language!')  
    alert ('You\'re right, I love learning languages! I speak some Spanish and French and even a bit of Sign Language!');
    score = score+1;
    break;
  } else if (answerThree ==='no' || answerThree ==='n'){
    alert ('Actually I love learning languages, it\'s really fun!');
    break;
  }
  answerThree = prompt ('Please answer using yes or no. Do you think I like learning languages? Answer \'yes\' or \'no\'').toLowerCase();
}

let answerFour = prompt('Do you think I have been skydiving? Answer \'yes\' or \'no\'').toLowerCase();

// console.log ('user answer to question 4: '+answerFour);

// Check the if the answer to question Five is correct/valid
while (answerFour !== 'yes' || answerFour !== 'y' || answerFour !=='no' || answerFour !=='n'){
  if (answerFour === 'yes' || answerFour === 'y'){
    // console.log ('You are correct! I have been skydiving.')
    alert ('You are correct! I have been skydiving.');
    score = score+1;
    break;
  } else if (answerFour ==='no' || answerFour ==='n'){
    alert ('Whelp, that\'s not quite right - I have been skydiving!');
    break;
  }
  answerFour = prompt ('Please answer using yes or no. Do you think I have been skydiving? Answer \'yes\' or \'no\'').toLowerCase();
}

let answerFive = prompt('Do you think I would like to connect with you on LinkedIn? Answer \'yes\' or \'no\'').toLowerCase();

// console.log ('user answer to question 5: '+answerFive);

// Check the if the answer to question Five is correct/valid

while (answerFive !== 'yes' || answerFive !== 'y' || answerFive !=='no' || answerFive !=='n'){
  if (answerFive === 'yes' || answerFive === 'y'){
    // console.log ('Correct - I absolutely would! If you would like to connect with me too the link will be at the bottom of the page.')
    alert ('Correct - I absolutely would! If you would like to connect with me too the link will be at the bottom of the page.');
    score = score+1;
    break;
  } else if (answerFive ==='no' || answerFive ==='n'){
    alert ('I would love to connect with you! If you would like to connect with me too the link will be at the bottom of the page.');
    break;
  }
  answerFive = prompt ('Please answer using yes or no. Do you think I would like to connect with you on LinkedIn?').toLowerCase();
}


// Question 6
let randomNumber = (Math.floor(Math.random() * 101));
let attemptSix = 4;
// let randomNumber = (50);
console.log(randomNumber);

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

// Question 7

// See class for loop about cycling through array elements. Show all elements without using join().

let placesIveVisited = ['washington dc', 'new york', 'ecuador', 'costa rica', 'trinidad and tobago', 'mexico', 'italy', 'belgium', 'france', 'mexico'];

for (let i=0; i<6; i++){
  let answerSeven = prompt('Guess a place I have visited').toLowerCase();
  console.log(answerSeven);
  // console.log(placesIveVisited[i]);
  if (answerSeven in placesIveVisited){
    alert('You are correct!');
    score = score+1;
    break;
  } else {
    alert ('Not yet! I\'ll add that to my list though! Guess Again - You have ' +(6-i)+' attempts remaining');
  }
}
let stringPlacesVisited = toString(placesIveVisited);
alert (stringPlacesVisited);
// alert ('I have been to ' + toString(placesIveVisited));
// Fix, see note above

// Thing 8
alert ('You got '+ score +' questions right!');

alert('That was fun '+ username+ '! Here is some more information about me.');

