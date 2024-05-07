class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


// Using Stack
function depthFirstTraversal1(root) {
    if(!root) {
        return [];
    }

    const result = [];
    const stack = [];

    stack.push(root);

    while(stack.length > 0) {
        const current = stack.pop();
        result.push(current.data);

        if(current.right){
            stack.push(current.right);
        }

        if(current.left){
            stack.push(current.left);
        }
    }

    return result;
}

//Using Recursion
function depthFirstTraversal2(root){
    const result = [];

    function traverse(node) {
        if(node !== null) {
            result.push(node.data);
            traverse(node.left);
            traverse(node.right);
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
// Depth First Traversal Result: a b d e c f


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
c.right = f;

const result = depthFirstTraversal1(root);
console.log("Using Stack, traversing is ", result);

const result2 = depthFirstTraversal2(root);
console.log("\nUsing Reccursion, traversing is ", result2);