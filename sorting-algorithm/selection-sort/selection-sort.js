function selectionSort(arr) {
    const len = arr.length;

    for(let i = 0; i < len - 1; i++){
        let tempIndex = i;

        for(let j = i + 1; j < len; j++){
            if(arr[j] < arr[tempIndex]){
                tempIndex = j;
            }
        }

        //swap arr[i] with arr[tempIndex] if i != tempIndex
        if(tempIndex !== i){
            const temp = arr[i];
            arr[i] = arr[tempIndex];
            arr[tempIndex] = temp;
        }

        console.log(arr);
    }

    return arr;

}

const arr = [5, 9, 3, 2, 10, 17, 4, 8];
console.log("Array = ", arr);
console.log("\n 1. Sorted Array =", selectionSort(arr));