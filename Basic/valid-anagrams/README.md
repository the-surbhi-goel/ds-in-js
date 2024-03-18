# Valid Anagrams

Write a function to check given 2 strings are anagrams or not.

#### What is Anagram
A word or phrase that is made by arranging the letters of another word or phrase in a different order

<p align="center">
  <img src="./anagram.png" width="350" title="Anagram">
</p>


### Requirements

```
/**
    * Function must accept two string
    * Function must return true or false
*/
```

### Function Signature

```
/**
 * @param {string} string1 - The first string
 * @param {string} string2 - The second string
 * @returns {boolean}
 */
 function validAnagram(string1: string, string2: string): boolean;
```

### Example

```
validAnagram("listen", "silent"); // return true
validAnagram("hey", "bye"); // return false
```

### Solution

<details>
<summary>Click Here for solution </summary>

```
function validAnagram(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }

  const count1Obj = s1.split("").reduce((obj, char)=>{
    obj[char] = obj[char] ? obj[char] + 1 : 0;
    return obj;
  },{});

  const count2Obj = s2.split("").reduce((obj, char)=>{
    obj[char] = obj[char] ? obj[char] + 1 : 0;
    return obj;
  },{});

  const result = Object.keys(count1Obj).every(key => {
    return count1Obj[key] === count2Obj[key];
  });

  return result;
}
```

</details>
