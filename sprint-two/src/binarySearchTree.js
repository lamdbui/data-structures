var BinarySearchTree = function(value) {
  var bst = Object.create(BinarySearchTree.prototype);
  bst.value = value;
  bst.right = undefined;
  bst.left = undefined;
  return bst;
};

BinarySearchTree.prototype.insert = function(newValue) {
  // right  
  if (this.value < newValue) {
    // we found a spot - insert!
    if (this.right === undefined) {
      this.right = BinarySearchTree(newValue);
    } else {
      this.right.insert(newValue);
    }
  } else {  // left
    // we found a spot - insert!
    if (this.left === undefined) {
      this.left = BinarySearchTree(newValue);
    } else {
      this.left.insert(newValue);
    }
  }
};

BinarySearchTree.prototype.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  if (this.value < target) {
    // right
    if (this.right && this.right.contains(target)) {
      return true;
    }
  } else {  // left
    if (this.left && this.left.contains(target)) {
      return true;
    }
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  
  // right
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
  // left
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
};

BinarySearchTree.prototype.breadthFirstLog = function(cb) {
  var queue = [this];
  while (queue.length) {
    if (queue[0].left) {
      queue.push(queue[0].left);
    }
    if (queue[0].right) {
      queue.push(queue[0].right);
    }
    cb(queue[0]);
    queue.shift();
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(log n)
 contains: O(log n)
 depthFirstLog: O(n)
 breadthFirstLog: O(n)
 */
