/**
 * Example of linear time O(n)
 */

function highestNumber(arr){
    let max = 0;
    const length = arr.length;
    for(let i=0; i < length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

// Array of 4 elements
const arr1 = [1, 2, 3, 4];
console.time("Time1");
console.log("Highest Number ", highestNumber(arr1));
console.timeEnd("Time1");


// Array of 1000 elements
const arr2 = Array.from(Array(1000000).keys());
console.time("Time2");
console.log("Highest Number ", highestNumber(arr2));
console.timeEnd("Time2");