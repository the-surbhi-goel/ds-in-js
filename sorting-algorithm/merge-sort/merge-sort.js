function mergeSort(arr) {

    // Base-case
    if(arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const leftArray = mergeSort(arr.slice(0, mid));
    const rightArray = mergeSort(arr.slice(mid));

    return merge(leftArray, rightArray)
}

function merge(leftArray, rightArray) {
    let result = [];

    let l_len = leftArray.length;
    let r_len = rightArray.length;

    let l_index = 0;
    let r_index = 0;


    while(l_index < l_len && r_index < r_len) {
        if(leftArray[l_index] < rightArray[r_index]){
            result.push(leftArray[l_index]);
            l_index++;
        }
        else{
            result.push(rightArray[r_index]);
            r_index++;
        }
    }

    // If there is any element left in sub-array
    // slice will return the new array starting from the index arr.slice(index)
    // concat is used to join 2 arrays
    result = result.concat(leftArray.slice(l_index));
    result = result.concat(rightArray.slice(r_index));
    return result;
}

const arr = [5, 9, 3, 2, 10, 17, 4, 8];
console.log("Array = ", arr);
console.log("\n 1. Sorted Array =", mergeSort(arr));