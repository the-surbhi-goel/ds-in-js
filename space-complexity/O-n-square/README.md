# Space Complexity O(n^2)

Write a function which follow the space complexity(O(n^2))

### Solution

<details>
<summary>Click Here for solution 1</summary>

```
function createMatrix(n) {
    const matrix = [];
    for(let i = 0; i< n; i++){
        matrix[i] = [];
        for(let j = 0; j< n; j++){
            matrix[i][j] = i + j + 1;
        }
    }
    return matrix;
}
```

</details>
