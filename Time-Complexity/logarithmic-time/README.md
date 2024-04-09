# Logarithmic Time O(log n)

Write a function which follow the Llgarithmic-time complexity(O(log n))

When the algorithm runtime increases very slowly compared to an increase in input size i.e. logarithm of input size then the algorithm is said to exhibit logarithmic time complexity.

### Solution

<details>
<summary>Click Here for solution 1</summary>

```
function power(base, e) {
    if(e === 0){
        return 1;
    }
    return base * power(base, e-1);
}
```

</details>
