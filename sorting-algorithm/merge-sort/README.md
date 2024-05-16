# Merge Sort

Write a function to sort a given array using merge-sort.

Time Complexity: O(n log n)


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
 function mergeSort(arr[]) : number[]
 ```


### Example
```
const arr = [5, 9, 3, 2, 10, 17, 4, 8];
function mergeSort(arr); // Returns [2, 3, 4, 5, 8, 9, 10, 17]
```

### Explanation
```
Merge sort follows the divide and conquer approach
Merge sort sorts the array by splitting array into 2 sub-arrays.
Then split those sub-arrays into further sub-arrays and so on.


                    5, 9, 3, 2, 10, 17, 4, 8
                        /           \
                       /             \
                5, 9, 3, 2         10, 17, 4, 8
                 /      \           /      \
                /        \         /        \
              5, 9      3, 2     10, 17     4, 8
             /    \    /    \    /    \    /   \
             |    |    |    |   |     |    |   | 
             5    9    3    2   10    17   4   8     Sorting process starts
             |    |    |    |   |     |    |   | 
              \  /      \  /      \  /      \ /
              5, 9      2, 3     10, 17     4, 8
                \         /         \         /
                 \       /           \       /
                 2, 3, 5, 9         4, 8, 10, 17
                      \                  /
                       \                /
                    2, 3, 4, 5, 8, 9, 10, 17



Original Array: [5, 9, 3, 2, 10, 17, 4, 8]

Step 1: 
             
    5, 9, 3, 2, 10, 17, 4, 8
    Divide into 2 sub-arrays

    5, 9, 3, 2,          10, 17, 4, 8

Step 2:
    5, 9, 3, 2,          10, 17, 4, 8
    Divide these 2 arrays into 2 sub-arrays
    5,9     3,2          10, 17       4, 8

Step 3:
    5,9     3,2          10, 17       4, 8
    Divide these 4 arrays into 2 sub-arrays
    5    9    3    2    10   17    4    8

    All elements are individual sorted

Step 4:
    5   9   3   2   10  17  4   8
    Combine 1st and 2nd array and sort them
    Combine 3rd and 4th array and sort them
    Combine 5th and 6th array and sort them
    Combine 7th and 8th array and sort them
    5, 9        2, 3        10, 17        4, 8

    These 4 sub-arrays are sorted

Step 5:
    5, 9        2, 3        10, 17        4, 8
    Combine 1st and 2nd array and sort them
    Combine 3rd and 4th array and sort them
    2, 3, 5, 9         4, 8, 10, 17
    These 2 sub-arrays are sorted

Step 6:
    2, 3, 5, 9         4, 8, 10, 17
    Combine 1st and 2nd array and sort them
    2, 3, 4, 5, 8, 9, 10, 17

    Complete array is sorted

```


### Solution

<details>
<summary>Click Here for solution </summary>

```
function mergeSort(arr) {

    // Base-case
    if(arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);

    // To sort sub-arrays
    const leftArray = mergeSort(arr.slice(0, mid));
    const rightArray = mergeSort(arr.slice(mid));

    return merge(leftArray, rightArray)
}

function merge(leftArray, rightArray) {
    let result = [];

    let l_len = leftArray.length;
    let r_len = rightArray.length;

    let l_index = 0;
    let r_index = 0;


    while(l_index < l_len && r_index < r_len) {
        if(leftArray[l_index] < rightArray[r_index]){
            result.push(leftArray[l_index]);
            l_index++;
        }
        else{
            result.push(rightArray[r_index]);
            r_index++;
        }
    }

    // If there is any element left in sub-array
    // slice will return the new array starting from the index arr.slice(index)
    // concat is used to join 2 arrays
    result = result.concat(leftArray.slice(l_index));
    result = result.concat(rightArray.slice(r_index));
    return result;
}
```
</details>

