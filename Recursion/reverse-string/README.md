# Count Down

Write a function to reverse a string using recursion

### Requirements

```
/**
    * Function must accept a string
    * Function must return a string (Reverse string)
*/
```

### Function Signature

```
/**
 * @param {string}
 * @return {string} 
 */
 function reverseString(string): string;
```

### Example

```
reverseString('abc'); // return cba
reverseString('hello'); // prints olleh
```

### Solution

<details>
<summary>Click Here for solution </summary>

```
function reverseString(str) {
    if(str === '') {
        return '';
    }
    return reverseString(str.substr(1)) + str.charAt(0);
}
```

</details>
