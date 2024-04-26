# Reverse string using queue

Write a function to reverse a string using queue.

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

Here Queue is custom-created queue
```

</details>
