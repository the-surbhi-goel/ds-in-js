# Insertion Sort

Write a function to sort a given array using insertion-sort.

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
 function insertionSort(arr[]) : number[]
 ```


### Example
```
const arr = [5, 9, 3, 2, 10, 17, 4, 8];
function insertionSort(arr); // Returns [2, 3, 4, 5, 8, 9, 10, 17]
```

### Explanation
```
In insertion sort, we consider first element is sorted.
Now we'll pick 2nd element and arrange with 1st element like
1st and 2nd element is sorted.
Now we'll 3rd element and arrange with 1st and 2nd element so that
1st, 2nd and 3rd element is sorted.
And so on.

Original Array: [5, 9, 3, 2, 10, 17, 4, 8]

_ denotes sorted array

Step 1: 
    _
    5, 9, 3, 2, 10, 17, 4, 8
    5 is sorted

Step 2:
    _  _
    5, 9, 3, 2, 10, 17, 4, 8
    Now we pick element2 i.e. 9 and arrange in sorted array

    1. compare 9 with 5 ( 5 !> 9), therefore

    5, 9 are sorted

Step 3:
    _  _  _
    5, 9, 3, 2, 10, 17, 4, 8
    Now we pick element3 i.e. 3 and arrange in sorted array

    1. compare 3 with 9 ( 9 > 3, move next)
    2. compare 3 with 5 ( 5 > 3) as index = 0 therefore stop here

    3 should be moved at first place
    3, 5, 9, 2, 10, 17, 4, 8
    3, 5, 9 are sorted

Step 4:
    _  _  _  _
    3, 5, 9, 2, 10, 17, 4, 8
    Now we pick element4 i.e. 2 and arrange in sorted array

    1. compare 2 with 9 ( 9 > 2, move next)
    2. compare 2 with 5 ( 5 > 2, move next)
    2. compare 2 with 3 ( 3 > 2) as index = 0 therefore stop here

    2 should be moved at first place
    2, 3, 5, 9, 10, 17, 4, 8
    2, 3, 5, 9 are sorted

Step 5:
    _  _  _  _  __
    2, 3, 5, 9, 10, 17, 4, 8
    Now we pick element5 i.e. 10 and arrange in sorted array

    1. compare 10 with 9  ( 9 !> 10), therefore 

    10 remains on its position
    2, 3, 5, 9, 10, 17, 4, 8
    2, 3, 5, 9, 10 are sorted

Step 6:
    _  _  _  _  __  __
    2, 3, 5, 9, 10, 17, 4, 8
    Now we pick element6 i.e. 17 and arrange in sorted array

    1. compare 17 with 10  ( 10 !> 17), therefore

    17 remains on its position
    2, 3, 5, 9, 10, 17, 4, 8
    2, 3, 5, 9, 10, 17 are sorted

Step 7:
    _  _  _  _  __  __  _
    2, 3, 5, 9, 10, 17, 4, 8
    Now we pick element7 i.e. 5 and arrange in sorted array

    1. compare 4 with 17 ( 17 > 4, move next)
    2. compare 4 with 10 ( 10 > 4, move next)
    3. compare 4 with 9 ( 9 > 4, move next)
    4. compare 4 with 5 ( 5 > 4, move next)
    5. compare 4 with 3 ( 3 !> 4) therefore stop here

    4 will shift to 3rd place
    2, 3, 4, 5, 9, 10, 17, 8
    2, 3, 4, 5, 9, 10, 17 are sorted

Step 8:
    _  _  _  _  _  __  __  _
    2, 3, 4, 5, 9, 10, 17, 8
    Now we pick element8 i.e. 8 and arrange in sorted array

    1. compare 8 with 17 ( 17 > 8, move next)
    2. compare 8 with 10 ( 10 > 8, move next)
    3. compare 8 with 9 ( 9 > 8, move next)
    4. compare 8 with 5 ( 5 !> 8) therefore stop here

    8 will shift to 5th place
    2, 3, 4, 5, 8, 9, 10, 17
    2, 3, 4, 5, 8, 9, 10, 17 are sorted

    Complete array is sorted

```


### Solution

<details>
<summary>Click Here for solution </summary>

```
function insertionSort(arr) {
    const len = arr.length;
    for(let i = 1; i < len; i++){
        const temp = arr[i];
        let j = i - 1; //Keep index of previous element for comparison

        while( j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
    return arr;
}
```
</details>

