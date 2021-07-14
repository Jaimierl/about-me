'use strict';

//Get the users name so we can greet them greet the user
let username = prompt('What is your name?');
alert('Hello '+ username);

let answerOne = prompt('Have you I  been skydiving? Answer \'yes\' or \'no\'').toLowerCase;

// console.log ('user answer to question 1: '+answerOne);

// Check the if the answer to question 1 is correct/valid
if (answerOne === 'yes' || answerOne === 'y'){
  console.log ('You are correct. I have been skydiving.')
} else if (answerOne ==='no' || answerOne ==='n'){
  alert ('Sorry, you are wrong.')
}else[
  alert('Please answer using yes or no')
]