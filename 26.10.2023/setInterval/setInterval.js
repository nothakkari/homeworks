function customSetInterval(callback, interval) {
    function loop() {
      callback();
      setTimeout(loop, interval);
    }
  
    setTimeout(loop, interval);
  }
  
  function myFunction() {
    console.log("Hello, World!");
  }
  
  customSetInterval(myFunction, 1000);