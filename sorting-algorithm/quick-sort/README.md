# Quick Sort

Write a function to sort a given array using quick-sort.

Complexity: Time complexity: O(n log n)
            Worst-case(O(n2)) 


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
 function quickSort(arr[]) : number[]
 ```


### Example
```
const arr = [5, 9, 3, 2, 10, 17, 4, 8];
function quickSort(arr); // Returns [2, 3, 4, 5, 8, 9, 10, 17]
```

### Explanation
```
Quick sort also follows the divide and conquer approach
Quick sort sorts the array by selecting pivot element and
then divide array into 2 sub-arrays
(1st array contain elements less than pivot element and 
 2nd array contain elements greater than pivot element).
 Then again divide those sub-arrays into 2 parts by selecting
 another pivot element and so on.

 PE -> Pivot Element

                     5, 9, 3, 2, 10, 17, 4, 8   (Select 8 as pivot element)
                        /          |         \
                       /           |          \
                [5, 3, 2, 4]     8(PE)      [9, 10, 17]   
              Choose 4 as PE       |        Choose 17 as PE
                /     |     \      |           /   |    \
               /      |      \     |          /    |     \
            [3, 2]   4(PE)   [5]   |     [9, 10]  17(PE)  []
            PE = 2      |     |    |     PE = 10    |     |
           /  |  \      |     |    |     /  |  \    |     |
          /   |   \     |     |    |    /   |   \   |     |
        []  2(PE) [3]   |     |    |  [9] 10(PE) [] |     |
          \   |   /     |     |    |    \   |    /  |     |
           \  |  /      |     |    |     \  |   /   |     |
  join [] + PE(2) + [3] |     |    | [9]+PE(10)+[]  |     |
           [2, 3]       |     |    |     [9, 10]    |     |
              |         |     |    |        |       |     |
              |         |     |    |        |       |     |
        join [2, 3] + PE(4) +[5]   |   join [9, 10] + PE(17) + [] 
            [2, 3, 4, 5]           |           [9, 10, 17]
                 |                 |                |
                 |                 |                |
       join [2, 3, 4, 5]   +     PE(8)     +   [9, 10, 17]
                    [2, 3, 4, 5, 8, 9, 10, 17]
         





Original Array: [5, 9, 3, 2, 10, 17, 4, 8]
Step 1: 
    Choose 8 as pivot element
    Now array should be divide into 2 sub-arrays
    1. Containing elements less than 8
    2. Containing elements greater than 8
    [5, 3, 2, 4]        8(PE)        [9, 10, 17]

Step 2:
    [5, 3, 2, 4]        8(PE)        [9, 10, 17]
    Choose 4 as PE for 1st array,    Choose 17 as PE for 2nd array
    [3, 2]  4(PE)  [5]         8(PE)       [9, 10]  17(PE)  []

Step 3:
    ([3, 2]  4(PE)  [5])         8(PE)       ([9, 10]  17(PE)  [])
    Choose 2 as PE                          Choose 10 as PE
    {([]  2(PE)  [3])  4(PE)  [5]}       8(PE)    {([9] + 10(PE) + [])  17(PE)  []}

Step 4:
    {([]  2(PE)  [3])  4(PE)  [5]}       8(PE)    {([9] + 10(PE) + [])  17(PE)  []}
    join back
    {([2, 3])  4(PE)  [5] }       8(PE)    {([9, 10])  17(PE)  []}
    
    [2, 3] are sorted                       [9, 10] are sorted

Step 5:
    {([2, 3])  4(PE)  [5] }       8(PE)    {([9, 10])  17(PE)  []}
    join back
    [2, 3, 4, 5]                8(PE)           [9, 10, 17]
    [2, 3, 4, 5] are sorted                     [9, 10, 17] are sorted

Step 6:
    [2, 3, 4, 5]       8(PE)    [9, 10, 17]
    [2, 3, 4, 5, 8, 9, 10, 17]

    Complete array is sorted

```


### Solution

<details>
<summary>Click Here for solution </summary>

```
function quickSort(arr) {
    const len = arr.length;

    // Base case
    if(len <= 1){
        return arr;
    }

    //selecting last element as pivot 
    const pivot = arr[len - 1];
    const lessArr = [];
    const greaterArr = [];

    for(let i = 0; i < len-1; i++ ){
        if(arr[i] < pivot){
            lessArr.push(arr[i]);
        }
        else {
            greaterArr.push(arr[i]);
        }
    }

    //join result [ lessArr, pivot, greaterArr ]
    let result = quickSort(lessArr);
    result.push(pivot);
    result = result.concat(quickSort(greaterArr));

    return result;
}
```
</details>

