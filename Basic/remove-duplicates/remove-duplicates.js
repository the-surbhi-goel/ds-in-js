const arr1 = [0, 0, 0, 1, 1, 2, 0, 3, 4, 4, 5, 5, 5];
console.log("Original array = ", arr1);

// Solution1
function removeDuplicates1(arr) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

const result1 = removeDuplicates1(arr1);
console.log("Unique array1 = ", result1);



// ---------------------------------------------------------



// Solution2
function removeDuplicates2(arr) {
  return Array.from(new Set(arr));
}

const result2 = removeDuplicates2(arr1);
console.log("Unique array2 = ", result2);
