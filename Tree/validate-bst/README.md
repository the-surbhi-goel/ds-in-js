# Validate BST

Write a function to validate given BST(Binary Search Tree) is valid or not


### Requirements
```
/**
    * Function must accept root node of BST
    * Function must return true if BST is valid otherwise false
*/
```


### Function Signature
```
/**
 * @param {Node} root
 * @returns {boolean}
 */
 function isValidBST(root) : boolean
 ```


### Example
```
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

isValidBST(root1); //must return true

```


### Solution

<details>
<summary>Click Here for solution</summary>

```
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
```
</details>
