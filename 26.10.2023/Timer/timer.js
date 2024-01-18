function timer(interval, startNumber) {
    let currentNumber = startNumber;
  
    const intervalId = setInterval(() => {
      console.log(currentNumber);
  
      if (currentNumber === 0) {
        clearInterval(intervalId);
      } else {
        currentNumber--;
      }
    }, interval * 1000);
  }
  
  timer(1, 5);