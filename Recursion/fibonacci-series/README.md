# Count Down

Write a function to write fibenacci series

### Requirements

```
/**
    * Function must accept a number(n)
    * Function must print a fibonacci series containing n numbers
*/
```

### Function Signature

```
/**
 * @param {number}
 */
 function fibonacciSeries(number);
```

### Example

```
fibonacciSeries(5); // prints 0, 1, 1, 2, 3
fibonacciSeries(10); // prints 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
```

### Solution

<details>
<summary>Click Here for solution </summary>

```
function fibonacciNumber(num) {
    if(num === 0){
        return 0;
    }
    else if(num === 1 || num === 2){
        return 1;
    }
    else {
        const res = fibonacciNumber(num - 2) + fibonacciNumber(num - 1);
        return res;
    }

}

function fibonacciSeries(num) {
    for (let i = 0; i < num; i++) { 
        console.log(fibonacciNumber(i)); 
    };
}
```

</details>
