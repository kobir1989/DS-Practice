class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  //prepend
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  //append
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  //printList
  printList() {
    let nodeList = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      nodeList.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return nodeList;
  }
  //insert *-(*)-*
  insert(index, value) {
    if (index >= this.length) {
      this.append(value);
    }
    const newNode = new Node(value);
    let leftSideNode = this.traverseToIndex(index - 1);
    let rightSideNode = leftSideNode.next;
    leftSideNode.next = newNode;
    newNode.next = rightSideNode;
    this.length++;
    return this;
  }
  //traverseToIndex
  traverseToIndex(index) {
    let count = 0;
    let currentNode = this.head;
    while (count !== index) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }
  //reverse
  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head; // first index
    let second = first.next; //second index
    while (second) {
      const third = second.next; // third index
      second.next = first;
      first = second;
      second = third;
    }
    this.head.next = null;
    this.head = first;
    return this;
  }
}

const myLinkedList = new LinkedList(1);
myLinkedList.prepend(2);
myLinkedList.append('hi');
myLinkedList.append('33');
myLinkedList.insert(2, 'testInsert');
console.log(myLinkedList.printList());

// arrays
