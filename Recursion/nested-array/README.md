# Nested Array

Write a function to return a single array from nested array

### Requirements

```
/**
    * Function must accept an array of any depth e.g. [2, 3, [4, 5]]
    * Function must return a single array e.g. [2, 3, 4, 5]
*/
```

### Function Signature

```
/**
 * @param {number Array}
 * @return {number Array}
 */
 function nestedToSimpleArray(number[]): number[];
```

### Example

```
nestedToSimpleArray([2, 3, [4, 5]]); // return [2, 3, 4, 5]
nestedToSimpleArray([2, 3, [4, [5]]]); // return [2, 3, 4, 5]
```

### Solution

<details>
<summary>Click Here for solution </summary>

```
function nestedToSimpleArray(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      const r = nestedToSimpleArray(arr[i]);
      result = result.concat(r);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
```

</details>
