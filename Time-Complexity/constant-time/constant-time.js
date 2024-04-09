/**
 * Example of constant time O(1)
 */

function doubleElement(arr, index){
    return arr[index] * 2;
}

// Array of 4 elements
const arr = [1, 2, 3, 4];
console.time("Time1");
console.log("Read Element ", doubleElement(arr, 2));
console.timeEnd("Time1");


// Array of 1000 elements
const arr2 = Array.from(Array(1000).keys());
console.log(arr2);
console.time("Time2");
console.log("Read Element ", doubleElement(arr2, 2));
console.timeEnd("Time2");