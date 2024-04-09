/**
 * Example of Quadratic time O(n^2)
 */

function bubbleSort(arr) {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    return arr;
}

const arr1 = [3, 5, 1, 9, 12];
console.time("Time1");
console.log("sorted array ", bubbleSort(arr1));
console.timeEnd("Time1");
