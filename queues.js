//Queues data structure

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queues {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  //peek
  peek() {
    return this.first;
  }
  //enqueue
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  //dequeue
  dequeue() {
    if (this.first !== this.last) {
      this.first = this.first.next;
    } else {
      this.first = null;
      this.last = null;
    }
    this.length--;
    return this;
  }
}
const myQueue = new Queues();
myQueue.enqueue('person1');
myQueue.enqueue('person2');
myQueue.enqueue('person3');
myQueue.enqueue('person4');

console.log(myQueue);
