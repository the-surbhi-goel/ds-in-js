class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function maxDepth(root) {
    if(!root) {
        return [];
    }

    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    if(leftDepth > rightDepth) {
        return leftDepth + 1;
    }
    else {
        return rightDepth + 1;
    }
}

// Binary Tree
//                  a
//                 /  \
//                b    c
//               / \  /
//              d   e f
//
// Maximum depth is 3 (a -> b -> d) or (a -> b -> e) or (a -> c -> f)

// creating binary tree
const root = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

root.left = b;
root.right = c;
b.left = d;
b.right = e;
c.left = f;

const result = maxDepth(root);
console.log("Maximum depth is ", result.length);