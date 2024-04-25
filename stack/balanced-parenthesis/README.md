# Balance Parenthesis

Write a function to check given string has balance parenthesis or not

### Requirements

```
/**
    * Function must accept a string containing parenthesis
    * Function must return true if there are balance parenthesis otherwise false
*/
```

### Function Signature

```
/**
 * @param {string} - Input string
 * @returns {boolean} - 
 */
 function isBalanceParenthesis(string): boolean;
```

### Example

```
isBalanceParenthesis('()()') // return true
isBalanceParenthesis('(()))') // return false I
```

### Solution

<details>
<summary>Click Here for solution </summary>

```
import { Stack } from "../custom-stack/stack.js";

function isBalanceParenthesis(str) {
  const stack = new Stack();
  const len = str.length;

  for (let i = 0; i < len; i++) {
    if (str[i] === "(") {
      stack.push("(");
    } else if (str[i] === ")") {
      if (stack.isEmpty()) {
        return false;
      }
      stack.pop();
    }
  }
  if (stack.isEmpty()) {
    return true;
  } else {
    return false;
  }
}

Here Stack is custom-created stack
```

</details>
