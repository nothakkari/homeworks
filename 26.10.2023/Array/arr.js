function arrayWithInterval(arr) {
    let index = 0;
  
    const intervalId = setInterval(() => {
      if (index < arr.length) {
        console.log(arr[index]);
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 1000);
  }

  const myArray = [1, 2, 3, 4, 5];
  
  arrayWithInterval(myArray);