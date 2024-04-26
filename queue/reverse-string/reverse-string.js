import { Queue } from '../custom-queue/queue.js';

function reverseString(str) {
  let queue = new Queue();

  let reverseString = "";
  let len = str.length;

  for (let i = len-1 ; i >= 0; i--) {
    queue.enqueue(str[i]);
  }

  for (let i = 0; i < len; i++) {
    reverseString += queue.dequeue();
  }

  return reverseString;
}

const str1 = "hi";
console.log(`Reverse of ${str1} is `, reverseString(str1));

const str2 = "hello";
console.log(`Reverse of ${str2} is `, reverseString(str2));
