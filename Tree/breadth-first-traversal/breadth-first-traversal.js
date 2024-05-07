class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Using Queue
// push -> to insert item in queue
// shift -> to remove first item of queue
function breadthFirstTraversal1(root) {
  if (!root) {
    return [];
  }

  const result = [];
  const queue = [];

  queue.push(root);

  while (queue.length > 0) {
    const current = queue.shift();
    result.push(current.data);

    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }

  return result;
}

//Using Recursion
function breadthFirstTraversal2(root) {
  if (!root) {
    return [];
  }

  const result = [];
  result.push(root.data);

  function traverse(node) {
    if (node !== null) {
        const left = node.left;
        const right = node.right;
        if (left) {
            result.push(left.data);
        }
        if (right) {
            result.push(right.data);
        }
        traverse(left);
        traverse(right);
    }
  }

  traverse(root);
  return result;
}

// Binary Tree
//                  a
//                 /  \
//                b    c
//               / \  /
//              d   e f
//
// Breadth First Traversal Result: a b c d e f

// creating binary tree
const root = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

root.left = b;
root.right = c;
b.left = d;
b.right = e;
c.right = f;

const result = breadthFirstTraversal1(root);
console.log("Using Queue, traversing is ", result);

const result2 = breadthFirstTraversal2(root);
console.log("\nUsing Reccursion, traversing is ", result2);
