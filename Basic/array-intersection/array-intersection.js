const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 5, 6, 7];

console.log("Array1 = ", arr1);
console.log("Array2 = ", arr2);

// Solution 1
function arrayIntersction1(arr1, arr2) {
  const commonArr = [];

  for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i]) && !commonArr.includes(arr2[i])) {
      commonArr.push(arr2[i]);
    }
  }

  return commonArr;
}

const result1 = arrayIntersction1(arr1, arr2);
console.log("Common array = ", result1);

//---------------------------------------------------------

// Solution 2
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

const result2 = arrayIntersction2(arr1, arr2);
console.log("Common array = ", result2);
