class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
}


function isValidBST(root) {
    function isValidSubtree(node, min, max) {
        if(!node){
            return true;
        }

        if(
            (min !== null && node.data <= min) ||
            (max !== null && node.data >= max)
        ){
            return false;
        }

        const res = isValidSubtree(node.left, min, node.data) && 
                    isValidSubtree(node.right, node.data, max);
        return res;
    }

    return isValidSubtree(root, null, null);
}


// Valid BST
//                  10
//                 /  \
//                7    15
//               / \  /
//              4   8 12

const root1 = new Node(10);
const n7 = new Node(7);
const n15 = new Node(15);
const n4 = new Node(4);
const n8 = new Node(8);
const n12 = new Node(12);

root1.left = n7;
root1.right = n15;
n7.left = n4;
n7.right = n8;
n15.left = n12;

const result1 = isValidBST(root1);
console.log("Tree 1 ", result1);


//---------------------------------------------------------------

// InValid BST
//                  10
//                 /  \
//                7    15
//               / \  /
//              4   8 9
// Here 9 is at the wrong place

const root2 = new Node(10);
const n_7 = new Node(7);
const n_15 = new Node(15);
const n_4 = new Node(4);
const n_8 = new Node(8);
const n_9 = new Node(9);

root2.left = n_7;
root2.right = n_15;
n_7.left = n_4;
n_7.right = n_8;
n_15.left = n_9;

const result2 = isValidBST(root2);
console.log("Tree 2 ", result2);