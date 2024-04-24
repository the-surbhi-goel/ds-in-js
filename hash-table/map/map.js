const firstMap = new Map([
    [1, 'hi'],
    [2, 'hello']
]);

console.log("\n First map");
console.log(firstMap);

// ------------------------------------------------

const obj = {};
const secondMap = new Map([
    [null, 'null'],
    [obj, 'object']
]);

console.log("\n Second map");
console.log(secondMap);

// ------------------------------------------------
// Get Values
console.log("\n Getting Key firstMap.get(1)");
console.log(firstMap.get(1));

// ------------------------------------------------
// Set Values
console.log("\n After adding key firstMap.set(3, 'bye')");
firstMap.set(3, 'bye');
console.log(firstMap);

// ------------------------------------------------
// Check Values
console.log("\n Checking keys");
console.log("firstMap.has(1) ", firstMap.has(1));
console.log("firstMap.has(4) ", firstMap.has(4));

// ------------------------------------------------
// Remove Value
console.log("\n Removing keys firstMap.delete(1)");
firstMap.delete(1);
console.log(firstMap);

// ------------------------------------------------
// get size
console.log("\n Get size of map firstMap.size");
console.log(firstMap.size);


// ------------------------------------------------
// Iterate over map
console.log("\n Iterate over map");
for(let [key, value] of firstMap){
    console.log(key, value);
}


// ------------------------------------------------
// Get Keys
console.log("\n Get Keys firstMap.keys()");
console.log(firstMap.keys());


// ------------------------------------------------
// Get Values
console.log("\n Get Values firstMap.values()");
console.log(firstMap.values());


// ------------------------------------------------
// clear map
console.log("\n Clear Map firstMap.clear()");
firstMap.clear()
console.log(firstMap);
