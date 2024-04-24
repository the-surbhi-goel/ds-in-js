# Word Frequency

Write a function wordFrequency that takes a string as input and returns a map that represents the frequency of each word in the string.

### Requirements

```
/**
    * Function must accept a string
    * Function must return a map that represents the frequency of each word
*/
```

### Function Signature

```
/**
 * @param {string}
 * @returns {map<string, number>}
 */
 function wordFrequency(string): map;
```

### Example

```
wordFrequency("hello hi hello"); // Map(2) { 'hello' => 2, 'hi' => 1 }
```

### Solution

<details>
<summary>Click Here for solution 1</summary>

```
function wordFrequency(str) {
    const words = str.toLowerCase().split(" ");
    const map = new Map();
    words.forEach(element => {
        if(map.has(element)){
            let prevCount = map.get(element);
            map.set(element, prevCount+1);
        } 
        else{
            map.set(element, 1);
        }
    });
    return map;
}
```

</details>

