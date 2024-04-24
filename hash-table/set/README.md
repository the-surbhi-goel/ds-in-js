# Set

A set is a collection of unique values.
new Set() is used to create set

## Example
```
const firstSet = new Set(['Joy', 'Toy', 'Boy']);
prints = Set(3) { 'Joy', 'Toy', 'Boy' }

const SecondSet = new Set(['Joy', 'Toy', 'Boy', 'Toy']);
prints = Set(3) { 'Joy', 'Toy', 'Boy' }

```



## Common Methods

<details>
<summary>add</summary>

```
const firstSet = new Set(['Joy', 'Toy', 'Boy']);
firstSet.add('Ram')
console.log(firstSet);

return Set(4) { 'Joy', 'Toy', 'Boy', 'Ram' }
```
</details>


<details>
<summary>has</summary>

```
const firstSet = new Set(['Joy', 'Toy', 'Boy']);

console.log(firstSet.has('Joy')); // true
console.log(firstSet.has('Hi')); // false
```
</details>


<details>
<summary>size</summary>

```
return size of set

const firstSet = new Set(['Joy', 'Toy', 'Boy']);

console.log(firstSet.size); prints
3
```

</details>

<details>
<summary>values</summary>

```
const firstSet = new Set(['Joy', 'Toy', 'Boy', 'Ram']);

console.log(firstSet.values());
prints
[Set Iterator] { 'Joy', 'Toy', 'Boy', 'Ram' }
```

</details>


<details>

<summary>clear</summary>

```
It'll clear the set

const firstSet = new Set(['Joy', 'Toy', 'Boy', 'Ram']);

firstSet.clear();
console.log(firstSet); prints
Set(0) {}
```

</details>