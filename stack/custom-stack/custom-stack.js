import { Stack } from '../custom-stack/stack.js';

const stack = new Stack();
console.log("Initial Stack");
console.log(stack);

stack.push(1);
stack.push(2);
stack.push(3);

console.log("\nAfter pushing 3 items");
console.log(stack);

console.log("\nAfter pop 1 item");
console.log("pop item is ", stack.pop());
console.log(stack);

console.log("\n Peek 1 element");
console.log("Peek item is ", stack.peek());
console.log(stack);



