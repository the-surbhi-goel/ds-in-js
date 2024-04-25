class HashTable {

    //set limit dfault-size to 10
    constructor(limit = 10) {
        this.storage = [];
        this.limit = limit;
    }

    _hash(key, max) {
        let hash = 0;
        for(let i = 0 ; i < key.length; i++){
            hash += key.charCodeAt(i);
        }

        return hash % max;
    }

    print(){
        console.log(this.storage);
    }

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

    clear() {
        this.storage = [];
    }
}


const myHash = new HashTable();
console.log("\nInitial Hash Table ");
console.log(myHash.print());

myHash.set("Ram", '1001');
myHash.set("Ram", '1002');
myHash.set("Rahul", '1003');
myHash.set("Amar", '1004');
console.log("\nAfter Insertion Hash Table myHash.print()");
console.log(myHash.print());


console.log("\n Getting All keys of hash-table");
console.log(myHash.keys());


console.log("\n Getting All values of hash-table");
console.log(myHash.values());


console.log("\n Getting key myHash.get('Rahul')");
console.log(myHash.get("Rahul"));


myHash.remove("Ram");
console.log("\n Hash Table After Removing");
console.log(myHash.print());


console.log("\n Checking Rahul key exist or not myHash.has('Rahul')");
console.log(myHash.has("Rahul"));


myHash.clear();
console.log("\n After clear HashTable myHash.clear()");
console.log(myHash.print());