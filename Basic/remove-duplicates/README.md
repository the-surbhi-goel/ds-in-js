# Remove Dupilcates
Write a function to remove duplicate items from an array


### Requirements
```
/**
    * Function must accept an array of numbers
    * Function must return an array of unique numbers
*/
```


### Function Signature
```
/**
 * @param {number} arr
 * @returns {number} arr
 */
 ```


### Example
```
const arr1 = [0, 0, 0, 1, 1, 2, 0, 3, 4, 4, 5, 5, 5];
function findMaxNumber(arr1); // Returns [0, 1, 2, 3, 4, 5]
```


### Solution

<details>
<summary>Click Here for solution 1</summary>

```
function removeDuplicates1(arr) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
```
</details>

<details>
<summary>Click Here for solution 2</summary>

```
function removeDuplicates2(arr) {
  return Array.from(new Set(arr));
}
```
</details>