# Map

new Map() is used to create map

## Example
```
const firstMap = new Map([
    [1, 'hi'],
    [2, 'hello']
]);

prints = Map(2) { 1 => 'hi', 2 => 'hello' }


const obj = {};
const secondMap = new Map([
    [null, 'null'],
    [obj, 'object']
]);

prints = Map(2) { null => 'null', {} => 'object' }
```

## Common Methods

<details>
<summary>get</summary>

```
const firstMap = new Map([
    [1, 'hi'],
    [2, 'hello']
]);

firstMap.get(1)

return hi
```
</details>


<details>

<summary>set</summary>

```
const firstMap = new Map([
    [1, 'hi'],
    [2, 'hello']
]);

firstMap.set(3, 'bye');

console.log(firstMap) returns
Map(3) { 1 => 'hi', 2 => 'hello', 3 => 'bye' }
```

</details>


<details>

<summary>has</summary>

```
It'll check the existence of key

const firstMap = new Map([
    [1, 'hi'],
    [2, 'hello']
]);

console.log(firstMap.has(1)); // true
console.log(firstMap.has(4)); // false
```

</details>


<details>

<summary>delete</summary>

```
delete key/value pair

const firstMap = new Map([
    [1, 'hi'],
    [2, 'hello'],
    [3, 'bye]
]);

firstMap.delete(1);
console.log(firstMap); prints
Map(2) { 2 => 'hello', 3 => 'bye' }
```

</details>


<details>
<summary>size</summary>

```
return size of map

const firstMap = new Map([
    [1, 'hi'],
    [2, 'hello'],
    [3, 'bye]
]);

console.log(firstMap.size); prints
3
```

</details>

<details>
<summary>Iterating of map</summary>

```
const firstMap = new Map([
    [1, 'hi'],
    [2, 'hello'],
    [3, 'bye]
]);

for(let [key, value] of firstMap){
    console.log(key, value);
}
prints
1 hi
2 hello
3 bye
```
</details>


<details>
<summary>keys</summary>

```
const firstMap = new Map([
    [2, 'hello'],
    [3, 'bye]
]);

console.log(firstMap.keys());
prints
[Map Iterator] { 2, 3 }
```

</details>

<details>
<summary>values</summary>

```
const firstMap = new Map([
    [2, 'hello'],
    [3, 'bye]
]);

console.log(firstMap.values());
prints
[Map Iterator] { 'hello', 'bye' }
```

</details>


<details>

<summary>clear</summary>

```
It'll clear the map

const firstMap = new Map([
    [1, 'hi'],
    [2, 'hello'],
    [3, 'bye]
]);

firstMap.clear();
console.log(firstMap); prints
Map(0) { }
```

</details>