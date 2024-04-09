function permutations(str) {
  let result = [];
  const len = str.length;

  if (len === 0) {
    result.push("")
    return result;
  }

  for (let i = 0; i < len; i++) {
    const firstLetter = str[i];
    const remainingString = str.slice(0, i) + str.slice(i+1);

    //Calculate sub-permutations
    const subPermu = permutations(remainingString);

    //Append first charcter in sub-permutations
    for(let j =0; j< subPermu.length; j++){
        result.push(firstLetter + subPermu[j]);
    }
  }

  return result;
}

console.log("Permutations of 'abc' are");
console.log(permutations('abc'));
console.log("\nPermutations of 'ab' are");
console.log(permutations('ab'));
