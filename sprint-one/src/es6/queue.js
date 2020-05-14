class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  enqueue(value) {
    var thisKey = Object.keys(this.storage).length;
    while (this.storage[thisKey] !== undefined) {
      thisKey ++;
    }
    this.storage[thisKey] = value;
  };

  dequeue() {
    var first = Object.keys(this.storage)[0];
    var value = this.storage[first];
    delete this.storage[first];
    return value;
  };

  size() {
    return Object.keys(this.storage).length;
  };

}
