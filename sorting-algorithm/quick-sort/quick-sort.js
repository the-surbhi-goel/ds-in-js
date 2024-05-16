function quickSort(arr) {
    const len = arr.length;

    // Base case
    if(len <= 1){
        return arr;
    }

    //selecting last element as pivot 
    const pivot = arr[len - 1];
    const lessArr = [];
    const greaterArr = [];

    for(let i = 0; i < len-1; i++ ){
        if(arr[i] < pivot){
            lessArr.push(arr[i]);
        }
        else {
            greaterArr.push(arr[i]);
        }
    }

    //join result [ lessArr, pivot, greaterArr ]
    let result = quickSort(lessArr);
    result.push(pivot);
    result = result.concat(quickSort(greaterArr));

    return result;
}

const arr = [5, 9, 3, 2, 10, 17, 4, 8];
console.log("Array = ", arr);
console.log("\n 1. Sorted Array =", quickSort(arr));