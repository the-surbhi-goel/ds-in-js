function anagramGroup(strArr) {
    const group = new Map();

    for(const word of strArr) {
        const sortedWord = word.split('').sort().join('');
        if(group.has(sortedWord)) {
            const prevArr = group.get(sortedWord);
            prevArr.push(word);
            group.set(sortedWord,prevArr);
        }
        else{
            group.set(sortedWord,[word]);
        }
    }

    return Array.from(group.values());
}

const arr1 = ["listen", "silent", "cat", "tac"];
console.log(arr1);
console.log("Anagram group of array is");
console.log(anagramGroup(arr1));


const arr2 = ["hello", "cat", "tac"];
console.log("\n", arr2);
console.log("Anagram group of array is");
console.log(anagramGroup(arr2));