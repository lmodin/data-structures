

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // bucket will either be undefined or hold a bucket with arrays
  var bucket = this._storage.get(index);

  if (bucket === undefined) {
    // bucket is reassigned to a holding bucket array
    bucket = [];
    this._storage.set(index, bucket);
  }

  //this portion will reassign the value of an existing key
  var found = false;
  //for loop is used to ieterate through the arrays withing the bucket holding array.
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    //if a mataching key is found in the arrays within the bucket
    //this conditional will update the value
    if (tuple[0] === k) {
      //only the value is chaanged key is left alone
      tuple[1] = v;
      found = true;
    }
  }
  // if key is never found we add a new array to the bucket
  if (!found) {
    bucket.push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //will return the index of the bucket containing key
  var bucket = this._storage.get(index);
  //if bucket is undefined return null
  if (bucket === undefined) {
    return undefined;
  }
  //for loop will iterate through the bucket array hodling arrays
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    //returns the value of the key
    if (tuple[0] === k) {
      return tuple[1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //use splice to delete the value from the index
  var bucket = this._storage.get(index);
  if (bucket !== undefined) {
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] === k) {
        //will slice from bucket the array condtaing key
        bucket.splice(i, 1);
      }
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 insert: aside from iterating through bucket, constant. iteration is up to linear
 retrieve: aside from iterating through bucket, constant. iteration is up to linear
 remove: aside from iterating through bucket, constant. iteration is up to linear
 */

