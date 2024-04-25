import { Stack } from "../custom-stack/stack.js";

function reverseString(str) {
  let stack = new Stack();
  let reverseString = "";
  let len = str.length;

  for (let i = 0; i < len; i++) {
    stack.push(str[i]);
  }

  for (let i = 0; i < len; i++) {
    reverseString += stack.pop();
  }

  return reverseString;
}

const str1 = "hi";
console.log(`Reverse of ${str1} is `, reverseString(str1));

const str2 = "hello";
console.log(`Reverse of ${str2} is `, reverseString(str2));
