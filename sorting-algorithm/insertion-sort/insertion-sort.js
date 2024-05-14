function insertionSort(arr) {
    const len = arr.length;
    for(let i = 1; i < len; i++){
        const temp = arr[i];
        let j = i - 1; //Keep index of previous element for comparison

        while( j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
    return arr;
}


const arr = [5, 9, 3, 2, 10, 17, 4, 8];
console.log("Array = ", arr);
console.log("\n 1. Sorted Array =", insertionSort(arr));