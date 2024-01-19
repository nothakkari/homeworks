const button = document.getElementById('myButton');

for (let i = 1; i <= 10; i++) {
  button.addEventListener('click', function () {
    console.log('Слушатель #' + i);
  });
}

function getUserInput() {
  let userInput;
  do {
    userInput = prompt('Введите число от 1 до 10:');
  } while (!isValidInput(userInput));
  return parseInt(userInput, 10);
}

function isValidInput(input) {
  return !isNaN(input) && parseInt(input, 10) >= 1 && parseInt(input, 10) <= 10;
}

button.addEventListener('click', function (event) {
  const userNumber = getUserInput();

  for (let j = 1; j <= userNumber; j++) {
    alert('Сообщение #' + j);
  }
});