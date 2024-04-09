# Quadratic Time O(n^2)

Write a function which follow the quadratic-time complexity(O(n^2))

Quadratic time complexity is when the runtime scales quadratically with the input. As the input size increases, the runtime of the algorithm also increases in a quadratic fashion (i.e. the runtime is proportional to the square of the input size).

In Simple words, which follow 2 for loop (for loop inside for loop)

### Solution

<details>
<summary>Click Here for solution 1</summary>

```
function bubbleSort(arr) {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    return arr;
}
```

</details>
