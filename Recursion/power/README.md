# Power

Write a function to calculate power of number x
(e.g. 2 raised to the power of 3 (2^3) is 8 i.e. 2*2*2=8)

### Requirements

```
/**
    * Function must accept 2 numbers base and exponent
    * Function must return a number 
*/
```

### Function Signature

```
/**
 * @param {number} - base
 * @param {number} - exponent
 * @return {number} - result (base raised to the power of exponent)
 */
 function power(number, number): number;
```

### Example

```
power(3, 0); // return 1
power(3, 1); // return 3
power(2, 3); // return 8
```

### Solution

<details>
<summary>Click Here for solution </summary>

```
function power(base, e) {
    if(e === 0){
        return 1;
    }
    return base * power(base, e-1);
}
```

</details>
