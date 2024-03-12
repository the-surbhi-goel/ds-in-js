// Solution 1
function findMaxNumber(arr) {
  return Math.max(...arr);
}

const arr1 = [1, 2, 3, 4, 8, 0, 9, 25, 12];
const result1 = findMaxNumber(arr1);
console.log("Max number = ", result1);

// ----------------------------------------

//Solution 2
function findMaxNumber2(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

const result2 = findMaxNumber2(arr1);
console.log("Max number = ", result2);
