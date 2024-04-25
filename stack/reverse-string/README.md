# Reverse string using stack

Write a function to reverse a string using stack.

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
<summary>Click Here for solution </summary>

```
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

Here Stack is custom-created stack
```

</details>
