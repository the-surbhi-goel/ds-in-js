import { Queue } from './queue.js';

const queue = new Queue();
console.log("Initial Queue");
console.log(queue);

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log("\nAfter enqueue 3 items");
console.log(queue);

console.log("\nAfter dequeue 1 item");
console.log("Dequeue item is ", queue.dequeue());
console.log("Dequeue item is ", queue.dequeue());
console.log(queue);