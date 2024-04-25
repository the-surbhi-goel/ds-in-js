# Custom Hash Table

## Class & Constructor

```
class HashTable {
    constructor(limit = 10) {
        this.storage = [];
        this.limit = limit;
    }
}
```


## Hash Function
You can create your own hash function

```
    _hash(key, max) {
        let hash = 0;
        for(let i = 0 ; i < key.length; i++){
            hash += key.charCodeAt(i);
        }

        return hash % max;
    }
```


## Key Function
To get all keys of hash-table

```
    keys() {
        const arr = [];
        for(let i = 0; i < this.storage.length; i++){
            if(this.storage[i]){
                for(const [key, value] of this.storage[i]){
                    arr.push(key);
                }
            }
        }
        return arr;
    }
```


## Value Function
To get all values of hash-table

```
    values() {
        const arr = [];
        for(let i = 0; i < this.storage.length; i++){
            if(this.storage[i]){
                for(const [key, value] of this.storage[i]){
                    arr.push(value);
                }
            }
        }
        return arr;
    }
```


## Set key-value Function

```
 set(key, value) {
        const index = this._hash(key, this.limit);
        
        if(this.storage[index] === undefined) {
            this.storage[index] = [[key, value]];
        }
        else {
            let insertionFlag = false;

            // find key in this.storage[index]
            for(let i = 0; i < this.storage[index].length; i++){
                if(this.storage[index][i][0] === key){
                    this.storage[index][i][1] = value;
                    insertionFlag = true;
                }
            }

            //if key doesn't exist
            if(insertionFlag === false) {
                this.storage[index].push([key, value]);
            }
        }
    }
```

## Get key Function

```
    get(key) {
        const index = this._hash(key, this.limit);

        if(this.storage[index] === undefined){
            return undefined
        }
        else {
            for(let i = 0; i < this.storage[index].length; i++){
                if(this.storage[index][i][0] === key){
                    return this.storage[index][i][1];
                }
            }
        }
    }
```


## Remove Key Function

```
remove(key) {
        const index = this._hash(key, this.limit);
        if(this.storage[index]){
            if(this.storage[index].length === 1 && this.storage[index][0][0] == key){
                delete this.storage[index];
            }
            else {
                for(let i = 0; i < this.storage[index].length; i++){
                    if(this.storage[index][i][0] === key){
                        delete this.storage[index][i];
                        return;
                    }
                }
            }
        }
    }
```


## Has Key function

```
    has(key) {
        const index = this._hash(key, this.limit);

        if(this.storage[index] === undefined){
            return false;
        }
        else {
            for(let i = 0; i < this.storage[index].length; i++){
                if(this.storage[index][i] && this.storage[index][i][0] === key){
                    return true;
                }
            }
        }
        return false;
    }
```