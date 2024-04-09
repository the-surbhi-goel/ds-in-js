/**
 * Example of space complexity O(n)
 */

function createArray(n) {
    const arr = [];
    for(let i = 0; i< n; i++){
        arr.push(i);
    }
    return arr;
}

console.log(createArray(5));
console.log(createArray(10));