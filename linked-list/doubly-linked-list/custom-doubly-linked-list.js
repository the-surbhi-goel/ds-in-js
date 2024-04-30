import { DoublyLinkedList } from './doubly-linked-list.js';

const dll = new DoublyLinkedList();
console.log("Initial Doubly Linked List");
console.log(dll);

dll.add(1);
dll.add(2);
dll.add(4);

console.log("\nAfter add 3 items");
dll.print();

console.log("\n Add 0 at the beginning");
dll.insertAtBeginning(0);
dll.print();

console.log("\n Add 3 at particular(4th) position");
dll.insertAt(3, 3);
dll.print();


console.log("\n Get data at index 0 (Start Position)");
console.log(dll.get(0));

// Uncomment it for testing
// console.log("\n Get data at index 4 (Last Position)");
// console.log(dll.get(4));

// Uncomment it for testing
// console.log("\n Get data at index 2 (Random Position)");
// console.log(dll.get(2));


console.log("\n Remove data at index 0 (Start Position)");
dll.removeAt(0);
dll.print();

// console.log("\n Remove data at index 4 (Last Position)");
// dll.removeAt(4);
// dll.print();

// console.log("\n Remove data at index 4 (Last Position)");
// dll.removeAt(2);
// dll.print();

console.log("\nCheck element exist or not");
console.log("Item 2 ", dll.contains(2));
console.log("Item 20 ", dll.contains(20));