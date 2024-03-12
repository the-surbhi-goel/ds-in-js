# Calculator
Write a function to find maximum number from an array


### Requirements
/**
    * Function must accept an array of numbers
    * Function must return a number
*/


### Function Signature
/**
 * @param {number} arr
 * @returns number
 */


### Example
const arr1 = [1, 2, 3, 4, 8, 0, 9, 25, 12];
function findMaxNumber(arr1); // Returns 25


### Solution

<details>
<summary>Click Here for solution 1</summary>

```
function findMaxNumber(arr) {
    return Math.max(...arr);
}
```
</details>

<details>
<summary>Click Here for solution 2</summary>

```
function findMaxNumber2(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}
```
</details>