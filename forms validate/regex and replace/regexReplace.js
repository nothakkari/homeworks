// [1]
// const inputString = "Пример строки с цифрами 12345 и 67890";

// const regex = /\d/g;
// const resultString = inputString.replace(regex, 'D');

// console.log(resultString);


// [2]
// const inputString = "Пример строки с числами 12345 и 67890";

// const regex = /\b\d+\b/g;
// const resultString = inputString.replace(regex, 'N');

// console.log(resultString);


const inputString = "Пример строки   с несколькими    и пробелами";

const regex = /\S+/g;

const wordsArray = inputString.split(regex);
const numberOfWords = wordsArray.length;

console.log(numberOfWords);