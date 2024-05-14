function bubbleSort(arr){
    const len = arr.length;
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len - i - 1; j++) {
            if(arr[j] > arr[j+1]) { //swap them
                const temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

const arr1 = [5, 9, 3, 2, 10, 17, 4, 8];
console.log("Array = ", arr1);
console.log("\n 1. Sorted Array =", bubbleSort(arr1));
