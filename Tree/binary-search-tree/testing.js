import { BST } from './binary-search-tree.js';

const tree = new BST();
console.log("Initial tree");
console.log(tree);

tree.insert(15);
tree.insert(11);
tree.insert(11);
tree.insert(18);
tree.insert(10);
tree.insert(18);
tree.insert(16);
tree.insert(20);

console.log("\nAfter adding 15, 11, 18");
tree.print();


// uncomment it to see the action
// console.log("\nSearching 11 which exist in the tree");
// console.log(tree.search(11));

// console.log("\nSearching 16 which does not exist in the tree");
// console.log(tree.search(16));

console.log("\n\nAfter removing root node");
tree.remove(15);
tree.print();
