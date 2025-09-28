export class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.nextNode = next;
  }
}
export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null; // always remembers the last node we added . nb: this.tail is mostly used
  }
  append(newValue) {
    let currNode = new Node(newValue);
    if (!this.head) {
      this.head = currNode; // first node becomes the head
      this.tail = currNode; // also the "last node" for now. prevNode points to same memory reference as this.head
    } else {
      this.tail.nextNode = currNode; // attach new node after the last one. this also attaches to the memory reference ie:
      // a = {next: 34}; b = a; b.next = 55; console.log(a) =>{next:55}
      this.tail = currNode; // now point prevnode to the new memory refererne
    }
  }
  prepend(newValue) {
    let currNode = new Node(newValue);
    if (!this.head) {
      this.head = currNode;
      this.tail = currNode;
    } else {
      const oldHead = this.head;
      this.head = currNode;
      this.head.nextNode = oldHead;
    }
  }
  size() {
    let currNode = this.head;
    let totSize = 0;
    while (currNode != null) {
      totSize++;
      currNode = currNode.nextNode;
    }
    return totSize;
  }
  header() {
    return Object.values(this.head)[0];
  }
  tailer() {
    // console.log("tail", Object.values(this.tail)[0])
    return Object.values(this.tail)[0];
  }
  at(idx) {
    let currNode = this.head;
    let totSize = 0;
    while (idx != totSize && currNode != null) {
      totSize++;
      currNode = currNode.nextNode;
    }
    return currNode;
  }
  pop() {
    let currNode = this.head;
    let pretail = this.head;
    if (currNode === null) return "List is empty. nothing to pop";
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return null; // popping the only element
    }
    while (currNode != this.tail) {
      pretail = currNode;
      currNode = currNode.nextNode;
    }
    pretail.nextNode = null; // cut off the last node
    this.tail = pretail; // update tail
    return this.head; // return the list (not the popped node)
  }
  contains(item) {
    let currNode = this.head;
    while (currNode != null) {
      if (currNode.value === item) return true;
      currNode = currNode.nextNode;
    }
    return false;
  }
  find(item) {
    let currNode = this.head;
    let idx = 0;
    while (currNode != null) {
      if (currNode.value === item) return idx; //found
      idx++;
      currNode = currNode.nextNode;
    }
    return -1; // not found
  }
  toMyString(currNode = this.head) {
    if (currNode === null) return null;
    return `(${currNode.value}) -> ${this.toMyString(currNode.nextNode)}`;
  }
}
