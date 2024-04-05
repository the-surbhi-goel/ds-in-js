# Count Down

Write a function to count-down until 0(Print Done in caseof 0)

### Requirements

```
/**
    * Function must accept a number
    * Function must print numbers as count down until 0
*/
```

### Function Signature

```
/**
 * @param {number} 
 */
 function isValidPassword(string): boolean;
```

### Example

```
countDown(5); // prints 5 4 3 2 1 Done
countDown(0); // prints Done
```

### Solution

<details>
<summary>Click Here for solution </summary>

```
function countDown(num) {
    if(num === 0) {
        console.log("Done");
        return;
    }
    console.log(num);
    countDown(num-1);
}
```

</details>
