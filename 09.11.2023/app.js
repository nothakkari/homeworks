function printPrototypeChain(obj) {
    if (obj === null) {
      console.log("null");
      return;
    }
  
    console.log(obj);
    printPrototypeChain(Object.getPrototypeOf(obj));
  }

  const sampleObject = { prop: "value" };
  printPrototypeChain(sampleObject);