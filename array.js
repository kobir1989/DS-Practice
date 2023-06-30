//array data structure
class Array {
  constructor() {
    this.data = {};
    this.length = 0;
  }
  //set method
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  //get method
  get(index) {
    return this.data[index];
  }
  //pop method
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  //delete
  delete(index) {
    const item = this.data[index];
    this.shiftItem(index);
    return item;
  }

  //shift Item
  shiftItem(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
      console.log(this.data[i], 'iii');
    }
    delete this.data[this.length - 1];
    this.length--;
    return this.data;
  }
}

const myArray = new Array();
myArray.push('hello');
myArray.push('hi');
myArray.push('!');
myArray.delete(1);
console.log(myArray);
