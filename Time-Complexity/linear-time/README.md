# Linear Time O(n)

Write a function which follow the linear-time complexity(O(n))

An algorithm is said to have a linear time complexity when the running time increases linearly with the length of the input.

In Simple words, which follow single for loop

### Solution

<details>
<summary>Click Here for solution 1</summary>

```
function highestNumber(arr){
    let max = 0;
    const length = arr.length;
    for(let i=0; i < length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
```

</details>
