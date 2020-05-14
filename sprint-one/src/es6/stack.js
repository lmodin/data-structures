class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push(value) {
    var thisKey = Object.keys(this.storage).length;
    while (this.storage[thisKey] !== undefined) {
      thisKey ++;
    };
    this.storage[thisKey] = value;
  }

  pop() {
    var last = Object.keys(this.storage)[Object.keys(this.storage).length - 1];
    var result = this.storage[last];
    delete this.storage[last];
    return result;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}