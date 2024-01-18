function myMath(operation, operand1, operand2) {
    if (typeof operation === 'string' && Math.hasOwnProperty(operation)) {
      return Math[operation];
    }
  
    if (typeof operation !== 'function') {
      console.error("Ошибка: Неверная операция.");
      return;
    }
  
    return operation(operand1, operand2);
  }
  
  console.log(myMath('PI'));
  console.log(myMath(Math.sqrt, 16));
  console.log(myMath((a, b) => a * b, 3, 5));
  console.log(myMath((a, b) => (b !== 0 ? a / b : "Ошибка: Деление на ноль."), 10, 2));
  console.log(myMath((a, b) => a - b, 8, 3));
  console.log(myMath('nonexistent', 2, 3));