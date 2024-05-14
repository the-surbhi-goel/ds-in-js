# Selection Sort

Write a function to sort a given array using selection-sort.

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
 function selectionSort(arr[]) : number[]
 ```


### Example
```
const arr = [5, 9, 3, 2, 10, 17, 4, 8];
function selectionSort(arr); // Returns [2, 3, 4, 5, 8, 9, 10, 17]
```

### Explanation
```
Selection sort sorts the array by selecting smallest element
from the unsorted array and push into sorted array
1. First find smallest element and replace with 1st element
2. Find another smallest element (Leave first element),
   replace with 2nd element
3. Find another smallest element (Leave first 2 elements),
   replace with 3rd element

Original Array: [5, 9, 3, 2, 10, 17, 4, 8]
Step 1: 
             _
    5, 9, 3, 2, 10, 17, 4, 8
    Find smallest element, replace with 1st element
    2, 9, 3, 5, 10, 17, 4, 8

    2 is sorted

Step 2:
              _
    2,     9, 3, 5, 10, 17, 4, 8
    Find another smallest element, replace with 2nd element
    2, 3, 9, 5, 10, 17, 4, 8

    2, 3 is sorted

Step 3:
    2, 3,     9, 5, 10, 17, 4, 8
    Find another smallest element, replace with 3rd element
    2, 3, 4, 5, 10, 17, 9, 8

    2, 3, 4 is sorted

Step 4:
    2, 3, 4,     5, 10, 17, 9, 8
    Find another smallest element, replace with 4th element
    2, 3, 4, 5, 10, 17, 9, 8

    2, 3, 4, 5 is sorted

Step 5:
    2, 3, 4, 5,     10, 17, 9, 8
    Find another smallest element, replace with 5th element
    2, 3, 4, 5, 8, 17, 9, 10

    2, 3, 4, 5, 8 is sorted

Step 5:
    2, 3, 4, 5, 8,      17, 9, 10
    Find another smallest element, replace with 6th element
    2, 3, 4, 5, 8, 9, 17, 10

    2, 3, 4, 5, 8, 9 is sorted

Step 6:
    2, 3, 4, 5, 8, 9,      17, 10
    Find another smallest element, replace with 7th element
    2, 3, 4, 5, 8, 9, 10, 17

    Complete array is sorted

```


### Solution

<details>
<summary>Click Here for solution </summary>

```
function selectionSort(arr) {
    const len = arr.length;

    for(let i = 0; i < len - 1; i++){
        let tempIndex = i;

        for(let j = i + 1; j < len; j++){
            if(arr[j] < arr[tempIndex]){
                tempIndex = j;
            }
        }

        //swap arr[i] with arr[tempIndex] if i != tempIndex
        if(tempIndex !== i){
            const temp = arr[i];
            arr[i] = arr[tempIndex];
            arr[tempIndex] = temp;
        }
    }

    return arr;

}
```
</details>

