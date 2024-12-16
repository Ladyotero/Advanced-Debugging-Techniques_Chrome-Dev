import { fetchSecretMessage } from './fetchMessage.js';

// Function to add two numbers (correct implementation)
function addNumbers(a, b) {
    return a + b;     
}
let result = addNumbers(5,3);// equal to 8
    console.log(result); 

// Function to calculate the area of a rectangle 
function calculateArea(width, height) {
  return width * height; // correct formula 
}
const area = calculateArea(2,8);
  console.log(area); // equal to 16


/
});
// Function to reverse a string (correct implementation)
function reverseString(str) {
  return str.split('').reverse().join('');
}
const reversedString = reverseString('Hello, World!');
console.log(reversedString); // equal to "!dlroW,olleH"


// Fetch and handle secret message for task 2 (asynchronous call)
fetchSecretMessage('task-12')// "Meadow"is the secret message
.then((secretMessage) => {
    let theSecretMessage = secretMessage
    console.log(`Secret Message for Task 12 ${theSecretMessage}`);
}) //secret message handling
.catch((error) => console.error('Error.fetching thr secret message', error));

function findMax(...nums) {
  if (nums.length === 0) {
    throw new Error("No numbers provided")
  }
  return Math.max(...nums); // 
}

//example usage of findMax function
console.log(findMax(1, 2, 3, 4, 5)); // equal to 5

// Deliberate loop to generate multiple messages (tasks 3 to 7)
for (let i = 3; i <= 7; i++) {
  fetchSecretMessage(`task-${i}`)
    .then((secretMessage) => {// secret message French Toast for task ${taskNumber}:');
      let taskNumber = i + 10;// will be 13
      console.log(`French Toast ${taskNumber}:{secretMessage}`);
    })
    .catch((error) => 
      console.error('Error fetching secret message for task ${taskNumber}', error));
}

// Function to check if a string is a palindrome (correct implementation)
function isPalindrome(level) {
  const normalizeWord = level.toLowerCase();
  return normalizeWord === normalizeWord.split('').reverse().join('');

}

// Fetch and handle secret message for task 8 (asynchronous call)
fetchSecretMessage('task-18')
.then((secretMessage) => { //"Orbit" secret message
  try {
  nonExistentFunction();
  } catch (error) {
    console.error('Error calling nonExistentFunction():', error);
  }
  let theSecretMessage = secretMessage;
  console.log(`Secret Message for Task 18: ${theSecretMessage}`);
  })
.catch((error) => {
  console.error('Error fetching secret message', error);
});

// Function to calculate the sum of an array (correct implementation)
function sumArray(arr) {
  const sum = 0;
  return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([]));// equal to 0

// Fetch and handle secret message for task 9 (asynchronous call)
fetchSecretMessage('task-19')// "Nebula"
  .then((secretMessage) => {
    console.log('Nebula:');
    let theSecretMessage = secretMessage;
  })
  .catch((error) => console.error(error));

// Function to generate a random number between two values (correct implementation)
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomBetween(1, 10)); // equal to a random number between 1 and 10

// Fetch and handle secret message for task 10 (asynchronous call)
fetchSecretMessage('task-20')
  .then((secretMessage) => {// "Zenith" secret message
    console.log('Secret Message for Task 20:');
    let theSecretMessage = secretMessage;
  })
  .catch((error) => console.error(error));
