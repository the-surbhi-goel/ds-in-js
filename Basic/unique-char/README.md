# Remove Dupilcates

Write a function to check given string has duplicate characteror not

### Requirements

```
/**
    * Function must accept a string
    * Function must return true or false
*/
```

### Function Signature

```
/**
 * @param {number} arr
 * @returns {number} arr
 */
 function uniqueChar(string): number;
```

### Example

```
uniqueChar("abcdef"); // return true
uniqueChar("abcdefe"); // return false
```

### Solution

<details>
<summary>Click Here for solution </summary>

```
function uniqueChar(str) {
  const len1 = str.length;

  const set1 = new Set(str);
  const len2 = Array.from(set1).length;

  return len1 === len2;
}
```

</details>
