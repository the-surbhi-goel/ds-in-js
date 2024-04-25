function targetSum(arr, target) {
    const s = new Set();

    for(let i = 0; i < arr.length; i++) {
        const compliment = target - arr[i];

        if(s.has(compliment)){
            return [arr[i], compliment];
        }

        s.add(arr[i]);
    }
    return [];
}

console.log("target sum of targetSum([2, 3, 4, 6], 7) is ", targetSum([2, 3, 4, 6], 7));
console.log("target sum of targetSum([2, 3, 4, 6], 9) is ", targetSum([2, 3, 4, 6], 9));
console.log("target sum of targetSum([2, 3, 4, 6], 11) is ", targetSum([2, 3, 4, 6], 11));