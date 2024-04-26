# Reverse string using linked-list

Write a function to reverse a string using linked-list.

### Requirements

```
/**
    * Function must accept a string
    * Function must return reverse string
*/
```

### Function Signature

```
/**
 * @param {string} - Input string
 * @returns {string} - Reversed string
 */
 function reverseString(string): string;
```

### Example

```
reverseString("hello") // return olleh
reverseString("I am") // return ma I
```

### Solution

<details>
<summary>Click Here for solution 1</summary>

```
import { LinkedLst } from "../custom-linked-list/linked-list.js";

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

Here LinkedLst is custom-created LinkedLst
```

</details>


<details>
<summary>Click Here for solution 2</summary>

```
import { LinkedLst } from "../custom-linked-list/linked-list.js";

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

Here LinkedLst is custom-created LinkedLst
```

</details>
