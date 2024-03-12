# Array Intersection
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.


### Requirements
```
/**
    * Function must accept two array of numbers
    * Function must return an array of unique numbers which exist in both arrays
*/
```


### Function Signature
```
/**
 * @param {number} arr1
 * @param {number} arr2
 * @returns {number} arr
 */
 function arrayIntersction1(arr1, arr2) : any[]
 ```


### Example
```
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 5, 6, 7];
function arrayIntersction1(arr1, arr2); // Returns [3, 4, 5]
```


### Solution

<details>
<summary>Click Here for solution 1</summary>

```
function arrayIntersction1(arr1, arr2) {
  const commonArr = [];

  for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i]) && !commonArr.includes(arr2[i])) {
      commonArr.push(arr2[i]);
    }
  }

  return commonArr;
}
```
</details>

<details>
<summary>Click Here for solution 2</summary>

```
function arrayIntersction2(arr1, arr2) {
  const set1 = new Set(arr1);
  const commonSet = new Set();

  for (let i = 0; i < arr2.length; i++) {
    if (set1.has(arr2[i])) {
      commonSet.add(arr2[i]);
    }
  }

  return Array.from(commonSet);
}
```
</details>
