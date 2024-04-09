# Space Complexity O(log n)

Write a function which follow the space complexity(O(log n))

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
