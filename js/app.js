'use strict';

//Get the users name so we can greet them greet the user
let username = prompt('What is your name?');
alert('Nice to meet you '+ username+ ' , I\'m Jae and this is a site About Me!');

let answerOne = prompt('I live in New York City. Have you ever visited? Answer \'yes\' or \'no\'').toLowerCase();

// console.log ('user answer to question 5: '+answerOne);

// Check the if the answer to question One is correct/valid
if (answerOne === 'yes' || answerOne === 'y'){
  // console.log ('That\'s great! Maybe we were here at the same time!')
  alert ('That\'s great! Maybe we were here at the same time!');
} else if (answerOne ==='no' || answerOne ==='n'){
  alert ('It\'s really one of a kind. If you get a chance you should check it out!');
}else[
  alert('Please answer using yes or no')
];

let answerTwo = prompt('Do you think I am a vegetarian? Answer \'yes\' or \'no\'').toLowerCase();

// console.log ('user answer to question 2: '+answerTwo);

// Check the if the answer to question Two is correct/valid
if (answerTwo === 'yes' || answerTwo === 'y'){
  // console.log ('You are correct! Well, mostly, I am a pescatarian which means I only eat seafood')
  alert ('You are correct! Well, mostly, I am a pescatarian which means I only eat seafood')
} else if (answerTwo ==='no' || answerTwo ==='n'){
  alert ('I guess you\'re technically correct. I am a pescatarian which means I only eat seafood')
}else[
  alert('Please answer using yes or no')
];

let answerThree = prompt('Do you think I like learning languages? Answer \'yes\' or \'no\'').toLowerCase();

// console.log ('user answer to question 3: '+answerThree);

// Check the if the answer to question Three is correct/valid
if (answerThree === 'yes' || answerThree === 'y'){
  // console.log ('You\'re right, I love learning languages! I speak some Spanish and French and even a bit of Sign Language!')  
  alert ('You\'re right, I love learning languages! I speak some Spanish and French and even a bit of Sign Language!');
} else if (answerThree ==='no' || answerThree ==='n'){
  alert ('Actually I love learning languages, it\'s really fun!')
}else[
  alert('Please answer using yes or no')
];

let answerFour = prompt('Do you think I have been skydiving? Answer \'yes\' or \'no\'').toLowerCase();

// console.log ('user answer to question 4: '+answerFour);

// Check the if the answer to question Five is correct/valid
if (answerFour === 'yes' || answerFour === 'y'){
  // console.log ('You are correct! I have been skydiving.')
  alert ('You are correct! I have been skydiving.')
} else if (answerFour ==='no' || answerFour ==='n'){
  alert ('Whelp, that\'s not quite right - I have been skydiving!')
}else[
  alert('Please answer using yes or no')
];

let answerFive = prompt('Do you think I would like to connect with you on LinkedIn? Answer \'yes\' or \'no\'').toLowerCase();

// console.log ('user answer to question 5: '+answerFive);

// Check the if the answer to question Five is correct/valid
if (answerFive === 'yes' || answerFive === 'y'){
  // console.log ('Correct - I absolutely would! If you would like to connect with me too the link will be at the bottom of the page.')
  alert ('Correct - I absolutely would! If you would like to connect with me too the link will be at the bottom of the page.')
} else if (answerFive ==='no' || answerFive ==='n'){
  alert ('I would love to connect with you! If you would like to connect with me too the link will be at the bottom of the page.')
}else[
  alert('Please answer using yes or no')
];

alert('That was fun '+ username+ '! Here is some more information about me.');

