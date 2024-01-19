function MyArray() {
    this.length = 0;
  }
  
  MyArray.prototype.push = function (element) {
    this[this.length] = element;
    this.length++;
  };
  
  MyArray.prototype.pop = function () {
    if (this.length === 0) {
      return undefined;
    }
  
    this.length--;
    const poppedElement = this[this.length];
    delete this[this.length];
    return poppedElement;
  };
  
  MyArray.prototype.shift = function () {
    if (this.length === 0) {
      return undefined;
    }
  
    const shiftedElement = this[0];
  
    for (let i = 0; i < this.length - 1; i++) {
      this[i] = this[i + 1];
    }
  
    delete this[this.length - 1];
  
    this.length--;
  
    return shiftedElement;
  };
  
  MyArray.prototype.unshift = function (element) {
    for (let i = this.length; i > 0; i--) {
      this[i] = this[i - 1];
    }
  
    // Вставляем новый элемент в начало
    this[0] = element;
  
    this.length++;
  };
  
  const myArr = new MyArray();
  myArr.push(1);
  myArr.push(2);
  myArr.push(3);

    console.log(myArr);          

    console.log(myArr.shift());
    console.log(myArr);         

    myArr.unshift(0);
    console.log(myArr);   