# Sum of 2 numbers from an array

Write a function which takes an array of intergers and one target integer and return an array of numbers that add upto the target
1. Input array must contain unique numbers

### Requirements

```
/**
    * Function must accept an array of integers
    * Function must accept a target integer
    * Function must return array
*/
```

### Function Signature

```
/**
 * @param {number[]} - Input array of integers
 * @param {number} - Target integer
 * @returns {number[]} - An array of 2 numbers
 */
 function targetSum(number[]): number[];
```

### Example

```
targetSum([2, 3, 4, 6], 7); // return [3, 4]
targetSum([2, 3, 4, 6], 10); // return [4, 6]
```

### Solution

<details>
<summary>Click Here for solution </summary>

```
function targetSum(arr, target) {
    const s = new Set();

    for(let i = 0; i < arr.length; i++) {
        const compliment = target - arr[i];

        if(s.has(compliment)){
            return [arr[i], compliment];
        }

        s.add(arr[i]);
    }
    return [];
}
```

</details>
