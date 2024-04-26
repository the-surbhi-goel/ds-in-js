import { LinkedLst } from './linked-list.js';

const ll = new LinkedLst();
console.log("Initial Linked List");
console.log(ll);

ll.add(1);
ll.add(2);
ll.add(3);

console.log("\nAfter add 3 items");
ll.print();


console.log("\nGet data at index 1");
console.log(ll.get(1));
console.log(ll.get(5));

console.log("\nAfter adding at 0 position");
ll.insert(0, 0);
ll.print();

console.log("\nAfter removing at 1 position");
ll.removeAt(1);
ll.print();