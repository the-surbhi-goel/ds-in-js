# Longest Consecutive Sequence

Write a function to find out the longest consecutive sequence from an input array.

#### What is Consecutive Sequence

Consecutive sequence is defined as those numbers that follow each other in increasing order from smallest to largest with no missing numbers in between.

### Requirements

```
/**
    * Function must accept an array of integers
    * Function must return array
*/
```

### Function Signature

```
/**
 * @param {number[]} - Input array of integers
 * @returns {number[]} - An array of Consecutive Sequence
 */
 function longestConsecutiveSequence(number[]): number[];
```

### Example

```
longestConsecutiveSequence([2, 3, 4, 101, 6, 100]); // return [2, 3, 4]
longestConsecutiveSequence([2, 4, 6, 101, 5]); // return [4, 5, 6]
```

### Solution

<details>
<summary>Click Here for solution </summary>

```
function longestConsecutiveSequence(arr) {
  const numSet = new Set(arr);

  let longestSequence = [];
  let longestLength = 0;

  for (const i of numSet) {
    if (!numSet.has(i - 1)) {
      let currentNumber = i;
      let currentLength = 1;

      while (numSet.has(currentNumber + 1)) {
        currentNumber++;
        currentLength++;
      }

      if(longestLength < currentLength){
        longestLength = currentLength;
        longestSequence = fillNumbers(i, currentNumber);
      }
    }
  }
  return longestSequence;
}

function fillNumbers(start, end) {
    let arr = [];
    for(let i = start; i <= end; i++){
        arr.push(i);
    }
    return arr;
}
```

</details>
