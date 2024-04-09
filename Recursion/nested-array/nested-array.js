function nestedToSimpleArray(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      const r = nestedToSimpleArray(arr[i]);
      result = result.concat(r);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

const arr1 = [2, 3, [4, 5]];
console.log("[2, 3, [4, 5]] = ", nestedToSimpleArray(arr1));
