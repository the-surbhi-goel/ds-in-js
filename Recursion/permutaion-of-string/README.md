# Permutation of String

Write a function to return allpermutations of a string.

### Requirements

```
/**
    * Function must accept a string
    * String should not have dupilcate characters
    * funtion must return an array of all permutations
*/
```

### Function Signature

```
/**
 * @param {string}
 * @return {string Array} - string of all permutations
 */
 function permutations(number, number): number;
```

### Example

```
permutations('ab'); // return ['ab', 'ba']
permutations('abc'); // return ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
```

### Solution

<details>
<summary>Click Here for solution </summary>

```
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
```

</details>
