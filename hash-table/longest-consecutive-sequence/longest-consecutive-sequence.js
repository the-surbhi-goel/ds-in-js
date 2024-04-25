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


let result1 = longestConsecutiveSequence([2, 3, 4, 101, 6, 100]);
console.log("Longest Consecutive Sequence of [2, 3, 4, 101, 6, 100] is");
console.log(result1);

let result2 = longestConsecutiveSequence([2, 1, 4, 101, 6, 100, 102, 103]);
console.log("Longest Consecutive Sequence of [2, 1, 4, 101, 6, 100, 102, 103] is");
console.log(result2);
