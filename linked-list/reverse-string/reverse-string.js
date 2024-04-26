import { LinkedLst } from "../custom-linked-list/linked-list.js";

// Solution1
function reverseString(str) {
  let list = new LinkedLst();
  let reverseString = "";
  let len = str.length;

  for (let i = len - 1; i >= 0; i--) {
    list.add(str[i]);
  }

  let current = list.head;

  while(current.next !== null){
    reverseString += current.data;
    current = current.next;
  }

  reverseString += current.data;

  return reverseString;
}

// Solution2
function reverseString2(str) {
  let list = new LinkedLst();
  let reverseString = "";
  let len = str.length;

  for (let i = len - 1; i >= 0; i--) {
    list.add(str[i]);
  }

  for (let i = 0; i < len; i++) {
    reverseString += list.get(0);
    list.removeAt(0);
  }

  return reverseString;
}



const str1 = "hi";
console.log(`Reverse of ${str1} is `, reverseString(str1));

const str2 = "hello";
console.log(`Reverse of ${str2} is `, reverseString2(str2));
