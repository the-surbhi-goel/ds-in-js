# fibonacci series

Write a function to write fibonacci series

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
function fibonacciSeries(num) {
    if(num == 1) {
        console.log(0);
        return 0;
    }
    if(num == 2) {
        console.log(0);
        console.log(1);
        return 1;
    }

    num1 = 0;
    num2 = 1;

    for (let i = 2; i < num; i++) { 
        console.log(num1 + num2); 
        num2 = num1 + num2;
        num1 = num2 - num1;
    };
}
```

</details>
