# Bubble Sort

Write a function to sort a given array using bubble-sort.

Complexity: Worst-case(O(n2))


### Requirements
```
/**
    * Function must accept an array of numbers
    * Function must return sorted array
*/
```


### Function Signature
```
/**
 * @param {number} arr
 * @returns {number} arr
 */
 function bubbleSort(arr[]) : number[]
 ```


### Example
```
const arr = [5, 9, 3, 2, 10, 17, 4, 8];
function bubbleSort(arr); // Returns [2, 3, 4, 5, 8, 9, 10, 17]
```

### Explanation
```
Bubble sort algo sorts an array by comparing 2 adjacent elements 
and swap them if they are not in correct order. 
It sorts an array in ascending order. 
It'll put greatest element at the last position of the array.

Original Array: [5, 9, 3, 2, 10, 17, 4, 8]
Step 1: 
    _  _
    5, 9, 3, 2, 10, 17, 4, 8
       _  _
    5, 9, 3, 2, 10, 17, 4, 8   swap 9 and 3
    5, 3, 9, 2, 10, 17, 4, 8 
          _  _
    5, 3, 9, 2, 10, 17, 4, 8   swap 9 and 2
    5, 3, 2, 9, 10, 17, 4, 8 
             _  __
    5, 3, 2, 9, 10, 17, 4, 8 
                __  __
    5, 3, 2, 9, 10, 17, 4, 8  
                    __  _
    5, 3, 2, 9, 10, 17, 4, 8  swap 17 and 4
    5, 3, 2, 9, 10, 4, 17, 8
                       __  _
    5, 3, 2, 9, 10, 4, 17, 8  swap 17 and 8
    5, 3, 2, 9, 10, 4, 8, 17
    17 is sorted

Step 2:
    _  _
    5, 3, 2, 9, 10, 4, 8, 17 swap 5 and 3
    3, 5, 2, 9, 10, 4, 8, 17
       _  _
    3, 5, 2, 9, 10, 4, 8, 17 swap 5 and 2
    3, 2, 5, 9, 10, 4, 8, 17
          _  _
    3, 2, 5, 9, 10, 4, 8, 17
             _  __
    3, 2, 5, 9, 10, 4, 8, 17
             _  __
    3, 2, 5, 9, 10, 4, 8, 17
                __  _
    3, 2, 5, 9, 10, 4, 8, 17 swap 10 and 4
    3, 2, 5, 9, 4, 10, 8, 17
                   __  _
    3, 2, 5, 9, 4, 10, 8, 17 swap 10 and 8
    3, 2, 5, 9, 4, 8, 10, 17
                      __  __
    3, 2, 5, 9, 4, 8, 10, 17
    10, 17 is sorted

Step 3:
    _  _
    3, 2, 5, 9, 4, 8, 10, 17 swap 3 and 2
    2, 3, 5, 9, 4, 8, 10, 17
       _  _
    2, 3, 5, 9, 4, 8, 10, 17
          _  _
    2, 3, 5, 9, 4, 8, 10, 17
             _  _
    2, 3, 5, 9, 4, 8, 10, 17 swap 9 and 4
    2, 3, 5, 4, 9, 8, 10, 17
                _  _
    2, 3, 5, 4, 9, 8, 10, 17 swap 9 and 8
    2, 3, 5, 4, 8, 9, 10, 17
    9, 10, 17 is sorted

Step 4:
    _  _
    2, 3, 5, 4, 8, 9, 10, 17
       _  _
    2, 3, 5, 4, 8, 9, 10, 17
          _  _
    2, 3, 5, 4, 8, 9, 10, 17 swap 5 and 4
    2, 3, 4, 5, 8, 9, 10, 17
             _  _
    2, 3, 4, 5, 8, 9, 10, 17
    8, 9, 10, 17 is sorted

Step 5:
    _  _
    2, 3, 4, 5, 8, 9, 10, 17
       _  _
    2, 3, 4, 5, 8, 9, 10, 17
          _  _
    2, 3, 4, 5, 8, 9, 10, 17
    5, 8, 9, 10, 17 is sorted

Step 6:
    _  _
    2, 3, 4, 5, 8, 9, 10, 17
       _  _
    2, 3, 4, 5, 8, 9, 10, 17
    4, 5, 8, 9, 10, 17 is sorted

Step 7:
    _  _
    2, 3, 4, 5, 8, 9, 10, 17
    2, 3, 4, 5, 8, 9, 10, 17 is sorted

    Complete array is sorted

```


### Solution

<details>
<summary>Click Here for solution </summary>

```
function bubbleSort(arr){
    const len = arr.length;
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len - i - 1; j++) {
            if(arr[j] > arr[j+1]) { //swap them
                const temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
```
</details>

