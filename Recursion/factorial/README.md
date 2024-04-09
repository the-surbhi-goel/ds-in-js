# Factorial

Write a function to find factorial

### Requirements

```
/**
    * Function must accept a number(n)
    * Function must return a number which is a factorial of number n
*/
```

### Function Signature

```
/**
 * @param {number}
 * @return {number}
 */
 function factorial(number): number;
```

### Example

```
factorial(1); // return 1
factorial(5); // return 120
```

### Solution

<details>
<summary>Click Here for solution </summary>

```
function factorial(num){
    if(num <= 1){
        return 1;
    }
    return num * factorial(num-1);
}
```

</details>
