# Count Down

Write a function to find out fibenacci number at position p

### Requirements

```
/**
    * Function must accept a number(position p)
    * Function must print a fibonacci number at position p
*/
```

### Function Signature

```
/**
 * @param {number}
 * @return {number}
 */
 function fibonacciNumber(number);
```

### Example

```
fibonacciNumber(5); // prints 3
fibonacciSeries(10); // prints 34
```

### Solution

<details>
<summary>Click Here for solution </summary>

```
function fibonacciNumber(num) {
    if(num === 0){
        return 0;
    }
    else if(num === 1){
        return 1;
    }
    else if(num === 2){
        return 1;
    }
    else {
        const res = fibonacciNumber(num - 2) + fibonacciNumber(num - 1);
        return res;
    }

}
```

</details>
